import React, { useState, useEffect } from "react";

import './styles.css';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const userId = parseInt(window.location.href.charAt(46));
const movieId = parseInt(window.location.href.charAt(48));
console.log(userId);

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
        <div className="user-profile">
            <Grid container direction="column" spacing={10} justify="center" alignItems="center">
                <Grid item>
                    <Typography color="white" paddingTop={3} variant="h3">{title}</Typography>
                </Grid>

                <Grid item>
                    <Grid container direction="row" spacing={10} alignItems="center">
                        <Grid item>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="600"
                                    image={img}
                                    alt="movie"
                                />
                            </Card>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={5} direction="column" alignItems="center" justify="center">
                                <Grid item>
                                    <Card  sx={{height: 150, width:400 }}>
                                        <Typography color="#00695C" variant="h4">Top Actors</Typography>
                                        <Typography color="#00897B" variant="subtitle1">{actorNameData[0]}</Typography>
                                        <Typography color="#00897B" variant="subtitle1">{actorNameData[1]}</Typography>
                                        <Typography color="#00897B" variant="subtitle1">{actorNameData[2]}</Typography>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card  sx={{height: 250, width:400 }}>
                                        <Typography color="#00695C" variant="h4">Description</Typography>
                                        <br></br>
                                        <Typography color="#00897B">{description}</Typography>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Movies;