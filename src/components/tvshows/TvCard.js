import React from "react";
import "./TvShows.css"
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";


const img_300 = "https://image.tmdb.org/t/p/w300"
const TvCard = ({Tvs : {id, poster_path, vote_average, name}}) => {
    const poster = poster_path
    const num = vote_average
    const voting = Math.round(num * 10) / 10;
    return (
        <>
            <Grid item lg={2} md={4} sm={4} xs={6}>
            <Link to={`/tvshows/${id}`} >
            <div className="tvPage" id={id}>
                <div>
                 <img src={`${img_300}/${poster}`}  alt={name} />
                </div>

                <div>
                    <span><i className="fa-solid fa-star"></i> {voting}</span>
                </div>

                <div>
                 <span>{name}</span>
                </div>
            </div>
            </Link>
            </Grid>
        </>
    )
}

export default TvCard 