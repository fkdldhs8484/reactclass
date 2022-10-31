import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import AboutCont from "../include/AboutCont";
import Contant from "../layout/Contant";

const About = () => {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["about", "referece API"]} />
        <AboutCont />
        <Contant />
      </Contents>
      <Footer />
    </>
  );
};

export default About;
