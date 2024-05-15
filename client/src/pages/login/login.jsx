import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { REGISTER_PAGE_ROUTE } from "../../utils/consts";
// import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

      // Проверка, является ли пользователь менеджером
      if (res.data.isManager) {
        navigate("/managerpage"); // Перенаправление на страницу менеджера
      } else {
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
      <h2>Кіру</h2>
      <label htmlFor="username">Пайдаланушы аты</label>

        <input
          type="text"
          placeholder="Пайдаланушы аты"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
                <label htmlFor="password">Құпия сөз</label>

        <input
          type="password"
          placeholder="Құпия сөз"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Кіру
        </button>
        <p> Сізде тіркелгі жоқ па?   <Link to={REGISTER_PAGE_ROUTE}>Тіркелу</Link></p>

        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;