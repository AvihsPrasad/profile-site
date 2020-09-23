<template>
  <div class="site_main">
    <div class="profile_block">
      <div class="main_content">
        <div class=" col-xs-12 col-sm-12 ">
          <div class="row">
            <div class="col-sm-12 col-md-5 col-lg-5">
              <div class="round_background">
                <div class="photo_bg"></div>
              </div>
            </div>
            <div class="col-sm-12 col-md-7 col-lg-7">
              <div class="left_pad25">
                <div class="desg_text"><h4>FullStack Developer</h4></div>
                <h1>Shiva Prasad</h1>
                <p>
                  I am a seasoned software expert who has developed products for
                  enterprise clients such as Lumen Technologies(CenturyLink Pvt Ltd), Kreatio Software Pvt Ltd, and
                  Synapten Labs Pvt Ltd, as well as many venture-backed
                  businesses. I specialize in building applications specific to
                  the business needs of my clients. I have done work in software
                  development, mobile app creation, front-end/back-end web,
                  database/server management and application Deployment.
                </p>
                <div class="site_buttons">
                  <a href="#" class="btns btn-primary">Download CV</a>
                  <a href="#" class="btns btn-secondary">Contact</a>
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
import Testmonial from "./testmonial.vue";

@Options({
  components: {
    Animation,
    Terminal,
    Testmonial,
  },
})
export default class SiteMain extends Vue {}
</script>

<style lang="scss"></style>
