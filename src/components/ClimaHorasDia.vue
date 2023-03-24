<template>

      <div >
        <h2 >Clima por horas durante el dia</h2>
        <div >
          <div
            v-for="climaHoras in climaCompleto.hourly"
            :key="climaHoras.dt"
            
          >
          <p >
              {{
                climaHoras.dt
              }}
            </p>

            <p >
              {{
                new Date(
                  climaHoras.currentTime
                ).toLocaleTimeString("en-us", {
                  hour: "numeric",
                })
              }}
            </p>
          <img
              
              :src="
                `http://openweathermap.org/img/wn/${climaHoras.weather[0].icon}@2x.png`
              "
              alt=""
            />
            <p >
              {{ Math.round(climaHoras.temp) }}&deg;
            </p>
            
        </div>
      </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';


defineProps({
  climaActual: Object,
  climaCompleto: Object
});
</script>

<style  scoped>

</style>