import React, { useState } from 'react';
import './Direction.css'
import DirectionItem from './DirectionItem';

const DirectionList = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <DirectionItem activeSection={activeSection} handleSectionClick={handleSectionClick} />
    </div>
  );
}

export default DirectionList;
