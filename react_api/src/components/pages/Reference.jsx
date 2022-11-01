import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contant from "../layout/Contant";

const Reference = () => {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["about", "referece API"]} />
        <ReferCont />
        <Contant />
      </Contents>
      <Footer />
    </>
  );
};

export default Reference;
