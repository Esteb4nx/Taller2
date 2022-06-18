<template>
  <h2>Tic tac toe</h2>
  <div class="mt-3 turno d-flex justify-content-center align-items-center">
    <p id="alerta">Es el turno de: </p>
    <img width="60" height="60" src="@/assets/morty.png" alt="">
  </div>
  <div class="mt-4 tablero">
    <button v-for="(ficha,index) in gato.fichas" :key="index" class="casilla">
      <img v-if="ficha == 'Morty'" src="@/assets/morty.png" alt="Morty">
      <img v-if="ficha == 'Rick'" src="@/assets/rick.png" alt="Rick">
    </button>

  </div>
</template>

<script>
import { useGatoStore } from '@/stores/useGatoStore'


export default {

  setup(){
    const gato = useGatoStore()

    let turno = false
    return{
      gato,
      turno
    }
  }

}
</script>

<style>
.turno{
  width: 412px;
  height: 80px;
  background-color: #f7f07b;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#alerta{
  font-size: 24px;
  margin-right: 18px;
}

.tablero {
    display: grid;
    grid-template-rows: 140px 140px 140px;
    grid-template-columns: 140px 140px 140px;
}

.casilla {
  background: #444;
  border: 1px solid #555;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #AAA;
  margin: 4px;
}

.casilla:hover{
    background: rgb(117, 117, 117);
    border: 1px solid rgb(117, 117, 117);
    /* cursor: pointer; */
}

.casilla img{
  width: 100px;
}
</style>