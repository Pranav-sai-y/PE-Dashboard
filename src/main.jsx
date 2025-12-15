// import React, { useState } from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import "bootstrap/dist/css/bootstrap.min.css"
// import './index.css'
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>            {/* <-- ONLY place you render BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

