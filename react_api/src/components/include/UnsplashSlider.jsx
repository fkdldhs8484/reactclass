import React from "react";

function UnsplahItem(props) {
  return (
    <li>
      <a href="">
        <img src="" alt="" />
      </a>
    </li>
  );
}

const UnsplashSlider = ({ random }) => {
  return (
    <section className="cont__unsplashslider">
      <div className="container">
        <div className="unsplashslider__inner">
          <ul></ul>
        </div>
      </div>
    </section>
  );
};

export default UnsplashSlider;
