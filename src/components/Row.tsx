import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import "../css/Row.css"

const Row = (props: any) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axiosInstance.get(props.fetch);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetch]);

  return (
    <div className="row">
      <div className="row_posters">
      {movies.map((v: any, i: any) => {
        return (
          <img
            className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
            key={i}
            src={`${baseUrl}${props.isLargeRow ? v.poster_path: v.backdrop_path}`}
            alt={v.name}
          />
        );
      })}
      </div>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Row;
