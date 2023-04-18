import MuiDatatable from "mui-datatables";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UserService from "../Services/userServices";
import EnquiryService from "../Services/enquiryServices";
const EnquiryDetails = () => {
  const defaultEnquiry = () => ({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [enquiries, setEnquiries] = useState([]);
  const [initialEnquiry, setInitialEnquiry] = useState();
  const [open, setOpen] = useState(false);
  const [operation, setOperation] = useState("edit");

  // const addEnquiry = () => {
  //   setOperation("add");
  //   setInitialEnquiry(defaultEnquiry());
  //   setOpen(true);
  // };

  // const editEnquiry = (user) => {
  //   setOperation("edit");
  //   setInitialEnquiry(user);
  //   setOpen(true);
  // };
  const deleteEnquiry = (id) => {
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
        EnquiryService.deleteEnquiry(id)
          .then((response) => {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            loadEnquiries();
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

  const loadEnquiries = async () => {
    const response = await EnquiryService.fetchAllEnquiry();
    if (response?.data) setEnquiries(response.data?.data);
  };

  useEffect(() => {
    loadEnquiries();
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
          const user = enquiries[index];

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
      label: "Subject",
      name: "subject",
      options: {
        sort: false,
        filter: false,
      },
    },
    {
      label: "Message",
      name: "info",
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
          const user = enquiries[index];
          return (
            <>
              {/* <IconButton color="primary" onClick={() => editEnquiry(user)}>
                <EditIcon />
              </IconButton> */}
              <IconButton
                color="error"
                onClick={() => deleteEnquiry(user?._id)}
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
          title="Registered Users List"
          columns={columns}
          data={enquiries}
        />
      </Box>
    </>
  );
};

export default EnquiryDetails;
