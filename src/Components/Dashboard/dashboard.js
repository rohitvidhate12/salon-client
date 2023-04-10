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
import JobForm from "../Career/JobForm";
import EnquiryForm from "../BookAppointment/EnquiryForm";

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
        <Route path="" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Routes>
        <Route path="/career" element={<Career />} />
      </Routes>

      <Routes>
        <Route
          path="/login"
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
      <Routes>
        <Route path="/apply" element={<JobForm />} />
      </Routes>
      <Routes>
        <Route
          path="/book-appointment"
          element={
            <ProtectedRoute>
              <EnquiryForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Dashboard;
