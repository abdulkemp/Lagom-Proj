import { createStore } from 'vuex'
import axios from 'axios'
const lagomURL = "https://lagom-project.onrender.com/"
export default createStore({
  state: {
    products: null,
  },
  getters: {
  },
  mutations: {
    setProducts(state, value){
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
    }
  },
  modules: {
  }
})
