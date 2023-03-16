import { createStore } from 'vuex'
import axios from 'axios'
const lagomURL = "https://lagom-project.onrender.com/"
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
      const res = await axios.post(`${lagomURL}register`, payload);
      const {msg,err} = await res.data;
      if(msg){
        context.commit('setMessage',msg)
      }
      else{
        context.commit('setMessage',err)
      }
      // const {msg, err} =await res.data;
      // if(msg){
      //   router.push ('/login')
      // } 
      // else if (err){
      //   alert(err)
      // }
    }

  },
  modules: {
  }
})
