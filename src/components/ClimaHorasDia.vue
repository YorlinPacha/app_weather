<template>

      <div class="text-center">
        <h2 >Clima próximas 48 hrs</h2>
        <div  class="contenedor_clima_horas"
        v-if="climaCompleto">

          
          
          <div class="clima_horas">
          
              <div
                class="clima_hora"
                v-for="climaHoras in climaCompleto.hourly"
                :key="climaHoras"
              >
              <img
          
                  :src="`https://raw.githubusercontent.com/Shamanesss/app_weather/main/src/assets/img/weather_icons/${climaHoras.weather[0].icon}.png`"
          
          
                  alt=""
                />
                <!-- "`http://openweathermap.org/img/wn/${climaHoras.weather[0].icon}@2x.png`" -->
              <p>
                {{ Math.round(climaHoras.temp) }}&deg;
              </p>
              <p>
                  {{
                    new Date((climaHoras.dt * 1000)+ 7200).toLocaleTimeString("en-us", {
                      hour: "numeric",
                      hour: '2-digit',
                    })
                  }}
              </p>
                <img class="goToRun" src="../assets/img/favorito.gif" alt="" v-if=" climaHoras.temp >= 10 && climaHoras.temp < 20 && climaHoras.humidity <70 && climaHoras.wind_speed < 5 && climaHoras.pop < 0.3 ">
            </div>
                <!-- && new Date((climaHoras.dt * 1000)+ 7200).toLocaleTimeString > 6 && new Date((climaHoras.dt * 1000)+ 7200).toLocaleTimeString < 22  -->
          
              
                </div>
          
                <!-- hora => hora.temp >= 10 && hora.temp <= 20 && climaHoras.humidity <70 && climaHoras.wind_speed < 5 && climaHoras.pop < 0.3 -->
          
                <hr>
                
                <h6>Mejores horas para hacer ejercicio</h6>
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

.contenedor_clima_horas{
    width: 60vw;
    margin: 0 auto;

    background: rgba(255, 255, 255 , 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    text-align: center;
    padding: 20px 20px 20px;
}
.clima_horas{
    display: flex;
    gap: .8rem;
    overflow: auto;
    white-space: nowrap;

}

.clima_hora{
  text-align: center;
  align-items: center;
  
}
.clima_hora p{
  font-size: .8rem;
}

.clima_hora img{
  width: 2.5rem;
}

.clima_hora .goToRun{
  width: 2rem;
}


</style>