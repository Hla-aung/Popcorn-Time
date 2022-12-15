import React from "react";
import "./Movie.css";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const img_300 = "https://image.tmdb.org/t/p/w300"
const MovieCard = ({movies : {id, poster_path, vote_average, title}}) => {
    const poster = poster_path
    const num = vote_average
    const voting = Math.round(num * 10) / 10;
    return (
        <>
            <Grid item lg={2} md={4} sm={6}>
            <Link to={`${id}`}>
            <div className="moviePage" id={id}>
                <div>
                 <img src={`${img_300}/${poster}`}  alt={title} />
                </div>

                <div>
                    <span><i className="fa-solid fa-star"></i> {voting}</span>
                </div>

                <div>
                 <span>{title}</span>
                </div>
            </div>
            </Link>
            </Grid>
        </>
    )
}

export default MovieCard 