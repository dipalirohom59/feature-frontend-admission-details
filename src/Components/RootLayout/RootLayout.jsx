import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard";

const RootLayout = () => {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>

      <Box>
        <Dashboard />
      </Box>
    </Box>
  );
};

export default RootLayout;
