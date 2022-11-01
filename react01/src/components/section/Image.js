import React from "react";

const imageTitle = {
  title: "레서판다",
  desc: "레서판다의 귀여움을 알아보자",
};

const imageText = [
  {
    title: "레서판다가 줄 타는 모습",
    desc: "레서판다가 줄타는 모습을 보십시오. 너무 귀엽지 않나요..",
    imgClass: "img1",
    btnClass: "basic",
    btnLink: "/",
  },
  {
    title: "레서판다가 줄 타는 모습",
    desc: "가만히 있어도 귀여운 헤서판다. 래교부리는 모습도 너무 귀엽다.",
    imgClass: "img2",
    btnClass: "basic",
    btnLink: "/",
  },
];

function ImageInner({ title, desc, imgClass, btnClass, btnLink }) {
  return (
    <article className={`image ${imgClass}`}>
      <h3 className="image__tit">{title}</h3>
      <p className="image__desc">{desc}</p>
      <a className="image__btn" href="/" title="자세히보기">
        자세히보기
      </a>
    </article>
  );
}

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <span className="blind">이미지 유형01</span>
      <h2>{imageTitle.title}</h2>
      <p>{imageTitle.desc}</p>

      <div className={`image__inner ${props.attr[2]}`}>
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
      </div>
    </section>
  );
}

export default Image;
