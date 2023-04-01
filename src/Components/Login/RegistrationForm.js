import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [clientData, setClientData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e, name) => {
    const { value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
    console.log("CLient Data :", clientData);
  };

  return (
    <section>
      <ThemeProvider theme={theme}>
        <Container component="main" sx={{ width: 450 }}>
          <CssBaseline />
          <Card
            sx={{
              padding: "20px 50px 20px 50px",
              marginTop: "26%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 3,
              backgroundImage:
                "url('https://images.pexels.com/photos/4040698/pexels-photo-4040698.jpeg?auto=compress&cs=tinysrgb&w=400')",
              //     backgroundRepeat: "no-repeat",
              //     // backgroundSize: "cover",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Typography
                style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }}
              >
                Registration Form
              </Typography>

              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                // value={clientData.firstName}
                onChange={(e) => handleChange(e, "firstName")}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
                // value={clientData.lastName}
                onChange={(e) => handleChange(e, "lastName")}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                // value={clientData.email}
                onChange={(e) => handleChange(e, "email")}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // value={clientData.password}
                onChange={(e) => handleChange(e, "password")}
              />

              <Button
                type="submit"
                color="error"
                variant="text"
                sx={{ mt: 4, mb: 0, fontSize: 18 }}
              >
                Register
              </Button>
            </Box>
          </Card>
        </Container>
      </ThemeProvider>
    </section>
  );
};

export default RegistrationForm;
