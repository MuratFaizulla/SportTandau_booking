import React, { useState, useEffect } from 'react';
import "./sorting.css";
import useFetch from '../../hooks/useFetch';

const Sorttype = ({ onDataReceived }) => {
    const [activeNavItem, setActiveNavItem] = useState('Футбол');
    const { data, loading, error } = useFetch(`/fields/type?type=${activeNavItem}`);

    useEffect(() => {
        if (!loading && data) {
            onDataReceived(data);
        }
    }, [loading, data, onDataReceived]);

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
    };

    if (error) {
        return <div>Error: {error}</div>; 
    }

    return (
        <div>
            <div className='sorting'>
                <div className='type'>
                    <p className={activeNavItem === 'Футбол' ? 'active' : ''} onClick={() => handleNavItemClick('Футбол')}>Футбол</p>
                    <p className={activeNavItem === 'Баскетбол' ? 'active' : ''} onClick={() => handleNavItemClick('Баскетбол')}>Баскетбол</p>
                    <p className={activeNavItem === 'Волейбол' ? 'active' : ''} onClick={() => handleNavItemClick('Волейбол')}>Волейбол</p>
                    <p className={activeNavItem === 'Теннис' ? 'active' : ''} onClick={() => handleNavItemClick('Теннис')}>Теннис</p>
                </div>
                <div className="str">
                    <div className="string-part" style={{ width: '25%', backgroundColor: activeNavItem === 'Футбол' ? '#1BA90F' : '#DCDCDC' }}></div>
                    <div className="string-part" style={{ width: '25%', backgroundColor: activeNavItem === 'Баскетбол' ? '#1BA90F' : '#DCDCDC' }}></div>
                    <div className="string-part" style={{ width: '25%', backgroundColor: activeNavItem === 'Волейбол' ? '#1BA90F' : '#DCDCDC' }}></div>
                    <div className="string-part" style={{ width: '25%', backgroundColor: activeNavItem === 'Теннис' ? '#1BA90F' : '#DCDCDC' }}></div>
                </div>
            </div>
        </div>
    );
}

export default Sorttype;
