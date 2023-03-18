<template>
  <div class="container">
    <!-- Modal -->
    <div
      class="modal fade"
      id="addProductModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" @submit="addProduct">
            <h1>Add Product</h1>
            <label class="label">Product Name</label>
            <input
              class="input"
              v-model="prodName"
              type="text"
              placeholder="Product Name"
              required
            />
            <label class="label">Price</label>
            <input
              class="input"
              v-model="price"
              type="text"
              placeholder="R"
              required
            />
            <label class="label">Category</label>
            <input
              class="input"
              v-model="category"
              type="text"
              placeholder="Name"
              required
            />
            <label class="label">Quantity</label>
            <input
              class="input"
              v-model="quantity"
              type="text"
              placeholder="0"
              required
            />
            <label class="label">Image</label>
            <input
              class="input"
              v-model="image"
              type="text"
              placeholder="http://"
              required
            />
            <button
              class="btn btn-success mt-3"
              type="submit"
              @click="($event) => addProduct()"
            >
              Add
            </button>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "AddProducts",
  data() {
    return {
      prodName: "",
      price: "",
      category: "",
      quantity: "",
      image: "",
    };
  },
  // created() {
  //   this.addProducts();
  // },
  methods: {
    addProduct() {
      // e.preventDefault();
      const payload = {
        prodName: this.prodName,
        price: this.price,
        category: this.category,
        quantity: this.quantity,
        image: this.image,
      };
      this.$store.dispatch("addProduct", payload);
    },
  },
};
</script>
<style scoped>
.modal-body {
  display: flex;
  flex-direction: column;
}
</style>