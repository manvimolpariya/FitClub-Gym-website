import React, { useRef } from "react";
import './join.css'

const Join = ()=>{
    const form =useRef()
 return(
    <div className="join" id="join">
        <div className="left-j">
            <hr/>
            <div>
                <span className="stroke-text">READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span  className="stroke-text">YOUR BODY</span>
                <span> WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} action="" className="email-container">
                <input type="email" name="user_email" placeholder="Enter your Email address." />
              <button className="btn btn-j">Join Now</button>
            </form>
        </div>
    </div>
 )
}
export default Join