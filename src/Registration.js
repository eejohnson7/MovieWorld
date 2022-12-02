import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import "./styles.css";

function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || email === '' || password === '') {
            alert("Please enter all fields!");
        }
        else {
            //TODO: post to db
            window.location.href = "/movieworld";

            alert(username + " registered! You will now be redirected to sign in.");

        }
    };

    return (
        <div className = "page">
        <Grid container
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Card className="login-form" sx={{ height: 300, width: 400 }}>
                <div className="title">Registration</div>
                <div>
                    <div className="input-container">
                        <label className="label">Username:</label>
                        <input required onChange={(e) => setUsername(e.target.value)} type="text" />
                    </div>
    
                    <div className="input-container">
                        <label className="label">Email:</label>
                        <input required onChange={(e) => setEmail(e.target.value)} type="text" />
                    </div>
    
                    <div className="input-container">
                        <label className="label">Password:</label>
                        <input required onChange={(e) => setPassword(e.target.value)} type="text" />
                    </div>
                    <br></br>

                    <Grid container
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <Button variant="contained" sx={{ backgroundColor: "#26A69A"}} onClick={handleSubmit}>Submit</Button>
                    </Grid>
                </div>
            </Card>
        </Grid>
    </div>
    );
}

export default Registration;
