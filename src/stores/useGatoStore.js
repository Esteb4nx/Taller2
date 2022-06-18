import { defineStore } from 'pinia'

export const useGatoStore = defineStore({
  id: 'gato',
  state: () => ({
    turno: false,
    contador: 0,
    ganador: '',
    fichas:["","","","","","","","",""],
    default:["","","","","","","","",""]

  }),

  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    cambiarEstado(index){
      if(this.fichas[index] == ""){
        if(this.turno == false){
          this.fichas[index]="Morty";
          this.turno = true;
          this.contador++;
          this.validarGanador()
          if(this.ganador != ''){
            for (let index = 0; index < this.fichas.length; index++) {
              this.fichas[index] = this.ganador;
              
            }
          }
        }else{
          this.fichas[index]="Rick";
          this.turno = false;
          this.contador++;

          this.validarGanador()
          if(this.ganador != ''){
            for (let index = 0; index < this.fichas.length; index++) {
              this.fichas[index] = this.ganador;
              
            }
          }
        }
      }
    },
    validarGanador(){
      //Casillas Horizontales
      if(this.fichas[0] == this.fichas[1] && this.fichas[1] == this.fichas[2]){
        if(this.fichas[0] != ''){
          if(this.fichas[0] == 'Morty'){
            this.ganador = 'Morty'
          }

          if(this.fichas[0] == 'Rick'){
            this.ganador = 'Rick'
          }
        }
      }

      if(this.fichas[3] == this.fichas[4] && this.fichas[4] == this.fichas[5]){
        if(this.fichas[3] != ''){
          if(this.fichas[3] == 'Morty'){
            this.ganador = 'Morty'
          }

          if(this.fichas[3] == 'Rick'){
            this.ganador = 'Rick'
          }
        }
      }

      if(this.fichas[6] == this.fichas[7] && this.fichas[7] == this.fichas[8]){
        if(this.fichas[6] != ''){
          if(this.fichas[6] == 'Morty'){
            this.ganador = 'Morty'
          }

          if(this.fichas[6] == 'Rick'){
            this.ganador = 'Rick'
          }
        }
      }


      // Casillas verticales
      if(this.fichas[0] == this.fichas[3] && this.fichas[3] == this.fichas[6]){
        if(this.fichas[0] != ''){
          if(this.fichas[0] == 'Morty'){
            this.ganador = 'Morty'
          }

          if(this.fichas[0] == 'Rick'){
            this.ganador = 'Rick'
          }
        }
      }

      if(this.fichas[1] == this.fichas[4] && this.fichas[4] == this.fichas[7]){
        if(this.fichas[1] != ''){
          if(this.fichas[1] == 'Morty'){
            this.ganador = 'Morty'
          }

          if(this.fichas[1] == 'Rick'){
            this.ganador = 'Rick'
          }
        }
      }

      if(this.fichas[2] == this.fichas[5] && this.fichas[5] == this.fichas[8]){
        if(this.fichas[2] != ''){
          if(this.fichas[2] == 'Morty'){
            this.ganador = 'Morty'
          }

          if(this.fichas[2] == 'Rick'){
            this.ganador = 'Rick'
          }
        }
      }

      // Casillas diagonales
      if(this.fichas[0] == this.fichas[4] && this.fichas[4] == this.fichas[8]){
        if(this.fichas[0] != ''){
          if(this.fichas[0] == 'Morty'){
            this.ganador = 'Morty'
          }

          if(this.fichas[0] == 'Rick'){
            this.ganador = 'Rick'
          }
        }
      }

      if(this.fichas[2] == this.fichas[4] && this.fichas[4] == this.fichas[6]){
        if(this.fichas[2] != ''){
          if(this.fichas[2] == 'Morty'){
            this.ganador = 'Morty'
          }

          if(this.fichas[2] == 'Rick'){
            this.ganador = 'Rick'
          }
        }
      }
    },
    reiniciar(){
      this.fichas = ["","","","","","","","",""];
      this.ganador = ''
      this.contador = 0
    }
  }
})

