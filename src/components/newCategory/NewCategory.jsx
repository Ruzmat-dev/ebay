import React, { useEffect, useState } from 'react'
import instance from '../../api/instance';
import "./NewCategory.scss"
import { FaArrowRight } from "react-icons/fa"
import {NavLink} from "react-router-dom"

const Category = () => {
  
  const [category, setCategory] = useState([]);

  useEffect(() => {
    instance.get("/categories")
      .then(response => setCategory(response.data))
      .catch(err => console.log(err))
  }, []);

  const cate = category.slice(0, 6)
  return (
    <div className='container'>
      <div className="menuCategory_category">
         <h3>Shop by Category</h3>
      </div>
      <div className="category_wrapper_card ">


        {
          
          cate.map(elem =>
            <NavLink  className="navcha card" to={`/bycategory/${elem.id}`}  key={elem.id}>
              <div className="category_img_card_wwwrapper">
                <img src={elem.image} alt="" />
              </div>
              <h6>{elem.name}</h6>
            </NavLink>
          )
        }


      </div>
    </div>
  )
}

export default Category