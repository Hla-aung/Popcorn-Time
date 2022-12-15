import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../latest/Latest.css"

const img = "https://image.tmdb.org/t/p/w1280"
const API_URL = 'https://api.themoviedb.org/3'
const Api_Key = 'f747e161e06350986b9539adff7f92b5'


const LatestMovieCard = ({ latestMovie : { id, backdrop_path, title,  release_date, overview, vote_average }}) => {
  const movie_id = id
 const [movie,setMovie] = useState([]);
 const [trailer,setTrailer] = useState();

 const getMovieData = async () => {
  const response = await fetch(`${API_URL}/movie/${movie_id}?api_key=${Api_Key}`);
  const data = await response.json();

  setMovie(data)
 }

 const getTrailer = async () => {
  const response = await fetch(`${API_URL}/movie/${movie_id}/videos?api_key=${Api_Key}`);
  const data = await response.json();

  setTrailer(data.results[0]?.key)
 }

 useEffect(() => {
    getMovieData()
    getMovieData()

    return () => {
      getMovieData([])
      getTrailer([])
    }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])
  const poster = backdrop_path
    return (
      <>
        
        <div className="latestmovie" id={id}>
            <div>
              <img src={`${img}/${poster}`} alt={title} />
            </div>

            <div>  
              <h1>{title}</h1>
              <br></br>
              <span>Release Date: {release_date} ||</span>
              <span> Rating: {vote_average}</span>
              <br>
              </br>
              <p>{overview}</p>
              
              <Link to={`${id}`}><button><i className="fa-solid fa-play"></i><span>Watch Now </span></button></Link>
              {movie && ( <a href={`https://www.youtube.com/watch?v=${trailer}`} target="_blink"><button><i className="fa-solid fa-circle-play"></i><span>Play Trailer </span></button></a> )} 
            </div>

        </div>
        </>
    )
}

export default LatestMovieCard;