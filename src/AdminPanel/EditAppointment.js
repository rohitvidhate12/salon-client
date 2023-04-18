import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import AppointmentForm from "../Components/BookAppointment/AppointmentForm";
const EditAppointment = ({
  open,
  operation,
  appointmentList,
  handleDialogClose,
  selectedAppointment,
}) => {
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Edit Appointment</DialogTitle>
        <DialogContent>
          <AppointmentForm
            handleDialogClose={handleDialogClose}
            operation={operation}
            appointmentList={appointmentList}
            selectedAppointment={selectedAppointment}
            isDialog={true}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditAppointment;
