<template>
    <!-- Solo se muestra si ninguna ciudad esta seleccionada -->
    <div v-if="climaActual == ''" class="climaPrincipalDiario">
    Ninguna ciudad seleccionada
    </div>
    <!-- div principal -->
    <div v-else class="climaPrincipalDiario">
         <p class="ciudad"><img :src="`https://openweathermap.org/img/wn/${climaActual.weather[0].icon}@2x.png`" alt="icon">{{ climaActual.name }}</p>
         <div class="containerDatos ">
            <div class="grados">
                    <p  v-if="climaActual.main == null">Error</p>
                    <p v-else>
                    {{Math.round(climaActual.main.temp)}}º
                    </p>
                </div>
             <div v-if="climaActual.weather == null">
                imagen.error
            </div>
                <!-- <img class="bicicletas" src="../assets/img/fd4638442247e11430ff221fea8bed-unscreen.gif" alt=""> -->
            <div v-else class="imagen">
                <!-- <img class="cieloSolo" :src="`https://openweathermap.org/img/wn/${climaActual.weather[0].icon}@2x.png`" alt="icon"> -->
                <img class="gif" src="../assets/img/fd4638442247e11430ff221fea8bed-unscreen.gif" alt="">
            </div>
                <div class="datosEspecificos">
                    <p v-if="climaActual.main == null">Humedad:Error </p>
                    <p v-else>Humedad:{{ climaActual.main.humidity }}% </p>
                    <p v-if="climaActual.wind == null">Viento:error</p>
                    <p v-else>Viento:{{ climaActual.wind.speed }}km/h</p>
                </div>
        </div>
        <p v-if="climaActual.main.temp >14 && climaActual.main.temp <24 && climaActual.main.humidity >=40 && climaActual.main.humidity <60 && climaActual.wind.speed <16">Momento perfecto para salir a hacer deporte(es un ejemplo)</p>
        <p v-else>Otro (sin terminar)  </p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    climaActual: Object,
    climaCompleto: Object
});




</script>

<style scoped>

*{
    text-align: center;
    margin: 0;
}

/* Datos generales de la tarjeta */
 .climaPrincipalDiario{
    margin: 0 auto;
    width: 60%;
    height: auto;
    border: 1px solid rgba(0, 0, 0, 0.192);
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
 }

 .containerDatos{
    display: flex;
    align-items: center;
    height: 14rem;
    position: relative;
    justify-content: space-evenly;
 }

 .datosEspecificos{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 4rem;
 }

 .grados{
    place-self: center;
    font-size: 5rem;
 }

 .ciudad{
    font-size: 2rem;
 }

 .gif{
    width: 25rem;
 }
 .cielo{
    width: 20rem;
    position: absolute;
    bottom: 5rem;
 }
 .cieloSolo{
    height: 15rem;
 }

 @media screen and (max-width: 900px){
    .climaPrincipalDiario{
        width: 100%;
    }

 }
 @media screen and (max-width: 400px){
    .containerDatos{
        flex-direction: column;
    }

    .datosClima{
        width: 90%;
    }
    .imagen{
        width: 100%;
        position: relative;
    }
 }


</style>