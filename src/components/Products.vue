<template>
  <div class="alles" v-if="items">
    <div class="line"></div>
    <div class="prod container">
      <div class="row">
        <div class="col-md-4 mt-5" v-for="item in items" :key="item.id">
          <div class="card">
            <div class="ima">
              <img
                :src="item.image"
                class="card-img-top"
                alt="..."
                style="height: 20rem; max-width: 30rem"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.prodName }}</h5>
              <!-- <p class="card-text">R {{ item.price }}</p> -->
              <button class="bt">Add to cart</button>
              <button
                type="button"
                class="bt1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalFullscreen"
                :id="item.id"
              >
                Show more...
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    <SingleProduct />
  </div>

  <div v-else>
    <Spinner />
  </div>
</template>
  
<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
import SingleProduct from "../components/SingleProduct.vue";
export default {
  name: "products",
  components: {
    Footer,
    SingleProduct,
  },
  data() {
    return {
      items: this.$store.state.products,
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const res = await axios.get(
        `https://lagom-project.onrender.com/products`
      );
      this.items = res.data.results;
      console.log(res);
    },
  },
};
</script>
  
<style>
.card {
  width: 20rem;
  /* height: 10rem; */
}
.line {
  border: 1px solid black;
  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-left: 5rem;
  margin-right: 5rem;
}
.col {
  justify-content: center;
  margin: 0;
  padding: 0;
}
.col-md-4 {
  display: flex;
  justify-content: center;
  align-content: center;
}
.bt {
  width: 7rem;
  float: left;
  background-color: rgba(31, 31, 241, 0.733);
  border: 1px solid rgb(31, 31, 241);
  border-radius: 5px;
}
.bt1 {
  width: 7rem;
  float: right;
  background-color: rgba(31, 241, 49, 0.733);
  border: 1px solid rgb(31, 241, 49);
  border-radius: 5px;
}
.bt1:hover {
  background-color: green;
  border: 1px solid rgba(31, 241, 49, 0.733);
  color: white;
}
.bt:hover {
  background-color: rgba(27, 27, 141, 0.781);
  border: 1px solid rgba(31, 31, 241, 0.733);
  color: white;
}
</style>