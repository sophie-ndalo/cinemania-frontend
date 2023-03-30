import React, { useState } from "react";

const LoginForm = ({ handleSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const user = await response.json();
      // do something with the user data, e.g. store it in state
      window.location.href = "/"; // redirect to home page
    } else {
      // handle error case
      const error = await response.json();
      console.log(error);
    }
  };

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
<div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <div style={{backgroundColor: 'white', padding: '30px', borderRadius: '10px'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
      <h2 style={{margin: 0}}>Log in</h2>
      <button onClick={handleClose} style={{border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '24px'}}>X</button>
    </div>

    <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <label htmlFor="email" style={{fontSize: '16px'}}>Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc'}}
      />

      <label htmlFor="password" style={{fontSize: '16px'}}>Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc'}}
      />

      <button onClick={handleLogin} style={{padding: '10px', backgroundColor: '#0077FF', color: 'white', borderRadius: '5px', border: 'none', fontSize: '16px', cursor: 'pointer'}}>Log in</button>

      <div style={{display: 'flex', alignItems: 'center'}}>
        <p style={{margin: 0, fontSize: '16px'}}>Don't have an account?</p>
        <button onClick={handleSignup} style={{padding: '5px', marginLeft: '10px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: '16px'}}>Sign up</button>
      </div>
    </div>
  </div>
</div>

  );
};

export default LoginForm;
