import React, { useState, useEffect } from "react";
import LatestMovieCard from "./LatestMovieCard";
import Slider from "react-slick";
import { latestSettings } from "../settings/Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL = "https://api.themoviedb.org/3";
const Api_Key = "f747e161e06350986b9539adff7f92b5";

const Latest = () => {
  const [latestcontent, setLatestContent] = useState([]);

  const latestContent = async () => {
    const response = await fetch(
      `${API_URL}/movie/popular?api_key=${Api_Key}&page=1`
    );
    const data = await response.json();

    setLatestContent(data.results);
  };

  useEffect(() => {
    latestContent("");
  }, []);

  return (
    <div>
      <Slider {...latestSettings}>
        {latestcontent.length > 0
          ? latestcontent
              .slice(0, 8)
              .map((item) => (
                <LatestMovieCard latestMovie={item} key={item.id} />
              ))
          : ""}
      </Slider>
    </div>
  );
};

export default Latest;
