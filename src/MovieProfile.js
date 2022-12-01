import React, { useState, useEffect } from "react";

import './styles.css';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const id = parseInt(window.location.href.substring(36));

function Movies(){
    const movieData = {
        "id": 1,
        "title": "The Guardians of the Galaxy: Holiday Special",
        "img": "https://www.themoviedb.org/t/p/original/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg",
        "genre": "action",
        "director": "director1",
        "top_actors": [1, 2, 3],
        "description": "description",
        "year": 2020
    }
    const actorNameData = ["actor1", "actor2", "actor3"];
    
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState(0);
    const [description, setDescription] = useState("");
    const [topActors, setTopActors] = useState([]);
    const [genre, setGenre] = useState("");
    const [img, setImg] = useState("");
    const [actorNames, setActorNames] = useState([]);

    useEffect(() => {
        //TODO: get movie data based on id

        setTitle(movieData.title);
        setImg(movieData.img);
        setGenre(movieData.genre);
        setDirector(movieData.director);
        setTopActors(movieData.top_actors);
        setDescription(movieData.description);
    }, [])

    useEffect(() => {
        //TODO: get actor names given actor ids
        
        setActorNames(actorNameData);
    })

    return(
        <div className="page">
            <Card>
                <CardMedia
                    component="img"
                    height="350"
                    image={img}
                    alt="movie"
                />
            </Card>
        </div>
    );
}

export default Movies;