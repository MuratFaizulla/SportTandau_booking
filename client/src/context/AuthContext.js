import { createContext, useEffect, useReducer } from "react";
import axios from "axios"; // Импортируем axios для отправки запросов на сервер
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate для навигации

// Создаем начальное состояние
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

// Создаем контекст аутентификации
export const AuthContext = createContext(INITIAL_STATE);

// Создаем редуктор аутентификации
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
    case "REGISTER_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
    case "REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

// Создаем провайдер контекста аутентификации
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const navigate = useNavigate(); // Получаем объект навигации

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  // Функция для регистрации пользователя
  const register = async (userData) => {
    dispatch({ type: "REGISTER_START" });
    try {
      if (!userData || !userData.username || !userData.password || !userData.email) {
        throw new Error("All fields are required"); // Возбудить исключение, если данные неполные
      }
      // Отправляем запрос на сервер для регистрации пользователя
      const response = await axios.post("/auth/register", userData);
      // После успешной регистрации обновляем состояние с данными пользователя
      dispatch({ type: "REGISTER_SUCCESS", payload: response.data.user });
    } catch (error) {
      // В случае ошибки регистрации передаем ошибку в редуктор
      dispatch({ type: "REGISTER_FAILURE", payload: error.message });
    }
  };

  // Функция для выхода пользователя из системы
  const logout = () => {
    // Удаляем данные пользователя из localStorage
    localStorage.removeItem("user");
    // Вызываем действие LOGOUT для обновления состояния
    dispatch({ type: "LOGOUT" });
    // Перенаправляем пользователя на главную страницу
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
        register, // Передаем функцию регистрации в контекст
        logout,   // Передаем функцию выхода из системы в контекст
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
