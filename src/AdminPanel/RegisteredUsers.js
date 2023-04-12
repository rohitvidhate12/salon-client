import MuiDatatable from "mui-datatables";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UserService from "../Services/userServices";
const RegisteredUsers = () => {
  const defaultUser = () => ({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    role: "admin",
  });

  const [userList, setUserList] = useState([]);
  const [initialUser, setInitialUser] = useState();
  const [open, setOpen] = useState(false);
  const [operation, setOperation] = useState("edit");

  // const addUser = () => {
  //   setOperation("add");
  //   setInitialUser(defaultUser());
  //   setOpen(true);
  // };

  // const editUser = (user) => {
  //   setOperation("edit");
  //   setInitialUser(user);
  //   setOpen(true);
  // };
  const deleteUser = (id) => {
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
        UserService.deleteUser(id)
          .then((response) => {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            loadUsers();
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

  const loadUsers = async () => {
    const response = await UserService.fetchAllUser();
    if (response?.data) setUserList(response.data?.data);
  };

  useEffect(() => {
    loadUsers();
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
          const user = userList[index];

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
      label: "Action",
      name: "action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = userList[index];
          return (
            <>
              {/* <IconButton color="primary" onClick={() => editUser(user)}>
                <EditIcon />
              </IconButton> */}
              <IconButton color="error" onClick={() => deleteUser(user?._id)}>
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
          title="Registered Users List"
          columns={columns}
          data={userList}
        />
      </Box>
    </>
  );
};

export default RegisteredUsers;
