<template>
  <div>
    <HeaderCont />
    <TitleCont name1="about" name2="reference api" />
    <ContantCont />
    <FooterCont />
  </div>
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import ContantCont from "@/components/ContantCont.vue";

export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContantCont,
  },
};
</script>
