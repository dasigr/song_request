import React from 'react';
import { Link } from 'react-router-dom';

function UserRegistration() {
  return (
    <div className="page">
      <h1 className="page-title">Register</h1>
      <form className="form">
        <div className="form-item">
          <input type="text" name="name" placeholder="Username" />
        </div>
        <div className="form-item">
          <input type="email" name="mail" placeholder="Email address" />
        </div>
        <div className="form-item">
          <input type="password" name="pass" placeholder="Password" />
        </div>
        <div className="form-action">
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
      </form>
      <p className="small">Already have an account? <Link to="/user/login">Login</Link><br/>
      Forgot username or password? <Link to="/user/password">Reset account</Link></p>
    </div>
  )
}

export default UserRegistration;
