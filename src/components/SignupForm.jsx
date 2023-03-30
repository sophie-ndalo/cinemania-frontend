import React, { useState } from "react";


const SignupForm = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (response.ok) {
      const user = await response.json();
      // redirect to login page on successful signup
      window.location.href = "/account";
    } else {
      // handle error case
      const error = await response.json();
      console.log(error);
    }
  };

  return (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ position: 'relative', width: '400px', backgroundColor: '#fff', boxShadow: '0px 2px 10px rgba(0,0,0,0.3)', borderRadius: '10px' }}>
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Sign Up</h2>
      <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '20px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '20px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '20px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      <button onClick={handleSignup} style={{ display: 'block', width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#2196F3', color: '#fff', cursor: 'pointer' }}>Sign up</button>

      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        Already have an account?{" "}
        <a href="#" onClick={handleClose} style={{ color: '#2196F3', textDecoration: 'none' }}>
          Log in
        </a>
      </p>
    </div>
  </div>
</div>

  );
};

export default SignupForm;

