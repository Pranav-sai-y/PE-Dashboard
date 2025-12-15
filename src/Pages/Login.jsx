// src/Pages/Login.jsx
import React from "react";
import "./Login.css";                 // your custom styles (kept)
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import LoginTop from "../Images/login-top.png"; // <-- make sure this path is correct

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard"); // go to dashboard page
  };

  return (
    // full viewport container so page is not "cut"
    <div
      className="login-page"
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#eaf9fb", // keeps same soft background like your dashboard
        paddingTop: 24,
        paddingBottom: 40,
        boxSizing: "border-box",
      }}
    >
      {/* Top gradient bar (kept) */}
      <div
        className="top-bar mb-4"
        style={{
          height: 36,
          margin: "0 32px 24px 32px",
          borderRadius: 8,
          background: "linear-gradient(90deg,#1467b4 0%, #3b2e8e 100%)",
        }}
      />

      {/* MAIN CONTENT - center area */}
      <div className="container-fluid" style={{ paddingLeft: 32, paddingRight: 32 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="row g-4 align-items-start">
              {/* LEFT IMAGE - large hero */}
              <div className="col-md-8">
                <div className="left-image-card shadow" style={{ borderRadius: 12, overflow: "hidden" }}>
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1350&q=80"
                    className="hero-img"
                    alt="hero"
                    style={{ width: "100%", height: "520px", objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>

              {/* RIGHT LOGIN CARD */}
              <div className="col-md-4">
                <div className="card p-4 shadow login-card" style={{ borderRadius: 12 }}>
                  <div className="text-center mb-3">
                    {/* ---- REPLACED avatar-circle WITH YOUR login-top.png IMAGE ---- */}
                    <div style={{ marginBottom: 8 }}>
                      <img
                        src={LoginTop}
                        alt="login top"
                        style={{
                          width: 120,
                          height: 80,
                          objectFit: "contain",
                          display: "inline-block",
                        }}
                      />
                    </div>

                    <h5 className="fw-bold" style={{ marginTop: 8 }}>
                      Platform Engineering
                    </h5>
                    <p className="text-muted" style={{ marginBottom: 18 }}>
                      Building Secure IT foundation that fuels Productivity
                    </p>
                  </div>

                  {/* LOGIN BUTTON */}
                  <button className="btn btn-warning w-100 fw-bold" onClick={handleLogin}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM 3 CARDS */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-lg-10">
            <div className="row g-4">
              {["PE I", "PE II", "PE III"].map((title, i) => (
                <div key={i} className="col-md-4">
                  <div className="card p-3 shadow-sm feature-card" style={{ borderRadius: 10 }}>
                    <div className="d-flex align-items-center">
                      <div
                        className="avatar-small"
                        style={{
                          minWidth: 48,
                          minHeight: 48,
                          borderRadius: 50,
                          background: "#0b63b3",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                        }}
                      >
                        {title}
                      </div>
                      <div className="ms-3">
                        <h6 className="fw-bold" style={{ marginBottom: 4 }}>
                          {title}
                        </h6>
                        <small className="text-muted">Platform Engineering department</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
