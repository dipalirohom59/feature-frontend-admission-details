import { Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import studentAdmission from "../../assest/Images/Indian-Market-Blog.jpg"
import { makeStyles } from '@mui/styles'
import "./admissioninfo.css"


const useStyle = makeStyles((theme)=>({
  root:{
    position: 'relative', // Ensure the container is positioned relative to make absolute positioning of pseudo-elements work
    textAlign: 'center',
    // border:"1px solid green",

    // height:"calc(100vh - 35vh)"
  },
  '@media only screen and (max-width: 767px)': {
    root: {
    //  height:"calc(100vh - 50vh) !important",
    //  border:"10px solid red"
    },
  },
  '@media (min-width: 320px) and (max-width: 630px)': {
    root: {
      // height:"calc(100vh - 40vh)"

    }
},
   container: {
    position: 'relative', // Ensure the container is positioned relative to make absolute positioning of pseudo-elements work
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#262626', 
      zIndex: -1, 
    },
  },

  admissionText: {
    position: 'absolute',
    // top: '30%',
    // left: '50%',
    transform: 'translate(-50%, -50%)', 
    color: 'white',
    fontSize: '6rem',
    fontWeight: 'bold',
    // padding: '0 10%',
},
'@media only screen and (max-width: 767px)': {
  admissionText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', 
      fontSize: '2.5rem !important',
    
    }
},

'@media (min-width: 320px) and (max-width: 630px)': {
    admissionText: {
      top: '50%',
      fontSize: '3.5rem',
    },
  },
    '@media (min-width: 768px) and (max-width: 1200px)': {
    admissionText: {
      position: 'absolute',
      top: '30% !important',
      left: '0% !important',
      transform: 'translate(-50%, -50%)', 
      fontSize: '2.5rem !important',
      padding: '0 30% !important',
    }
},


imgInfo:{
  height:"100%",
  width:"97vw",
  opacity:"0.3",
  '@media only screen and (max-width: 767px)': {
    imgInfo: {
      height:"100%  !important",
      width:"95vw !important",
    }
},
'@media (min-width: 320px) and (max-width: 630px)': {
    imgInfo: {
      height:"100% !important",
      width:"95vw !important",
    }
},
},
}))

const AdmissionInfo = () => {
  const classes = useStyle();

  return (
   
  
  <Grid container className={classes.root}>
    <Grid item lg={12}  md={12} sm={12} xs={12} className={classes.container}>
       <img src={studentAdmission} alt="svg" style={{height:"100%",width:"97vw",opacity:"0.3"}}/>
       <Grid className={classes.admissionText}>
       Admission Guidance for Ayurvedic AY 2024 - 25
        </Grid>
    </Grid>
  </Grid>
  )
}

export default AdmissionInfo