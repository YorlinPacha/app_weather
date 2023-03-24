<template>


  <div class="contenedor_clima_semana" v-if="climaCompleto">
      <h2>Clima de la Semana</h2>
      <div class="contenedor_clima_dia"
      v-for="day in climaCompleto.daily"
          :key="day.dt"
          >
        <p class="nombre_dia">
          {{
            new Date(day.dt * 1000).toLocaleDateString(
              "es-sp",
              {
                weekday: "long",
              }
            )
          }}
        </p>
        <img class="icono_clima"
          :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"
          alt=""
        />
        <div class="d-flex gap-2 ms-auto">
          <p>Max: {{ Math.round(day.temp.max)  }} &deg;C</p> - 
          <p>Min: {{ Math.round(day.temp.min)  }} &deg;C </p>
        </div>
      </div>
    </div>

<!-- <div class="contenedor_clima_semana">
  <h2 >Clima de la semana</h2>


</div> -->

  

</template>

<script setup>
import { defineProps } from 'vue';


defineProps({
  climaActual: Object,
  climaCompleto: Object
});

</script>

<style  scoped>
 .contenedor_clima_semana{
    width: 50vw;
    margin: 0 auto;
    text-align: center;

 }

 .contenedor_clima_dia{
    display: flex;
    justify-content: space-between;
 }

 .nombre_dia{
  text-transform: capitalize;
 }

 .icono_clima{
  width: 50px;
  height: 50px;
 }
</style>