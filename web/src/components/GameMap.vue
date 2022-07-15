<template>
<div ref="parent" class="game-map">
  <canvas ref="canvas" tabindex="0"></canvas>
</div>
</template>

<script>
import {GameMapUtil} from "@/assets/scripts/GameMapUtil";
import {ref,onMounted} from "vue";

export default {
  name: "GameMap",
  setup(){
    let parent = ref(null);
    let canvas = ref(null);
    onMounted(()=>{
      new GameMapUtil(canvas.value.getContext("2d"),parent.value);
    })
    return {
      parent,canvas
    };
  }
}
</script>

<style scoped>
div.game-map{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
}
</style>