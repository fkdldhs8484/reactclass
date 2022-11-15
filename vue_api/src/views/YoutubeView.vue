<template>
  <div>
    <HeaderCont />
    <TitleCont name1="Youtube" name2="Api" />

    <section className="youtube__list">
      <div className="container">
        <div className="youtube__box">
          <ul className="youtube__random">
            <Swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              :initialSlide="1"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }"
              :pagination="true"
              :modules="modules"
              className="mySwiper"
            >
              <swiper-slide v-for="slider in sliders" :key="slider.id">
                <li>
                  <a
                    :href="`https://www.youtube.com/watch?v=${slider.id.videoId}`"
                  >
                    <img
                      :src="slider.snippet.thumbnails.medium.url"
                      :alt="slider.snippet.description"
                    />
                    <div className="youtubeTitle">
                      {{ slider.snippet.title }}
                    </div>
                  </a>
                </li>
              </swiper-slide>
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
    <!-- slider -->

    <div className="youtube__search">
      <div className="container">
        <h2>검색하기</h2>
        <form @submit.prevent="SearchVideos()">
          <input
            type="search"
            id="search"
            placeholder="검색하세요!"
            v-model="search"
          />
          <button type="submit">검색</button>
        </form>
      </div>
    </div>
    <!-- search -->

    <section className="cont__youtube">
      <div className="container">
        <div className="youtube__inner">
          <ul>
            <li v-for="video in videos" :key="video.id">
              <a :href="`https://www.youtube.com/watch?v=${video.id.videoId}`">
                <img
                  :src="video.snippet.thumbnails.medium.url"
                  :alt="video.snippet.description"
                />
                <div className="youtubeTitle">
                  {{ video.snippet.title }}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- cont -->
    <ContactCont />
    <FooterCont />
  </div>
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import ContactCont from "@/components/ContactCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
export default {
  components: {
    HeaderCont,
    TitleCont,
    ContactCont,
    FooterCont,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const videos = ref([]);
    const sliders = ref([]);
    const search = ref("아리아나 그란데");
    // 유튜브 검색
    const YoutubeConts = async () => {
      await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyD9g0T8YJVNMnbu4l-CPnDzCjg0W3yKkx4&maxResults=28&q=${search.value}&type=video&part=snippet`
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          videos.value = result.items;
          search.value = "";
        })
        .catch((error) => console.log(error));
    };
    YoutubeConts();
    // 유튜브 컨텐츠
    const SliderVideos = () => {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyD9g0T8YJVNMnbu4l-CPnDzCjg0W3yKkx4&maxResults=10&q=샘 스미스&type=video&part=snippet`
      )
        .then((response) => response.json())
        .then((result) => (sliders.value = result.items))
        .catch((error) => console.log(error));
    };
    SliderVideos();
    return {
      videos,
      search,
      sliders,
      YoutubeConts,
      modules: [Autoplay, EffectCoverflow, Pagination],
    };
  },
};
</script>

<style lang="scss">
// youtubeTitle
.youtubeTitle {
  color: var(--black);
  margin-top: 5px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
// cont__youtube
.cont__youtube {
  ul {
    column-count: 4;
    column-gap: 20px;
    width: 100%;
  }
  li {
    margin-bottom: 20px;

    img {
      border-radius: 5px;
    }
  }
}
// youtube__search
.youtube__search {
  margin-bottom: 100px;
  .container {
    position: relative;
  }
  h2 {
    color: var(--black);
    font-size: 40px;
    text-indent: -9999px;
    height: 0;
  }
  input {
    background: var(--white);
    border: 1px solid var(--black);
    border-radius: 50px;
    color: var(--black);
    width: 100%;
    padding: 10px 30px;
    font-family: var(--font-kor2);
  }
  button {
    position: absolute;
    right: 6px;
    top: -18px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    z-index: 1000;
    margin-top: 20px;
  }
}
// youtube
.youtube__random {
  width: 80%;
  li {
    margin-bottom: 20px;
  }
  .swiper img {
    margin: 100px auto;
  }
}
</style>
