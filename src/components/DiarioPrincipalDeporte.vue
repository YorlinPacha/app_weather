<template>

    <!-- Solo se muestra si ninguna ciudad esta seleccionada -->
    <div v-if="climaActual == ''" class="gifBuscar">
        <h1>Clima</h1>
        <img class="imagenGif"  src="../assets/img/entrada.gif" alt="">
    </div>

    <!-- div principal -->
    <div v-else id="climaPrincipalDiario" :class="{ 'rain': climaActual.rain !== undefined }">

        
        <!-- Parte de arriba con nombre y datos de hora y fecha -->
        <div class="titulo">
            <div></div>
            <p class="ciudad">{{ climaActual.name }}{{ climaActual.clouds.all }}</p>

            <!-- Botones de Andar en bici o correr??? --> 

            <div class="opciones">
                <p class="switchs"  @click="ciclismo">Ciclismo</p>
                <div class="switch form-check form-switch">
                    <input v-model="switchValue" @click="cambio()" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                </div>
                <p class="switchs" @click="footing">Footing</p>
            </div>
                
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
            <div class="gif">
                <div v-if="climaActual.rain">       
                   <img src="../assets/img/umbrella-motvion-800x600-unscreen.gif" alt="" class="paraguas">
                </div>
                <div  v-else-if="climaActual.main.temp >25 && climaActual.clouds.all <= 20">
                    hace sol y calor
                </div>
                <div v-else-if="bici==true">
                    <img v-if=" climaActual.main.temp >= 15 && climaActual.main.temp < 25 && climaActual.main.humidity <70 && climaActual.main.humidity >35 && climaActual.wind.speed < 20" src="../assets/img/giphy-unscreen.gif" alt="" class="ciclismo">
                    <div v-else>
                        quedarse en casa
                    </div>
                </div>
                <div v-else>
                        <img  v-if=" climaActual.main.temp >= 10 && climaActual.main.temp <= 20 && climaActual.main.humidity <60 && climaActual.main.humidity >40 && climaActual.wind.speed < 30" src="../assets/img/footing-unscreen.gif" alt="" class="footing">
                    <div v-else>
                        mal timepo para correr pero no llueve
                    </div>
                </div>
            </div>

                <!-- Detalles de la humedad y el viento a la derecha -->
                <div class="datosEspecificos">
                    <p class="humedadimg"><img src="../assets/img/kisspng-humidity-symbol-computer-icons-temperature-measure-against-vector-5ad99bf9116459.7880027515242106810713-removebg-preview.png" alt="" cl>{{ climaActual.main.humidity }}% </p>
                    <p class="vientoimg"><img src="../assets/img/png-transparent-wind-symbol-weather-map-computer-icons-weather-forecasting-wind-text-logo-weather-forecasting-removebg-preview.png" alt="" >{{ climaActual.wind.speed }}km/h</p>
                </div>
        </div>

        <!-- texto de recomendacion abajo -->
        <div class="recomendacion">
            <div>
                <h2>Ejemplo de texto</h2>
                <p>Ejemplo de mas texto pero mas pequeño que serian los detalles</p>
            </div>
        </div>
    </div>
</template>

<script setup>

import { defineProps,ref } from 'vue';

defineProps({
    climaActual: Object,
    climaCompleto: Object
});

//ciclismo true por defecto
let bici = ref(true)
let switchValue = ref(false);



console.log(switchValue)
function footing(){
    switchValue.value = true;
    bici.value = false
}

function ciclismo(){
    switchValue.value = false;
    bici.value = true
}

function cambio(){
    if (bici.value == true) {
         bici.value = false;
    }
    else{
         bici.value = true;
    }
}


// function obtenerHoraActual() {
//     return new Date().toLocaleTimeString()
// }


// function obtenerFechaActual(){
//     return new Date().toLocaleDateString()
// }

</script>

<style scoped>
.switchs {
  color: rgb(32, 32, 197);
  cursor: pointer;
}

*{
    text-align: center;
    margin: 0;
}

.gifBuscar{
    background-color: rgba(255, 255, 255, 0.144);
    border: 1px solid rgba(221, 221, 221, 0.301);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 10px;
    width:30rem;
    height: 25rem;
    margin: 0 auto;
}
.gifBuscar > img {
    border-radius: 100%;
    width: 20em;
}
/* Datos generales de la tarjeta */
 #climaPrincipalDiario{
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

 .rain{
    background-image: url(../assets/img/lluvia.gif);

 }

 .titulo{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
 }

 .opciones{
    display: flex;
    align-items: center;
 }

 .opciones > p{
    margin-right: 0.5rem;
 }

 .switch{
    display: flex;
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


 .ciclismo{
    width: 15rem;
 }

 .footing{
    width: 20rem;
 }

.paraguas{
    width: 15rem;
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
        width: 85vh;
    }

 }
 @media screen and (max-width: 400px){
    .climaPrincipalDiario{
        width: 90vw;
    }
    
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

    .ciclismo .footing{
    width: 10rem;
    }

    .recomendacion{
        margin:1rem;
    }

    .gifBuscar{
        width: 90%;
        height: 15rem;
    }
    .gifBuscar > img{
        width: 50%;
    }
 }


</style>