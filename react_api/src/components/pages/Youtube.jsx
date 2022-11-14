import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeCont from "../include/YoutubeCont";
import Contact from "../layout/Contact";

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);
  const [random, setRandom] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/photos?api_key=3d606cf9dc17d29e0dec9772c8a629e6&languages=ko-kr&query=marvel&page=1&query=${query}$per_page=30`
    )
      .then((response) => response.json())
      .then((result) => console.log(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3d606cf9dc17d29e0dec9772c8a629e6&languages=ko-kr&query=marvel&page=1"
    )
      .then((response) => response.json())

      .then((result) => setYoutubes(result.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=3d606cf9dc17d29e0dec9772c8a629e6&languages=ko-kr&query=marvel&page=1"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["youtube", "referece API"]} />
        <YoutubeSlider />
        <YoutubeSearch onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;
