import React from "react";
import { Link } from "react-router-dom";
import "../recommended/RecommendedMovie.css"

const img_300 = "https://image.tmdb.org/t/p/w300"
const RecommendedSeriesCard = ({recommendedSeries : {id, poster_path, title, vote_average}}) => {
    const poster = poster_path
    const num = vote_average
    const voting = Math.round(num * 10) / 10;
    return (
        <>
                <div className="recommendedmovie" id={id}>
                    <Link to={`${id}`} >
                    <div>
                        <img src={`${img_300}/${poster}`}  alt={title} />
                    </div>

                    <div>
                        <span><i className="fa-solid fa-star"></i> {voting}</span>
                    </div>

                    <div>
                        <span>{title}</span>
                    </div>
                    </Link>
                </div>
        </>
    )
}

export default RecommendedSeriesCard