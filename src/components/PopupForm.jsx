import React, { useState } from 'react';

function PopUpForm() {
  const [isLogin, setIsLogin] = useState(false);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleClose = () => {
    setIsLogin(false);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', minWidth: '300px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#ccc', cursor: 'pointer', padding: '0' }} type="button" onClick={handleClose}>
            X
          </button>
        </div>
        <h2 style={{ marginBottom: '20px' }}>{isLogin ? 'Log in' : 'Sign up'}</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input style={{ display: 'block', marginBottom: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} type="email" id="email" name="email" required />
          {!isLogin && (
            <>
              <label htmlFor="password">Password</label>
              <input style={{ display: 'block', marginBottom: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} type="password" id="password" name="password" required />
            </>
          )}
          <button style={{ display: 'block', width: '100%', padding: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px' }} type="submit">{isLogin ? 'Log in' : 'Sign up'}</button>
        </form>
        <p style={{ marginTop: '10px', textAlign: 'center' }}>
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button style={{ backgroundColor: 'transparent', border: 'none', color: '#007bff', cursor: 'pointer', padding: '0' }} type="button" onClick={handleToggle}>
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button style={{ backgroundColor: 'transparent', border: 'none', color: '#007bff', cursor: 'pointer', padding: '0' }} type="button" onClick={handleToggle}>
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default PopUpForm;
