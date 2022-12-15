import React, {useState, useEffect} from "react";
import RecommendedSeriesCard from "./RecommendedSeriesCard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../recommended/RecommendedSeries.css"

const API_URL = 'https://api.themoviedb.org/3'
const Api_Key = 'f747e161e06350986b9539adff7f92b5'
const Upcoming = () => {
    const [content, setContent] = useState([])

    const recommendedSeriesContent = async () => {
        const response = await fetch(`${API_URL}/movie/upcoming?api_key=${Api_Key}&page=1&region=US`);
        const data = await response.json();

        setContent(data.results)
    }

    useEffect(() => {
        recommendedSeriesContent('')
        }, [])
    
    const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1
        };

    return (
        <div className="recommended">
            <h3>Upcoming Movies in Theatres</h3>
            <Slider {...settings} >
                {content.length > 0 ? (content.map((item) => (
                     <RecommendedSeriesCard recommendedSeries={item} key={item.id} />
                 ))) : <div><i className="fa-solid fa-hourglass"></i></div>
                } 
            </Slider>
            
        </div>
    )
}

export default Upcoming
