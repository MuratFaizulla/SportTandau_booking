import React, { useState, useEffect } from 'react';
import './Direction.css';

const DirectionItem = () => {
  const savedNavItem = localStorage.getItem('activeNavItem'); // Получаем сохраненное значение из localStorage

  // Устанавливаем начальное состояние в соответствии с сохраненным значением или "Футбол", если нет сохраненного значения
  const [activeNavItem, setActiveNavItem] = useState(savedNavItem || 'Футбол');

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  useEffect(() => {
    // При изменении активной категории спорта сохраняем ее значение в localStorage
    localStorage.setItem('activeNavItem', activeNavItem);
  }, [activeNavItem]);

  const imagesBySport = {
    'Футбол': 'https://avatars.dzeninfra.ru/get-zen_doc/1565406/pub_5db960f01d656a00ae943256_5db9620378125e00af1ece4c/orig',
    'Баскетбол': 'https://i.pinimg.com/originals/b4/f2/23/b4f2239374f8fe7523a14f54549bbde7.gif',
    'Волейбол': 'https://i.gifer.com/origin/46/46744ed9bf42acd0d68af21fd4ef1733.gif',
    'Теннис': 'https://i.gifer.com/UNwX.gif',
  };

  return (
    <div className='DirectionList'>
      <div className="image-container" >
        <img src={imagesBySport[activeNavItem]} alt="" />
      </div>
      <div className='DirectionList_title'>
      <p className='DirectionList_text_1'>Спортпен айналысыңыз</p>
        <p className='DirectionList_text_2'>Алаңдарды брондаңыз</p>
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
