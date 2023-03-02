import React, {useState, useEffect} from "react";
import "./index.css"
import { NavLink } from "react-router-dom";
import axios from "axios";

const index = ()=>{
    const [name, setName] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");   



    const createUser = async()=>{
        await axios.post("https://api.escuelajs.co/api/v1/users/")
        .then((res)=>{
            console.log(res);
        })
        .then((err)=>{
            console.log(err);
        })
    }

    return(
        <div className="all">
            <header className="navbar">
                <div className="logo mx-2">
                     <img  className="logocha" src="https://www.vectorlogo.zone/logos/ebay/ebay-ar21.png" alt="" />
                </div>
                <div className="sing mt-3 mx-5">
                    <p>Already a member?  <NavLink to="/login">Sing In</NavLink> </p>
                </div>
            </header>

            <div className="con">
                <h1 className="text-center">Create an Accont</h1>
                <div className="wr">
                    <div className="part-first">
                        <div className="first">
                            <input value={name} onChange={((e)=>setName(e.target.value))} className="inputf" type="text" />
                            <input value={last} onChange={((e)=>setLast(e.target.value))} className="inputs" type="text" />
                        </div>
                        <input value={email} onChange={((e)=>setEmail(e.target.value))}  className="topin" type="text" />
                        <input value={password} onChange={((e)=>setpassword(e.target.value))} className="topin" type="text" />
                        <button onClick={(()=>createUser())} className="btn btn-success">Create Account</button>

                    </div>

                    <div className="part-second">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default index;