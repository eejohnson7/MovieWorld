import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import "./styles.css";

function Registration() {

    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
        setError(true);
        } else {
        setSubmitted(true);
        setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
        <div
            className="success"
            style={{
            display: submitted ? '' : 'none',
            }}>
            <h1>User {name} successfully registered!!</h1>
        </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
        <div
            className="error"
            style={{
            display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
        </div>
        );
    };

    return (
        <div className = "page">
        <Grid container
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Card className="login-form" sx={{ height: 300, width: 400 }}>
                <div className="title">MovieWorld</div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label className="label">Name:</label>
                        <input onChange={handleName} className="input" value={name} type="text" />
    
                        <label className="label">Email:</label>
                        <input onChange={handleEmail} className="input" value={email} type="email" />
    
                        <label className="label">Password:</label>
                        <input onChange={handlePassword} className="input" value={password} type="password" />

                        <Grid container
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                            <Button variant="contained" sx={{ backgroundColor: "#26A69A"}} onClick={handleSubmit}>Submit</Button>
                        </Grid>
                    </form>
                </div>
            </Card>
        </Grid>
    </div>
    );
}

export default Registration;
