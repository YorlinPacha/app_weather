<template>
    <!-- Solo se muestra si ninguna ciudad esta seleccionada -->
    <div v-if="climaActual == ''" class="climaPrincipalDiario">
    Ninguna ciudad seleccionada
    </div>
    <!-- div principal -->
    <div v-else class="climaPrincipalDiario">
         <p class="ciudad">{{ climaActual.name }}</p> 
         <div class="containerDatos ">
             <div v-if="climaActual.weather == null" >
                imagen.error
            </div>
            <div v-else class="imagen">
                <img class="cielo" :src="`https://openweathermap.org/img/wn/${climaActual.weather[0].icon}@2x.png`" alt="icon"> 
                <img class="bicicletas" src="../assets/img/fd4638442247e11430ff221fea8bed-unscreen.gif" alt="">
                
            </div>
             
            <div class="datosClima">
                <p  v-if="climaActual.main == null" class="grados">Error</p>
                <p v-else class="grados">
                   {{Math.round(climaActual.main.temp)}}º
                </p>

                <div class="datosEspecificos">
                    <p v-if="climaActual.main == null">Humedad:Error </p> 
                    <p v-else>Humedad:{{ climaActual.main.humidity }}% </p> 
                    <p v-if="climaActual.wind == null">Viento:error</p>     
                    <p v-else>Viento:{{ climaActual.wind.speed }}km/h</p>
                </div>
            </div>
        </div>
        <p>Texto que recomendaria salir a hacer deporte?</p>
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

.imagen{
    width: 50%;
}

 .containerDatos{
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
 }

 .datosClima{
    display: flex;
    width: 50%;
 }

 .datosEspecificos{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto; 
    gap: 4rem;
 }

 .grados{
    width: 50%;
    place-self: center;
    font-size: 7rem;
 }

 .ciudad{
    font-size: 2rem;
 }

 .bicicletas{
    width: 18rem;
    margin-top: 5rem;
    margin-left: 1rem;
 }
 .cielo{
    width: 20rem;
    position: absolute;
    bottom: 5rem;
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