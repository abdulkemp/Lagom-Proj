<template>
  <div>
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
              <p class="card-text">R {{ item.price }}</p>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
export default {
  name: "products",
  components: {
    Footer,
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


</style>