<template>
    <div class="boton">
       
    <button class="MeGusta" ><img src="https://img.icons8.com/color/1x/facebook-like--v3.gif" alt=""> </button>
    <p>Me gusta 0</p>
</div>
</template>

<script>
export default {
  name: 'BotonMeGusta',
  components: {
  },
}
</script>

<style scoped>
.MeGusta {
    border: 0;
    border-radius: 50px;
}
.boton{
    display: block;
    margin: 0 auto;
  
}
</style>