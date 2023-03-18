import { createStore } from "vuex";
import axios from "axios";
const arraylists = document.querySelector(".array-lists");
const lagomURL = "https://lagom-project.onrender.com/";
// import router from '../router/index'
export default createStore({
  state: {
    products: null,
    users: null,
    user: null,
    product: null,
    showSpinner: null,
    message: null,
  },
  getters: {
    showSpinner(state) {
      return state.showSpinner;
    },
  },
  mutations: {
    setProducts(state, value) {
      state.products = value;
    },
    setUsers(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.products = value;
    },
    setMessage(state, value) {
      state.products = value;
    },
    setUser(state, value) {
      state.products = value;
    },
    setSpinner(state, value) {
      state.products = value;
    },
    // post(state, value) {
    //   state.addProduct = value;
    // },
  },
  actions: {
    async fetchProducts(context) {
      const res = await axios.get(`${lagomURL}products`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit(err);
      }
    },
    async addProduct(context, payload) {
      console.log(payload);
      fetch(`https://lagom-project.onrender.com/product`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteProduct(context, payload) {
      console.log(payload);
      fetch(`https://lagom-project.onrender.com/product`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async register(context, payload) {
      console.log(payload);
      fetch(`https://lagom-project.onrender.com/register`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async login(context, payload) {
      console.log(payload);
      fetch(`https://lagom-project.onrender.com/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // console.log(err);
        });
      if (msg) {
        context.commit("setMessage", msg);
        router.push("/");
      } else {
        context.commit("setMessage", err);
      }
    },
    
  },
  
  modules: {},
});
