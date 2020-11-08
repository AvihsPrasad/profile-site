<template>
  <div class="testipage">
    <div
      class="main_block"
      v-for="(data, index) in TestimonialData"
      :key="index"
      :data-aos="data.animation"
      data-aos-delay="400"
    >
      <div class="box">
        <div class="wrapper">
          <div class="left_block">
            <img
              v-bind:src="require('../assets/images/' + data.image)"
              :alt="data.name"
              :data-aos="data.imganimation"
              data-aos-delay="400"
            />
          </div>
          <div class="right_block">
            <p>{{ data.disp }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { testimonialdata } from "../mock/testimonialfulldetails";
import { testimonial } from "../mock/testimonial";

@Options({
  components: {},
})
export default class TestimonialPage extends Vue {
  TestimonialData: any = {};
  dummy: any = {};

  mounted() {
    this.TestimonialData = testimonialdata;
    console.log(testimonialdata);
    this.dummy = testimonial;
  }
}
</script>

<style lang="scss"></style>
