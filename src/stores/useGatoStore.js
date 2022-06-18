import { defineStore } from 'pinia'

export const useGatoStore = defineStore({
  id: 'gato',
  state: () => ({
    fichas:["","","Morty","Rick","Rick","","","",""]
  }),
  actions: {
    cambiarEstado(state,index,estado){
      state.fichas[index]=estado;
    }
  }
})

