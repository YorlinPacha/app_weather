<template>

    <!-- Solo se muestra si ninguna ciudad esta seleccionada -->
    <div v-if="climaActual == ''" class="climaPrincipalDiario">
        <img class="imagenGif"  src="../assets/img/entrada.gif" alt="">
    </div>

    <!-- div principal -->
    <div v-else class="climaPrincipalDiario">

        <!-- Parte de arriba con nombre y datos de hora y fecha -->
        <div class="titulo">
            <p class="fecha">{{ obtenerFechaActual() }}</p>
            <p class="ciudad">{{ climaActual.name }}</p>
            <p class="hora">{{obtenerHoraActual()}}</p>
        </div>

        <!-- resto de datos  -->
        <div class="containerDatos ">

            <!-- Imagen del cielo y grados -->
            <div class="nubesGrados">
                <img :src="`https://raw.githubusercontent.com/Shamanesss/app_weather/main/src/assets/img/weather_icons/${climaActual.weather[0].icon}.png`" alt="icon">
                <div class="grados">
                    <p>
                    {{Math.round(climaActual.main.temp)}}º
                    </p>
                </div>
            </div>

            <!-- gif en el centro -->
            <div  v-if="climaActual.main.temp >12 && climaActual.main.temp <21" class="gif">
                <img src="../assets/img/giphy-unscreen.gif" alt="">
            </div>
            <div v-else class="gif">
                nada entra dentro del filtro
            </div>

                <!-- Detalles de la humedad y el viento a la derecha -->
                <div class="datosEspecificos">
                    <p class="humedadimg" ><img src="../assets/img/kisspng-humidity-symbol-computer-icons-temperature-measure-against-vector-5ad99bf9116459.7880027515242106810713-removebg-preview.png" alt="" cl>{{ climaActual.main.humidity }}% </p>
                    <p class="vientoimg"><img src="../assets/img/png-transparent-wind-symbol-weather-map-computer-icons-weather-forecasting-wind-text-logo-weather-forecasting-removebg-preview.png" alt="" >{{ climaActual.wind.speed }}km/h</p>
                </div>
        </div>

        <!-- texto de recomendacion abajo -->
        <div class="recomendacion">
            <div v-if="climaActual.main.temp >14 && climaActual.main.temp <24 && climaActual.main.humidity >=40 && climaActual.main.humidity <60 && climaActual.wind.speed <16">Momento perfecto para salir a hacer deporte(es un ejemplo)</div>
            <div v-else>
                <h2>Ejemplo de texto</h2>
                <p>Ejemplo de mas texto pero mas pequeño que serian los detalles</p>
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


function obtenerHoraActual() {
    return new Date().toLocaleTimeString()
}


function obtenerFechaActual(){
    return new Date().toLocaleDateString()
}
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
    background-color: rgba(255, 255, 255, 0.637);
 }

 .titulo{
    display: flex;
    justify-content: space-around;
    align-items: center;
 }
 .containerDatos{
    display: flex;
    align-items: center;
    height: auto;
    position: relative;
    justify-content: space-evenly;
 }

 .datosEspecificos{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 4rem;
 }

 .datosEspecificos > p{
    text-align: left;
 }
 .humedadimg{
    margin-left: 1rem;
 }

.vientoimg > img{
    width: 4rem;
}

.humedadimg > img{
    width: 1.5rem;
}

 .grados{
    place-self: center;
    font-size: 5rem;
 }

 .ciudad{
    font-size: 2rem;
 }

 .gif > img{
    width: 15rem;
    border-radius: 100%;
 }

.recomendacion{
    border-radius: 20px;
    margin: 0 4rem 0 4rem;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.733);
    box-shadow: 2px 2px 2px 2px rgba(155, 153, 153, 0.438);
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

    .nubesGrados{
        display: flex;
        gap: 4rem;
        flex-direction: row-reverse;
    }

    .fecha{
        display: none;
    }
    .hora{
        display: none;
    }

    .datosEspecificos{
    gap: 0rem;
    flex-direction: row;
    align-items: center;
    }

    .gif > img{
    width: 12rem;
    }

    .recomendacion{
        margin:0;
    }
 }


</style>