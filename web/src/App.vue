<template>
  <div>
    <div>Bot昵称 :{{ bot_name }}</div>
    <div>Bot战力 :{{ bot_rating }}</div>
  </div>
</template>
<script>
import { getCurrentInstance } from "vue";
import { ref } from "vue";

export default {
  name: "App",
  setup: () => {
    const instance = getCurrentInstance();
    const that = instance.appContext.config.globalProperties;
    let bot_name = ref("");
    let bot_rating = ref("");
    that.$axios.get("http://127.0.0.1:3000/pk/getBotInfo").then(
      (response) => {
      bot_name.value = response.data.name;
      bot_rating.value = response.data.rating;
    });
    return {
      bot_name,
      bot_rating,
    };
  },
};
</script>
<style>
  body{
    background-image: url("@/assets/background.png");
    background-size: cover; 
  } /* a bug here:cover seems not work */
</style>
