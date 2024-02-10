// import React from 'react';

// class Navbar extends React.Component {
//   render() {
//     const { activeSection, handleSectionClick } = this.props;

//     const handleClick = (e, section) => {
//       e.preventDefault();
//       handleSectionClick(section);
//     };

//     return (
// <div className="header">
//       <a href="#default" className="logo">SportTandau</a>
//       <nav className="nav" style={{ backgroundColor: '#333', overflow: 'hidden' }}>
//         <a href="#home" style={activeSection === 'home' ? activeLinkStyle : linkStyle} onClick={(e) => handleClick(e, 'home')}>Главная</a>
//         <a href="#contact" style={activeSection === 'contact' ? activeLinkStyle : linkStyle} onClick={(e) => handleClick(e, 'contact')}>Площадки</a>
//         <a href="#about" style={activeSection === 'about' ? activeLinkStyle : linkStyle} onClick={(e) => handleClick(e, 'about')}>О нас</a>
//       </nav>
//       <div className='button-container'>
//         <button className='button-primary'>Добавить объект</button>
//         <button className='button-secondary'>Войти</button>
//       </div>
//     </div>
//     );
//   }
// }

// const linkStyle = {
//   float: 'left',
//   display: 'block',
//   color: 'white',
//   textAlign: 'center',
//   padding: '14px 20px',
//   textDecoration: 'none',
// };

// const activeLinkStyle = {
//   ...linkStyle,
//   color: 'black',
//   backgroundColor: '#ddd',
// };

// export default Navbar;
