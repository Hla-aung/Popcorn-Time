/**import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import TvDetailsCard from "./TvDetailsCard"
import "../moviedetails/MovieDetails.css"

const API_URL = 'https://api.themoviedb.org/3'
const Api_Key = 'f747e161e06350986b9539adff7f92b5'

const TvDetails = () => {
    const [tvDetails, setTvDetails] = useState({})
    const [tvVideo, setTvVideo] = useState([])
    const [tvCast, setTvCast] = useState([])
    
    const { id } = useParams();

    const getTvDetails = async () => {
        const response = await fetch(`${API_URL}/tv/${id}?api_key=${Api_Key}`);
        const data = await response.json();

        setTvDetails(data)
    }
    
    const getTvVideo = async () => {
        const response = await fetch(`${API_URL}/tv/${id}/videos?api_key=${Api_Key}`);
        const data = await response.json();

        setTvVideo(data.results)
    }

    const getTvCast = async () => {
        const response = await fetch(`${API_URL}/tv/${id}/credits?api_key=${Api_Key}`);
        const data = await response.json();

        setTvCast(data.cast)
    }

   

    useEffect(() => {
        getTvDetails()  
        getTvVideo()  
        getTvCast()  


        return () => {
            getTvDetails({}) 
            getTvVideo([]) 
            getTvCast([])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className="tvDetails">
             {tvDetails && <TvDetailsCard tvDetails={tvDetails} tvVideo={tvVideo} tvCast={tvCast} key={tvDetails.id}/>
             }
        </div>
    )
}

export default TvDetails**/