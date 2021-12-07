<template>
  <div class="site_main">
    <div class="profile_block">
      <div class="main_content">
        <div class=" col-xs-12 col-sm-12 ">
          <div class="row">
            <div class="col-sm-12 col-md-5 col-lg-5">
              <div
                class="round_background"
                data-aos="zoom-out-right"
                data-aos-delay="200"
              >
                <div class="photo_bg"></div>
              </div>
            </div>
            <div class="mob-view-pad col-sm-12 col-md-7 col-lg-7">
              <div
                class="left_pad25"
                data-aos="zoom-out-left"
                data-aos-delay="500"
              >
                <div class="desg_text"><h4>FullStack Developer</h4></div>
                <h1 @click="download()">Shiva Prasad</h1>
                <p>
                  I am a seasoned software expert who has developed products for
                  enterprise clients such as Lumen Technologies(CenturyLink Pvt
                  Ltd), Kreatio Software Pvt Ltd, and Synapten Labs Pvt Ltd, as
                  well as many venture-backed businesses. I specialize in
                  building applications specific to the business needs of my
                  clients. I have done work in software development, mobile app
                  creation, front-end/back-end web, database/server management
                  and application Deployment.
                </p>
                <div
                  class="site_buttons"
                  data-aos="zoom-in-right"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                  data-aos-duration="2000"
                >
                  <a
                    href="javscript:void(0)"
                    class="btns btn-primary"
                    @click="download()"
                    >Download CV</a
                  >
                  <a
                    href="javscript:void(0)"
                    class="btns btn-secondary"
                    @click="navigate()"
                    >Contact</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Animation from "../components/Animation.vue";
import Terminal from "../components/Terminal.vue";
// import router from "../router";
import Testmonial from "./testmonial.vue";
import axios from "axios";

@Options({
  components: {
    Animation,
    Terminal,
    Testmonial,
  },
})
export default class SiteMain extends Vue {
  mounted() {}

  navigate() {
    // alert('sasasa')
    this.$router.push({ path: "about" });
    // router.push('home');
  }
  download() {
    alert("sasas");
    axios
      .get("http://127.0.0.1:9000/Shiva_PO.pdf", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        responseType: "blob",
      })
      .then((resp) => {
        console.log(resp.data);
        var fileURL = window.URL.createObjectURL(new Blob([resp.data]));

        var fileLink = document.createElement("a");

        fileLink.href = fileURL;

        fileLink.setAttribute("download", "file.pdf");

        document.body.appendChild(fileLink);

        fileLink.click();
      });
    // axios({
    //   url: "https://jsonplaceholder.typicode.com/todos/1",

    //   method: "GET",

    //   responseType: "blob",
    // }).then((response) => {
    //   var fileURL = window.URL.createObjectURL(new Blob([response.data]));

    //   var fileLink = document.createElement("a");

    //   fileLink.href = fileURL;

    //   fileLink.setAttribute("download", "file.pdf");

    //   document.body.appendChild(fileLink);

    //   fileLink.click();
    // });
  }
}
</script>

<style lang="scss"></style>
