<template>
  <NavBar></NavBar>
  <div class="mt-5 d-flex justify-content-center flex-column align-items-center">
    <GatoVue></GatoVue>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import GatoVue from '@/components/GatoVue.vue'

export default {
  name: 'App',
  components: {
    NavBar,GatoVue
  }
}

</script>

<style>

</style>
