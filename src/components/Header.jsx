import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../App.css'; 

const Header = () => {
  const [activeNavItem, setActiveNavItem] = useState('/');

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <div>
      <header className="header">
        <a href="#default" className="logo">SportTandau</a>
        <div className="nav">
          <Link to="/" className={activeNavItem === '/' ? 'active' : ''} onClick={() => handleNavItemClick('/')}>
          Главная
          </Link>
          <Link to="/area" className={activeNavItem === 'area' ? 'active' : ''} onClick={() => handleNavItemClick('area')}>
          Площадки
          </Link>
          <Link to="/about" className={activeNavItem === 'about' ? 'active' : ''} onClick={() => handleNavItemClick('about')}>
          О Нас
          </Link>
         
        </div>
        <div className='button-container'>
          <button className='button-primary'>Добавить объект</button>
          <button className='button-secondary'>Войти</button>
        </div>
      </header>

      <div className="line">
        <div className="line-part" style={{ width: '33%', backgroundColor: activeNavItem === '/' ? 'black' : 'grey' }}></div>
        <div className="line-part" style={{ width: '33%', backgroundColor: activeNavItem === 'area' ? 'black' : 'grey' }}></div>
        <div className="line-part" style={{ width: '33%', backgroundColor: activeNavItem === 'about' ? 'black' : 'grey' }}></div>
      </div>
    </div>
  );
}

export default Header;

