import React from "react"
import { useNavigate } from "react-router-dom";

export default function (props) {

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault()

    setTimeout(() => {
      navigate("/success");
    }, 5000);

   



  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(event) => handleSubmit(event)} autoComplete='on'>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="username"
              className="form-control mt-1"
              placeholder="Enter email"
              autocomplete="username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
              autoComplete="current-password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}