<template>
  <div>
    <h1>afascasc</h1>
    <div class="prod container">
      <div class="row">
        <div class="col-md-4" v-for="item in items" :key="item.id">
          <div class="card">
            <img :src="item.image" class="card-img-top" alt="..." style="height: 320px;width: 20rem;"/>
            <div class="card-body">
              <h5 class="card-title">{{ item.prodName }}</h5>
              <p class="card-text">R {{ item.price }}</p>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "products",
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
  max-width: 30rem;
  /* height: 10rem; */
}

.col{
  /* justify-content: center !important;// */
  /* align-content: center; */
}
.col{
  justify-content: center;
  margin: 0;
  padding: 0;
}

.col-md-4{
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 5px;
}
</style>