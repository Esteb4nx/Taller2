import { defineStore } from 'pinia'

export const useGatoStore = defineStore({
  id: 'gato',
  state: () => ({
    turno: false,
    fichas:["","","","","","","","",""]
  }),

  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    cambiarEstado(index){
      console.log(this.fichas[index])
      if(this.fichas[index] == ""){
        if(this.turno == false){
          this.fichas[index]="Morty";
          this.turno = true;
        }else{
          this.fichas[index]="Rick";
          this.turno = false;
  
        }
      }
    }
  }
})

