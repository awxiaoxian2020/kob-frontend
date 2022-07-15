<template>
<div class="playground">
<game-map></game-map>
</div>
</template>

<script>
import GameMap from "@/components/GameMap";
export default {
  name: "PlayGround",
  components:{
    GameMap
  }
}
</script>

<style scoped>
div.playground{
  width: 60vw;
  height: 70vh;
  margin: 5rem auto;
}
</style>