import React from "react";
import "./Login.css"; // Custom styles
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  return (
    <div className="login-page container-fluid p-4">
      {/* Top gradient bar */}
      <div className="top-bar mb-4"></div>

      {/* MAIN CONTENT */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row g-4">

            {/* LEFT IMAGE */}
            <div className="col-md-8">
              <div className="left-image-card shadow">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1350&q=80"
                  className="hero-img"
                  alt="hero"
                />
              </div>
            </div>

            {/* RIGHT LOGIN CARD */}
            <div className="col-md-4">
              <div className="card p-4 shadow login-card">
                <div className="text-center">
                  <div className="avatar-circle mb-3">PE Dashboard</div>

                  <h5 className="fw-bold">Platform Engineering</h5>
                  <p className="text-muted">Building Secure IT foundation that fuels Productivity</p>
                </div>




                <button className="btn btn-warning w-100 fw-bold">
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
