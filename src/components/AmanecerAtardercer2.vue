<template>
  <section v-if="climaActual" class="contenedor_amanecer_atardecer_comp">
    <h3>Amanecer y Atardecer</h3>
    <div class="contenedor_amanecer_atardecer">
      <div class="contenedor_amanecer center text-center">
        <img
        :src="`https://raw.githubusercontent.com/Shamanesss/app_weather/main/src/assets/img/weather_icons/01d.png`"
        :style="{ width: 75 + 'px', height: 75 + 'px' }"
          
          alt=""
        />

        <p>{{ new Date((climaActual.sys.sunrise  * 1000)+ 7200).toLocaleTimeString("en-us", {
                  hour: "numeric",
                  hour: '2-digit',
                  minute: "numeric",
                  minute: "2-digit"
                  
                }) }}</p>
        
        


      </div>

      <div class="contenedor_atardecer center text-center">
        <img
        :src="`https://raw.githubusercontent.com/Shamanesss/app_weather/main/src/assets/img/weather_icons/01n.png`"
          :style="{ width: 75 + 'px', height: 75 + 'px' }"
        />


        <p> {{ new Date((climaActual.sys.sunset  * 1000)+ 7200).toLocaleTimeString("en-us", {
                  hour: "numeric",
                  hour: '2-digit',
                  minute: "numeric",
                  minute: "2-digit"
                })}}</p>
      </div>
    </div>
  </section>

  

  
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  climaActual: Object,
  climaCompleto: Object,
});
//   console.log("captura+++", props.result.value);
</script>

<style scoped>

/* https://www.flaticon.es/resultados?word=amanecer */
.contenedor_amanecer_atardecer {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.contenedor_amanecer_atardecer_comp{
    width: 25vw;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 20px 20px 20px;
}
</style>
