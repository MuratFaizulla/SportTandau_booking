// ServiceItem.jsx
import React from 'react';
import './Service.css'; 

const ServiceItem = ({ text }) => { 
    return (
        <div className="service-item-container">
            <div className="vector"></div>
            <div className="service-item-text">{text}</div>
        </div>
    );
};

export default ServiceItem;
