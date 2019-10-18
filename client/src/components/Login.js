import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const [creds, setCreds] = useState({ username: "", password: "" });

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    })
  }
  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('api/login', creds)
      .then(res => {
        console.log("login response", res)
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
      })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={creds.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={creds.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
