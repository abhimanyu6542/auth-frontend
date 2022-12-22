import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./login.css";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [state, setState] = useState(initialState);
  const { email, password } = state;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3200/auth/login",
      state
    );

    if (response.status === 200) {
      const authToken = response.data.token;
      // console.log(response.data.user);
      await localStorage.setItem("authToken", authToken);
      navigate("/profile", { state: { user: response.data.user } });
    }
  };
  return (
    <div className="mainContainerForsignup">
      <div className="submainContainer">
        <div style={{ flex: 1, marginLeft: 150, marginBottom: "170px" }}>
          <p className="logoText">
            My<span className="part">Site</span>
          </p>
          <p className="introtext">
            Connect with your <span className="part">love </span>
          </p>
        </div>
        <div style={{ flex: 3 }}>
          <p className="createaccountTxt">Login Account</p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleInputChange}
              className="inputText"
            />
            <input
              type="password"
              placeholder="******"
              name="password"
              onChange={handleInputChange}
              id="password"
              className="inputText"
            />
            <input type="submit" className="btnforsignup" value="Login" />
          </form>
          <Link to={"/signup"}>
            <p style={{ textAlign: "start", marginLeft: "30.6%" }}>
              Create New Account
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
