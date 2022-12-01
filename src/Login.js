import React, { useState } from "react";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import "./styles.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState(1);

    const handleSubmit = async(event) => {
        event.preventDefault();

        //TODO: get user from db given username
        const userData = {
            "id": 1,
            "username": "user1",
            "password": "pass1"
        }

        if (userData) {
            if (userData.password !== password) {
                alert("INVALID PASSWORD");
            } 
            else {
                setId(userData.id);
                window.location.href = '/user-profile/' + id.toString();
            }
        } 
        else {
            alert("USER NOT FOUND");
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
                            <input type="text" required onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="input-container">
                            <label className="label">Password:</label>
                            <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
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