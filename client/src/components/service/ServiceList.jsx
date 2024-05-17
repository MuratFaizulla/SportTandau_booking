// ServiceList.jsx
import React from 'react';
import ServiceItem from './ServiceItem';
import './Service.css'; 

const ServiceList = () => {
    return (
        <>
        <h2 className='ServiceList_title'>АЛАҢДАҒЫ ҚЫЗМЕТТЕР</h2>
         <div className='ServiceList'>
            <ServiceItem text="Әкімші" />
            <ServiceItem text="Киінетін бөлмелер" />
            <ServiceItem text="Душ бөлмесі." />
            <ServiceItem text="Көлік тұрағы" />
            <ServiceItem text="Инвентарь" />
            <ServiceItem text="Демалыс аймағы" />
            <ServiceItem text="Дәмхана" />
            <ServiceItem text="Трибуналар" />
        </div>
        </>
       
    );
};

export default ServiceList;
