import React, { useState } from 'react'
import "./Crete.scss"
import { auth } from '../../firebase/firebaseconfig'
import { FcGoogle } from "react-icons/fc"
import instance from '../../api/instance'
import { NavLink } from 'react-router-dom'
import { provider } from '../../firebase/firebaseconfig'
import {useDispatch} from "react-redux"
// import { useHistory} from "react-router-dom"
const Crete = () => {
    const dispath = useDispatch();
    // const history = useHistory();
    const createUser = () => {
        auth.signInWithPopup(provider)
            .then(res => console.log(res.data))
            .cath(err => console.log(err))
    }



    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: '',
        avatar: "",
    })

    console.log(formData);

    const createAccountWithGoogle = (e) => {
        e.preventDefault()
        instance.post("/users", formData)
            .then(res =>{
                if(res.data.email){
                    dispath({email: res.data.email , type: "CREATE_USER"})
                    // history.push("/")
                   
                }
            })
            .cath(err => console.log(err))
            
    }
    return (
        <div className='create_wrapper'>
            <div className="conatine">
                <NavLink to="/">
                    <div className="create_logo">
                        <img src="https://www.vectorlogo.zone/logos/ebay/ebay-ar21.png" alt="" />
                    </div>
                </NavLink>
                <div className='crete_siginIn_wrapper'>
                    <p>Already a member?</p>
                    <NavLink to="/login">Sign in</NavLink>
                </div>
                <h1 className='crete_title'>Create an account</h1>
                <div className="register_wrapper">
                    <div className="register">
                        <div className="wrapper_name_uerName">
                            <input onChange={e => setFormData({ ...formData, name: e.target.value })} type="text" placeholder='First name' />
                            <input onChange={e => setFormData({ ...formData, avatar: e.target.value })} type="url" placeholder='Avatart' />
                        </div>
                        <input onChange={e => setFormData({ ...formData, email: e.target.value })} className='register_input' type="text" placeholder='Email' />
                        <input onChange={e => setFormData({ ...formData, password: e.target.value })} type="password" className='register_input' placeholder='Password' />
                        <p>By Creating an account, you agree to our <br></br> User Agreement  and acknowledge reading our User Privacy Notice .</p>
                        
                            <button className='classBtnhover' onClick={createAccountWithGoogle}>Create account</button>
                        
                    </div>
                    <div className="register_google">

                       
                       <button onClick={createUser} className="auth-google-btn">
                            <FcGoogle /> Continue with Google
                         
                        </button>
                       

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crete