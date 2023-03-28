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
import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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

const EnquiryForm = () => {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  console.log("UserData :", userData);
  return (
    <section>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: 10,
          ml: "16%",
          mr: "16%",
          backgroundImage:
            "url('https://images.pexels.com/photos/7130538/pexels-photo-7130538.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1
          style={{
            fontFamily: "'BadScript-Regular', sans-serif",

            fontSize: "50px",
          }}
        >
          Contact Us
        </h1>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Grid container>
            <Grid md={5} sx={{ fontFamily: "'BadScript-Regular', sans-serif" }}>
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
            <Grid container md={7} sx={{ mt: 1 }}>
              <Grid item md={6}>
                <TextField
                  id="firstName"
                  label="First Name"
                  type="text"
                  variant="standard"
                  {...register("firstName")}
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName?.message}
                  onChange={(event) => handleChange(event, "firstName")}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="lastName"
                  label="Last Name"
                  type="text"
                  variant="standard"
                  {...register("lastName")}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName?.message}
                  onChange={(event) => handleChange(event, "lastName")}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="standard"
                  {...register("email")}
                  error={errors.email ? true : false}
                  helperText={errors.email?.message}
                  onChange={(event) => handleChange(event, "email")}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="mobile"
                  label="Mobile"
                  type="mobile"
                  variant="standard"
                  {...register("mobile")}
                  error={errors.mobile ? true : false}
                  helperText={errors.mobile?.message}
                  onChange={(event) => handleChange(event, "mobile")}
                />
              </Grid>

              <Grid item md={12}>
                <FormControl sx={{ m: 1, width: 300 }}>
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
              <Grid item md={6}>
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  variant="standard"
                  onChange={(event) => handleChange(event, "date")}
                />
              </Grid>
              <Grid md={6}>
                <FormControl sx={{ m: 1, width: 200 }}>
                  <InputLabel htmlFor="slot">Select Slot</InputLabel>
                  <Select
                    native
                    defaultValue=""
                    id="slot"
                    label="Slot"
                    {...register("slot")}
                    onChange={(event) => handleChange(event, "slot")}
                  >
                    <option aria-label="None" value="" />
                    <optgroup label="Morning">
                      <option value={1}>8AM-10AM</option>
                      <option value={2}>10AM-12PM</option>
                      <option value={3}>12PM-2PM</option>
                    </optgroup>
                    <optgroup label="Evening">
                      <option value={4}>4PM-6PM</option>
                      <option value={5}>6PM-8PM</option>
                      <option value={5}>8PM-10PM</option>
                    </optgroup>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sx={{ ml: "40%" }}>
                <Button variant="outlined" color="error" type="submit">
                  Book Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </section>
  );
};

export default EnquiryForm;
