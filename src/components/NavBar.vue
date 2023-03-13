<template>
  <div>
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h5 class="text-white h4">Collapsed content</h5>
        <span class="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>

    <nav class="navbar navbar-light fixed-top">
      <div class="container-fluid">
        <img
          src="https://i.postimg.cc/26C74zH7/lagom-high-resolution-logo-black-on-transparent-background.png"
          class="lagom"
          alt=""
          srcset=""
        />
        <div class="tog">
          <button
            class="navbar-toggler navbar-toggler-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          class="offcanvas off offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <img
              src="https://i.postimg.cc/rswxMq2P/lagom-low-resolution-logo-black-on-transparent-background.png"
              class="lagom"
              style="padding-left: 3rem;"
              alt=""
              srcset=""
            />
            <button
              type="button"
              class="btn-close btn-close-white text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="nav-line"></div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-center">
              <li class="nav-item">
                <router-link to="/" class="nav-links">Home</router-link>
                </li>
              <li class="nav-item">
                <router-link class="nav-links" to="/about" >About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-links" to="/login" >Login/Register</router-link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.lagom {
  height: 2rem;
  padding-left: 3rem;
}
.navbar-toggler {
    border: none;
}
.tog{
    padding-right: 3rem;
}
.off {
  background: rgba(214, 213, 213, 0.349);
  color: white;
}
.nav-links{
  text-decoration: none;
  color: white;
}
.d-flex{
  margin-top: 10rem;
}
.btn{
  background: black;
  color: white;
}
.btn:hover{
  background: white;
  color: black;
}
.nav-line{
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  border: 1px solid black;
}
</style>