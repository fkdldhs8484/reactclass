import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      class={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <span class="blind">이미지 유형01</span>
      <h2>레서판다</h2>
      <p>레서판다의 귀여움을 알아보자.</p>
      <div class={`image__inner ${props.attr[2]}`}>
        <article class="image img1">
          <h3 class="image__tit">레서판다가 줄 타는 모습</h3>
          <p class="image__desc">
            레서판다가 줄타는 모습을 보십시오. 너무 귀엽지 않나요.. 귀여워서
            깨물고 <br />
            싶어요...너구리랑 햇갈리지 맙시다.
          </p>
          <a class="image__btn" href="/" title="자세히보기">
            자세히보기
          </a>
        </article>
        <article class="image img2">
          <h3 class="image__tit">레서판다의 귀여운 모습</h3>
          <p class="image__desc">
            가만히 있어도 귀여운 헤서판다. 래교부리는 모습도 너무 귀엽다.
            너구리랑 햇갈리지 맙시다..
          </p>
          <a class="image__btn yellow" href="/" title="자세히보기">
            자세히보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
