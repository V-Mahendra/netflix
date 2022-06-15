import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css"

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate (str , n){
     return  str?.length > n ? str.substr(0, n -1 ) + "..." : str;

     //truncate operation for short the word or summary length

  }

  return (
    <header
      className="banner"
      style={{
        backgroundPosition: " center center",
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.name || movie?.title || movie?.original_name}</h1>

        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>

        <h2 className="banner_description">
            { truncate (movie?.overview, 150)}
        </h2>
      </div>

      <div className="banner_fadeBottom" /> 
    </header>
  );
};

export default Banner;
