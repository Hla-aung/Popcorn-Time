import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../search/unknown-2.jpg"
import "./Search.css"

const API_URL = 'https://api.themoviedb.org/3'
const Api_Key = 'f747e161e06350986b9539adff7f92b5'

const img_300 = "https://image.tmdb.org/t/p/w300"

const Search = () => {
    const [search, setSearch] = useState({})
    const [terms, setTerms] = useState('')

useEffect(() => {
        fetch(`${API_URL}/search/movie?api_key=${Api_Key}&page=1&query=${terms}`)
        .then(Response => Response.json())
        .then(json => setSearch(json.results))
    }, [terms])
return (
    <>
        <input 
            type="text" 
            placeholder="Search for Movies"
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
        />
        {search?.length > 0 ? (search.map((item) => {
            return(<Link to={`${item.id}`}>
            <div className="search" id={item.id} key={item.id}>
                <div className="searchImg">{
                    item.poster_path === undefined || item.poster_path === null ? <img src={icon} width={160} height={250} alt="unknown" className="unknownImg" />
                    : <img src={`${img_300}/${item.poster_path}`} alt={item.title || item.name} />
                }
                </div>

                <div className="searchInfo">
                    <p>{item.media_type === "tv" ? "TV shows" : "Movies"}</p>
                    <h4>{item.title || item.name}</h4>
                    <span>{item.overview}</span>
                </div>
            </div></Link>)
})) : "No movies found"}
    </>
)
}

export default Search