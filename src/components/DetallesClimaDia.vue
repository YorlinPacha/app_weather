<template>
    <div 
    class="contenedor_detalles_clima"
    v-if="climaCompleto || climaActual"
    >
        <h3>Detalles del clima de hoy</h3>
        <div class="detalles_clima_hoy">
            <img 
            class="imagen_clima_hoy"
            src="../assets/img/weather_icons/10d.png" 
            alt="">
            <div 
            class="info_clima_hoy">
                <p>Humedad: </p>
                <p>Viento: </p>
                <p>Nubosidad: </p>
                <p>Presion: </p>
                <p>Indice UV: </p>
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

<style scoped>

.contenedor_detalles_clima{
    width: 50vw;
    margin: 0 auto;
    
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    padding: 20px 20px 20px;
}

.detalles_clima_hoy{
    display: flex;
    gap: 1rem;
}

.detalles_clima_hoy img{
    width: 75px;
    height: 75px;
    margin: auto 1rem;
   
}


</style>