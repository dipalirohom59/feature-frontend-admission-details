import { Grid } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
// import { a } from "react-router-dom";
const Footer = () => {
  const handleCallClick = () => {
    const phoneNumber = "+918805431068"; // Replace with your phone number
    window.open(`tel:${phoneNumber}`);
  };
  return (
    <Grid
      container
      style={{
        height: "calc(100vh - 90vh)",

        // border: "1px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0E0A38",
      }}
    >
      <Grid
        item
        sm={4}
        xs={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="https://wa.me/917038162065" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
        >
          <WhatsAppIcon
            style={{ fontSize: "4.5rem", color: "#25D366", cursor: "pointer" }}
          />
        </a>
      </Grid>
      <Grid
        item
        sm={4}
        xs={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="https://www.instagram.com/s_educaree/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
        >
          <InstagramIcon
            style={{ fontSize: "4.5rem", color: "#C13584", cursor: "pointer" }}
          />
        </a>
      </Grid>
      <Grid
        item
        sm={4}
        xs={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a onClick={handleCallClick} style={{ color: "#fff" }}>
          <CallIcon
            style={{ fontSize: "4.5rem", color: "#fff", cursor: "pointer" }}
          />
        </a>
      </Grid>
    </Grid>
  );
};

export default Footer;
