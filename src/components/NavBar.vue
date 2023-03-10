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
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><router-link to="/"></router-link>Home<i
                    class="fa fa-home"
                    aria-hidden="true"
                  ></i
                ></a>
                <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  >Profile <i class="fa fa-user" aria-hidden="true"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  >Edit <i class="fa fa-pencil-square" aria-hidden="true"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  >Add Account
                  <i class="fa fa-plus-square" aria-hidden="true"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  >History <i class="fa fa-history" aria-hidden="true"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  >Buy <i class="fa fa-pencil-square" aria-hidden="true"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  >Credit <i class="fa fa-credit-card" aria-hidden="true"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  >Contact <i class="fa fa-compress" aria-hidden="true"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  >Help <i class="fa fa-info-circle" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
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
i {
  color: gold;
}
.lagom {
  height: 2rem;
  padding-left: 3rem;
}

.navbar-toggler {
    border: none;
    /* border: 2px solid black; */
  /* background-color: black; */
}
.tog{
    padding-right: 3rem;
}

.off {
  background: grey;
}


</style>