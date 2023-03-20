<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid bgnav">
      <router-link to="/logo" class="navbar-brand col-3 d-flex justify-content-center ">
        
       
      </router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end col-4">
          
          <li class="nav-item ">

            <p to="/daily">Capturar datos de la  API</p>
          </li>
         

        </ul>
        <form class="d-flex col-6" v-on:submit.prevent="doSearch">
          <input class="form-control me-2" v-model="search" type="search" placeholder="Introducir Ciudad" aria-label="Search">
          <button class="btn btn-outline-white text-white" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>

  <!-- <div class="result" v-if="result" >
      <h2 class="result__name">{{ result.name }}</h2>
      <p class="result__bio">Temperatura {{ result.main.temp }}°</p>
  </div>  -->

  

  
  



<div class="contenedor">
    <div class="about">
      <!-- <HeaderCompbis /> -->
    <h1>pagina semanal</h1>
  </div>
</div>

<CompPrueba :result="result"/>

<h2>Tarjeta prueba</h2>

<CompPruebaCard :result="result"/>

</template>

<script>

import CompPrueba from '@/components/CompPrueba.vue'
import CompPruebaCard from "@/components/CompPruebaCard"


import { ref } from 'vue'



export default {
  components: { CompPrueba, CompPruebaCard },
    setup() {
        //const API = "https://api.openweathermap.org/data/2.5/weather?&q=";
        //const apikey = "&appid=b9964f2d4f56729f81838a84d98556fe";
        let search = ref(null);
        let result = ref(null);
        const doSearch = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${search.value}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=metric`);
            const data = await response.json();
            result.value = data;
        };


        return {
            search,
            result,
            doSearch,
        };
    },
    
}


</script>

<style scoped>
.contenedor{
  width: 100%;
  
  background: #d9a7c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #fffcdc, #d9a7c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #fffcdc, #d9a7c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

</style>