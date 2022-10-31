import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import Text from "./components/section/Text";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import ImgText from "./components/section/ImgText";

function App() {
  return (
    <>
      <Header fonts="nexon" />

      <Main>
        <Slider />
        <Image attr={["section", "nexon", "container"]} />
        <Text attr={["section", "nexon", "container"]} />
        <Card attr={["section", "nexon", "container"]} />
        <Banner fonts="nexon" />
        <ImgText attr={["nexon", "section", "gray", "container"]} />
      </Main>

      <Footer attr={["nexon", "section", "gray", "container"]} />
    </>
  );
}

export default App;
