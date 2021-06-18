import React from "react";
import Header from "../Header/Header";
import { useForm } from "react-hook-form";
import './Login.css'
import { Link } from "react-router-dom";
import googleIcon from '../../images/google.png'
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div>
      <Header></Header>
      <div >
          <div className="login-area">
          <h2>Login</h2>
        <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
          <input className="form-control input-field" {...register("email", { required: true })} placeholder="Email"/>
          {errors.email && <span className="text-danger">This field is required</span>}
          <input className="form-control input-field" {...register("password", { required: true })}  placeholder="Password"/>
          {errors.email && <span className="text-danger">This field is required</span>}
          <div className="d-flex justify-content-between mt-4">
              <div className="d-flex align-items-center">
              <input type="checkbox" name="remember" id="" />
              <label className="ms-1" htmlFor="remember">Remember me</label>
              </div>
             <Link className="text-danger">Forgot Password</Link>
          </div>
          <input className="form-control submit-button" type="submit" />
          <p className="text-center mt-3">Don't have an account? <Link className="text-danger">Create an account</Link></p>
        </form>
        
      </div>
        <div className="another-way mt-3">
        <div className='or'></div>
        <h4 className="mx-2">Or</h4>
        <div className="or"></div>
        </div>
        <div className="continue-another">
            <div className="btn-google text-center"><img  src={googleIcon} alt="" /> Continue with Google</div>
        </div>
      </div>
    </div>
  );  
};

export default Login;
