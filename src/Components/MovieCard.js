import React, { useEffect, useState } from "react";
import Heart from "react-heart";

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function MovieCard({userId, movieId, title, img, genre}){
    const [active, setActive] = useState(false);
    const [favMovies, setFavMovies] = useState("");

    const favMovieData = [1, 2, 3];
    console.log(movieId);

    const clickMovie = () => {
        window.location.href ='movieworld/movie-profile/' + userId + '/' + movieId;
    }

    useEffect(() => {
        //TODO: get user's favorite movies from db given userId

        setFavMovies(favMovieData);
    }, [])

    const favMovie = () => {
        if(!active){
            favMovies.push(parseInt(movieId));

            //TODO: add movie to user's favorites in db given userId
        }
        setActive(!active);
    }
    
    return(
        <Card sx={{height: 500, width:250 }}>
            <CardActionArea onClick={clickMovie}>
                <CardMedia
                    component="img"
                    height="350"
                    image={img}
                    alt="movie"
                />
            </CardActionArea>
            <CardContent>
                <Typography align="center" variant="h6" style={{color:"#00796B"}}>{title}</Typography>
                <br></br>
                <Grid container>
                    <Grid item xs={10}>
                        <Typography variant="subtitle1" style={{color:"#00796B"}}>{genre}</Typography>
                    </Grid>
                    <Grid item>
                        <div style={{ width: "2rem" }}>
                            <Heart isActive={active} onClick={favMovie}/>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default MovieCard;