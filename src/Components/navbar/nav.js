import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", route: "/home" },
  { name: "About", route: "/about" },
  { name: "Services", route: "/services" },
  { name: "Career", route: "/career" },
  { name: "Contact", route: "/contact" },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = ({ isAuthenticated, setLoggedIn }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const linkStyle = {
    textDecoration: "none",
    marginLeft: 10,
    fontSize: 21,
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    setLoggedIn(false);
    navigate("");
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "rgba(92,64,51,0.4)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* For Mobile View  */}

          <Avatar
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            alt="Logo"
            src="https://media.istockphoto.com/id/1220134013/vector/s-h.jpg?s=612x612&w=0&k=20&c=FkvOnhQmfTV-4JJxkVUpYIaswj3iplKQ3J1lGM5vsTA="
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Apple
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {isAuthenticated &&
                pages.map(({ name, route }, i) => (
                  <MenuItem key={name + i} onClick={handleCloseNavMenu}>
                    <NavLink
                      to={route}
                      style={({ isActive }) => ({
                        ...linkStyle,
                        color: isActive ? "cyan" : "black",
                      })}
                    >
                      {name}
                    </NavLink>
                  </MenuItem>
                ))}
            </Menu>
          </Box>

          {/* for desktop view  */}

          <Avatar
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            alt="Logo"
            src="https://media.istockphoto.com/id/1220134013/vector/s-h.jpg?s=612x612&w=0&k=20&c=FkvOnhQmfTV-4JJxkVUpYIaswj3iplKQ3J1lGM5vsTA="
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map(({ name, route }, i) => (
              <MenuItem key={name + i} onClick={handleCloseNavMenu}>
                {isAuthenticated && (
                  <NavLink
                    to={route}
                    style={({ isActive }) => ({
                      ...linkStyle,
                      color: isActive ? "cyan" : "black",
                    })}
                  >
                    {name}
                  </NavLink>
                )}
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="http://cdn.onlinewebfonts.com/svg/img_568657.png"
                />
              </IconButton>
            </Tooltip>

            {isAuthenticated && (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => (key={setting} */}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button
                    textAlign="center"
                    color="inherit"
                    onClick={() => navigate("/home")}
                  >
                    Dashboard
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button
                    textAlign="center"
                    color="inherit"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </MenuItem>
                {/* ))} */}
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
