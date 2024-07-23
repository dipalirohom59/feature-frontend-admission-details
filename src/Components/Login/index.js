import React, { useState } from "react";
import axios from 'axios';

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./login.css";

const Login = () => {
    const initialValues = {
        name: "",
        phone: "",
        score: "",
        course: "",
        address: ""
    };

    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        // Clear error message for the field being changed
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ""
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate mandatory fields
        const { name, score } = inputs;
        let errors = {};
        let formIsValid = true;

        if (!name) {
            errors.name = "Name is required";
            formIsValid = false;
        }

        if (!score) {
            errors.score = "Neet Score is required";
            formIsValid = false;
        }

        if (!formIsValid) {
            setErrors(errors);
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
                setInputs(initialValues); // Reset form fields
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
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            value={inputs.name}
                            placeholder="Name"
                            className="form-control mb-3"
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                        <input
                            onChange={handleChange}
                            type="text"
                            name="score"
                            value={inputs.score}
                            placeholder="Neet Score"
                            className="form-control mb-3"
                        />
                        {errors.score && <p className="error-message">{errors.score}</p>}
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
                        <FormControl fullWidth variant="outlined" margin="normal" style={{ backgroundColor: "#fff" }}>
                            <InputLabel id="course-label" style={{ fontSize: "1.4rem" }}>Course</InputLabel>
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
                            style={{ marginTop: "10px" }}
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
