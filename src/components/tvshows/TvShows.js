import React, { useEffect, useState } from "react"
import LatestTv from "../latest/LatestTv";
import TvCard from "./TvCard";
import { Pagination } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import "./TvShows.css"



const API_URL = 'https://api.themoviedb.org/3'
const Api_Key = 'f747e161e06350986b9539adff7f92b5'

const TvShows = () => {
    const [ Tv, setTv ]  = useState([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ pageCount, setPageCount ] = useState (0)

    const getTv = async () => {
        const response = await fetch(`${API_URL}/discover/tv?api_key=${Api_Key}&page=${currentPage}`)
        const data = await response.json();

        setTv(data.results)
        setPageCount(data.total_pages)
    }


    useEffect(() => {
        getTv()

        return () => {
            setTv([])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    const handleChange = (event,value) => {
        setCurrentPage(value);
        getTv()
    }

    return (
        <div className="Tvbox">
            <LatestTv />
            <h2>All TV Shows</h2>
            <Grid container spacing={0.5}>
                {Tv.length > 0 ? (Tv.map((item) => (
                    <TvCard Tvs={item} key={item.id} />
                ))) : <div><i className="fa-solid fa-hourglass"></i></div>
                }
            </Grid>
       
            <Stack spacing={2}>
                <Pagination 
                    count={pageCount}
                    color="standard"
                    shape="rounded"
                    onChange={handleChange}
                    style={{margin : "15px auto 50px", backgroundColor: "#ffbd59", display : "flex", justifyContent : "center"}} />
            </Stack>
      </div>
    )
}

export default TvShows