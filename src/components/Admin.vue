<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="row table-container">
        <div class="col-12">
          <h1>Users</h1>
          <button
            type="button"
            class="btn btn-success add-btn"
            data-bs-toggle="modal"
            data-bs-target="#addUserModal"
          >
            Add
          </button>
        </div>
        <div class="col">
          <table class="table is-striped is-bordered mt-2 is-fullwidth">
            <thead>
              <tr>
                <th>#</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Image</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in user" :key="item.userID ">
                <td>{{ item.userID }}</td>
                <td>{{ item.firstName }}</td>
                <td>{{ item.lastName }}</td>
                <td>{{ item.emailAdd }}</td>
                <td><img class="tableImg" :src="item.imgPro" alt="" /></td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#editUserModal"
                  >
                    Edit
                  </button>
                  <button class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row table-container">
        <div class="col-12">
          <h1>Products</h1>
          <button
            type="button"
            class="btn btn-success add-btn"
            data-bs-toggle="modal"
            data-bs-target="#addProductModal"
          >
            Add
          </button>
        </div>
        <div class="col">
          <table class="table is-striped is-bordered mt-2 is-fullwidth">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Image</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in product" :key="item.id" >
                <td>{{ item.id }}</td>
                <td>{{ item.prodName }}</td>
                <td>R {{ item.price }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.quantity }}</td>
                <td><img class="tableImg" :src="item.image" alt="" /></td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#editProductModal"
                  >
                    Edit
                  </button>
                  <button class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
export default {
  name: "admin-Comp",
  components: {
    NavBar
  },
  data() {
    return {
      product: [],
      user: [],
    };
  },
  created() {
    this.getProducts();
    this.getUsers();
  },
  methods: {
    async getProducts() {
      try {
        const response = await axios.get(
          "https://lagom-project.onrender.com/products"
        );
        this.product = response.data.results;
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },

    async getUsers() {
      try {
        const response = await axios.get(
          "https://lagom-project.onrender.com/users"
        );
        this.user = response.data.results;
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },

    async deleteProduct(id) {
      try {
        await axios.delete(`https://lagom-project.onrender.com/products/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.tableImg {
  height: 50px;
  width: 100px;
  object-fit: contain;
}

.row {
  width: 80rem;
  max-width: 100%;
  /* text-align: center; */
}

.add-btn {
  float: right;
}

tbody button {
  display: block;
  justify-content: center;
  align-items: center;
  width: 5rem;
  margin-top: 7px;
  height: 20px;
  text-align: center;
}

 /* tbody td{
  display: flex;
  justify-content: center;
  align-items: center;
} */

.table{
  border-bottom: 1px solid black;
  justify-content: center;
  align-items: center;
  /* border-collapse: collapse; */
}



.container{
  margin-top: 5rem;
  text-align: center;
}
/* .prod{
  margin-top: 3rem;
} */

@media screen and (max-width: 650px) {
  .container{
    display: flex;
    justify-content: center;
    align-content: center;
  }
  tbody td{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>