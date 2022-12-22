import React, { useState, useEffect } from "react";
import "./App.css";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/login";
import Signup from "./Pages/Register/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) setIsLoggedIn(true);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route
            path="/profile"
            element={<Profile isLoggedIn={isLoggedIn} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
