import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products:[
      {
        id: 1,
        title: 'Дюшес',
        type: 'duchess',
        color: '#f7b43f',
        price: 5
      },
      {
        id: 2,
        title: 'Лимонад',
        type: 'lemonade',
        color: '#d35519',
        price: 7
      },
      {
        id: 3,
        title: 'Тархун',
        type: 'tarhun',
        color: '#19d71d',
        price: 15
      }
    ],
    selectedJuice: {},
    permission: false,
    purse: 200,
    filling: 0,
    done: false,
    empty: true,
  },

  getters: {
    getProducts(state) {
      return state.products;
    },
    getPurse(state) {
      return state.purse;
    },
    getJuice(state) {
      return state.selectedJuice
    },
    getPermission(state) {
      return state.permission
    },
    getDone(state){
      return state.done
    },
    getEmpty(state){
      return state.empty
    }
  },
  mutations: {
    setPurse(state){
      state.purse -= state.selectedJuice.price
    },
    setDone(state, payload){
      state.done = payload;
    },
    setSelectedJuice(state, payload){
      state.selectedJuice = payload
    },
    setPermission(state, payload){
      state.permission = payload
    },
    setEmpty(state, payload){
      state.empty = payload;
    }
  },
  actions: {
    setSelectedProduct({getters, commit}, id){
      
      const purse = getters.getPurse;
      const product = getters.getProducts.find(p => p.id == id);
      const done = getters.getDone;

      if((purse >= product.price) && !done){
        commit('setSelectedJuice', product);
        commit('setPermission', true);
      } else {
        commit('setPermission', false);
      }
    },

    async setPour({getters, commit}){
      const permission = getters.getPermission;
      const done = getters.getDone;

      if(permission && !done){

        const audio = await new Audio('juice.mp3');
        audio.play();

        commit('setEmpty', false);
        commit('setDone', true);

         new Promise(() => {
          setTimeout(()=>{
            commit('setPurse');
            commit('setSelectedJuice', {});
            commit('setPermission', false);
            commit('setDone', false);
          }, 5000)
        })
      }
    },
    setDrink({getters, commit}){
      const empty = getters.getEmpty;
      if(!empty){
        commit('setSelectedJuice', {});
        commit('setDone', false);
        commit('setPermission', false);
        commit('setEmpty', true);
      }
    }
  }
})