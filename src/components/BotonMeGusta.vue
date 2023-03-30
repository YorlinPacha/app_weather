<template>
    <div class="boton">
       
    <button class="MeGusta" ><img class="like" src="https://img.icons8.com/color/1x/facebook-like--v3.gif" alt=""> </button>
    <button class="favorito vacio"><img  src="https://cdn-icons-png.flaticon.com/32/535/535285.png" alt=""> </button>
    <button class="favorito"><img src="https://cdn-icons-png.flaticon.com/32/210/210545.png" alt=""> </button>
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
    background-color: white;
   
}
.like{
    width: 2.5rem;
    height: auto;
    
}
.boton{
   row-gap: 2; 
   
}
.favorito{
    background-color: white;
   float: right;
    border: 0;
    border-radius: 50px;
}
   


</style>