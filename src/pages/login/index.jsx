import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./style.css"

export default function Login() {
  return (
    <div className="login-container">
    <h2>Login</h2>
    <form>
      <div className="mb-3">
        <label for="role" className="form-label">Who are you?</label>
        <select className="form-select" id="role" required>
          <option value="" selected disabled>Select your role</option>
          <option value="admin">Admin</option>
          <option value="store-owner">Store Owner</option>
          <option value="user">User</option>
        </select>
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" required />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter password" required />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
      <div className="mt-3">
        <small className="form-text">
          <a href="#">Forgot Password?</a>
        </small>
      </div>
    </form>
  </div>
  )
}
