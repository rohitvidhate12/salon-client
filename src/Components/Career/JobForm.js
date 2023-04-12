import { Box, Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../Services/employeeServices";

const EmployeeSchema = yup.object({
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
  position: yup.string().required(),
  startDate: yup.string().required(),
});

const JobForm = () => {
  const navigate = useNavigate();
  const [employeeDetails, setEmployeeDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    position: "",
    experience: "",
    file: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: employeeDetails,
    resolver: yupResolver(EmployeeSchema),
  });

  const handleChange = (e, name) => {
    console.log({ e, name });
    const { value } = e.target;
    if (
      name === "file" &&
      Array.isArray(e.target.files) &&
      e.target.files.length
    ) {
      setEmployeeDetails({ ...employeeDetails, file: e.target.files[0] });
      return;
    }
    setEmployeeDetails({ ...employeeDetails, [name]: value });
  };

  const handleFormSubmit = (e) => {
    EmployeeService.createEmployee(employeeDetails)
      .then((response) => {
        const message = response?.data?.message || "Appointment Created";
      })
      .catch((err) => {
        console.error({ err });
        const message =
          err?.response?.data?.message || "Failed to create Appointment";
      });

    navigate("/career");
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container xs={12}>
          <Grid item xs={12} md={5 / 2}></Grid>
          <Grid
            container
            xs={12}
            md={7}
            spacing={4}
            sx={{ marginTop: 10, border: "1px solid black", padding: 3 }}
          >
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                type="text"
                variant="outlined"
                {...register("firstName")}
                error={errors.firstName ? true : false}
                helperText={errors.firstName?.message}
                onChange={(event) => handleChange(event, "firstName")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                type="text"
                variant="outlined"
                {...register("lastName")}
                error={errors.lastName ? true : false}
                helperText={errors.lastName?.message}
                onChange={(event) => handleChange(event, "lastName")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="text"
                variant="outlined"
                {...register("email")}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
                onChange={(event) => handleChange(event, "email")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="mobile"
                name="mobile"
                label="Mobile"
                type="number"
                variant="outlined"
                {...register("mobile")}
                error={errors.mobile ? true : false}
                helperText={errors.mobile?.message}
                onChange={(event) => handleChange(event, "mobile")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="position"
                name="position"
                label=" Applied Position "
                type="text"
                variant="outlined"
                {...register("position")}
                error={errors.position ? true : false}
                helperText={errors.position?.message}
                onChange={(event) => handleChange(event, "position")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="experience"
                name="experience"
                label=" Experience (In Years) "
                type="number"
                variant="outlined"
                {...register("experience")}
                error={errors.experience ? true : false}
                helperText={errors.experience?.message}
                onChange={(event) => handleChange(event, "experience")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="startDate"
                name="startDate"
                label="Earliest possible Start Date "
                type="date"
                variant="outlined"
                {...register("startDate")}
                error={errors.startDate ? true : false}
                helperText={errors.startDate?.message}
                onChange={(event) => handleChange(event, "startDate")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="file"
                name="file"
                label=" Upload Resume"
                type="file"
                variant="outlined"
                {...register("file")}
                error={errors.file ? true : false}
                helperText={errors.file?.message}
                onChange={(event) => handleChange(event, "file")}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" onClick={handleFormSubmit}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default JobForm;
