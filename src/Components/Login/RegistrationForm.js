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
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const theme = createTheme();
const registrationSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "Name is too short!  ")
    .max(45, "Name is too long!")
    .required("First Name is reuired"),
  lastName: yup
    .string()
    .min(2, "Name is too short!")
    .max(45, "Name is too long!")
    .required("Last Name is reuired"),

  email: yup.string().email().required(),
  password: yup
    .string()
    .required("Password is required!..")
    .min(6, "Password should contain atleast 6 characters.."),
});

const RegistrationForm = () => {
  const validUser = [{ email: "test@gmail.com", pass: "12345678" }];
  const navigate = useNavigate();
  const [clientData, setClientData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: clientData,
    resolver: yupResolver(registrationSchema),
  });

  const handleChange = (e, name) => {
    const { value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };
  const handleFormSubmit = (e) => {
    const newUser = {
      email: clientData.email,
      pass: clientData.password,
    };

    validUser.push(newUser);

    localStorage.setItem("ValidUsersArr", JSON.stringify(validUser));

    console.log("ValidUser :", validUser);
    console.log("CLient Data :", clientData);

    navigate("/home");
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
              onSubmit={handleSubmit(handleFormSubmit)}
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
                {...register("firstName")}
                error={errors.firstName ? true : false}
                helperText={errors.firstName?.message}
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
                {...register("lastName")}
                error={errors.lastName ? true : false}
                helperText={errors.lastName?.message}
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
                {...register("email")}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
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
                {...register("password")}
                error={errors.password ? true : false}
                helperText={errors.password?.message}
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
