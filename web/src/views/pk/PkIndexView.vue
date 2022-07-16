<template>
<play-ground :key="n" @click="refresh"></play-ground>
</template>

<script>
import PlayGround from "@/components/PlayGround";
import {ref} from "vue"
export default {
  components: {
    PlayGround
  },
  setup() {
    let n = ref(0);
    const refresh = () => {
      n.value++;
    };
    return {
      n, refresh
    }
  },
}
</script>

<style scoped>

</style>