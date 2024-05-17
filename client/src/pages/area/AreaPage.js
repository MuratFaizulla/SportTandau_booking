import React, { useState } from 'react';
import './Area.css';
import FieldItem from '../../components/fieldcard/FieldItem';
import Filter from '../../components/filter/Filter';
import Sorttype from '../../components/sorting/Sorting';

const Area = () => {
    const [fieldsData, setFieldsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    const onDataReceived = (data) => {
        setFieldsData(data);
        setIsLoading(false); 
    };

    return (
        <div className='AreaList'>
            <Filter />
            <div className='AreaItem'>
                <Sorttype onDataReceived={onDataReceived} />
                {isLoading ? ( 
                    <div>Loading...</div>
                ) : (
                    fieldsData.map(post => (
                        <FieldItem post={post} key={post._id} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Area;
