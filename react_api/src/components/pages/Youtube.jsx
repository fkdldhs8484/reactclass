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
            `https://api.themoviedb.org/3/search/photos?api_key=3d606cf9dc17d29e0dec9772c8a629e6&languages=ko-kr&query=marvel&page=1&query=${query}$per_page=30`
        )
            .then((response) => response.json())
            // .then((result) => console.log(result))
            .then((result) => setVideos(result.items))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=3d606cf9dc17d29e0dec9772c8a629e6&languages=ko-kr&query=marvel&page=1"
        )
            .then((response) => response.json())
            // .then((result) => console.log(result.items))
            .then((result) => setVideos(result.items))
            .catch((error) => console.log("error", error));

        fetch(
            "https://youtube.googleapis.com/youtube/v3/search?key=3d606cf9dc17d29e0dec9772c8a629e6&languages&maxResults=10&q=쪼꼬미 병원&type=video&part=snippet"
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
