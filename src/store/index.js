import { createStore } from 'vuex'
import axios from 'axios'
const lagomURL = "https://localhost:8080/"
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
    showSpinner(state){
      return state.showSpinner
    }
  },
  mutations: {
    setProducts(state, value){
      state.products = value
    },
    setUsers(state, value){
      state.products = value
    },
    setProduct(state, value){
      state.products = value
    },
    setMessage(state, value){
      state.products = value
    },
    setUser(state, value){
      state.products = value
    },
    setSpinner(state, value){
      state.products = value
    }
  },
  actions: {
    async fetchProducts(context){
      const res = await axios.get(`${lagomURL}products`)
      const {results, err} = await res.data;
      if (results) {
        context.commit('setProducts', results)
      } else {
        context.commit(err)
      }
    },
    async register(context, payload){
      console.log(payload);
      fetch(`${lagomURL}register`, {
        method: 'POST',
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(payload)
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
    },

  },
  modules: {
  }
})
