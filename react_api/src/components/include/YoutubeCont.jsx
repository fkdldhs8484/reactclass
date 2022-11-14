import React from "react";

const YoutubeItem = ({ youtube }) => {
  return (
    <li>
      <img src={youtube.snippet.thumbnails.mesium.url} alt="" />
    </li>
  );
};

const YoutubeCont = ({ youtubes }) => {
  return (
    <section className="cont__youtube">
      <div className="container">
        <div className="youtube__inner">
          {youtubes.map((youtube, index) => (
            <YoutubeItem key={index} youtube={youtube} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeCont;
