import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Profile = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  // console.log(state.user);
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/");
    }
  }, [props]);
  const logOut = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  return (
    <div>
      <h1>Profile </h1>
      <h3>You have successfully logged in</h3>
      <h3>Your details in Below</h3>
      {state?.user && (
        <>
          <p>Full Name : {state.user.fname} </p>
          <p>Email : {state.user.email} </p>
          <p>Phone Number : {state.user.phoneNumber} </p>
        </>
      )}

      <button onClick={logOut}>LogOut</button>
    </div>
  );
};

export default Profile;
