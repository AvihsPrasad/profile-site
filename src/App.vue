<template>
  <div>
    <div id="app_container">
      <!-- <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <router-view />-->
      <Header></Header>
      <router-view />
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script lang="ts">
import component from "*.vue";
import { Options, Vue } from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Header from "./components/Header.vue";
import SiteMain from "./components/SiteMain.vue";
import Footer from "./components/Footer.vue";

@Options({
  components: {
    Header,
    SiteMain,
    Footer,
  },
})
export default class App extends Vue {
  darkMode = false;

  mounted() {
    const bodyElement = document.body;
    bodyElement.classList.add("app-background");
    console.log(bodyElement);
    const htmlElement = document.documentElement;
    console.log(htmlElement);
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      htmlElement.setAttribute("theme", "dark");
      this.darkMode = true;
    } else {
      htmlElement.setAttribute("theme", "light");
      this.darkMode = false;
    }
    console.log(this.$route)
  }

  @Watch("darkMode")
  onChildChanged() {
    const htmlElement = document.documentElement;

    if (this.darkMode) {
      localStorage.setItem("theme", "dark");
      htmlElement.setAttribute("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      htmlElement.setAttribute("theme", "light");
    }
  }
}
</script>

<style lang="scss">
.white-logo {
  color: white;
  font-weight: bold;
}
.black-logo {
  color: black;
  font-weight: bold;
}
</style>
