import React from "react";
import AppointmentService from "../Services/appointmentServices";
import { useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { Box } from "@mui/material";
import MuiDatatable from "mui-datatables";
import EditAppointment from "./EditAppointment";
const AppointmentData = () => {
  const defaultData = () => ({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    services: [],
    slot: "",
    date: Date,
  });

  const [appointmentList, setAppoimtmentList] = useState([]);
  const [initialAppointments, setInitialAppointments] = useState();
  const [open, setOpen] = useState(false);
  const [operation, setOperation] = useState("edit");
  const [selectedAppointment, setSelectedAppointment] = useState("");

  const handleDialogClose = () => setOpen(false);

  // const addAppointment = () => {
  //   setOperation("add");
  //   setInitialUser(defaultUser());
  //   setOpen(true);
  // };

  const editAppointment = (user) => {
    setOperation("edit");
    // setInitialAppointments(user);
    setOpen(true);
  };
  const deleteAppointments = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        AppointmentService.deleteAppointment(id)
          .then((response) => {
            Swal.fire("Deleted!", "Appointment has been deleted.", "success");
            loadAppointments();
          })
          .catch((err) => {
            console.error(err);
            Swal.fire(
              "Failed to delete!",
              "Failed to delete the Appointment.",
              "error"
            );
          });
      }
    });
  };

  const loadAppointments = async () => {
    const response = await AppointmentService.fetchAllAppointment();
    if (response.data) setAppoimtmentList(response?.data?.data);
  };

  React.useEffect(() => {
    loadAppointments();
  }, []);

  const columns = [
    {
      label: "ID",
      name: "_id",
    },
    {
      label: "Name",
      name: "name",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = appointmentList[index];

          return `${user?.firstName} ${user?.lastName}`;
        },
      },
    },

    {
      label: "Mobile",
      name: "mobile",
      options: {
        sort: false,
        filter: false,
      },
    },
    {
      label: "Date",
      name: "date",
      options: {
        filter: true,
        sort: false,
        customBodyRenderLite: (index) => {
          const appDate = appointmentList[index];
          return new Date(appDate?.date)?.toLocaleDateString();
        },
      },
    },
    {
      label: "Slot",
      name: "slot",
      options: {
        sort: false,
        filter: true,
      },
    },
    {
      label: "Action",
      name: "action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = appointmentList[index];
          return (
            <>
              <IconButton color="primary" onClick={() => editAppointment(user)}>
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => deleteAppointments(user?._id)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];
  return (
    <>
      <EditAppointment
        appointmentList={appointmentList}
        open={open}
        operation={operation}
        handleDialogClose={handleDialogClose}
        selectedAppointment={selectedAppointment}
      />
      <Box>
        <MuiDatatable
          title="Appointments List"
          columns={columns}
          data={appointmentList}
          options={{
            onRowClick: (roWData, { rowIndex, dataIndex }) => {
              setSelectedAppointment(roWData[0]);
            },
          }}
        />
      </Box>
    </>
  );
};

export default AppointmentData;
