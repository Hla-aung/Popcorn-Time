import React, { useState, useEffect } from "react";
import { API_URL, Api_Key } from "../api/Api";
import RecommendedMovieCard from "./RecommendedMovieCard";
import Slider from "react-slick";
import {settings} from "../settings/Slide"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../recommended/RecommendedMovie.css";

const Now = () => {
  const [content, setContent] = useState([]);

  const recommendedMovieContent = async () => {
    const { data } = await API_URL.get(
      `/movie/now_playing?api_key=${Api_Key}&page=1&region=US`
    );

    setContent(data.results);
  };

  useEffect(() => {
    recommendedMovieContent([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="recommended">
      <h3>Now Playing in Theatres</h3>
      <Slider {...settings}>
        {content?.length > 0 ? (
          content.map((item) => (
            <RecommendedMovieCard recommendedMovie={item} key={item.id} />
          ))
        ) : (
          <div>
            <i className="fa-solid fa-hourglass"></i>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default Now;
