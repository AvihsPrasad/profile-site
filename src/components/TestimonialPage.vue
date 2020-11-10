<template>
  <div class="testipage">
    <div
      class="main_block"
      v-for="(data, index) in TestimonialData"
      :key="index"
    >
      <div class="box">
        <div class="wrapper" 
            :data-aos="data.animation">
          <div
            class="left_block"
            :data-aos="data.imganimation"
            data-aos-delay="100"
          >
            <span>
              <img
                v-bind:src="require('../assets/images/' + data.image)"
                :alt="data.name"
              />
            </span>
          </div>
          <div
            class="right_block"
            :data-aos="data.contentanimation"
            data-aos-delay="200"
          >
            <h2>{{ data.name }}</h2>
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

<style lang="scss">
.testipage {
  //   overflow-x: clip;
  padding: 40px 10%;
  .main_block:last-child {
    margin-bottom: 50px;
  }
  .main_block {
    display: flex;
    // padding: 40px 40px;
    .box {
      border-radius: 10px;
      //   background-color: var(--slidedblock);
      margin-bottom: 20px;
      padding: 20px; /* Added a percentage value for top/bottom padding to keep the wrapper inside of the parent */

      //   -webkit-transform: skewY(-5deg);
      //   -moz-transform: skewY(-5deg);
      //   -ms-transform: skewY(-5deg);
      //   -o-transform: skewY(-5deg);
      //   transform: skewY(-5deg);
    }

    .box > .wrapper {
      //   -webkit-transform: skewY(5deg);
      //   -moz-transform: skewY(5deg);
      //   -ms-transform: skewY(5deg);
      //   -o-transform: skewY(5deg);
      //   transform: skewY(5deg);
      padding: 10px;
      border-radius: 10px;
      background: var(--photo-background-color);
      box-shadow: var(--photo-box-shadow);
      display: flex;
      //   div {
      //     width: 50%;
      //     border-bottom: 1px dashed var(--testimonial-block-text);
      //   }
    }
    .left_block {
      padding-right: 40px;
      text-align: center;
      span {
        display: inline-block;
        // padding: 10px;
        // border-radius: 10px;
        // background: var(--photo-background-color);
        // box-shadow: var(--photo-box-shadow);
        img {
          width: 400px;
          height: 400px;
          border-radius: 10px 0  0 10px ;
        }
      }
    }
    .right_block {
      // padding: 40px 0;
      line-height: 30px;
      word-spacing: 8px;
      color: var(--testimonial-block-text);
      p {
        margin-bottom: 0;
      }
    }
  }
}
</style>
