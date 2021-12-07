<template>
  <header class="header">
    <nav data-aos="fade-down" data-aos-delay="100">
      <div class="left-block">
        <router-link to="/">
          <span class="letter">S</span>
          <span class="user_name"><b>Shiva </b>Prasad</span>
        </router-link>
      </div>
      <div class="right-block">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/testimonials">Testimonials</router-link></li>
          <li><router-link to="/hobbies">Hobbies</router-link></li>
          <li><router-link to="/about">Contact</router-link></li>
          <li>
            <div class="toggleWrapper">
              <input type="checkbox" class="dn" id="dn" v-model="darkMode" />
              <label for="dn" class="toggle">
                <span class="toggle__handler">
                  <span class="crater crater--1"></span>
                  <span class="crater crater--2"></span>
                  <span class="crater crater--3"></span>
                </span>
                <span class="star star--1"></span>
                <span class="star star--2"></span>
                <span class="star star--3"></span>
                <span class="star star--4"></span>
                <span class="star star--5"></span>
                <span class="star star--6"></span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Watch } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class Header extends Vue {
  darkMode = false;

  mounted() {
    const bodyElement = document.body;
    bodyElement.classList.add("app-background");
    console.log(bodyElement);
    const htmlElement = document.documentElement;
    console.log(htmlElement);
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      htmlElement.setAttribute("theme", "dark");
      this.darkMode = true;
    } else {
      htmlElement.setAttribute("theme", "light");
      this.darkMode = false;
    }
  }

  @Watch("darkMode")
  onChildChanged() {
    const htmlElement = document.documentElement;

    if (this.darkMode) {
      localStorage.setItem("theme", "dark");
      htmlElement.setAttribute("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      htmlElement.setAttribute("theme", "light");
    }
  }
}
</script>

<style lang="scss">
.toggleWrapper {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // overflow: hidden;
  // padding: 0 200px;
  // transform: translate3d(-50%, -50%, 0);

  input {
    position: absolute;
    left: -99em;
  }
}

.toggle {
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 60px;
  height: 30px;
  background-color: #83d8ff;
  border-radius: 90px - 6;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.toggle__handler {
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 3px;
  left: 3px;
  width: 30px - 6;
  height: 30px - 6;
  background-color: #ffcf96;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-45deg);

  .crater {
    position: absolute;
    background-color: #e8cda5;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    border-radius: 100%;
  }

  .crater--1 {
    top: 8px;
    left: 5px;
    width: 3px;
    height: 3px;
  }

  .crater--2 {
    top: 15px;
    left: 10px;
    width: 4px;
    height: 4px;
  }

  .crater--3 {
    top: 3px;
    left: 16px;
    width: 6px;
    height: 6px;
  }
}

.star {
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
}

.star--1 {
  top: 5px;
  left: 20px;
  z-index: 0;
  width: 20px;
  height: 2.5px;
}

.star--2 {
  top: 12px;
  left: 20px;
  z-index: 1;
  width: 22px;
  height: 3px;
}

.star--3 {
  top: 18px;
  left: 30px;
  z-index: 0;
  width: 18px;
  height: 2.5px;
}

.star--4,
.star--5,
.star--6 {
  opacity: 0;
  transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.star--4 {
  top: 11px;
  left: 5px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px, 0, 0);
}

.star--5 {
  top: 23px;
  left: 16px;
  z-index: 0;
  width: 3px;
  height: 3px;
  transform: translate3d(3px, 0, 0);
}

.star--6 {
  top: 21px;
  left: 9px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px, 0, 0);
}

input:checked {
  + .toggle {
    background-color: #749dd6;

    &:before {
      color: #749ed7;
    }

    &:after {
      color: #ffffff;
    }

    .toggle__handler {
      background-color: #ffe5b5;
      transform: translate3d(30px, 0, 0) rotate(0);

      .crater {
        opacity: 1;
      }
    }

    .star--1 {
      width: 2px;
      height: 2px;
    }

    .star--2 {
      width: 4px;
      height: 4px;
      transform: translate3d(-5px, 0, 0);
    }

    .star--3 {
      width: 2px;
      height: 2px;
      transform: translate3d(-7px, 0, 0);
    }

    .star--4,
    .star--5,
    .star--6 {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .star--4 {
      transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    .star--5 {
      transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    .star--6 {
      transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
  }
}
</style>
