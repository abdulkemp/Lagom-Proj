<template>
  <div>
    <div class="top fixed-top">
      <div class="contain">
        <div class="navb align-items-center justify-content-between">
          <div>
            <img src="https://i.postimg.cc/26C74zH7/lagom-high-resolution-logo-black-on-transparent-background.png"
              class="lagom" alt="" srcset="" />
          </div>
          <input type="checkbox" id="nav-check">
          <label for="nav-check" class="nav-toggler">
            <span></span>
          </label>
          <nav class="nav">
            <ul class="cont">
              <li>
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li>
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li>
                <router-link class="nav-link" to="/admin">Admin</router-link>
              </li>
              <li>
                <router-link class="nav-link" to="/admins">Admin2</router-link>
              </li>
              <li>
                <router-link class="nav-link" to="/contact">Contact</router-link>
              </li>
              <li>
                <router-link class="nav-link" to="/login">Login/Register</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {};
</script>
 
<style>
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
.contain {
  max-width: 100%;
  margin-left: 2rem;
  margin-right: 3rem;
}
.navb {
  display: flex;
  flex-wrap: wrap;
}
.top {
  margin-top: 1rem;
}
/* .top .nav ul li {
  display:list-item;
} */
.top .nav ul li a {
  /* display: block; */
  font-size: 16px;
  color: white;
  transition: all 0.5s ease;
  text-align: left;
}
.top .nav ul li a:hover {
  color: #d6d6d6;
}
.top #nav-check {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.nav-toggler {
  height: 2rem;
  width: 3rem;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
}
.nav-toggler span {
  display: block;
  height: 4px;
  width: 25px;
  background-color: black;
  position: relative;
}
.nav-toggler span::before,
.nav-toggler span::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  left: 0;
}
.nav-toggler span::before {
  top: -8px;
}
.nav-toggler span::after {
  top: 8px;
}
.top .nav ul li {
  display: block;
  margin: 0;
  border-bottom: 1px solid black;
}
@media screen and (max-width: 1700px) {
  .nav-toggler {
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .nav-toggler:hover {
    background: rgba(128, 128, 128, 0.637);
  }
  .top .nav {
    position: absolute;
    right: 5px;
    top: 100%;
    background-color: rgba(0, 0, 0, 0.651);
    border: 1px solid black;
    opacity: 0;
    visibility: hidden;
  }
  .top #nav-check:checked~.nav {
    opacity: 2;
    visibility: visible;
  }
  .top #nav-check:checked~.nav-toggler span {
    background-color: transparent;
  }
  .top #nav-check:checked~.nav-toggler span::before {
    top: 0;
    transform: rotate(45deg);
  }
  .top #nav-check:checked~.nav-toggler span::after {
    top: 0;
    transform: rotate(-45deg);
  }
}
.lagom {
  height: 2rem;
  padding-left: 1rem;
}</style>