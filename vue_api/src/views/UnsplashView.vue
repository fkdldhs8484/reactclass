<template>
  <div>
    <HeaderCont />
    <TitleCont name1="unsplash" name2="reference api" />
    <section class="cont__refer">
      <div class="container">
        <div class="unsplash__inner">
          <div class="unsplash__slider">
            <div class="container">
              <h2>Unsplash Random</h2>
              <swiper
                :effect="'cards'"
                :grabCursor="true"
                :modules="modules"
                class="mySwiper"
              >
                <swiper-slide v-for="random in randoms" :key="random.id">
                  <li>
                    <a :href="`https://unsplash.com/photos/${random.id}`">
                      <img
                        :src="`${random.urls.regular}`"
                        :alt="`${random.urls.alt_description}`"
                      />
                    </a>
                  </li>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div className="unsplash__search">
            <div className="container">
              <h2>검색하기</h2>
              <form @submit.prevent="SearchSplashes()">
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
          <div className="unsplash__btn">
            <div className="container">
              <button
                type="submit"
                v-on:click="SearchSplashes(title.text)"
                v-for="title in titles"
                v-bind:key="title.text"
              >
                {{ title.text }}
              </button>
            </div>
          </div>
          <div class="unsplash__images">
            <ul>
              <li v-for="splash in splashes" :key="splash.id">
                <a :href="`https://unsplash.com/photos/${splash.id}`">
                  <img :src="splash.urls.regular" :alt="splash.id" />
                </a>
              </li>
            </ul>
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
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

export default {
  components: {
    HeaderCont,
    TitleCont,
    FooterCont,
    ContactCont,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const randoms = ref([]);
    const splashes = ref([]);
    const search = ref("landscape");

    const SearchSplashes = (e) => {
      fetch(
        `https://api.unsplash.com/search/photos?client_id=brs7PjWiLCgs71PZNkng8o9cZsgWxwyvUpc45Yjs5WY&query=${search.value}`
      )
        .then((response) => response.json())
        .then((result) => {
          splashes.value = result.results;
          search.value = "";
          search.value = e;
        })
        .catch((error) => console.log("error", error));
    };
    SearchSplashes();

    const RandomSplashes = () => {
      fetch(
        "https://api.unsplash.com/photos/random?client_id=brs7PjWiLCgs71PZNkng8o9cZsgWxwyvUpc45Yjs5WY&count=20"
      )
        .then((response) => response.json())
        .then((result) => (splashes.value = result))
        .catch((error) => console.log(error));
    };
    RandomSplashes();

    return {
      splashes,
      search,
      randoms,
      SearchSplashes,
      RandomSplashes,
      modules: [EffectCards],
    };
  },
  data: function () {
    return {
      titles: [
        { text: "spring" },
        { text: "summer" },
        { text: "fall" },
        { text: "winter" },
        { text: "soccer" },
        { text: "space" },
        { text: "pretty" },
      ],
    };
  },
};
</script>

<style lang="scss">
.unsplash__images {
  ul {
    column-count: 4;
    column-gap: 20px;
    width: 100%;
    li {
      margin-bottom: 20px;
      img {
        border-radius: 5px;
      }
    }
  }
}
.unsplash__search {
  margin-bottom: 100px;
  form {
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
.unsplash__inner {
  h2 {
    font-size: 40px;
    color: var(--black);
    margin-bottom: 70px;
  }
  .swiper {
    width: 240px;
    height: 320px;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }
  a {
    color: var(--white);
  }
}
.unsplash__btn {
  margin: 30px 0 50px;
  button {
    margin-right: 10px;
    padding: 5px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    background: #000;
    color: #fff;
    cursor: pointer;
    &:hover {
      border: 1px solid #000;
      background: #fff;
      color: #000;
    }
  }
}
</style>
