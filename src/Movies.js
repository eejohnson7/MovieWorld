import React, { useState, useEffect } from "react";

import Grid from '@mui/material/Grid';

import MovieCard from "./Components/MovieCard";
import SearchAppBar from "./Components/SearchAppBar";
import './styles.css';

const userId = parseInt(window.location.href.substring(40));

function Movies(){
    const [listOfMovies, setListOfMovies] = useState([]);

    const movieData = [
        {
            "id": 1,
            "title": "The Guardians of the Galaxy: Holiday Special",
            "img": "https://www.themoviedb.org/t/p/original/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg",
            "genre": "action"
        },
        {
            "id": 1,
            "title": "The Guardians of the Galaxy: Holiday Special",
            "img": "https://www.themoviedb.org/t/p/original/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg",
            "genre": "action"
        },
    ]

    useEffect (() => {
        //TODO: get all movie data from db 
        
        setListOfMovies(movieData);
    }, [])

    return(
        <div className="movie-search">
            <Grid>
                <SearchAppBar/>
                <br></br>
                <Grid container spacing={4} paddingLeft={3}>
                    {listOfMovies.map((movie) => {
                        return (
                            <Grid item>
                                <MovieCard userId={userId} movieId={movie.id.toString()} title={movie.title} img={movie.img} genre={movie.genre}/>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </div>
    );
}

export default Movies;