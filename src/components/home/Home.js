import React from "react";
import "../home/Home.css"
import Topimg from "./Topimg";
import Now from "../recommended/Now";
import Upcoming from "../recommended/Upcoming";
import Trending from "../trending/Trending";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <Topimg />
            <Trending />
            <Now />
            <Upcoming />
            <Footer />
        </div>
    )
}


export default Home