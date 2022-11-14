import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import MovieSearch from "../include/MovieSearch";
import MoviePopular from "../include/MoviePopular";
import Contact from "../layout/Contact";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [moviesPopular, setPopularMovies] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=3d606cf9dc17d29e0dec9772c8a629e6&languages=ko-kr&query=marvel&page=1&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3d606cf9dc17d29e0dec9772c8a629e6&languages=ko-kr&query=marvel&page=1"
    )
      .then((response) => response.json())

      .then((result) => setPopularMovies(result.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=3d606cf9dc17d29e0dec9772c8a629e6&languages=ko-kr&query=marvel&page=1"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "reference api"]} />
        <MoviePopular moviesPopular={moviesPopular} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Movie;
