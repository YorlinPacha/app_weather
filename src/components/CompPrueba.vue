<template>
    <h2>Prueba en componente hijo</h2>

    <div class="result" v-if="result" >
      <h2 class="result__name">{{ result.name }}</h2>
      <p class="result__bio">Temperatura {{ result.main.temp }}°</p>
  </div> 
</template>

<script >

// export default{
//   props: {
//     doSearch: Function,
//     API: String,
//     apikey: String,
//     search: Object,
//     result: Object
//   }
// } 

export default{
  props: {
    
    result: Object
  }
} 

</script>