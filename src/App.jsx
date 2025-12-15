// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import NewTest from "./Pages/NewTest"; // your dashboard file renamed earlier

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<NewTest />} />
      {/* fallback: */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import TestLogin from "./Pages/TestLogin";

// export default function App(){
//   return (
//     <TestLogin />
//   )
// }














// import React, {usestate} from "react";

// // import Dashboard from "./Pages/Dashboard";
// import DashboardN from "./Pages/DashboardN";

// // import Backupdashboard from "./Pages/Backupdashboard"

// // import Login from "./Pages/Login";

// import NewTest from "./Pages/NewTest";

// export default function App() {
//   // return <Login />;


//   return <NewTest />;
//   // return <Dashboard />;
//   // return <Backupdashboard />;
// }
