import React from "react";

const imageTitle = {
  title: "유용한 사이트 살펴보기",
  desc: " 웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 유용한 사이트입니다.",
  imgClassOne: "img1",
  imgClassTwo: "img2",
};

const imageText = [
  {
    title: "튜토리얼 사이트",
    title: "레퍼런스 사이트",
    title: "웹폰트 사이트",
    title: "CSS 사이트",
    title: "WebGL 사이트",
    title: "Youtube 사이트",
  },
];

function ImageInner({ title, desc }) {
  return (
    <div className="imgText__txt">
      <span>이미지 텍스트 유형 01</span>
      <h3>{imageTitle.title}</h3>
      <p>{imageTitle.desc}</p>

      <ul>
        <li>
          <a href="/">{title}</a>
        </li>
        <li>
          <a href="/">{title}</a>
        </li>
        <li>
          <a href="/">{title}</a>
        </li>
        <li>
          <a href="/">{title}</a>
        </li>
        <li>
          <a href="/">{title}</a>
        </li>
        <li>
          <a href="/">{title}</a>
        </li>
      </ul>
    </div>
  );
}

function imgText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]} `}
    >
      <h2 className="blind">이미지 텍스트 유형 01</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        {imageText.map((img, index) => (
          <ImageInner
            key={index}
            title={img.title}
            desc={img.desc}
            imgClass={img.imgClass}
            btnClass={img.btnClass}
            btnLink={img.btnLink}
          />
        ))}
        <div className={`imgText__img ${imageTitle.imgClassOne}`}>
          <a href="/">튜토리얼 사이트</a>
        </div>
        <div className={`imgText__img ${imageTitle.imgClassTwo}`}>
          <a href="/" className="blue">
            튜토리얼 사이트
          </a>
        </div>
      </div>
    </section>
  );
}

export default imgText;
