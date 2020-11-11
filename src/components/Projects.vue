<template>
  <div class="projectpage">
    <div class="left_block">
      <MobileDemo></MobileDemo>
    </div>
    <div class="right_block">
      <div class="project_block">
        <div class="img_block">
          <img src="../assets/images/whatsapp.jpg" />
        </div>
        <div class="description_block">
          <h3>Whatsapp Clone</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div class="git_redirection">
            <div>
              <a href="javascript:void(0)" target="_blank"
                ><i class="fa fa-github" aria-hidden="true"></i>Project Repo</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MobileDemo from "./MobileDemo.vue";

@Options({
  components: {
    MobileDemo,
  },
})
export default class Projects extends Vue {}
</script>

<style lang="scss">
.projectpage {
  display: flex;
  padding: 0px 50px 0px 50px;
  .left_block {
    padding: 30px 100px 0 30px;
    // width: 450px;
    // border: 2px solid red;
  }
  .right_block {
    padding: 30px 80px;
    .project_block {
      animation-name: animation-fadein;
      animation-duration: 2s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
      -webkit-animation-name: animation-fadein;
      -webkit-animation-duration: 2s;
      -webkit-animation-delay: 0.1s;
      -webkit-animation-fill-mode: forwards;
      -webkit-animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
      background: var(--photo-background-color);
      box-shadow: var(--photo-box-shadow);
      .img_block {
        img {
          width: 100%;
        }
      }
      .description_block {
        padding: 20px;
        h3 {
          margin: 0 0 30px 0;
          padding-bottom: 10px;
          display: inline-block;
          border-bottom: 4px solid var(--testimonial-underline-color);
          color: var(--dynamic-title-color);
        }
        p {
          color: var(--dynamic-title-color);
        }
        .git_redirection {
          display: flex;
          justify-content: flex-end;
          // flex-direction: row-reverse;
          div {
            display: inline-block;
            padding: 10px 15px;
            color: #fff;
            border-radius: 5px;
            background: var(--contentleftblock);
            a {
              i {
                padding-right: 10px;
              }
              text-decoration: none;
            }
            :hover{
                color: #fff;
                text-decoration: none;
              }
          }
        }
      }
    }
  }
}
@keyframes animation-fadein {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@-webkit-keyframes animation-fadein {
  from {
    -webkit-transform: scale(0);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1);
    opacity: 1;
  }
}
</style>
