import React, { useEffect, useState } from "react"
import Latest from "../latest/Latest";
import MovieCard from "./MovieCard";
import { Pagination } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import "./Movie.css"



const API_URL = 'https://api.themoviedb.org/3'
const Api_Key = 'f747e161e06350986b9539adff7f92b5'

const Movie = () => {
    const [ movie, setMovie ]  = useState([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ pageCount, setPageCount ] = useState (0)

    const getMovie = async () => {
        const response = await fetch(`${API_URL}/discover/movie?api_key=${Api_Key}&page=${currentPage}&adult=true`)
        const data = await response.json();

        setMovie(data.results)
        setPageCount(data.total_pages)
    }


    useEffect(() => {
        getMovie()

        return () => {
            setMovie([])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    const handleChange = (event,value) => {
        setCurrentPage(value);
        getMovie()
    }

    return (
        <div className="moviebox">
        <Latest />
        
        <h2>All Movies</h2>
        
        <Grid container spacing={0.5}>
           {movie.length > 0 ? (movie.map((item) => (
                <MovieCard movies={item} key={item.id}/>
           ))) : <CircularProgress />
        }
        </Grid>

        <Stack spacing={2}>
            <Pagination 
                    count={pageCount}
                    color="standard"
                    shape="rounded"
                    onChange={handleChange}
                    style={{margin : "15px auto 50px", backgroundColor: "#ffbd59", display : "flex", justifyContent : "center", alignItems: "center"}} />
        </Stack>
      </div>
    )
}

export default Movie