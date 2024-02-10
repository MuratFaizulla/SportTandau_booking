import React, { useState } from 'react';
import './../assets/Direction.css'


const DirectionItem = () => {
  const [activeNavItem, setActiveNavItem] = useState('Футбол');

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <div className='DirectionList'>
      <div className="Wall" ></div>
      <div className='DirectionList_title'>
        <p className='DirectionList_text_1'>Занимайтесь спортом</p>
        <p className='DirectionList_text_2'>Бронируйте площадки</p>
      </div>

      <div className='sportnews'>
        <div className='sport'>
          <p className={activeNavItem === 'Футбол' ? 'active' : ''} onClick={() => handleNavItemClick('Футбол')}>Футбол</p>
          <p className={activeNavItem === 'Баскетбол' ? 'active' : ''} onClick={() => handleNavItemClick('Баскетбол')}>Баскетбол</p>
          <p className={activeNavItem === 'Волейбол' ? 'active' : ''} onClick={() => handleNavItemClick('Волейбол')}>Волейбол</p>
          <p className={activeNavItem === 'Теннис' ? 'active' : ''} onClick={() => handleNavItemClick('Теннис')}>Теннис</p>
        </div>
        <div className="string">
          <div className="string-part" style={{ width: '25%', backgroundColor: activeNavItem === 'Футбол' ? '#1BA90F' : '#DCDCDC' }}></div>
          <div className="string-part" style={{ width: '25%', backgroundColor: activeNavItem === 'Баскетбол' ? '#1BA90F' : '#DCDCDC' }}></div>
          <div className="string-part" style={{ width: '25%', backgroundColor: activeNavItem === 'Волейбол' ? '#1BA90F' : '#DCDCDC' }}></div>
          <div className="string-part" style={{ width: '25%', backgroundColor: activeNavItem === 'Теннис' ? '#1BA90F' : '#DCDCDC' }}></div>
        </div>
      </div>


    </div>
  );
}

export default DirectionItem;
