import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./style.css"

export default function index() {
  return (
    <div class="login-container">
    <h2>Login</h2>
    <form>
      <div class="mb-3">
        <label for="role" class="form-label">Who are you?</label>
        <select class="form-select" id="role" required>
          <option value="" selected disabled>Select your role</option>
          <option value="admin">Admin</option>
          <option value="store-owner">Store Owner</option>
          <option value="user">User</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <div class="mt-3">
        <small class="form-text">
          <a href="#">Forgot Password?</a>
        </small>
      </div>
    </form>
  </div>
  )
}
