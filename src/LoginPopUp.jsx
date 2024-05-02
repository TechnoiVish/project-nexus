import React, { useState } from 'react'
import './LoginPopUp.css'
const LoginPopUp = () => {
    const [currState,setCurrState]=useState("Sign Up")
  return (
    <div className='login-popup'>
<form className='login-popup-container'name="login-form">
    <div className="login-popup-title">
        <h2>{currState}</h2>
    </div>
    <div className="login-popup-inputs">
        {currState==="Login"?<></>:<input type="text" placeholder="Enter Your Name" required />
}
        <input type="email" placeholder="Enter Email" required />
        <input type="password" placeholder="Password" required />
    </div>
<button >{currState==="Sign Up"?"Create account":"login"}</button>
<div className="login-popup-condition">
    <input type="checkbox" required />
    <p>Agree privacy and policy to continue sign up.</p>

</div>
{currState==="Login"?
<p>Create new account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
:
<p className='account'>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>

}
</form>
    </div>
  )
}

export default LoginPopUp
