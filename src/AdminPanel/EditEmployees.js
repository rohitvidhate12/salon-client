import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import JobForm from "../Components/Career/JobForm";
const EditEmployee = ({
  open,
  handleDialogClose,
  selectedEmployee,
  employeeList,
  operation,
}) => {
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Employee</DialogTitle>
        <DialogContent>
          <JobForm
            open={open}
            handleDialogClose={handleDialogClose}
            selectedEmployee={selectedEmployee}
            employeeList={employeeList}
            operation={operation}
            isDialog={true}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditEmployee;
