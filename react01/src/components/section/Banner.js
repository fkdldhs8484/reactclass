import React from "react";

const bannerText = [
  {
    title: "유튜버 웹보이",
    desc: "더 다양한 강의는 유튜브를 통해 제공하고 있습니다.",
    btnLink: "/",
  },
];

function BannerInner({ title, desc, imgClass, btnLink }) {
  return (
    <div className="banner__inner">
      <h3 className="title">{title}</h3>
      <p className="desc">
        {desc}
        <a href="/" title="유튜브 페이지로 이동"></a>
      </p>
    </div>
  );
}

function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
      <h2 className="blind">배너 영역</h2>

      {bannerText.map((banner, index) => (
        <BannerInner
          key={index}
          title={banner.title}
          desc={banner.desc}
          btnLink={banner.btnLink}
        />
      ))}
      <span className="small">배너 유형01</span>
    </section>
  );
}

export default Banner;
