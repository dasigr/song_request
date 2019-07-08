import React from 'react';
import { Link } from 'react-router-dom';

function UserPassword() {
  return (
    <div className="page">
      <h1 className="page-title">Reset Password</h1>
      <form className="form">
        <div className="form-item">
          <input type="text" name="name" placeholder="Username" />
        </div>
        <div className="form-action">
          <input className="btn btn-primary" type="submit" value="Reset account" />
        </div>
      </form>
      <p className="small">Already have an account? <Link to="/user/login">Login</Link><br/>
      Doesn't have an account yet? <Link to="/user/register">Register</Link></p>
    </div>
  )
}

export default UserPassword;
