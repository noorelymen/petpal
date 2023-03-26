import React from 'react'
import './login.css'
import { useForm } from "react-hook-form";
import { loginSchema } from "../../helper/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../services/auth.service";
export default function Login () {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmitHandle =(data)=>{
    // api calll
    console.log(data)
    const {email,password} = data
    login({email,password})
  }
  return (
    <div className="column left login">
         <h1>Log in</h1>
         <hr />
         <p>If you already have an account make sure to log in below using your credentials</p>
         <div className="form-group">
             <form onSubmit={handleSubmit(onSubmitHandle)} id="login-form">
                 <input type="text" placeholder="Username or email" {...register("email")}/>
                 <input type="password" placeholder="Password" {...register("password")}/>
                 <input type="submit" defaultValue="Log in" />
                 <p>{errors.password?.message}</p>
             </form>
         </div>
     </div>
   )
}