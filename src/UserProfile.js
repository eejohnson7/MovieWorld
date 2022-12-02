import React, { useEffect, useState } from "react";

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import './styles.css';

const userId = parseInt(window.location.href.substring(45));

function UserProfile () {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [favMovies, setFavMovies] = useState([]);
    const [movieTitles, setMovieTitles] = useState([]);

    const userData = {
        'username': 'user1',
        'email': 'user1@gmail.com',
        'fav_movies': [1, 2, 3]
    }
    const movieTitleData = ["The Guardians of the Galaxy: Holiday Special", "The Guardians of the Galaxy: Holiday Special"];

    useEffect(() => {
        //TODO: get user from db given user id

        setUsername(userData.username);
        setEmail(userData.email);
        setFavMovies(userData.fav_movies);
    }, [])

    useEffect(() => {
        //TODO: get movie titles given movie ids
        
        setMovieTitles(movieTitleData);
    })

    const handleClick = () => {
        window.location.href = "movieworld/movies/" + userId;
    }

    return(
        <div className="user-profile">
            <Grid container spacing={2}>
                <Grid item xs={15}>
                    <h1 style={{ color: 'white', paddingLeft: '20px'}}>Welcome to MovieWorld {username}!</h1>
                </Grid>

                <Grid container spacing={2} direction="column" alignItems="center" justify="center">
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
                            <h4 style={{ color: '#26A69A', paddingLeft: '40px' }}>1: {movieTitles[0]}</h4>
                            <h4 style={{ color: '#26A69A', paddingLeft: '40px' }}>2: {movieTitles[1]}</h4>
                            <h4 style={{ color: '#26A69A', paddingLeft: '40px' }}>3: {movieTitles[2]}</h4>
                            <h4 style={{ color: '#26A69A', paddingLeft: '40px' }}>4: {movieTitles[3]}</h4>
                            <h4 style={{ color: '#26A69A', paddingLeft: '40px' }}>5: {movieTitles[4]}</h4>
                            <br></br><br></br>

                            <Grid container direction="column" alignItems="center" justify="center">
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