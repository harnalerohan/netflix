import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios';
import request from '../request'
import "../css/banner.css"
import Nav from './Nav';

const Banner = () => {
  const [movies, setMovies]: any = useState([]);

  async function fetchData(){
    const response = await axiosInstance.get(request.fetchNetflixOriginals);
    let random = Math.floor(Math.random() * 15)
    setMovies(response.data.results[random])
  }

  useEffect(() => {
    fetchData()
  }, [])

  let truncate = (str: any, n: any) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  console.log(movies)
  return (
    <header className="banner"
      style = {{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original${movies.backdrop_path}"
        )` 
      }}
    >
      <Nav/>
      <div className="banner_content">
        <h1 className="banner_title">{movies ? movies.name || movies.title || movies.original_name: "Movie_name"}</h1>

        <div className="">
          <button className="banner_buttons">Play</button>
          <button className="banner_buttons">My List</button>
        </div>

        <h1 className="banner_description">
          {truncate(movies.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadeBottom"/>
    </header>
  )
}

export default Banner
