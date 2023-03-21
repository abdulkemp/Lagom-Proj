<template>
  <div class="container">
    <!-- Modal -->
    <div
      class="modal fade"
      id="addUserModal"
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
          <div class="modal-body" @submit="register">
            <h1>Add User</h1>
            <label class="label">FirstName</label>
            <input
              class="input"
              v-model="firstName"
              type="text"
              placeholder="Name"
              required
            />
            <label class="label">LastName</label>
            <input
              class="input"
              v-model="lastName"
              type="text"
              placeholder="Surname"
              required
            />
            <label class="label">Email</label>
            <input
              class="input"
              v-model="emailAdd"
              type="email"
              placeholder="Email"
              required
            />
            <label class="label">Password</label>
            <input
              class="input"
              v-model="password"
              type="password"
              placeholder="Password"
              required
            />
            <button
              class="btn btn-success mt-3"
              @click="($event) => register()"
              data-bs-dismiss="modal"
            >
              Add
            </button>
          </div>
          <!-- <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      emailAdd: "",
      password: "",
      // imgPro: "",
    };
  },
  methods: {
    register() {
      // e.preventDefault();
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAdd: this.emailAdd,
        password: this.password,
      };
      this.$store.dispatch("register", payload);
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