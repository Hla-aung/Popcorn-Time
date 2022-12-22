import React, { useState, useEffect } from "react";
import { API_URL, Api_Key } from "../api/Api";
import RecommendedSeriesCard from "./RecommendedSeriesCard";
import Slider from "react-slick";
import {settings} from "../settings/Slide"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../recommended/RecommendedMovie.css";

const Upcoming = () => {
  const [content, setContent] = useState([]);

  const recommendedSeriesContent = async () => {
    const { data } = await API_URL.get(
      `/tv/on_the_air?api_key=${Api_Key}&page=1`
    );

    setContent(data.results);
  };

  useEffect(() => {
    recommendedSeriesContent("");
  }, []);

  return (
    <div className="recommended">
      <h3>Now Streaming On Air</h3>
      <Slider {...settings}>
        {content.length > 0 ? (
          content.map((item) => (
            <RecommendedSeriesCard recommendedSeries={item} key={item.id} />
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

export default Upcoming;
