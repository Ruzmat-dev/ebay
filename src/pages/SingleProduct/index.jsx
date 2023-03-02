import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import "./style.scss";
import Products from '../../components/categories/Products';
const index = () => {
   const { id } = useParams()

   const navigate = useNavigate();

   const goback = () => {
      navigate(-1);
   }

   const [product, setProducts] = useState([]);


   useEffect(() => {
      getProducts()
   }, []);
   const getProducts = async () => {
      const pro = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      if (pro.status === 200) {
         setProducts(pro.data)
      }
   }

   const { ib } = useParams()

   const [produc, setProduct] = useState([]);


   useEffect(() => {
      getProdut()
   }, []);
   const getProdut = async () => {
      const pro = await axios.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${ib}`)
      if (pro.status === 200) {
         setProduct(pro.data)
      }
   }
  
   return (
      <div className='containe'>
         <div className="wrapper_singleProduct mt-5">
            <div className="wrapper_element_singilProduct">
               <img src={product.images} alt="" />
            </div>
            <div className="wrapper_info_singleProducts">
               <h1>{product.title}</h1>
               <hr />
               <div className="wrapper_info_description_singleProduct">
                  <p><b>Condition:</b></p>
                  <p>
                     {product.description}
                  </p>
               </div>
               <div className="wrapper_infoAll_singleProduct">

                  <span>
                     <p>Model:</p>
                     <p>Carrier:</p>
                     <p>Storage Capacity:</p>
                     <p>Color:</p>
                     <p>Quantity:</p>
                  </span>
                  <div>
                     <input type="text" placeholder={product.title} disabled />
                     <input type="text" placeholder={product.title} disabled />
                     <input type="text" placeholder={product.creationAt} disabled />
                     <input type="text" placeholder={product.updatedAt} disabled />
                     <input type="number" placeholder='1' disabled />
                  </div>
                  <hr />
               </div>
               <div className="wrapper_info_price_singleProduct">
                  <span>
                     <p>Price:</p>
                     <h3>{product.price}</h3>
                  </span>
                  <span>
                     <button className='mx-2 btn btn-primary'>Buy It Now</button>
                     <button className='mx-2 btn btn-danger'>Add to cart</button>
                     <button className='mx-2 btn btn-dark'>Add to Watchlist</button>
                     <button className='mx-2 btn btn-outline-danger' onClick={goback}>Go back</button>
                  </span>
               </div>
            </div>
         </div>

         <div>
            <div className='wrapcha mt-5'>
               {

                  produc ? produc.map((produc) => {
                     return (
                        <NavLink to={`/productInfo/${produc.id}`} key={produc.id} className="card" style={{ width: 18 + "rem" }}>
                           <img class="card-img-top" src={product.images[0]} alt="Card image cap" />
                           <div className="card-body">
                              <h5 className="about_name card-title">{produc.title}</h5>
                              <p><FaStar /><FaStar /><FaStar /> (23)</p>
                              <h2 className="card-text about_price">${produc.price}</h2>
                              <p className='about_free'>Free shipping</p>
                              <p className='about_watch'>25 watching</p>
                           </div>
                        </NavLink>
                     )
                  }) : "Not found"
               }
            </div>
         </div>
            <Products/>
      </div>
   );
};

export default index;