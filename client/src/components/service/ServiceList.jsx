// ServiceList.jsx
import React from 'react';
import ServiceItem from './ServiceItem';
import './Service.css'; 

const ServiceList = () => {
    return (
        <>
        <h2 className='ServiceList_title'>УСЛУГИ НА ПЛОЩАДКЕ</h2>
         <div className='ServiceList'>
            <ServiceItem text="Администратор" />
            <ServiceItem text="Раздевалки" />
            <ServiceItem text="Душевые" />
            <ServiceItem text="Парковка" />
            <ServiceItem text="Инвентарь" />
            <ServiceItem text="Зона отдыха" />
            <ServiceItem text="Кафе" />
            <ServiceItem text="Трибуны" />
        </div>
        </>
       
    );
};

export default ServiceList;
