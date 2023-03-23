<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid bgnav">
      <router-link to="/" class="navbar-brand col-3 d-flex justify-content-center ">
        <img class="logo" src="./assets/img/logotiempo.png" alt="logo">

      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end col-4">
          <li class="nav-item ">

            <router-link to="/" class="nav-link active border border-muted " id="nav"
              aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">

            <router-link to="/daily" class="nav-link active border borde-muted" id="nav2">Diario</router-link>
          </li>
          <!-- <div><span class="material-icons-outlined ">
              language
            </span></div> -->

        </ul>
        <form class="d-flex col-6" v-on:submit.prevent="doSearch">
          <input v-model="search" class="form-control me-2" type="search" placeholder="Introducir Ciudad"
            aria-label="Search">
          <button class="btn btn-outline-grey" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>

 
  <RouterView :climaActual="climaActual" :climaCompleto="climaCompleto" />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { defineProps } from 'vue';


import { ref } from "vue"
let search = ref("");
let climaActual = ref("");
let climaCompleto = ref("");

const doSearch = async () => {
  try {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${search.value}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=metric`);
    const data = await response.json();
    climaActual.value = data;
    console.log(climaActual.value.name);

    console.log("Latitud" + climaActual.value.coord.lat);
    console.log("Longitud" + climaActual.value.coord.lon);

    datosCompletos(climaActual.value.coord.lat, climaActual.value.coord.lon)

  }
  catch (error) {
    console.log(error)
  }
};


async function datosCompletos(lat, lon) {
  try {
  const apiKey = '7efa332cf48aeb9d2d391a51027f1a71';
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  const respuesta = await fetch(url);
  const dataWeather = await respuesta.json();
  climaCompleto.value = dataWeather

  // console.log("EquipoVUE" + climaCompleto.value.name);
  return dataWeather;

}
  catch (error) {
    console.log(error)
  }
}


/* No borrar la funcion de abajo "function gg(lat,lon)" para poder guiarme en la codificacion de la captura de errores al momento de hacer una busqueda  */
// function gg(lat,lon){
//   let dataWeather = ref("");
//   const apiKey = '7efa332cf48aeb9d2d391a51027f1a71';

//   const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

//   fetch(url)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error('Error en la respuesta de la API.');
//     })
//     .then(dataWeather => {
//       const temperaturaActual = dataWeather.current.temp;
//       const descripcionClimaActual = dataWeather.current.weather[0].description;
//       console.log(`La temperatura actual es ${temperaturaActual} grados Celsius y el clima está ${descripcionClimaActual}.`);
//       console.log("*****dataWeather*******",dataWeather);
//     })
//     .catch(error => {
//       console.log(error.message);
//     });
// }

/*inicio*********************************************************

Pasamos las variables que contienes los datos de cada api. 
climaActual = nos pasa la informacion de la api https://api.openweathermap.org/data/2.5/weather, cuando se hace la busqueda en el input del header

climaCompleto = nos pasa la informacion de la api  https://api.openweathermap.org/data/2.5/onecall, que es la que tiene mas informacion
*********************************************************fin*/

 defineProps({
  climaActual: Object,
  climaCompleto: Object
});

</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app{
  font-family: 'Lato', sans-serif;
}

.bgnav {
  widows: 100%;
  height: auto;
  background-color: #C4DDFF;
}

.nav-link {
  background-color: rgba(218, 218, 218, 0.158);
  padding: 0.3em;
  border-radius: 9px;
  margin: 0.1em;
}
.logo {
  max-width: 5em;
 padding: 0.5rem; 
}
#nav.router-link-active {
color: blue;
 background-color: rgba(133, 128, 128, 0.158); 
 
}
#nav2.router-link-active {
color: blue;
 background-color: rgba(133, 128, 128, 0.158); 

}
 #nav, #nav2 {
  color: rgb(196, 187, 66);

} 
.navbar {
  padding: 0;
}
</style>