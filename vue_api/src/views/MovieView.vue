<template>
  <div>
    <HeaderCont />
    <TitleCont name1="movie" name2="reference api" />
    <section class="cont__refer">
      <div class="movie__inner">
        <div class="movie__slider">
          <div className="popular__inner">
            <div class="container">
              <h2>BEST TOP 10</h2>
              <swiper
                :effect="'coverflow'"
                :initialSlide="3"
                :grabCursor="true"
                :centeredSlides="true"
                :slidesPerView="'auto'"
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
                class="mySwiper"
              >
                <swiper-slide
                  v-for="(slider, index) in sliders"
                  :key="slider.id"
                >
                  <li>
                    <a :href="`https://www.themoviedb.org/movie/${slider.id}`">
                      <img
                        :src="`https://image.tmdb.org/t/p/w500/${slider.poster_path}`"
                        :alt="`${slider.title}`"
                      />
                      <em>
                        <span className="ranking">{{ index + 1 }}</span>
                        <span className="title">{{ slider.title }}</span>
                        <span className="star"
                          >★ : {{ slider.vote_average }}</span
                        >
                      </em>
                    </a>
                  </li>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
        <div className="movie__search">
          <div className="container">
            <h2>검색하기</h2>
            <form @submit.prevent="SearchMovies()">
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
        <div class="movie__movies">
          <div class="container">
            <div class="movie__list">
              <ul>
                <li v-for="movie in movies" :key="movie.id">
                  <a :href="`https://www.themoviedb.org/movie/${movie.id}`">
                    <img
                      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                      :alt="movie.title"
                    />
                    <em>
                      <span className="title">{{ movie.title }}</span>
                      <span className="star">{{ movie.vote_average }}</span>
                    </em>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactCont />
    <FooterCont />
  </div>
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import ContactCont from "@/components/ContactCont.vue";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContactCont,
    Swiper,
    SwiperSlide,
  },

  setup() {
    const movies = ref([]);
    const sliders = ref([]);
    const search = ref("marvel");

    const SearchMovies = async () => {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=448d3fe1610ebe02d04b6d72a4a8fd91&query=${search.value}`
      )
        .then((response) => response.json())
        .then((result) => {
          movies.value = result.results;
          search.value = "";
        })
        .catch((error) => console.log(error));
    };
    SearchMovies();

    const TopMovies = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=448d3fe1610ebe02d04b6d72a4a8fd91&`
      )
        .then((response) => response.json())
        .then((result) => (sliders.value = result.results))
        .catch((error) => console.log(error));
    };
    TopMovies();

    return {
      movies,
      sliders,
      search,
      SearchMovies,
      modules: [EffectCoverflow, Pagination, Autoplay],
    };
  },
};
</script>

<style lang="scss">
.movie__inner {
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 23%;
      position: relative;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
      em {
        display: block;
        height: 80px;
        margin-bottom: 30px;
        font-family: var(--font-kor);
      }
      .title {
        padding: 5px 0;
        display: inline-block;
      }
      .star {
        background: #fff;
        color: #000;
        position: absolute;
        left: 10px;
        top: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        font-weight: 700;
      }
    }
  }
  a {
    color: var(--black);
  }
}
// movieSearch
.movie__search {
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
    padding: 14px 30px;
    font-family: var(--font-kor);
    margin-top: 20px;
  }
  button {
    position: absolute;
    right: 6px;
    top: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    z-index: 1000;
    margin-top: 20px;
  }
}
// movie__popular
.popular__inner {
  .ranking {
    position: absolute;
    left: -25px;
    top: -40px;
    font-size: 100px;
    font-family: var(--font-main);
    -webkit-text-stroke: 2px #fff;
    -webkit-text-fill-color: #000;
  }
  em {
    display: block;
    font-family: var(--font-kor);
  }
  .title {
    padding: 5px 0;
    display: inline-block;
    font-size: 16px;
    font-family: var(--font-kor);
    -webkit-text-stroke: 1px #000;
    -webkit-text-fill-color: #fff;
  }
  .star {
    background: #000;
    color: #fff;
    position: absolute;
    right: 0px;
    top: -35px;
    width: 70px;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    font-weight: 700;
  }
  h2 {
    font-size: 40px;
    color: var(--black);
    margin-bottom: 70px;
  }
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  a {
    color: var(--black);
  }
}
</style>
