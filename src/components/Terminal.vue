<template>
  <div class="window">
    <div class="bar">
      <div class="btn"></div>
    </div>
    <div class="body">
      <pre class="pres"><div class="comment"># run this command:</div><div class="prompt">$ <span class="command">echo hi</span></div><div class="prompt">hi</div><div class="prompt">$ <span class="pulse">_</span></div></pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Terminal extends Vue {}
</script>

<style lang="scss">

.window {
  width: 80%;
  margin: 0 auto 2rem;
  box-shadow: 0 0.25rem 0.5rem #12181e;
  border-radius: 0 0 0.1rem 0.1rem;
}

.bar {
  background: #191919;
  height: 36px;
  border-radius: 0.5rem 0.5rem 0 0;
}

.btn, .btn::before, .btn::after {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  display: block;
}

.btn {
  background: #f6b73e;
  position: relative;
  margin-left: 38px;
  top: 12px;
  padding: 0;
  border: 0;
}
.btn::before, .btn::after {
  content: " ";
  position: absolute;
}
.btn::before {
  background: #f55551;
  margin-left: -20px;
}
.btn::after {
  background: #32c146;
  margin-left: 20px;
}

.body {
  height: 12em;
  background: #232323;
  padding: 18px;
}
.body .pres {
  margin: 0;
  background: transparent;
  color: #fff;
  border: 0;
  padding: 0;
}
.body .pulse {
  -webkit-animation: pulse 1s ease-in-out infinite;
  -moz-animation: pulse 1s ease-in-out infinite;
  animation: pulse 1s ease-in-out infinite;
}

@-webkit-keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.command {
  color: #32c146;
}

.comment {
  opacity: 0.5;
}

</style>
