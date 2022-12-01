import React, { useState } from "react";

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import './background.css';

function UserProfile () {
    //const [username, setUsername] = useState("");
    //const [email, setEmail] = useState("");
    //const [favMovies, setFavMovies] = useState([]);

    const username = "user1";
    const email = "user1@gmail.com";
    const favMovies = ["movie1", "movie2", "movie3", "movie4", "movie5"];

    const handleClick = () => {
        window.location.href = "/movies";
    }

    return(
        <div className="background">
            <Grid container spacing={2}>
                <Grid item xs={15}>
                    <h1 style={{ color: 'white', paddingLeft: '20px'}}>Welcome to MovieWorld {username}!</h1>
                </Grid>

                <Grid container 
                    spacing={2} 
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Grid item>
                        <Card sx={{ height: 200, width: 400 }}>
                            <h1 style={{ color: '#00796B', paddingLeft: '25px' }}>Your Profile Information</h1>
                            <h2 style={{ color: '#26A69A', paddingLeft: '100px' }}>username: {username}</h2>
                            <h2 style={{ color: '#26A69A', paddingLeft: '75px' }}>email: {email}</h2>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ height: 390, width: 400 }}>
                            <h1 style={{ color: '#00796B', paddingLeft: '50px'}}>Your Favorite Movies</h1>
                            <h2 style={{ color: '#26A69A', paddingLeft: '40px' }}>1: {favMovies[0]}</h2>
                            <h2 style={{ color: '#26A69A', paddingLeft: '40px' }}>2: {favMovies[1]}</h2>
                            <h2 style={{ color: '#26A69A', paddingLeft: '40px' }}>3: {favMovies[2]}</h2>
                            <h2 style={{ color: '#26A69A', paddingLeft: '40px' }}>4: {favMovies[3]}</h2>
                            <h2 style={{ color: '#26A69A', paddingLeft: '40px' }}>5: {favMovies[4]}</h2>

                            <Grid container
                                direction="column"
                                alignItems="center"
                                justify="center"
                            >
                                <Button variant="contained" sx={{ backgroundColor: "#00796B"}} onClick={handleClick}>Browse Movies</Button>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
export default UserProfile;