<template>
  <h2>Tic tac toe</h2>

  <div v-if="gato.contador >= 8 && gato.ganador == ''" id="empate"
    class="mt-3 turno d-flex justify-content-center align-items-center">
    <p id="alerta">EMPATE </p>
  </div>
<div v-if="!(gato.contador >= 8 && gato.ganador == '')">
  <div v-if="gato.turno && gato.ganador == ''" id="rick"
    class="mt-3 turno d-flex justify-content-center align-items-center">
    <p id="alerta">Es el turno de: </p>
    <img width="60" height="60" src="@/assets/rick.png" alt="">

  </div>

  <div v-if="!gato.turno && gato.ganador == ''" id="morty"
    class="mt-3 turno d-flex justify-content-center align-items-center">
    <p id="alerta">Es el turno de: </p>
    <img width="60" height="60" src="@/assets/morty.png" alt="">
  </div>

  <div v-if="gato.ganador != ''" id="ganador" class="mt-3 turno d-flex justify-content-center align-items-center">
    <p id="alerta">Ganador: </p>
    <img v-if="gato.ganador == 'Rick'" width="60" height="60" src="@/assets/rick.png" alt="">
    <img v-if="gato.ganador == 'Morty'" width="60" height="60" src="@/assets/morty.png" alt="">

  </div>

</div>
  <div class="mt-4 tablero">
    <button class="casilla" @click="gato.cambiarEstado(index)" v-for="(ficha, index) in gato.fichas"
      :class="{ 'morty': ficha == 'Morty', 'rick': ficha == 'Rick' }" :key="index" :disabled="ficha != ''">
      <img v-if="ficha == 'Morty'" src="@/assets/morty.png" alt="Morty">
      <img v-if="ficha == 'Rick'" src="@/assets/rick.png" alt="Rick">
    </button>

  </div>

  <button class="mt-2 btn btn-warning" @click="gato.reiniciar()">Reiniciar</button>
</template>

<script>
import { useGatoStore } from '@/stores/useGatoStore'


export default {

  setup() {
    const gato = useGatoStore()

    return {
      gato
    }
  }

}
</script>

<style>
.turno {
  width: 412px;
  height: 80px;
  background-color: #f7f07b;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#alerta {
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

.casilla:hover {
  background: rgb(117, 117, 117);
  border: 1px solid rgb(117, 117, 117);
  /* cursor: pointer; */
}

.casilla img {
  width: 100px;
}

#morty {
  background-color: #f7f07b;
}

#rick {
  background-color: #e89ac7;
}

.morty {
  background-color: #f7f07b;

}

.morty:hover {
  background-color: #f7f07b;
}

.rick {
  background-color: #e89ac7;

}

.rick:hover {
  background-color: #e89ac7;

}

#ganador {
  background-color: #97ce4c;
}

#empate{
  background-color: #444;
  color: white;
}
</style>