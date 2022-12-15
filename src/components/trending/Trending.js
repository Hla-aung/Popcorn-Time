import React, {useState, useEffect} from "react";
import TrendingMovieCard from "../trending/TrendingMovieCard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../trending/Trending.css"

const API_URL = 'https://api.themoviedb.org/3'
const Api_Key = 'f747e161e06350986b9539adff7f92b5'
const Trending = () => {
    const [content, setContent] = useState([])

    const trendingContent = async () => {
        const response = await fetch(`${API_URL}/trending/movie/day?api_key=${Api_Key}&page=1`);
        const data = await response.json();

        setContent(data.results)
    }

    useEffect(() => {
        trendingContent('')
        }, [])
    
    const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1
        };

    return (
        <div className="trending">
            <h3>Trending Now</h3>
            <Slider {...settings} >
                {content.length > 0 ? (content.map((item) => (
                     <TrendingMovieCard trendingMovie={item} key={item.id} />
                 ))) : <div><i className="fa-solid fa-hourglass"></i></div>
                } 
            </Slider>
            
        </div>
    )
}

export default Trending
