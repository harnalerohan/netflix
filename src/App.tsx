import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Row from "./components/Row";
import request from "./request";

function App() {
  return (
    <div className="app">
      <Banner/>
      <Row title="Netflix originals" fetch={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetch={request.fetchTrending} />
      <Row title="Top Rated" fetch={request.fetchTopRated} />
      <Row title="Action Movies" fetch={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetch={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetch={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetch={request.fetchRomanceMovies} />
      <Row title="Documentries" fetch={request.fetchDocumentries} />
    </div>
  );
}

export default App;
