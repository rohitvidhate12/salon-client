import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Home/home";
import Services from "../Services/services";
import ContactUs from "../Contact us/contactUs";
import AboutUs from "../About Us/aboutUs";
import Navbar from "../navbar/nav";
import Career from "../Career/career";
import SignIn from "../Login/signIn";
import RegistrationForm from "../Login/RegistrationForm";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setLoggedIn = (status) => {
    setIsAuthenticated(status);
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? (
      children
    ) : (
      <SignIn setLoggedIn={setLoggedIn} isAuthenticated={isAuthenticated} />
    );
  };
  return (
    <>
      <Navbar setLoggedIn={setLoggedIn} isAuthenticated={isAuthenticated} />

      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <Services />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/career"
          element={
            <ProtectedRoute>
              <Career />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Routes>
        <Route
          path=""
          element={
            <SignIn
              setLoggedIn={setLoggedIn}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </>
  );
};

export default Dashboard;
