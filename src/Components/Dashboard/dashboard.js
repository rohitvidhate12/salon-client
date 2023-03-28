import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Home/home";
import Services from "../Services/services";
import ContactUs from "../Contact us/contactUs";
import AboutUs from "../About Us/aboutUs";
import Login from "../Login/login";
import Navbar from "../navbar/navbar";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setLoggedIn = (status) => {
    setIsAuthenticated(status);
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };
  return (
    <>
      <Navbar setLoggedIn={setLoggedIn} isAuthenticated={isAuthenticated} />

      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
      <Routes>
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <Routes>
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              setLoggedIn={setLoggedIn}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Dashboard;
