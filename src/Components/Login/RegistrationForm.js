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
import axios from "axios";
import UserService from "../../Services/userServices";
import { errorToast, successToast } from "../../Toast/Toast";
import { useEffect } from "react";

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
  mobile: yup
    .string()
    .matches(/^[\d+]{10}$/, "Please enter valid Mobile Number!"),
  password: yup
    .string()
    .required("Password is required!..")
    .min(6, "Password should contain atleast 6 characters.."),
});

const RegistrationForm = ({
  open,
  handleDialogClose,
  operation,
  selectedUserToEdit,
  userList,
}) => {
  const navigate = useNavigate();
  const [clientData, setClientData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
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

  useEffect(() => {
    if (userList?.length && selectedUserToEdit) {
      const selectedUser = userList?.find(
        (user) => user._id === selectedUserToEdit
      );
      setClientData(selectedUser);
    }
  }, [selectedUserToEdit, userList]);

  const handleChange = (e, name) => {
    const { value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };
  const handleFormSubmit = async (e) => {
    console.log("CLient Data :", clientData);

    if ((operation = "edit")) {
      UserService.updateUser(clientData?._id, clientData)
        .then((response) => {
          const message = response?.data?.message || "User Created";
          successToast(message);
          if (selectedUserToEdit) handleDialogClose();
        })
        .catch((err) => {
          console.error(err);
          const message = err?.response?.data?.message || "Failed to create";
          errorToast(message);
        });
    } else {
      UserService.createUser(clientData)
        .then((response) => {
          const message = response?.data?.message || "User Created";
          successToast(message);
        })
        .catch((err) => {
          console.error(err);
          const message = err?.response?.data?.message || "Failed to create";
          errorToast(message);
        });
    }

    navigate("/login");
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
                onChange={(e) => handleChange(e, "firstName")}
                value={clientData.firstName || ""}
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
                value={clientData.lastName || ""}
                onChange={(e) => handleChange(e, "lastName")}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile"
                name="mobile"
                autoComplete="mobile"
                autoFocus
                {...register("mobile")}
                error={errors.mobile ? true : false}
                helperText={errors.mobile?.message}
                onChange={(e) => handleChange(e, "mobile")}
                value={clientData.mobile || ""}
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
                value={clientData.email || ""}
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
                value={clientData.password || ""}
                onChange={(e) => handleChange(e, "password")}
              />

              <Button
                type="submit"
                color="error"
                variant="text"
                sx={{ mt: 4, mb: 0, fontSize: 18 }}
              >
                {(operation = "edit" ? "Edit" : "Register")}
              </Button>
            </Box>
          </Card>
        </Container>
      </ThemeProvider>
    </section>
  );
};

export default RegistrationForm;
