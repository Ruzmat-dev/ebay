import "./Login.scss"
import React, { useState } from 'react'
// import { auth } from '../../firebase/fribasecon/fig'
import { FcGoogle } from "react-icons/fc"
import instance from '../../api/instance'
import { NavLink } from 'react-router-dom'
import { ImFacebook2 } from "react-icons/im"
import { FaApple } from "react-icons/fa"
import Footer from "../../components/Footer/index"

const Login = () => {
  const createAccount = () => {
    auth.siginInWithPopup(provider)
      .then(res => console.log(res))
      .cath(err => console.log(err))
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: '',
    avatar: "",
  })

  console.log(formData);

  const createUser = (e) => {
    e.preventDefault()
    instance.post("/users", formData)
      .then(res => console.log(res))
      .cath(err => console.log(err))
  }

  return (
    <div className='create_wrapper'>
      <div className="conatiner">
        <NavLink to="/">
          <div className="create_logo">
            <img src="https://www.vectorlogo.zone/logos/ebay/ebay-ar21.png" alt="" />
          </div>
        </NavLink>
        <div className="wrapper_login">
          <h1 className="wrapper_login_title" >Hello</h1>
          <p className="wrapper_login_sigin">Sign in to eBay or 
            <NavLink to="/register">
               create an account
            </NavLink>
          </p>
          <input className="wrapper_login_emalOrUsername" type="text" placeholder="Email or username" />
          <p className="wrapper_login_creted">Created your account with a mobile number? </p>
          <button className="wrapper_login_continue">Continue</button>
          <p className="wrapper_login_or">or</p>
          <button className="wrapper_login_facebook"> <ImFacebook2/>  Continue with Facebook</button>
          <button className="wrapper_login_google"><FcGoogle /> Continue with Google</button>
          <button className="wrapper_login_apple"> <FaApple/> Continue with Apple</button>
        </div>
      </div>
      <div className="mt-5">
         <Footer/>
      </div>
    </div>
  )
}

export default Login