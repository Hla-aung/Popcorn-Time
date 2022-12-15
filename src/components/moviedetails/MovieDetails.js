import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieDetailsCard from "./MovieDetailsCard"
import "../moviedetails/MovieDetails.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const API_URL = 'https://api.themoviedb.org/3'
const Api_Key = 'f747e161e06350986b9539adff7f92b5'

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const [movieVideo, setMovieVideo] = useState([])
    const [movieCast, setMovieCast] = useState([])

    const { id } = useParams();

    const getMovieDetails = async () => {
        const response = await fetch(`${API_URL}/movie/${id}?api_key=${Api_Key}`);
        const moviedata = await response.json();

        setMovieDetails(moviedata) 
    }

    const getMovieVideo = async () => {
        const response = await fetch(`${API_URL}/movie/${id}/videos?api_key=${Api_Key}`);
        const data = await response.json();

        setMovieVideo(data.results)
    }

    const getMovieCast = async () => {
        const response = await fetch(`${API_URL}/movie/${id}/credits?api_key=${Api_Key}`);
        const data = await response.json();

        setMovieCast(data.cast)
    }

   useEffect(() => {
        getMovieDetails({})  
        getMovieVideo([])  
        getMovieCast([])  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>
        <div className="movieDetails">
            movieDetails && <MovieDetailsCard movieDetails={movieDetails} movieCast={movieCast} movieVideo={movieVideo} key={movieDetails.id}/>
        </div>
        </>
    )
}

export default MovieDetails