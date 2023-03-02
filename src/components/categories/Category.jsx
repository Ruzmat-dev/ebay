import React, { useEffect, useState } from 'react'
import instance from '../../api/instance';
import "./Categpry.css"
import {NavLink} from "react-router-dom"

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    instance.get("/categories")
      .then(response => setCategory(response.data))
      .catch(err => console.log(err))
  }, []);

  const cate = category.slice(0, 5)
  return (
    <div className='container'>
      <div className="menuCategory_category">
         <h3>Score these trending kicks</h3>
      </div>
      <div className="category_wrapper_card ">


        {
          
          cate.map(elem =>
            <NavLink className="navcha" to={`/bycategory/${elem.id}`}  key={elem.id}>
              <div className="category_img_card_wwrapper">
                <img src={elem.image} alt="" />
              </div>
              <h2>{elem.name}</h2>
            </NavLink>
          )
        }


      </div>
    </div>
  )
}

export default Category