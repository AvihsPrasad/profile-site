<template>
  <div class="testimonial_page" data-aos="zoom-in" data-aos-delay="200">
    <div class="">
      <h2>Skills</h2>
      <!-- <a class="redirect" href="/skills">Know more....</a> -->
      <!-- <router-link to="/skills">Know more....</router-link> -->
      <div class="git_redirection">
            <div>
              <router-link to="/skills">Know more....</router-link>
            </div>
          </div>
      <div class="cards-list">
        <div class="card 1">
          <div class="card_image">
            <img src="../assets/images/Vue1.png" />
          </div>
          <div class="card_title title-white">
            <!-- <p>Card Title</p> -->
          </div>
        </div>

        <div class="card 2">
          <div class="card_image">
            <img src="../assets/images/electronjs.png" />
          </div>
          <div class="card_title title-white">
            <!-- <p>Card Title</p> -->
          </div>
        </div>

        <div class="card 3">
          <div class="card_image">
            <img src="../assets/images/node.png" />
          </div>
          <div class="card_title">
            <!-- <p>Card Title</p> -->
          </div>
        </div>
        <div class="card 4">
          <div class="card_image">
            <img src="../assets/images/github.svg" />
          </div>
          <div class="card_title">
            <!-- <p>Card Title</p> -->
          </div>
        </div>
        <div class="card 5">
          <div class="card_image">
            <img src="../assets/images/k8.png" />
          </div>
          <div class="card_title">
            <!-- <p>Card Title</p> -->
          </div>
        </div>
        <div class="card 6">
          <div class="card_image">
            <img src="../assets/images/angular.png" />
          </div>
          <div class="card_title">
            <!-- <p>Card Title</p> -->
          </div>
        </div>
        <div class="card 7">
          <div class="card_image">
            <img src="../assets/images/docker.webp" />
          </div>
          <div class="card_title">
            <!-- <p>Card Title</p> -->
          </div>
        </div>
        <div class="card 8">
          <div class="card_image">
            <img src="../assets/images/sass1.png" />
          </div>
          <div class="card_title">
            <!-- <p>Card Title</p> -->
          </div>
        </div>
        <div class="card 8">
          <div class="card_image">
            <img src="../assets/images/react.png" />
          </div>
          <div class="card_title">
            <!-- <p>Card Title</p> -->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class SkillsBlock extends Vue {
  active: any = "option1";
  option(data) {
    this.active = data;
  }
}
</script>

<style lang="scss">
.redirect{
    padding-left: 20px;
}
.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  margin: 30px auto;
  width: 120px;
  height: 120px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
  // border: 2px solid red;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  text-align: center;
  padding-top: 14px;
  background: var(--photo-background-color);
}

.card .card_image img {
  width: 90px;
  height: 90px;
  border-radius: 40px;
  object-fit: cover;
  padding: 10px;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -80px;
  height: 40px;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}

@media all and (max-width: 500px) {
  .card-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}

/*
.card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  background-image: url('https://i.redd.it/b3esnz5ra34y.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  transition: 0.4s;
}
*/
.git_redirection {
          display: inline-block;
          float: right;
          div {
            display: inline-block;
            padding: 10px 15px;
            color: #fff;
            border-radius: 5px;
            background: var(--contentleftblock);
            a { 
              text-decoration: none;
            }
            :hover{
                color: #fff;
                text-decoration: none;
              }
          }
        }
</style>
