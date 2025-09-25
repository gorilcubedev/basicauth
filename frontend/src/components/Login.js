import React from 'react';

function Login() {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  const handleGitHubLogin = () => {
    window.location.href = 'http://localhost:5000/auth/github';
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login</h1>
      <button onClick={handleGoogleLogin} style={{ margin: '10px', padding: '10px 20px' }}>
        Login with Google
      </button>
      <button onClick={handleGitHubLogin} style={{ margin: '10px', padding: '10px 20px' }}>
        Login with GitHub
      </button>
    </div>
  );
}

export default Login;