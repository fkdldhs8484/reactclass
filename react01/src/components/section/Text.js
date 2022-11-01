import React from "react";

const textTitle = {
  title: "스크립트를 익히는 방법",
};

const textText = [
  {
    title: "검색이펙트",
    desc: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
    imgClass: "t1",
  },
  {
    title: "검색이펙트",
    desc: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
    imgClass: "t2",
  },
  {
    title: "검색이펙트",
    desc: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
    imgClass: "t3",
  },
  {
    title: "검색이펙트",
    desc: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
    imgClass: "t4",
  },
  {
    title: "검색이펙트",
    desc: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
    imgClass: "t5",
  },
  {
    title: "검색이펙트",
    desc: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
    imgClass: "t6",
  },
];

function TextInner({ title, desc, imgClass }) {
  return (
    <div className={`text ${imgClass}`}>
      <h3 className="text__title">{title}</h3>
      <p className="text__desc">{desc}</p>
      <a className="text_btn" href="/">
        더보기
      </a>
    </div>
  );
}

function Text({ attr }) {
  return (
    <section id="textType" className={`text__wrap ${attr[0]} ${attr[1]}`}>
      <span className="blind">텍스트 유형 01</span>
      <h2 className="mb70">{textTitle.title}</h2>
      <div className={`text__inner ${attr[2]}`}>
        {textText.map((text, index) => (
          <TextInner
            key={index}
            title={text.title}
            desc={text.desc}
            imgClass={text.imgClass}
          />
        ))}
      </div>
    </section>
  );
}

export default Text;
