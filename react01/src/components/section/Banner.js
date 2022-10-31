import React from "react";

function Banner(props) {
  return (
    <section id="bannerType" class={`banner__wrap ${props.fonts}`}>
      <h2 class="blind">배너 영역</h2>
      <div class="banner__inner">
        <h3 class="title">유튜버 웹보이</h3>
        <p class="desc">
          더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
          <a href="/" title="유튜브 페이지로 이동">
            dd
          </a>
        </p>
        <span class="small">배너 유형01</span>
      </div>
    </section>
  );
}

export default Banner;
