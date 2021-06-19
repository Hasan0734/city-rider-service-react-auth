import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import { useForm } from "react-hook-form";
import "./Login.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import googleIcon from "../../images/google.png";
import { googleSignIn, initializedApp, signInWithEmailPassword } from "./loginManager";
import { UserContext } from "../../App";
import CreateAccount from "../CreateAccount/CreateAccount";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    signedInUser: false,
    name: "",
    email: "",
  });
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {email, password} = data
    signInWithEmailPassword(email, password)
    .then(res => {
      setLoggedInUser(res)
      setUser(res)
      history.replace(from);
    })
  };

  initializedApp();
  const handleGoogleSign = () => {
    googleSignIn().then((res) => {
      const user = res;
      setUser(user);
      setLoggedInUser(user);
      history.replace(from);
    });
  };
  return (
    <div>
      <Header></Header>
      <div>
        <div className="login-area">
          <h2>{newUser ? "Create an account" : "Login"}</h2>

          {newUser ? (
            <CreateAccount newUserState={[newUser, setNewUser]} userState={[user, setUser]}></CreateAccount>
          ) : (
            <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                className="form-control input-field"
                {...register("email", {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                type="password"
                className="form-control input-field"
                {...register("password", { required: true, pattern: /\d{1}./ })}
                placeholder="Password"
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="remember" id="" />
                  <label className="ms-1" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <Link className="text-danger">Forgot Password</Link>
              </div>
              <input className="form-control submit-button" type="submit" />
              <p className="text-center mt-3">
                Don't have an account?{" "}
                <Link onClick={() => setNewUser(!newUser)} className="text-danger">
                  Create an account
                </Link>
              </p>
            </form>
          )}
        </div>
        <div className="another-way my-3">
          <div className="or"></div>
          <h4 className="mx-2">Or</h4>
          <div className="or"></div>
        </div>
        <div onClick={handleGoogleSign} className="continue-another">
          <div className="btn-google">
            <img src={googleIcon} alt="" />{" "}
            <span className="text-center">Continue with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
