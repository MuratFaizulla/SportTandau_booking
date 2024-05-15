import React from 'react';
import DirectionList from '../../components/direction/DirectionList';
import Lawncard from '../../components/lawncard/Lawncard';
import ServiceList from '../../components/service/ServiceList';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';


export const Home = () => {
   
    return (
        <div >
      <DirectionList/>
      <Featured/>
      <Lawncard/>
      <ServiceList/>
      <PropertyList/>
    </div>
    );

} ;
