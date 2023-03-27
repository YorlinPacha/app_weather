<template>
  <section>
    <h3>Amanecer y Atardecer</h3>
    <div class="contenedor_amanecer_atardecer">
      <div class="contenedor_amanecer">
        <img
          :src="`https://raw.githubusercontent.com/Shamanesss/app_weather/main/src/assets/img/weather_icons/01d.png`"
          alt=""
        />
        <p>Hora: {{ climaActual}}</p>

<!-- new Date((climaActual.sys.sunrise  * 1000)+ 7200).toLocaleTimeString("en-us", {
                  hour: "numeric",
                  hour: '2-digit',
                  minute: "numeric",
                  minute: "2-digit"
                }) -->
        <p></p>
      </div>

      <div class="contenedor_atardecer">
        <img
          :src="`https://raw.githubusercontent.com/Shamanesss/app_weather/main/src/assets/img/weather_icons/01n.png`"
          alt=""
        />
        <p>Hora: {{ climaActual }}</p>
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
.contenedor_amanecer_atardecer {
  display: flex;
  gap: 2rem;
}
</style>
