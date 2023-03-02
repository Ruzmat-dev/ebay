import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useParams } from 'react-router';
import "./style.scss";
import { NavLink } from 'react-router-dom';
import NewCategory from "../../components/newCategory/NewCategory"
import Category from '../../components/categories/Category';
import { FaStar } from "react-icons/fa";
const index = () => {
  
 
   const { id } = useParams()
   const [product, setProducts] = useState([]);


   useEffect(()=>{
      getProducts()
   }, [id])

   const getProducts = async () => {
      const pro = await axios.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`)
      if (pro.status === 200) {
         setProducts(pro.data)
      }
   }
   return (
      <>
      
      <div className="container">
         <NewCategory />
      <NavLink to="/" className='btn btn-outline-dark position-relative mt-4 mx-4'> Go back</NavLink>

      </div>
      <div className='wrapcha mt-5'>
         {

            product ? product.map((product) => {
               return (
                  <NavLink to={`/productInfo/${product.id}`} key={product.id} className="card" style={{width:18 +"rem"}}>
                     <img class="card-img-top" src={product.images[0]} alt="Card image cap"/>
                     <div className="card-body">
                        <h5 className="about_name card-title">{product.title}</h5>
                        <p><FaStar/><FaStar/><FaStar/> (23)</p>
                        <h2 className="card-text about_price">${product.price}</h2>
                        <p className='about_free'>Free shipping</p>
                        <p className='about_watch'>25 watching</p>
                     </div>
                  </NavLink>
               )
            }) : "Not found"
         }
      </div>
         </>
   );
};

export default index;