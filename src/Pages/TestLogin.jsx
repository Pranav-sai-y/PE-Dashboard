// src/Pages/Login.jsx

import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

// IMPORT YOUR LEFT BIG IMAGE
import loginInfoTop from "../Images/login-info-top.png";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="login-page container-fluid p-4">

      {/* TOP GRADIENT BAR */}
      <div className="top-bar mb-4"></div>

      {/* MAIN CONTENT */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row g-4">

            {/* LEFT IMAGE */}
            <div className="col-md-8">
              <div className="left-image-card shadow">
                <img
                  src={loginInfoTop}
                  className="hero-img cover-img"
                  alt="hero"
                />
              </div>
            </div>

            {/* RIGHT LOGIN CARD */}
            <div className="col-md-4">
              <div className="card p-4 shadow login-card">

                <div className="text-center">
                  <img
                    src="/assets/Images/login-top.png"
                    alt="Login Top"
                    style={{
                      width: "90px",
                      marginBottom: "10px",
                    }}
                  />

                  <h5 className="fw-bold">Platform Engineering</h5>
                  <p className="text-muted">
                    Building Secure IT foundation that fuels Productivity
                  </p>
                </div>

                <button
                  className="btn btn-warning w-100 fw-bold"
                  onClick={handleLogin}
                >
                  Login
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM 3 CARDS */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-10">
          <div className="row g-4">

            {["PE I", "PE II", "PE III"].map((title, i) => (
              <div key={i} className="col-md-4">
                <div className="card p-3 shadow-sm feature-card">
                  <div className="d-flex align-items-center">
                    <div className="avatar-small">{title}</div>
                    <div className="ms-3">
                      <h6 className="fw-bold">{title}</h6>
                      <small className="text-muted">
                        Platform Engineering department
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  );
}
