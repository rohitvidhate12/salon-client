import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import RegistrationForm from "../Components/Login/RegistrationForm";

const EditRegisteredUsers = ({
  open,
  handleDialogClose,
  selectedUserToEdit,
  userList,
}) => {
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Edit User Registration</DialogTitle>
        <DialogContent>
          <RegistrationForm
            open={open}
            handleDialogClose={handleDialogClose}
            selectedUserToEdit={selectedUserToEdit}
            userList={userList}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditRegisteredUsers;
