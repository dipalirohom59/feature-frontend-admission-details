import { Grid, Typography } from "@mui/material";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Login from "../Login";
const contactUs = [
  {
    icon: <MailOutlineIcon style={{ fontSize: "3.5rem", color: "#FD7E14" }} />,
    title: "Email Address",
    value: "shivamdeokar9@gmail.com",
  },
  {
    icon: <AddIcCallIcon style={{ fontSize: "3.5rem", color: "#FD7E14" }} />,
    title: "Phone Number",
    value: "+91 7038162065",
  },
  {
    icon: <LocationOnIcon style={{ fontSize: "3.5rem", color: "#FD7E14" }} />,
    title: "Our Location",
    value:
      "14 opp MSR House 1st Main Road, 3rd Floor of Vinayaka Jweller Opp to Gokula Bus Stop Bengaluru, Karnataka - 560054",
  },
];

const LoginContainer = () => {
  return (
    <Grid container>
      <Grid
        container
        sx={{
          width: { lg: "calc(100% - 200px)", xs: "calc(100% - 20px)" },
          height: {
            lg: "calc(100vh - 20vh)",
            sm: "calc(100vh - 80vh)",
          },
          marginLeft: { lg: "10rem", xs: "0.1rem" },
        }}
      >
        <Grid item lg={6} xs={12}>
          <Grid container>
            <Grid
              item
              lg={12}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: {
                  lg: "flex-start",
                  xs: "flex-start",
                  sm: "flex-start",
                  md: "flex-start",
                },
                alignItems: "center",
                marginTop: { lg: "80px", xs: "10px" },
                marginLeft: { sm: "38px", xs: "10px" },
                height: { lg: "calc(100vh - 90vh)" },
              }}
            >
              <Typography style={{ fontSize: "3rem", fontWeight: 600 }}>
                CONTACT US
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // border: "1px solid black",
              height: {
                lg: "calc(100vh - 80vh)",
                xs: "calc(100vh - 65vh)",
                sm: "calc(100vh - 60vh)",
              },
            }}
          >
            {contactUs.map((item) => (
              <>
                <Grid
                  item
                  lg={1}
                  xs={2}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography>{item.icon}</Typography>
                </Grid>
                <Grid
                  item
                  lg={11}
                  xs={10}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography style={{ fontSize: "1.6rem", color: "#060515" }}>
                    {item.value}
                  </Typography>
                </Grid>
              </>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={6} xs={10}>
          <Login />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginContainer;
