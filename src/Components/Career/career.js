import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const JobProfileData = [
  {
    position: "HAIR STYLIST",
    discription:
      "Responsible for every aspect of the salon business on a day-to-day basis includi",
  },
  {
    position: "SKIN EXPERT",
    discription:
      "Responsible for every aspect of the salon business on a day-to-day basis includi",
  },
  {
    position: "ASSISTANT SALON..",
    discription:
      "Responsible for every aspect of the salon business on a day-to-day basis includi",
  },
];

const Career = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/apply");
  };
  return (
    <Fragment>
      <Container sx={{ mb: 10 }}>
        <Grid
          container
          component="form"
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
        >
          <Grid item xs={12}>
            <Box sx={{ position: "relative" }}>
              <img
                src="/Images/career.webp"
                style={{ height: "80vh", width: "100%" }}
              />

              <Typography
                sx={{
                  color: "#FFDFD3",
                  position: "absolute",
                  fontSize: 60,
                  top: "90%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "1",
                }}
              >
                CAREER
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mt: 6 }}>
            <h2>Be A Lakmé Salon Expert Now </h2>
            <p>
              Lakmé Salon is looking for experts who are willing to learn and
              explore a career where success meets style.
            </p>
          </Grid>
          <Grid item xs={12} sx={{ margin: "30px 25px 15px 25px" }}>
            <Grid container spacing={8}>
              {JobProfileData.map(({ discription, position }, i) => {
                return (
                  <Grid item xs={12} md={4} key={i}>
                    <Card sx={{ p: 4, backgroundColor: "#FFFCD1" }}>
                      <h3 style={{ color: "	#E80000" }}>{position}</h3>
                      <p style={{ marginTop: "25px" }}>{discription}</p>
                    </Card>
                  </Grid>
                );
              })}{" "}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Career;
