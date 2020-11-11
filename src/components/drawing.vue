<template>
  <div style="text-align:center;">
    <h2>COMMING SOON..</h2>
    <div class="drawingpage">
      <Animation></Animation>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Animation from "../components/Animation.vue";

@Options({
  components: {
    Animation
  }
})
export default class Drawing extends Vue {}
</script>

<style lang="scss">
.drawingpage {
  display: flex;
  justify-content: center;
  // text-align: center;
}
</style>
