<template>
  <h1>Blog</h1>
  <p>{{  }}</p>
</template>

<script >

import { ref } from 'vue'
export default {
  name: 'BlogComp',
  setup() {
   
    let search1= ref(null)
    let result1 = ref(null)
    console.log(' no me estas haciendo caso')
      
    const doNews= async()=>{
        const response = await fetch("http://localhost:3000/fotografias")
        const data= await response.json()
        console.log(data);
        result1.value = data
        console.log(result1.value);
        }
      return{
        search1,
        result1,
        doNews,
      }
      
    }
  
}




// import axios from 'axios'
// import {ref} from 'vue'

// async function getInfo(){
//     let isError = false
//     let isLoading = true 

//     const getNews = ref(null)

//     try{
//         const response = await axios.get("http://localhost:3000/fotografias")
//         getNews.value = await response.data
     
        
//     }catch (error) {
//         console.log(error);
//         isError = true
//     }
  
//     isLoading = false
    
//     return{
//         isError, isLoading, getNews
//     }

// }

//  getInfo



</script>

<style scoped>

</style>