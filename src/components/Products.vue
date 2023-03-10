<template>
  <div>
    <h1>afascasc</h1>
    <div class="col" v-for="item in items" :key="item.id">
      <div class="card">
        <img :src="item.image" class="card-img-top" alt="..."  style="width: 300px;"/>
        <div class="card-body">
          <h5 class="card-title">{{ item.prodName }}</h5>
          <p class="card-text">R {{ item.price }}.00</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
      const res = await axios.get(`https://lagom-project.onrender.com/products`);
      this.items = res.data.results;
      console.log(res);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>