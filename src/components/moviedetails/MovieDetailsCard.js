/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../moviedetails/MovieDetails.css"
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import { profileSettings } from "../settings/Slide";
import { videoSettings } from "../settings/Slide";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import unknown from "../moviedetails/unknown.png"

const img = "https://image.tmdb.org/t/p/original"
const img_500 = "https://image.tmdb.org/t/p/w500"
const img_1280 = "https://image.tmdb.org/t/p/w1280"

const MovieDetailsCard = ({movieDetails, movieVideo, movieCast}) => {
    const poster = movieDetails.poster_path
    const backdrop = movieDetails.backdrop_path
    
    const num = movieDetails.vote_average
    const voting = Math.round(num * 10) / 10;
    const rating = voting / 2;
    
    const budget = movieDetails.budget
    const budgetM = Math.round(budget / 1000000);

    const revenue = movieDetails.revenue
    const revenueM = Math.round(revenue / 1000000);

    return(
        <>
        <div className="movieDetailsCard" id={movieDetails.id} key={movieDetails.id}>
            <img src={`${img_1280}/${backdrop}`} alt={movieDetails.title} className="backdrop"></img>
            <div className="detailsbox">
                
                <img src={`${img_500}/${poster}`} alt={movieDetails.title} className="poster"></img>
                <div className="information">
                    <div className="genres">{
                        movieDetails.genres?.length > 0 ? (movieDetails.genres.map((item) => (
                        <span id={item.id} key={item.id}>{item.name} | </span>
                        ))) : ''
                    }</div>
                
                    <h1>{movieDetails.title}</h1>
                
                    <div className="rating">
                        <span>Rating: {voting} </span>
                        <Rating name="read-only" className="star" size="small" value={rating} precision={0.1} readOnly />
                    </div>
                
                    <div className="release">
                        <span>Released Date: {movieDetails.release_date} ||</span>
                        <span> Runtime: {movieDetails.runtime} minutes</span>
                    </div>
               
                    <div className="overview">
                        <h3>Overview</h3>
                        <span>{movieDetails.overview}</span>
                    </div>

                    <div className="company">
                        { movieDetails && movieDetails.production_companies?.length > 0 ? (movieDetails.production_companies.map((item) => (
            
                        item.logo_path === null ? '' : 
                        <img src={`${img}/${item.logo_path}`} key={item.id}></img>
                    
                        ))) : ""}
                    </div>
                </div>
            </div>
            
            
        </div>

        <div className="others">
                <p>Status: <span>{movieDetails.status}</span></p>
                <p>Language: <span>{movieDetails.original_language === "en" ? "English" : 'Foreign Language'}</span></p>
                <p>Popularity: <span>{movieDetails.popularity}</span></p>
                
                <p>Revenue: <span>${revenueM} Millions</span></p>
                <p>Budget: <span>${budgetM} Millions</span></p>
                <p>Total Votes: <span>{movieDetails.vote_count}</span></p>
        </div>
        

        <div className="cast">
            <h3>Casts</h3>
            <Slider {...profileSettings}>
                {movieCast?.length > 0 ? (movieCast.slice(0,10).map((item) => (
                    <div className="profile" key={item.id}>
                        {item.profile_path === null ? <img src={unknown} width={100} height={150} className="unknown"/> : <img src={`${img}/${item.profile_path}`} alt="profile" width={100} height={150} className="pp" />}
                        <p>{item.name}</p>
                        <span> as {item.character}</span>
                    </div>
                ))) : ''}
            </Slider> 
        </div>

        <div className="video">
                <h3>Videos</h3>
                <Slider {...videoSettings}>
                    {movieVideo?.length > 0 ? (movieVideo.slice(0,5).map((item) => (
                        <div key={item.id}>
                            <iframe
                               src={`https://www.youtube.com/embed/${item.key}`}
                               title="YouTube video player" 
                               className="yt"
                               frameBorder="1"
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, allow-presentation"
                               allowFullScreen
                            ></iframe>
                            <span>{item.type} || {item.name}</span>
                        </div> 
                    ))) : ''}
                </Slider>
        </div>
        </>
    )
}

export default MovieDetailsCard