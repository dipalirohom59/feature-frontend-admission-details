// import {
//   Box,
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { Field, Form, Formik } from "formik";
// import React from "react";
// import "./login.css";
// import * as Yup from "yup";
// import axios from 'axios';  // Import axios

// const LoginSchema = Yup.object().shape({
//   name: Yup.string().required("Please enter name").min(1, "Name too short"),
//   phone: Yup.string().required("Please enter phone number"),
//   score: Yup.number().required("Please enter NEET score"),
//   course: Yup.string().required("Please select a course"),
// });

// const Login = () => {
//   const initialValues = {
//     name: "",
//     phone: "",
//     score: "",
//     course: "",
//     state: "",
//     category: "",
//   };

//   const handleSubmit = async (values, formikHelpers) => {
//     try {
//       // Post data to the API
//       const response = await axios.post('http://127.0.0.1:8000/secure_things/v1/insert_data', values);
//       console.log("Response:", response.data);
//       // Handle successful response
//       formikHelpers.resetForm();
//     } catch (error) {
//       console.error("There was an error submitting the form!", error);
//       // Handle error response
//     }
//   };

//   return (
//     <div className="login">
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}  // Use the handleSubmit function
//         validationSchema={LoginSchema}
//       >
//         {({ errors, isValid, touched, dirty }) => (
//           <Form>
//             <Typography className="text" sx={{
//               "&.MuiTypography-root":{
//                 fontSize:{lg:"2rem",md:"2rem",sm:"1.5rem",xs:"1.5rem"},
//                 fontWeight:600
//             }}}>
//               MEDICAL ADMISSION OPEN 2024-2025 
//             </Typography>
//             <Box height={14} />

//             <Field
//               as={TextField}
//               variant="outlined"
//               label="Your Name"
//               name="name"
//               type="text"
//               error={errors.name && touched.name}
//               helperText={errors.name && touched.name && errors.name}
//             />
//             <Box height={14} />
//             <Field
//               as={TextField}
//               variant="outlined"
//               label="Your Phone Number"
//               name="phone"
//               type="tel"
//               error={errors.phone && touched.phone}
//               helperText={errors.phone && touched.phone && errors.phone}
//             />
//             <Box height={14} />
//             <Field
//               as={TextField}
//               variant="outlined"
//               label="NEET SCORE"
//               name="score"
//               type="number"
//               error={errors.score && touched.score}
//               helperText={errors.score && touched.score && errors.score}
//             />
//             <Box height={14} />
//             {/* <FormControl variant="outlined" fullWidth>
//               <InputLabel id="course-label">Select Course</InputLabel>
//               <Field
//                 as={Select}
//                 labelId="course-label"
//                 name="course"
//                 label="Select Course"
//                 error={errors.course && touched.course}
//                 helperText={errors.course && touched.course && errors.course}
//               >
//                 <MenuItem value="MBBS">MBBS</MenuItem>
//                 <MenuItem value="BAMS">BAMS</MenuItem>
//                 <MenuItem value="BHMS">BHMS</MenuItem>
//                 <MenuItem value="BDS">BDS</MenuItem>
//               </Field>
//             </FormControl> */}
//             <Box height={14} />

//             <Box height={14} />

//             <Button
//               type="submit"
//               variant="contained"
//               disabled={!dirty || !isValid}
//             >
//               Register
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Login;


// import { Fragment, useState } from "react";





// const Url='http://127.0.0.1:8000/secure_things/v1/insert_data'


//  const Login =()=>{
//     const initialValues ={
//     name:"",
//     score:"",
//     phone:""

//     }
// const nextPage =()=>{
// }
//     const [inputs,setInputs]=useState(initialValues)
//     const [isLoggedIn, setIsLoggedIn] = useState(false); 


//     const handleChange=(e)=>{
//         setInputs({
//             ...inputs, //spreading input object and not the direct inputs
//             [e.target.name]:e.target.value
//         } )

//     }

//     const onSubmitForm= (e)=>{
//         setIsLoggedIn(true)
//         e.preventDefault()
//         // navigate("/shop");
//         if (inputs.name==="" || inputs.score===""){
//             alert("All fields are mandatory")
//         }
//         else{
//              try{
//                     fetch(Url,{
//                         method:"POST",
//                         headers:{ "Content-Type":"application/json" },
//                         body: JSON.stringify(inputs)
//                     })
//                     .then((res)=>{
//                       if (res.ok) {
//                         // If data was submitted successfully, send email
//                         sendEmail(inputs);
//                     } else {
//                         alert("Failed to submit data");
//                     };
//                         console.log(res)

//                     })

//                 }catch(error){
//                     // toast.error("User not Found", {
//                     //     position: toast.POSITION.TOP_LEFT,
//                     //   });
//                     alert("please try again")
//                 console.log(error.message+"please try again")
//             }
            
//         }
       
//     }
//     const sendEmail = (data) => {
//       const emailData = {
//           Host: "smtp.your-email-provider.com", // Replace with your SMTP host
//           Username: "your-email@example.com", // Replace with your email
//           Password: "your-email-password", // Replace with your email password
//           To: "your-email@example.com", // Replace with your email to receive the form data
//           From: "your-email@example.com",
//           Subject: "New Form Submission",
//           Body: `Name: ${data.name}<br>Score: ${data.score}<br>Phone: ${data.phone}`
//       };

//       window.Email.send(emailData)
//           .then((message) => alert("Mail sent successfully"))
//           .catch((error) => alert("Error sending mail: " + error));
//   };


//     return(
//         <div>

//            <div className="container">
//             <div className="login-form">
//         {/* <h1 className="text-center  my-3"></h1> */}
//         <form>
//             <input 
//             onChange={(e) => { handleChange(e) }} 
//             type="name"
//              name="name"
//               value={inputs.name} 
//               placeholder="name"
//               className="form-control mb-3" 
//               />
//             <input 
//             onChange={(e) => { handleChange(e) }} 
//             type="score" name="score"
//              value={inputs.score} 
//              placeholder="score" 
//              className="form-control mb-3"
//              />
//               <input 
//             onChange={(e) => { handleChange(e) }} 
//             type="phone" name="phone"
//              value={inputs.phone} 
//              placeholder="phone" 
//              className="form-control mb-3"
//              />
//             <button 
//             onClick={(e) => { onSubmitForm(e) }} 
//             className="btn btn-success btn-block" >
//                 Submit 
//                 </button>

//          {/* {isLoggedIn && <ShopNowCont/>} */}
//                 <div> Not having account. here</div>
//            </form>
//            </div>
//            </div>
//            </div>
        

//     );
// };

// export default Login;


import React, { useState } from "react";
// import emailjs from "emailjs-com";
import axios from 'axios';

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./login.css";


const Login = () => {
    const initialValues = {
        name: "",    
        phone: "",
        score: "",
        course:"",
        address:"",
       
    };

    const [inputs, setInputs] = useState(initialValues);

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputs.name === "" || inputs.score === "") {
            alert("All fields are mandatory");
            return;
        }
        try {
            const response = await fetch('http://localhost:8000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs)
            });
            
            if (response.ok) {
                alert('Form submitted successfully!');
                // Optionally, you can reset the form or redirect the user here
            } else {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again.');
        }
    };

   

    return (
        <div>
            <div className="container">
                <div className="login-form">
                    <form onSubmit={handleSubmit} >
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            value={inputs.name}
                            placeholder="Name"
                            className="form-control mb-3"
                        />
                        <input
                            onChange={handleChange}
                            type="text"
                            name="score"
                            value={inputs.score}
                            placeholder="Neet Score"
                            className="form-control mb-3"
                        />
                        <input
                            onChange={handleChange}
                            type="text"
                            name="phone"
                            value={inputs.phone}
                            placeholder="Phone"
                            className="form-control mb-3"
                        />
                         <input
                            onChange={handleChange}
                            type="text"
                            name="address"
                            value={inputs.address}
                            placeholder="Address"
                            className="form-control mb-3"
                        />
                          <FormControl fullWidth variant="outlined" margin="normal" style={{backgroundColor:"#fff"}}>
                            <InputLabel id="course-label" style={{fontSize:"1.4rem"}}>Course</InputLabel>
                            <Select
                                labelId="course-label"
                                name="course"
                                value={inputs.course}
                                onChange={handleChange}
                                label="Course"
                            >
                                <MenuItem value="MBBS">MBBS</MenuItem>
                                <MenuItem value="BAMS">BAMS</MenuItem>
                                <MenuItem value="BDS">BDS</MenuItem>
                            </Select>
                        </FormControl> 
                        
                        <button
                            type="submit"
                            className="btn btn-success btn-block"
                            style={{marginTop:"10px"}}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
