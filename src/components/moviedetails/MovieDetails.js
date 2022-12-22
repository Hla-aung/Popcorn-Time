import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, Api_Key } from "../api/Api";
import MovieDetailsCard from "./MovieDetailsCard";
import TvDetailsCard from "./TvDetailsCard";
import "../moviedetails/MovieDetails.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieVideo, setMovieVideo] = useState([]);
  const [movieCast, setMovieCast] = useState([]);

  const [tvDetails, setTvDetails] = useState([]);
  const [tvVideo, setTvVideo] = useState([]);
  const [tvCast, setTvCast] = useState([]);

  const { id } = useParams();

  const getMovieDetails = async () => {
    const { data } = await API_URL.get(`/movie/${id}?api_key=${Api_Key}`);
    setMovieDetails(data);
    console.log(data);
    setTvDetails(false);
  };
  const getMovieVideo = async () => {
    const { data } = await API_URL.get(
      `/movie/${id}/videos?api_key=${Api_Key}`
    );
    setMovieVideo(data.results);
    console.log(data.results);
  };
  const getMovieCast = async () => {
    const { data } = await API_URL.get(
      `/movie/${id}/credits?api_key=${Api_Key}`
    );
    setMovieCast(data.cast);
    console.log(data.cast);
  };

  const getTvDetails = async () => {
    const { data } = await API_URL.get(`/tv/${id}?api_key=${Api_Key}`);
    setTvDetails(data);
    console.log(data);
    setMovieDetails(false);
  };
  const getTvVideo = async () => {
    const { data } = await API_URL.get(`/tv/${id}/videos?api_key=${Api_Key}`);
    setTvVideo(data.results);
    console.log(data.results);
  };
  const getTvCast = async () => {
    const { data } = await API_URL.get(`/tv/${id}/credits?api_key=${Api_Key}`);
    setTvCast(data.cast);
    console.log(data.cast);
  };

  useEffect(() => {
    getMovieDetails();
    getMovieVideo();
    getMovieCast();

    getTvDetails();
    getTvVideo();
    getTvCast();

    return () => {
      getTvDetails([]);
      getMovieDetails([]);

      getMovieVideo([]);
      getMovieCast([]);

      getTvVideo([]);
      getTvCast([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="movieDetails">
        {movieDetails && (
          <MovieDetailsCard
            movieDetails={movieDetails}
            movieCast={movieCast}
            movieVideo={movieVideo}
            key={movieDetails.id}
          />
        )}

        {tvDetails && (
          <TvDetailsCard
            tvDetails={tvDetails}
            tvCast={tvCast}
            tvVideo={tvVideo}
            key={tvDetails.id}
          />
        )}
      </div>
    </>
  );
};

export default MovieDetails;
