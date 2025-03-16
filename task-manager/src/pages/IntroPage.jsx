import React from "react";
import { useState } from "react";
import Home from "./Home"
import { Navigate, Link } from "react-router-dom";


function IntroPage(){
    const [name,setName]=useState("");
    const [submitted,setSubmitted]=useState(false);
    function handleInput(e){
        e.preventDefault();
        setSubmitted(true);
    }
    if(submitted){
        return <Navigate to="/home" state={name}/>
    }
    return(
        <div>
            <div className="info-section">
                <h1>WELCOME TO ACHIEVE YOUR GOALS </h1>
                <p>Firstly be ready to changes which is made by app </p>
            </div>
            <div className="taking-info">
                <input type="text" className="input-name" placeholder="type your name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <Link to="/home">SEND</Link>
            </div>

            

        </div>
    );
}
export default IntroPage;