import React from 'react'
import './register.css'

const Register = () => {
  return (
   <div className="column right register">
        <h1>Register</h1>
        <hr />
        <p>If you already have an account make sure to log in below using your credentials</p>
        <div className="form-group">
            <form action="" id="register-form">
            <input type="text" placeholder="First name" className="w-50"/>
            <input type="text" placeholder="Last name" className="w-50"/>
            <input type="text" placeholder="Username" className="w-50"/>
            <input type="email" placeholder="Email" className="w-50"/>
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
            <input type="submit" defaultValue="Register" />
            </form>
        </div>
    </div>
  )
}

export default Register