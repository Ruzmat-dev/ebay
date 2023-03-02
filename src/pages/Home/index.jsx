import React from 'react';
import "./style.scss";
import Category from '../../components/categories/Category';
import Products from '../../components/categories/Products';
const index = () => {
   return (
      <div>
         <Category/>
         <Products/>
      </div>
   );
};

export default index;