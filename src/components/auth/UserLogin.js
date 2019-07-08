import React from 'react';
import { Link } from 'react-router-dom';

function UserLogin() {
  return (
    <div className="page">
      <h1 className="page-title">User Login</h1>
      <form className="form">
        <div className="form-item">
          <input type="text" name="name" placeholder="Username" />
        </div>
        <div className="form-item">
          <input type="password" name="pass" placeholder="Password" />
        </div>
        <div className="form-action">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className="small">Doesn't have an account yet? <Link to="/user/register">Register</Link><br/>
      Forgot username or password? <Link to="/user/password">Reset account</Link></p>
    </div>
  )
}

export default UserLogin;
