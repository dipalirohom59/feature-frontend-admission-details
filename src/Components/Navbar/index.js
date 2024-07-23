import {
  Box,
  Grid,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import logoInfo from "../../assest/Images/seducare.png";
const useStyle = makeStyles(() => ({
  root: {
    height: "calc(100vh - 89vh)",
    width: "100%",
  },
  innerItem: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    // border:"1px solid yellow",
  },
  outerItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    // border: "1px solid red",
  },
}));
const menuItems = ["Home", "BAMS Colleges", "Contact"];

const Navbar = () => {
  const classes = useStyle();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Grid container>
      <Grid container className={classes.root}>
        <Grid
          item
          lg={3}
          md={3}
          sm={6}
          xs={6}
          sx={{
            display: "flex",
            justifyContent: {lg:"flex-end",sm:"flex-start",xs:"flex-start"},
            alignItems: "center",
          }}
        >
          <img
            src={logoInfo}
            alt="logo"
            style={{ height: "100%", width: "53%" }}
          />
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          // sm={1}
          // xs={1}
          sx={{
            display: { lg: "flex", sm: "none", xs: "none" },
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' ,lg:"flex",xl:"flex"},
              }}
            > */}
          {menuItems.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                color="black"
                fontSize="1.6rem"
                fontWeight={600}
              >
                {page}
              </Typography>
            </MenuItem>
          ))}
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={6} sx={{
           display: "flex",
           justifyContent:{lg: "flex-start",sm:"flex-end",xs:"flex-end"},
           alignItems: "center",
        }}>
          <TextField
            variant="outlined"
            value="+91 7038162065"
            sx={{
              "& .MuiOutlinedInput-input": {
                backgroundColor: "#0E0A38",
                borderRadius: "0.5rem",
                fontSize: "1.6rem",
                border:"1px solid #0E0A38",
                color:"#fff"
              },
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
