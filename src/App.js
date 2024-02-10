import React,{useState} from 'react';
import './App.css';
import { Home } from './pages/HomePage'; 
import Area from './pages/AreaPage'; 
import { Routes, Route, Link } from 'react-router-dom';
import { About } from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  const [activeSection, setActiveSection] = useState('/');

    const handleSectionClick = (section) => {
      setActiveSection(section);
    };
  return (
    <>
      <Header activeSection={activeSection} handleSectionClick={handleSectionClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/area" element={<Area />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h2>Ничего не найдено! Перейти на <Link to='/'>Главную </Link> </h2>} />
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
