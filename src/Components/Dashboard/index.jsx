import { Grid } from "@mui/material";
import React from "react";
import AdmissionInfo from "../AdmissionInfo";
import LoginContainer from "../Login/LoginContainer";
import Footer from "../Footer/Footer";
import ErrorBoundary from "../../ErrorBoundary/ErrorFallback";

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <AdmissionInfo />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <LoginContainer />
      </Grid>
      <Grid item sm={12} xs={12}>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
