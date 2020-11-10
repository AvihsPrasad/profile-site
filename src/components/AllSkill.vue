<template>
  <div class="allskillspage">
    <div class="containers">
      <div
        class="bgcolor"
        :class="data.className"
        v-for="(data, index) in list_skills"
        :key="index"
        :data-aos="data.animation"
        :data-aos-delay="100 * index"
      >
        <div class="card-image">
          <img
            class="logo"
            v-bind:src="require('../assets/images/' + data.skillname)"
          />
        </div>
        <div class="card-text">
          <p>{{ data.disp }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { testimonialdata } from "../mock/testimonialfulldetails";
import { skillsss } from "../mock/skillset";

@Options({
  components: {},
})
export default class AllSkils extends Vue {
    list_skills: any = [];

    mounted () {
        this.list_skills = skillsss;
    }
}
</script>

<style lang="scss">
$boxSpacing: 23px;
$gridSize: 200px;
$cornerRadius: $gridSize/2.1;

.allskillspage {
  margin: $boxSpacing;
  font-family: "Trebuchet MS", sans-serif;
  font-size: 15.5px;
}
.bgcolor {
  padding: 15px;
  background: var(--photo-background-color);
}

// * {
//   box-sizing: border-box;
// }

.allskillspage .containers {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($gridSize, $gridSize));
  grid-auto-rows: $gridSize;
  grid-auto-flow: row dense;
  grid-gap: $boxSpacing;
  justify-content: center;
}

.card-top,
.card-right,
.card-bottom,
.card-left {
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  width: 100%;
  border-radius: $cornerRadius;
  box-shadow: 0px 3px 9px 1px rgba(0, 10, 20, 0.2);
}

.card-top {
  flex-direction: column;
  grid-column: auto / span 1;
  grid-row: auto / span 2;
}

.card-right {
  flex-direction: row-reverse;
  grid-column: auto / span 2;
  grid-row: auto / span 1;
}

.card-bottom {
  flex-direction: column-reverse;
  grid-column: auto / span 1;
  grid-row: auto / span 2;
}

.card-left {
  flex-direction: row;
  grid-column: auto / span 2;
  grid-row: auto / span 1;
}

.card-image {
  display: flex;
}

.card-top .card-image,
.card-bottom .card-image {
  height: 50%;
  width: 100%;
}

.card-left .card-image,
.card-right .card-image {
  height: 100%;
  width: 50%;
}

.card-image img {
  width: 100%;
  object-fit: cover;
}

.card-image img.logo {
  width: 100%;
  object-fit: contain;
}

.card-top img {
  border-radius: $cornerRadius $cornerRadius 0 0;
}

.card-right img {
  border-radius: 0 $cornerRadius $cornerRadius 0;
}

.card-bottom img {
  border-radius: 0 0 $cornerRadius $cornerRadius;
}

.card-left img {
  border-radius: $cornerRadius 0 0 $cornerRadius;
}

.card-text {
  align-self: center;
  padding: $boxSpacing;
}

.card-top .card-text {
  height: auto;
  width: auto;
  padding-bottom: $boxSpacing * 1.6;
}

.card-right .card-text {
  height: auto;
  width: 50%;
  padding-left: $boxSpacing * 1.6;
}

.card-bottom .card-text {
  height: auto;
  width: auto;
  padding-top: $boxSpacing * 1.6;
}

.card-left .card-text {
  height: auto;
  width: 50%;
  padding-right: $boxSpacing * 1.6;
}

.card-text p {
  margin: 0;
  line-height: 1.35em;
  color: var(--menu-hover-color);
}

@media (max-width: 500px) {
  .card-top {
    flex-direction: row;
    grid-column: auto / span 2;
    grid-row: auto / span 1;
  }

  .card-bottom {
    flex-direction: row-reverse;
    grid-column: auto / span 2;
    grid-row: auto / span 1;
  }

  .card-top .card-image,
  .card-bottom .card-image {
    height: 100%;
    width: 50%;
  }

  .card-top img {
    border-radius: $cornerRadius 0 0 $cornerRadius;
  }

  .card-bottom img {
    border-radius: 0 $cornerRadius $cornerRadius 0;
  }

  .card-top .card-text {
    height: auto;
    width: 50%;
    padding-right: $boxSpacing * 1.6;
  }

  .card-bottom .card-text {
    height: auto;
    width: 50%;
    padding-left: $boxSpacing * 1.6;
  }
}

@media (max-width: 400px) {
  .card-image {
    width: 38% !important;
  }

  .card-text {
    width: 62% !important;
  }
}
</style>
