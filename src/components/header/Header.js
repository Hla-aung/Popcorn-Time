import React, { useState } from "react";
import logo from "../header/Popcorn Time.svg";
import '../header/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    const [mobile, setMobile] = useState(false);
    return (
        <>
            <header className="container flexSB">
                <nav className="flexSB">
                    <div className="logo">
                        <Link to='/' className="link"><img src={logo} alt="Popcorn Time" /></Link>
                    </div>
                    <ul className={mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
                    <Link to='/search' className="searchlink">Search</Link>
                        <Link to='/' className="link">Home</Link>
                        <Link to='/movies' className="link">Movies</Link>
                        <Link to='/tvshows' className="link">TvShows</Link>
                        <Link to='/pricing' className="link">Pricing</Link>
                        <Link to='/contact' className="link">Contact</Link>
                        
                    </ul>
                    <button className="toggle" onClick={() => setMobile(!mobile)}>
                        {mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                    </button>
                </nav>
                <div className="account flexSB">
                    <Link to="/search"><i className="fa-solid fa-search"></i></Link>
                    <i className="fa-solid fa-bell"></i>
                    <i className="fa-solid fa-user"></i>
                    <Link to="/pricing"><button>Subscribe</button></Link>
                </div>
            </header>
        </>
    )

}

export default Header;