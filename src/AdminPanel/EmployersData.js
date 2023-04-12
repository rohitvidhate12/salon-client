import React from "react";
import MuiDatatable from "mui-datatables";
import EmployeeService from "../Services/employeeServices";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
const EmployersData = () => {
  const defaultUser = () => ({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    position: "",
    experience: "",
  });

  const [employeeList, setEmployeeList] = useState([]);
  const [initialData, setInitialData] = useState();
  const [open, setOpen] = useState(false);
  const [operation, setOperation] = useState("edit");

  // const addEmployee = () => {
  //   setOperation("add");
  //   setInitialData(defaultUser());
  //   setOpen(true);
  // };

  // const editEmployee = (user) => {
  //   setOperation("edit");
  //   setInitialData(user);
  //   setOpen(true);
  // };
  const deleteEmployee = (id) => {
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
        EmployeeService.deleteEmployee(id)
          .then((response) => {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            loadEmployees();
          })
          .catch((err) => {
            console.error(err);
            Swal.fire(
              "Failed to delete!",
              "Failed to delete the user.",
              "error"
            );
          });
      }
    });
  };

  const loadEmployees = async () => {
    const response = await EmployeeService.fetchAllEmployee();
    if (response?.data) setEmployeeList(response.data?.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const columns = [
    {
      label: "ID",
      name: "userId",
    },
    {
      label: "Name",
      name: "name",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = employeeList[index];

          return `${user?.firstName} ${user?.lastName}`;
        },
      },
    },
    {
      label: "Email",
      name: "email",
      options: {
        sort: false,
        filter: false,
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
      label: "Experience",
      name: "experience",
      options: {
        sort: false,
        filter: false,
      },
    },
    {
      label: "Position",
      name: "position",
      options: {
        sort: false,
        filter: false,
      },
    },

    {
      label: "Action",
      name: "action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = employeeList[index];
          return (
            <>
              {/* <IconButton color="primary" onClick={() => editEmployee(user)}>
                <EditIcon />
              </IconButton> */}
              <IconButton
                color="error"
                onClick={() => deleteEmployee(user?._id)}
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
      <Box>
        <MuiDatatable
          title="Employees List"
          columns={columns}
          data={employeeList}
        />
      </Box>
    </>
  );
};

export default EmployersData;
