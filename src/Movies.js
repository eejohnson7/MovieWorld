import React, { useState } from "react";

import MovieCard from "./MovieCard";

import './background.css';

function Movies(){
    const title = "The Guardians of the Galaxy: Holiday Special";
    const img = "https://www.themoviedb.org/t/p/original/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg";
    const genre = "Action";
    
    return(
        <div className="page">
            <MovieCard title={title} img={img} genre={genre}/>
        </div>
    );
}

export default Movies;