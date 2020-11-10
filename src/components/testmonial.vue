<template>
  <div class="testimonial_page" data-aos="zoom-in" data-aos-delay="200">
    <div class="">
      <h2>Testimonials</h2>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner testimonial-carousel">
          <div
            class="item container-fluid"
            v-for="(data, index) in TestimonialData"
            :key="index"
            :class="index == 0 ? 'active' : 'null'"
          >
            <div
              class="testimonial-item col-sm-6"
              v-for="list in data.block"
              :key="list"
            >
              <div class="blocks">
                <div class="testimonial-picture">
                  <img
                    v-bind:src="require('../assets/images/' + list.image)"
                    :alt="list.name"
                  />
                </div>
                <p>{{ list.disp }}</p>
                <div class="testimonial-author-info">
                  <h5 class="testimonial-author">{{ list.name }}</h5>
                  <p class="testimonial-firm">{{ list.designation }}</p>
                  <div><a href="/testimonials">Read More...</a></div>
                </div>
                <div class="testimonial-icon">
                  <i class="fa fa-quote-left"></i>
                </div>
                <div class="testimonial-icon-big">
                  <i class="fa fa-quote-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li
            data-target="#myCarousel"
            :data-slide-to="index"
            :class="index == 0 ? 'active' : 'null'"
            v-for="(data, index) in TestimonialData"
            :key="index"
          ></li>
          <!-- <li data-target="#myCarousel" data-slide-to="1"></li> -->
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Animation from "../components/Animation.vue";
import Terminal from "../components/Terminal.vue";
import { testimonial } from "../mock/testimonial";

@Options({
  components: {
    Animation,
    Terminal
  }
})
export default class Testmonial extends Vue {
  TestimonialData: any = {};
  mounted() {
    this.TestimonialData = testimonial;
    console.log(testimonial);
  }
}
</script>

<style lang="scss"></style>
