import React, { useEffect, useState } from 'react'
import instance from '../../api/instance';
import "./Products.css"
import { NavLink} from "react-router-dom"

const Products = () => {

    const [product, setProducts] = useState([]);
    

    useEffect(() => {
        instance.get("/products")
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }, []);

    return (

        <div className='container mt_products'>
            <div className="menuProducts_products">
                <h3>Today's Deals – All With Free Shipping</h3>
            </div>
            <div className="products_wrapper_card">

                {
                    product.map(elem =>
                        <NavLink className="navcha" to={`/targetpro/${elem.id}`} key={elem.id}>
                            <div className="products_img_card_wrapper">
                                <img src={elem.images[0]} alt="" />
                            </div>
                            <h2>${elem.price}</h2>
                            <span>$599.99 · 58% OFF</span>
                        </NavLink>
                    )
                }


            </div>
        </div>
    )
}

export default Products