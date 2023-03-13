<template>
  <div>
    <NavBar />
    <div class="whole">
      <div class="land">
        <p>
          <img
          src="https://i.postimg.cc/YS2mQtYk/passionate-black-male-singer-performing-against-red-background-singing-into-microphone-wearing-party.jpg"
          alt=""
          srcset=""
          class="landing"
          />
        </p>
      </div>
      <div class="container">
        <div class="caro">
          <div
            id="carouselExampleControls"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img
                  src="https://i.postimg.cc/26C74zH7/lagom-high-resolution-logo-black-on-transparent-background.png"
                  class="d-block w-100 caro-img"
                  alt=""
                />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img
                  src="https://i.postimg.cc/wMTRBMwn/bcec46649a0f62eaf77aad7681aced97.jpg"
                  class="d-block w-100 caro-img"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://i.postimg.cc/Rhs6Jm8h/ftw-womens-clothing-banner-2020.jpg"
                  class="d-block w-100 caro-img"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://i.postimg.cc/05cJBGQv/kids-Buying-Guide.webp"
                  class="d-block w-100 caro-img"
                  alt=""
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <products />
    </div>
    </div>
    
</template>

<script>
import NavBar from "../components/NavBar.vue";
import products from "../components/Products.vue"
export default {
  name: "HomeView",
  components: {
    NavBar,
    products,
  },
  
};

</script>

<style>
.holder {
  border: 1px solid black;
  margin-left: 4rem;
  margin-right: 4rem;
  margin-top: 2rem;
}
.container {
  /* border: 1px solid red; */
  height: 25rem;
}

.caro-img {
  height: 16rem;
}

.landing{
  width: 100%;
  max-height: 100vh;
}

.caro {
  margin-top: 5rem;
  margin-bottom: 5rem;
  height: 10rem;
}


</style>