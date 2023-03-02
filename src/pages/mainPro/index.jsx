import React, {useState, useEffect} from 'react'
import "./style.scss"
import { useParams, useNavigate } from 'react-router'
import axios  from 'axios'
import Products from '../../components/categories/Products'

const index = () => {
    const navigate = useNavigate();
  
    const goback = ()=>{
       navigate(-1);
    }
    const { id } = useParams()
 
    const [product, setProducts] = useState([]);
    const [likePro, setLikePro] = useState([]);

 
    useEffect(() => {
       getProducts()
    }, []);

    const getProducts = async () => {
       const pro = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
       if (pro.status === 200) {
          setProducts(pro.data)
       }
    }
   return (
    <>
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
                     <input type="text" placeholder={product.title} disabled/>
                     <input type="text" placeholder={product.title}  disabled/>
                     <input type="text" placeholder={product.creationAt} disabled/>
                     <input type="text" placeholder={product.updatedAt} disabled/>
                     <input type="number" placeholder='1' disabled/>
                  </div>
                  <hr />
               </div>
               <div className="wrapper_info_price_singleProduct">
                  <span>
                     <p>Price:</p>
                     <h3>${product.price}</h3>
                  </span>
                  <span>
                     <button className='btn btn-primary mx-2'>Buy It Now</button>
                     <button className='btn btn-danger mx-2' >Add to cart</button>
                     <button className='btn btn-dark mx-2'>Add to Watchlist</button>
                     <button className='btn btn-outline-danger mx-2' onClick={goback}>Go back</button>
                  </span>
               </div>
            </div>
         </div>
         <Products/>
      </div>
    </>
    )
}

export default index