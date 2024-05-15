import React, { useEffect, useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/footer/Footer';
import { routes } from './utils/routes';
import Header from './components/header/Header';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext); // Получаем информацию о пользователе из контекста аутентификации

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Проверяем, является ли пользователь менеджером
  const isManager = user && user.manager && user.manager.value;

  return (
    <>
      {!isManager && <Header />}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
      {!isManager && <Footer />}
    </>
  );
}

export default App;
