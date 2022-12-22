import React, { useState, useEffect } from "react";
import { API_URL, Api_Key } from "../api/Api";
import TrendingMovieCard from "../trending/TrendingMovieCard";
import Slider from "react-slick";
import { settings } from "../settings/Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../trending/Trending.css";

const Trending = () => {
  const [content, setContent] = useState([]);

  const trendingContent = async () => {
    const { data } = await API_URL.get(
      `/trending/all/day?api_key=${Api_Key}&page=1&language=en-US`
    );

    setContent(data.results);
  };

  useEffect(() => {
    trendingContent("");
  }, []);

  return (
    <div className="trending">
      <h3>Trending Now</h3>
      <Slider {...settings}>
        {content.length > 0 ? (
          content.map((item) => (
            <TrendingMovieCard trendingMovie={item} key={item.id} />
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

export default Trending;
