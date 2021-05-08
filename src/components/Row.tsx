import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axiosInstance from "../axios";
import "../css/Row.css"
import movieTrailer from "movie-trailer"


const Row = (props: any) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies]: any = useState([]);
  const [trailerUrl, setTrailerUrl]: any = useState("")

  useEffect(() => {
    async function fetchData() {
      const request = await axiosInstance.get(props.fetch);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetch]);

  const opts: any = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = (movie: any) => {
    if(trailerUrl){
      setTrailerUrl("")
    }else{
      movieTrailer(movie.name? movie.name : movie.title)
      .then((url: any) => {
        const uriParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(uriParams.get('v'))
      }).catch((e: any) => {
        console.log(e)
      })
    }
  }

  return (
    <div className="row">
      <div className="row_posters">
      {movies.map((v: any, i: any) => {
        return (
          <img
            onClick={() => handleClick(v)}
            className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
            key={i}
            src={`${baseUrl}${props.isLargeRow ? v.poster_path: v.backdrop_path}`}
            alt={v.name}
          />
        );
      })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      <h2>{props.title}</h2>
    </div>
  );
};

export default Row;
