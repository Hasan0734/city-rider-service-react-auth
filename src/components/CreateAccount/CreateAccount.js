import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import { createUserEmalAndPassword, initializedApp } from "../Login/loginManager";

const CreateAccount = (props) => {
  initializedApp();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [user, setUser] = props.userState
    const [newUser, setNewUser] = props.newUserState
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {name, email, password1, password2} = data
    let password;
    if(password1 === password2){
      password = password2
    }
    createUserEmalAndPassword(name, email, password)
    .then(res => {
      setUser(res)
      setLoggedInUser(res)
      history.replace(from);
    })
    console.log(data)
  };

  
  return (
    <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="form-control input-field"
        {...register("name", { required: true, })}
        placeholder="Name"
      />
      {errors.name && (
        <span className="text-danger">This field is required</span>
      )}
      <input
        type="email"
        className="form-control input-field"
        {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
        placeholder="Username or Email"
      />
      {errors.email && (
        <span className="text-danger">This field is required</span>
      )}
      <input
        type="password"
        className="form-control input-field"
        {...register("password1", { required: true, pattern: /\d{1}./ })}
        placeholder="Password"
      />
      {errors.password1 && (
        <span className="text-danger">This field is required</span>
      )}
      <input
        type="password"
        className="form-control input-field"
        {...register("password2", { required: true, pattern: /\d{1}./ })}
        placeholder="Confirm Password"
      />
      {errors.password2 && (
        <span className="text-danger">This field is required</span>
      )}

      <input className="form-control submit-button" type="submit" />
      <p className="text-center mt-3">
        Already have an account? <Link onClick={() => setNewUser(!newUser)} className="text-danger">Login</Link>
      </p>
    </form>
  );
};

export default CreateAccount;
