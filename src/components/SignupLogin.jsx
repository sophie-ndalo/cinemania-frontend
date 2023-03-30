import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const SignupLogin = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleSignup = () => {
    setShowLogin(false);
  };

  return (
    <div>
      {showLogin ? (
        <LoginForm handleClose={handleLogin} handleSignup={handleSignup} />
      ) : (
        <SignupForm handleClose={handleLogin} handleSignup={handleSignup} />
      )}
    </div>
  );
};

export default SignupLogin;