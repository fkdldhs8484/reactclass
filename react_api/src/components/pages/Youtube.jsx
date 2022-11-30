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
  const [videos, setVideos] = useState([]);
  const [randoms, setRandoms] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyD9g0T8YJVNMnbu4l-CPnDzCjg0W3yKkx4&maxResults=30&q=${query}&type=video&part=snippet`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyD9g0T8YJVNMnbu4l-CPnDzCjg0W3yKkx4&maxResults=30&q=아리아나그란데&type=video&part=snippet"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.items))
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyD9g0T8YJVNMnbu4l-CPnDzCjg0W3yKkx4&maxResults=10&q=샘 스미스&type=video&part=snippet"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.items))
      .then((result) => setRandoms(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "reference api"]} />
        <YoutubeSlider randoms={randoms} />
        <YoutubeSearch onSearch={search} />
        <YoutubeCont videos={videos} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;
