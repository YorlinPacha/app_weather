<template>
    <section >
        <h3>Amanecer y Atardecer</h3>
        <div class="contenedor_amanecer_atardecer">
            <div class="contenedor_amanecer">
                <img
                :src="`https://raw.githubusercontent.com/Shamanesss/app_weather/main/src/assets/img/weather_icons/01d.png`"
                 alt="">
                 <p>Hora: 7:22 AM</p>
                 <p>{{ climaActual }}</p>
                 
            </div>
            
            <div class="contenedor_atardecer">
                <img
            
                :src="`https://raw.githubusercontent.com/Shamanesss/app_weather/main/src/assets/img/weather_icons/01n.png`"
                alt="">
                <p>Hora: 7:52 PM</p>
            </div>
        </div>
        
    </section>
    
    <p>{{ climaActual }}</p>
   
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
    climaActual: Object,
    climaCompleto: Object
    });

</script>

<style scoped>
    .contenedor_amanecer_atardecer{
        display: flex;
        gap: 2rem;
    }
</style>