import React, { useState } from 'react'
import { FaChevronDown, FaBell, FaShoppingBasket, FaHeart, FaArrowRight } from "react-icons/fa"
import useFetchData from '../../hooks/useFetchData'
import { Link, NavLink } from 'react-router-dom'
import Products from '../categories/Products';
import { FaStar } from "react-icons/fa";
import Category from '../categories/Category';

const index = () => {
  const data = useFetchData("/categories");
  const products = useFetchData("/products");

  const [state, setState] = useState("")
  const [users, setUsers] = useState([])
  const [qidiruvFunc, setQidiruvFunc]= useState([])


  
  const inputcha = document.querySelector("#inputcha");
  const getUser = (e)=>{
      setState(e.target.value)
    if (!inputcha.value == "") {
        setUsers(products)
    }else{
        setUsers([])
    }
  }

  
  const filtered = users.filter((item) =>
  item.title.toLowerCase().includes(state.trim())
  );    


   return (
    <div className="all">
      <div className="containe">



      <div className="header">
        <div className="navbar">
          <nav className='wrapper_navbar'>
            <ul>
              <li className='registerAndSiginUp'>Hi!
                <NavLink to="/login">
                  Sigin in
                </NavLink>
                or
                <Link to="/register">register</Link>
              </li>
              <li>Daily Deals</li>
              <li>Brand Outlet</li>
              <li>Help & Cantact</li>
            </ul>
  
            <ul>
              <li>Sell</li>
              <li>Watchlist <FaChevronDown /></li>
              <li>My eBay <FaChevronDown /></li>
              <li><FaBell /></li>
              <li><FaShoppingBasket /></li>
            </ul>
          </nav>
        </div>
        <hr />
        <div className="header_search">
          <img src="https://www.vectorlogo.zone/logos/ebay/ebay-ar21.png" alt="" />
          <div className="header_shop_category">Shop by <br /> category <span><FaChevronDown /></span></div>
          <div className="header_input_wrapper">
            <div className="header_input_search">
              <Link to={`/search`}>
              <input id='inputcha' value={state} onInput={(event) => getUser(event)} className='search_header' type="text" placeholder='Search for anything' />
              </Link>
              <select name="" id="" className='category_header'>
                {
                    data.map(elem =>
                    <option key={elem.id}>{elem.name}</option>
                    )
                }
              </select>
            </div>
          </div>
          <button className='header_btn_search'>Search</button>
          <span className='header_advanced'>Advanced</span>
        </div>
        <hr />
  
        <div className="header_home_menu_page">
          <ul>
            <li>Home</li>
            <li><span><FaHeart /></span> Saved</li>
            <li>Motors</li>
            <li>Electronics</li>
            <li>Collectibles</li>
            <li>Home & Garden</li>
            <li>Fashion</li>
            <li>Toys</li>
            <li>Sporting Goods</li>
            <li>Business & Industrial</li>
            <li>Jewelry & Watches</li>
            <li>Jewelry & Watches</li>
            <li>Refurbished</li>
          </ul>
        </div>
      </div>
      <div className="shop_menu">
        <div className="header_banner_wrapper">
          <div className="header_wrap_banner_words">
            <h1>Super savings at <br /> the Brand Outlet</h1>
            <p>Up to 60% off the brands you love.</p>
            <button>Shop now <FaArrowRight /></button>
          </div>
          <div className="header_wrap_banner_callaway">
            <p>Callaway <FaArrowRight /></p>
            <img src="https://cdn-icons-png.flaticon.com/512/49/49566.png" alt="" />
          </div>
          <div className="header_wrap_banner_callaway">
            <p>Merrell <FaArrowRight /></p>
            <img src="https://cdn-icons-png.flaticon.com/512/49/49566.png" alt="" />
          </div>
          <div className="header_wrap_banner_callaway">
            <p>Specialized <FaArrowRight /></p>
            <img src="https://cdn-icons-png.flaticon.com/512/49/49566.png" alt="" />
          </div>
   
        </div>
        
      </div>
    </div>
    <div className='wrapcha mt-5'>

    {
        filtered.length > 0 ? filtered.map((product)=>{
            return(
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
    }):"Ma'lumot topilmadi"
}
</div>
    <div className="container mt-5">
    <Category />
    <Products/>
    </div>
</div>
   );
};

export default index;