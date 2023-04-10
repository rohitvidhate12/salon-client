import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card, Grid } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Footer from "../Footer/Footer";
const theme = createTheme();

const ContactSchema = yup.object({
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
});

const ContactUs = () => {
  const [contactData, setContactData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    subject: "",
    info: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: contactData,
    resolver: yupResolver(ContactSchema),
  });

  const handleChange = (e, name) => {
    const { value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };
  const handleFormSubmit = (e) => {};

  console.log({ contactData });
  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <Box sx={{ position: "relative" }}>
            <img
              src="https://linnaean.imgix.net/190905_Linnaean17344-D.jpeg?auto=compress&fit=clip&q=80&w=4000&s=2b6dd7c032bc720d4f9e262c1ca38922"
              style={{ height: "100vh", width: "100%" }}
            />
            <Typography
              sx={{
                color: "#08c7ea",
                position: "absolute",
                fontSize: 80,
                top: "81%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "1",
              }}
            >
              Contact Us
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3 / 2}></Grid>
        <Grid item xs={12} md={11 / 2}>
          <ThemeProvider theme={theme}>
            <Container
              component="main"
              //  sx={{ ml: 20, width: 600}}
            >
              <CssBaseline />
              <Card sx={{ p: 5 }}>
                <Box
                  component="form"
                  onSubmit={handleSubmit(handleFormSubmit)}
                  noValidate
                >
                  <Typography style={{ color: "maroon" }}>
                    <h3 style={{ color: "orangered", fontSize: 22 }}>
                      WE'D LOVE TO HEAR FROM YOU{" "}
                    </h3>
                    <p>
                      Feel free to fill up this form with as much detail as
                      possible and I will get back to you as soon as possible!
                    </p>
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
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
                        value={contactData.firstName}
                        onChange={(e) => handleChange(e, "firstName")}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                        value={contactData.lastName}
                        onChange={(e) => handleChange(e, "lastName")}
                      />
                    </Grid>
                  </Grid>
                  <Grid>
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
                      value={contactData.email}
                      onChange={(e) => handleChange(e, "email")}
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="mobile"
                      label="Mobile"
                      type="mobile"
                      id="mobile"
                      autoComplete="current-mobile"
                      {...register("mobile")}
                      error={errors.mobile ? true : false}
                      helperText={errors.mobile?.message}
                      value={contactData.mobile}
                      onChange={(e) => handleChange(e, "mobile")}
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="subject"
                      label="Subject"
                      type="subject"
                      id="subject"
                      autoComplete="current-subject"
                      {...register("subject")}
                      error={errors.subject ? true : false}
                      helperText={errors.subject?.message}
                      value={contactData.subject}
                      onChange={(e) => handleChange(e, "subject")}
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="info"
                      multiline
                      rows={4}
                      label="Message"
                      type="info"
                      id="info"
                      autoComplete="current-info"
                      {...register("info")}
                      error={errors.info ? true : false}
                      helperText={errors.info?.message}
                      value={contactData.info}
                      onChange={(e) => handleChange(e, "info")}
                    />
                  </Grid>

                  <Button
                    type="submit"
                    // color="error"
                    variant="text"
                    sx={{ mt: 3, mb: 0, fontSize: 18 }}
                  >
                    Submit
                  </Button>
                </Box>
              </Card>
            </Container>
          </ThemeProvider>
        </Grid>

        <Grid item xs={12} md={5} sx={{ ml: 0, mt: 15, p: 2 }}>
          <Card sx={{ width: 500, backgroundColor: "#D8F9FF" }}>
            <Grid sx={{ fontSize: 22 }}>
              <h3>OPENING HOURS</h3>
              <p style={{ color: "maroon" }}>Mon - Fri: 7am - 10pm</p>
              <p style={{ color: "maroon" }}>Saturday: 8am - 10pm</p>
              <p style={{ color: "maroon" }}>​Sunday: 8am - 11pm</p>
            </Grid>
          </Card>
          <Card sx={{ mt: 5, width: 500, backgroundColor: "#FFF5CC" }}>
            <Grid sx={{ fontSize: 20 }}>
              <h3>OUR ADDRESS</h3>
              <p style={{ color: "maroon" }}>500 Terry Francine Street</p>
              <p style={{ color: "maroon" }}>San Francisco, CA 94158</p>
              <p style={{ color: "maroon" }}>Tel: 123-456-7890</p>
            </Grid>
          </Card>
        </Grid>
        <Grid sx={{ marginTop: 10 }}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
