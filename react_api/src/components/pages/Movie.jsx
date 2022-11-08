import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import MovieList from "../include/MovieList";
import MovieSearch from "../include/MovieSearch";
import Contant from "../layout/Contant";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const search = (query) => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=448d3fe1610ebe02d04b6d72a4a8fd91&query=${query}"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=448d3fe1610ebe02d04b6d72a4a8fd91&query=marble"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "referece api"]} />
        <MovieList />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contant />
      </Contents>
      <Footer />
    </>
  );
};

export default Movie;
