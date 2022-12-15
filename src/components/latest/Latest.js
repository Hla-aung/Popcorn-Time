import React, {useState, useEffect} from "react";
import LatestMovieCard from "./LatestMovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CircularProgress  from "@mui/material/CircularProgress";


const API_URL = 'https://api.themoviedb.org/3'
const Api_Key = 'f747e161e06350986b9539adff7f92b5'

const Latest = () => {
  const [latestcontent, setLatestContent] = useState([])

  const latestContent = async () => {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${Api_Key}&page=1`);
    const data = await response.json();

    setLatestContent(data.results)
  }

  useEffect(() => {
    latestContent('')
    }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        {latestcontent.length > 0 ? (latestcontent.map((item) => (
            <LatestMovieCard latestMovie={item} key={item.id}/>
        ))) : <CircularProgress />}
      </Slider>
    </div>
  );

}
   
export default Latest
