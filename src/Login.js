import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="container-fluid">
      <div className="flex text-center text-success mt-5 mb-1">
        <img className="card-img-top mx-auto d-block" src="logo.svg" style={{ width: "120px" }} alt="logo" />
        <h2>System</h2>
      </div>
      <div className="container d-flex align-items-center justify-content-center">
        {/* Login error message */}
        {/* The card Start */}
        <div className="card" style={{ width: "380px" }}>
          <div className="card-body">
            <h5 className="card-title text-center text-primary">
              <strong className="text-warning">Login</strong>
            </h5>
            <div className="p-1 text-align-center justify-content-center">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-1">
                  <label htmlFor="username">
                    <strong>Username:</strong>
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control form-control-sm"
                    placeholder="Johndoe"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                  <span className="invalid-feedback"></span>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">
                    <strong>Password:</strong>
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-sm"
                    placeholder="********"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <span className="invalid-feedback"></span>
                </div>
                <div className="d-grid g-2 mx-auto">
                  <button type="submit" className="text-center btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
