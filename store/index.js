import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,
      token:'',
      formularios:{
          simple:false
      },
      app:{
        consejo:false
      },
      user:{
          userName:''
      }
    }),
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore
