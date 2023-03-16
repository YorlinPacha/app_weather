<template>
  <div class="barra">
    <nav>
    <router-link to="/">Semanal</router-link> |
    <router-link to="/daily">Diario</router-link>
  </nav>
    </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.barra{
  widows: 100%;
  height: 3rem;
  background-color: aqua;
}

</style>
