import React from "react";
import { useState, useEffect } from "react";
import { API_URL, Api_Key } from "../api/Api";
import { Link } from "react-router-dom";
import icon from "../search/unknown-2.jpg";
import "./Search.css";

const img_300 = "https://image.tmdb.org/t/p/w300";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [terms, setTerms] = useState("");

  const getSearch = async () => {
    const { data } = await API_URL.get(
      `/search/multi?api_key=${Api_Key}&query=${terms}&page=1`
    );

    setSearch(data.results);
  };
  useEffect(() => {
      getSearch([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terms]);

  return (
    <>
      <input
        type="text"
        placeholder="Search for Movies"
        value={terms}
        onChange={(e) => setTerms(e.target.value)}
      />
      {search?.length > 0 ? (
        search.map((item) => {
          return (
            <Link to={`${item.id}`}>
              <div className="search" id={item.id} key={item.id}>
                <div className="searchImg">
                  {item.poster_path === undefined ||
                  item.poster_path === null ? (
                    <img
                      src={icon}
                      width={160}
                      height={250}
                      alt="unknown"
                      className="unknownImg"
                    />
                  ) : (
                    <img
                      src={`${img_300}/${item.poster_path}`}
                      alt={item.title || item.name}
                    />
                  )}
                </div>

                <div className="searchInfo">
                  <p>{item.media_type === "tv" ? "Tv Shows" : "Movies"}</p>
                  <h4>{item.title || item.name}</h4>
                  <span>{item.overview}</span>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <span>No movies found</span>
      )}
    </>
  );
};

export default Search;
