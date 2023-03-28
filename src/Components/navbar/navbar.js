import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Navbar = ({ isAuthenticated, setLoggedIn }) => {
  const linkStyle = {
    textDecoration: "none",
    marginLeft: 10,
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Salon
          </Typography>
          <NavLink
            to=""
            style={({ isActive }) => ({
              ...linkStyle,
              color: isActive ? "cyan" : "black",
            })}
          >
            Home
          </NavLink>
          {isAuthenticated && (
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                ...linkStyle,
                color: isActive ? "cyan" : "black",
              })}
            >
              Services
            </NavLink>
          )}

          <NavLink
            to="/aboutUs"
            style={({ isActive }) => ({
              ...linkStyle,
              color: isActive ? "cyan" : "black",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/contactUs"
            style={({ isActive }) => ({
              ...linkStyle,
              color: isActive ? "cyan" : "black",
            })}
          >
            Contact Us
          </NavLink>

          {!isAuthenticated && (
            <NavLink
              to="/login"
              style={({ isActive }) => ({
                ...linkStyle,
                color: isActive ? "cyan" : "black",
              })}
            >
              Login
            </NavLink>
          )}

          {isAuthenticated && (
            <Button
              onClick={handleLogout}
              variant="text"
              style={{ margin: 10, color: "black" }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
