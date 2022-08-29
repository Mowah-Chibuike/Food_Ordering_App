import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ProtectedRoutes from "./Pages/ProtectedRoutes/ProtectedRoute";
import SharedLayout from "./Components/SharedLayout/SharedLayout";

import Dashboard from "./Pages/Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<SharedLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
