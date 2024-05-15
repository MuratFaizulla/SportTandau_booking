import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import {
  ABOUT_PAGE_ROUTE,
  AREA_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
  USER_PAGE_ROUTE
} from '../../utils/consts';
import { AuthContext } from '../../context/AuthContext';
import avatar from './user.jpg';

const Header = () => {
  const { user,logout  } = useContext(AuthContext);
 const [open,setOpen]=useState(false);

   const handleLogout = () => {
    logout(); // Вызываем функцию logout при клике на кнопку
  };

  return (
    <div>
      <header className="header">
        <a href="#default" className="logo">SportTandau</a>
        <div className="nav">
          <Link to={HOME_PAGE_ROUTE}>Басты бет</Link>
          <Link to={AREA_PAGE_ROUTE}>Ойын алаңы</Link>
          <Link to={ABOUT_PAGE_ROUTE}>Біз туралы</Link>
        </div>

          {user ? (
            
            <div className='avatar'>
            <img src={avatar} alt='user' className="user-avatar" onClick={()=>setOpen(!open)} />
            <p>{user.username}</p>
            { open && (
                <div className='custom-div'>
                <ul>
                <li onClick={() => { window.location.href = USER_PAGE_ROUTE; }}>Менің профилім</li>
                <li onClick={() => { window.location.href =ABOUT_PAGE_ROUTE; }}>Менің брондарым</li>
                <li onClick={handleLogout}>Шығу</li>
                </ul> 
              </div>
              ) }
            </div> 
          ) : (
            <div className="button-container">
              <Link to={REGISTER_PAGE_ROUTE}>
                <button className="button-primary">Тіркелу</button>
              </Link>
              <Link to={LOGIN_PAGE_ROUTE}>
                <button className="button-secondary">Кіру</button>
              </Link>
            </div>
          )}
      </header>
    </div>
  );
}


export default Header;



