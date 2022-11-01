import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderTitle = {
  title: "NEW PROJECT",
  desc: "너무 무리하지 말아요! 이미 당신은 잘하고 있고! 앞으로도 잘 할 수 있어요!",
};

function Slider(props) {
  return (
    <section id="sliderType" className={`slider__inner ${props.fonts}`}>
      <div className="slider__inner">
        <Swiper
          autoplay={{
            delay: 3000,
            desableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="desc">
              <span>DEVELOPER</span>
              <h3>{sliderTitle.title}</h3>
              <p>{sliderTitle.desc}</p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>DEVELOPER</span>
              <h3>NEW PROJECT</h3>
              <p>
                너무 무리하지 말아요! 이미 당신은 잘하고 있고!
                <br />
                앞으로도 잘 할 수 있어요!
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>DEVELOPER</span>
              <h3>NEW PROJECT</h3>
              <p>
                너무 무리하지 말아요! 이미 당신은 잘하고 있고!
                <br />
                앞으로도 잘 할 수 있어요!
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
