/**import React from "react";
import "../moviedetails/MovieDetails.css"
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import YouTube from "react-youtube";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import unknown from "../moviedetails/unknown.png"
import red from "../moviedetails/red.png"

const img = "https://image.tmdb.org/t/p/original"
const img_500 = "https://image.tmdb.org/t/p/w500"
const img_1280 = "https://image.tmdb.org/t/p/w1280"

const TvDetailsCard = ({tvDetails, tvVideo, tvCast}) => {
    const tvposter = tvDetails.poster_path
    const tvbackdrop = tvDetails.backdrop_path
    
    const tvnum = tvDetails.vote_average
    const tvvoting = Math.round(tvnum * 10) / 10;
    const tvrating = tvvoting / 2;
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1
      };
    
    const profileSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1
    }
    return(
        <>
        
        <div className="tvDetailsCard" id={tvDetails.id}>
            <div>
                <img src={`${img_500}/${tvbackdrop}`} alt={tvDetails.name} className="backdrop"></img>
                { tvposter === null ? <img src={red} alt="No Poster" width={1280}/> : <img src={`${img_1280}/${tvposter}`} alt={tvDetails.name} className="poster"></img>}
            </div>

            <div>
                <div className="genres">{
                   tvDetails.genres?.length > 0 ? (tvDetails.genres.map((item) => (
                        <span id={item.id} key={item.id}>{item.name} | </span>
                    ))) : ''
                }</div>
                
                <h1>{tvDetails.name}</h1>
                
                <div className="rating">
                    <span>Rating: {tvvoting} </span>
                    <Rating name="read-only" className="star" size="small" value={tvrating} precision={0.1} readOnly />
                </div>

                <div className="release">
                    <span>First Air Date: {tvDetails.first_air_date}</span><br></br>
                    <span></span>
                    <span> </span>
                </div>
               
                <div className="overview">
                    <h3>Overview</h3>
                    <span>{tvDetails.overview}</span>
                </div>

                <div className="company">
                   { tvDetails && tvDetails.production_companies?.length > 0 ? (tvDetails.production_companies.map((item) => (
            
                        item.logo_path === null ? '' : 
                        <img src={`${img}/${item.logo_path}`} alt="logo" key={item.id}></img>
                    
                    ))) : ""}
                </div>
            </div>
        </div>

        <div className="others">
                <p>Status: <span>{tvDetails.status}</span></p>
                <p>Language: <span>{tvDetails.original_language === "en" ? "English" : "Foreign Language"}</span></p>
                <p>Popularity: <span>{tvDetails.popularity}</span></p>
                
                <p>No. of Seasons: <span>{tvDetails.number_of_seasons}</span></p>
                <p>No. of Episodes: <span>{tvDetails.number_of_episodes}</span></p>
                <p>Total Votes: <span>{tvDetails.vote_count}</span></p>
        </div>
        

        <div className="cast">
            <h3>Casts</h3>
            {tvCast.length >= 8 ? <Slider {...profileSettings}>
                {tvCast?.length > 0 ? (tvCast.map((item) => (
                    <div className="profile" key={item.id}>
                        {item.profile_path === null ? <img src={unknown} width={100} height={150} className="unknown" alt="unknown"/> : <img src={`${img}/${item.profile_path}`} alt="profile" width={100} height={150} className="pp" />}
                        <p>{item.name}</p>
                        <span> as {item.character}</span>
                    </div>
                ))) : ''} 
            </Slider> : (tvCast?.length > 0 ? (tvCast.map((item) => (
                    <div className="profile1" key={item.id}>
                        {item.profile_path === null ? <img src={unknown} width={100} height={150} className="unknown" alt="unknown"/> : <img src={`${img}/${item.profile_path}`} alt="profile" width={100} height={150} className="pp" />}
                    </div>
                ))) : '') }
        </div>

        <div className="video">
                <h3>Videos</h3>
                <Slider {...settings}>{
                    tvVideo?.length > 0 ? (tvVideo.map((item) => (
                        <div key={item.id}>
                             <YouTube
                                videoId={`${item.key}`}
                                opts={{width: "480", height: "270"}}
                                style={{border: "solid 3px grey"}}
                            ></YouTube>
                            <span>{item.type} || {item.name}</span>
                        </div>
                    ))) : ''
                }</Slider>
        </div>

        
        </>
)}

export default TvDetailsCard**/