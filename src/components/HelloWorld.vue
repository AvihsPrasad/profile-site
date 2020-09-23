<template>
  <div class="dasboard">
    <SiteMain></SiteMain>
    <Animation></Animation>
    <Terminal></Terminal>
    <Testmonial></Testmonial>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Animation from "../components/Animation.vue";
import Terminal from "../components/Terminal.vue";
import Testmonial from "./testmonial.vue";
import SiteMain from "./SiteMain.vue";

@Options({
  components: {
    Animation,
    Terminal,
    Testmonial,
    SiteMain,
  },
})
export default class HelloWorld extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
