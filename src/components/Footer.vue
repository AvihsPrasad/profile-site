<template>
  <div class="footer" data-aos="zoom-in" data-aos-delay="200">
    <footer>
      <div class="social-butns">
        <a class="btn1 facebook" href="#"><i class="fa fa-facebook"></i></a
        ><a class="btn1 twitter" href="https://www.instagram.com/avihsprasad/" target="_blank"><i class="fa fa-instagram"></i></a
        ><a class="btn1 google" href="#"><i class="fa fa-google"></i></a
        ><a class="btn1 dribbble" href="https://github.com/AvihsPrasad" target="_blank"><i class="fa fa-github"></i></a
        ><a class="btn1 skype" href="https://www.linkedin.com/in/shiva-prasad-2738888a/" target="_blank"><i class="fa fa-linkedin"></i></a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Fotter extends Vue {}
</script>

<style lang="scss">
.social-butns .btn1,
.social-butns .btn1:before,
.social-butns .btn1 .fa {
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  -webkit-transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
  transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
}
.social-butns .btn1:before {
  top: 90%;
  left: -110%;
}
.social-butns .btn1 .fa {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}
.social-butns .btn1.facebook:before {
  background-color: #3b5998;
}
.social-butns .btn1.facebook .fa {
  color: #3b5998;
}
.social-butns .btn1.twitter:before {
  background-color: #8a3ab9;
}
.social-butns .btn1.twitter .fa {
  color: #8a3ab9;
}
.social-butns .btn1.google:before {
  background-color: #dc4a38;
}
.social-butns .btn1.google .fa {
  color: #dc4a38;
}
.social-butns .btn1.dribbble:before {
  background-color: #1a1c20;
}
.social-butns .btn1.dribbble .fa {
  color: #1a1c20;
}
.social-butns .btn1.skype:before {
  background-color: #00aff0;
}
.social-butns .btn1.skype .fa {
  color: #00aff0;
}
.social-butns .btn1:focus:before,
.social-butns .btn1:hover:before {
  top: -10%;
  left: -10%;
}
.social-butns .btn1:focus .fa,
.social-butns .btn1:hover .fa {
  color: #fff;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.social-butns {
  height: 90px;
  // margin: auto;
  font-size: 0;
  text-align: center;
  // position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.social-butns .btn1 {
  display: inline-block;
  // background-color: #fff;
  width: 90px;
  height: 90px;
  line-height: 90px;
  margin: 0 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 28%;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  opacity: 0.99;
}
.social-butns .btn1:before {
  content: "";
  width: 120%;
  height: 120%;
  position: absolute;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.social-butns .btn1 .fa {
  font-size: 38px;
  vertical-align: middle;
}
</style>
