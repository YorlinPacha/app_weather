<template>
    <h2>Prueba en componente hijo</h2>

    <div class="result" v-if="result" >
      <h2 class="result__name">{{ result.name }}</h2>
      <p class="result__bio">Temperatura {{ result.main.temp }}°</p>
      <p class="result__bio">Temperatura {{ result.coord.lon }}</p>
      <p class="result__bio">Temperatura {{ result.coord.lat }}</p>
      <img
            
            :src="
              `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
            "
            alt=""
          />
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