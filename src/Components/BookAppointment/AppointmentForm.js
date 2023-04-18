import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AppointmentService from "../../Services/appointmentServices";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../Toast/Toast";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Facial Treatments",
  "Hair Care",
  "Pre-Bridal Grooming",
  "Manicures & Pedicures",
  "Massage",
  "Spa",
];
const userSchema = yup.object({
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

  mobile: yup
    .string()
    .matches(/^[\d+]{10}$/, "Please enter valid Mobile Number!"),
  email: yup.string().email().required(),
  slot: yup.string().required(),
});

const AppointmentForm = ({
  operation,
  appointmentList,
  handleDialogClose,
  selectedAppointment,
  isDialog = false,
}) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    services: [],
    date: "",
    slot: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: userData,
    resolver: yupResolver(userSchema),
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (appointmentList?.length && selectedAppointment) {
      const selectedUser = appointmentList?.find(
        (user) => user._id === selectedAppointment
      );
      setUserData(selectedUser);
    }
  }, [selectedAppointment, appointmentList]);

  const handleChange = (event, inputName) => {
    const {
      target: { value },
    } = event;

    if (inputName === "services") {
      const services = typeof value === "string" ? value.split(",") : value;
      return setUserData({ ...userData, [inputName]: services });
    }
    setUserData({ ...userData, [inputName]: value });
  };

  const handleFormSubmit = () => {
    if ((operation = "edit")) {
      AppointmentService.updateAppointment(
        appointmentList?._id,
        appointmentList
      )
        .then((response) => {
          const message = response?.data?.message || "User Created";
          successToast(message);
          handleDialogClose();
        })
        .catch((err) => {
          console.error(err);
          const message = err?.response?.data?.message || "Failed to create";
          errorToast(message);
        });
    } else {
      AppointmentService.createAppointment(userData)
        .then((response) => {
          const message = response?.data?.message || "Appointment Created";
        })
        .catch((err) => {
          console.error(err);
          const message =
            err?.response?.data?.message || "Failed to create Appointment";
        });
    }

    navigate("/services");
  };
  console.log("UserData :", userData);
  return (
    <section>
      <Box
        sx={{
          border: "1px solid black",
          boxSizing: "border-box",
          borderRadius: 10,
          marginTop: "2%",
          minHeight: "80vh",
          margin: "2% 16% 0 16% ",

          backgroundImage:
            "url('https://images.pexels.com/photos/7130538/pexels-photo-7130538.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1
          style={
            isDialog
              ? {
                  fontFamily: "'BadScript-Regular', sans-serif",
                  fontSize: "25px",
                  paddingLeft: "20%",
                  marginTop: "2%",
                }
              : {
                  fontFamily: "'BadScript-Regular', sans-serif",

                  fontSize: { xs: "30px", md: "40px" },
                  marginTop: "10px",
                }
          }
        >
          Book Appointment
        </h1>
        <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
          <Grid container>
            {!isDialog && (
              <Grid
                md={5}
                sx={{
                  fontFamily: "'BadScript-Regular', sans-serif",
                  display: { xs: "none", md: "block" },
                }}
              >
                <Grid item sx={{ fontSize: 24 }}>
                  <h3 style={{ color: "palegreen" }}>OPENING HOURS</h3>
                  <p style={{ color: "red" }}>Mon - Fri: 7am - 10pm</p>
                  <p style={{ color: "red" }}>Saturday: 8am - 10pm</p>
                  <p style={{ color: "red" }}>​Sunday: 8am - 11pm</p>
                </Grid>
                <Grid item sx={{ fontSize: 20 }}>
                  <h3 style={{ color: "magenta" }}>OUR ADDRESS</h3>
                  <p>500 Terry Francine Street</p>
                  <p>San Francisco, CA 94158</p>
                  <p>Tel: 123-456-7890</p>
                </Grid>
              </Grid>
            )}
            <Grid
              container
              md={7}
              sx={isDialog ? { paddingLeft: "20%" } : { mt: 1 }}
              xs={12}
            >
              <Grid item xs={12} md={isDialog ? 12 : 6}>
                <TextField
                  id="firstName"
                  label="First Name"
                  type="text"
                  variant="standard"
                  {...register("firstName")}
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName?.message}
                  onChange={(event) => handleChange(event, "firstName")}
                  value={userData?.firstName || ""}
                />
              </Grid>
              <Grid item xs={12} md={isDialog ? 12 : 6}>
                <TextField
                  id="lastName"
                  label="Last Name"
                  type="text"
                  variant="standard"
                  {...register("lastName")}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName?.message}
                  onChange={(event) => handleChange(event, "lastName")}
                  value={userData?.lastName || ""}
                />
              </Grid>
              <Grid item xs={12} md={isDialog ? 12 : 6}>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="standard"
                  {...register("email")}
                  error={errors.email ? true : false}
                  helperText={errors.email?.message}
                  onChange={(event) => handleChange(event, "email")}
                  value={userData?.email || ""}
                />
              </Grid>
              <Grid item xs={12} md={isDialog ? 12 : 6}>
                <TextField
                  id="mobile"
                  label="Mobile"
                  type="mobile"
                  variant="standard"
                  {...register("mobile")}
                  error={errors.mobile ? true : false}
                  helperText={errors.mobile?.message}
                  onChange={(event) => handleChange(event, "mobile")}
                  value={userData?.mobile || ""}
                />
              </Grid>

              <Grid item md={12}>
                <FormControl
                  sx={isDialog ? { width: 200 } : { m: 1, width: 300 }}
                >
                  <InputLabel id="services">Services</InputLabel>
                  <Select
                    labelId="services"
                    id="services"
                    multiple
                    value={userData.services}
                    onChange={(event) => handleChange(event, "services")}
                    input={<OutlinedInput label="Service" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          checked={userData.services.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={isDialog ? 12 : 6}>
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  variant="standard"
                  onChange={(event) => handleChange(event, "date")}
                  value={userData?.date}
                />
              </Grid>
              <Grid xs={12} md={isDialog ? 12 : 6}>
                <FormControl sx={{ m: 1, width: 200 }}>
                  <InputLabel htmlFor="slot">Select Slot</InputLabel>
                  <Select
                    native
                    defaultValue=""
                    value={userData?.slot}
                    id="slot"
                    label="Slot"
                    {...register("slot")}
                    onChange={(event) => handleChange(event, "slot")}
                  >
                    <option aria-label="None" value="" />
                    <optgroup label="Morning">
                      <option value={"8AM-10AM"}>8AM-10AM</option>
                      <option value={"10AM-12PM"}>10AM-12PM</option>
                      <option value={"12PM-2PM"}>12PM-2PM</option>
                    </optgroup>
                    <optgroup label="Evening">
                      <option value={"4PM-6PM"}>4PM-6PM</option>
                      <option value={"6PM-8PM"}>6PM-8PM</option>
                      <option value={"8PM-10PM"}>8PM-10PM</option>
                    </optgroup>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sx={{ ml: "40%" }}>
                <Button variant="outlined" color="error" type="submit">
                  {(operation = "edit" ? "Edit " : "Book")}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      )
    </section>
  );
};

export default AppointmentForm;
