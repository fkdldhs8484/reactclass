import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashCont from "../include/UnsplashCont";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashBtn from "../include/UnsplashBtn";
import Contact from "../layout/Contact";

const Unsplash = () => {
    const [images, setImages] = useState([]);
    const [random, setRandom] = useState([]);

    const search = async (query) => {
        await fetch(
            `https://api.unsplash.com/photos?client_id=brs7PjWiLCgs71PZNkng8o9cZsgWxwyvUpc45Yjs5WY&query=marvel&page=1&query=${query}$per_page=30`
        )
            .then((response) => response.json())
            .then((result) => console.log(result.results))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetch(
            "https://api.unsplash.com/photos?client_id=brs7PjWiLCgs71PZNkng8o9cZsgWxwyvUpc45Yjs5WY&query=seoul&conut=30"
        )
            .then((response) => response.json())
            .then((result) => setImages(result))
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        fetch(
            "https://api.unsplash.com/photos?client_id=brs7PjWiLCgs71PZNkng8o9cZsgWxwyvUpc45Yjs5WY&conut=10"
        )
            .then((response) => response.json())
            .then((result) => setRandom(result))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={["unsplash", "referece api"]} />
                <UnsplashSlider random={random} />
                <UnsplashSearch onSearch={search} />
                <UnsplashBtn onSearch={search} />
                <UnsplashCont images={images} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};
export default Unsplash;
