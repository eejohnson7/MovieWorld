import React, { useState } from "react";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import "./styles.css";

function Login() {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");

    const [errorMessages, setErrorMessages] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState();

    // User Login info
    const database = [
        {
        username: "user1",
        password: "pass1"
        },
        {
        username: "user2",
        password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("clicked");

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
        if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
        } 
        else {
            setIsSubmitted(true);
            console.log("logging in");
        }
        } 
        else {
        // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
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
                    <div className="title">MovieWorld</div>
                    <div>
                        <div className="input-container">
                            <label className="label">Username:</label>
                            <input type="text" name="uname" required onChange={(e) => setUname(e.target.value)}/>
                        </div>
                        <div className="input-container">
                            <label className="label">Password:</label>
                            <input type="password" name="pass" required onChange={(e) => setPass(e.target.value)}/>
                        </div>
                        <br></br>

                        <Grid container
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                            <Button variant="contained" sx={{ backgroundColor: "#26A69A"}} onClick={handleSubmit}>Submit</Button>
                            <br></br>
                            <a style={{ color:"#00796B" }}>New to MovieWorld?</a>
                            <a href="/registration" style={{ color:"#00796B" }}>Register</a>
                        </Grid>
                    </div>
                </Card>
            </Grid>
        </div>
    );
}

export default Login;