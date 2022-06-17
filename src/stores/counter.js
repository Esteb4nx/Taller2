import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    fichas:["","","","","","","","",""]
  }),
  actions: {
    cambiarEstado(state,index,estado){
      state.fichas[index]=estado;
    }
  }
})
