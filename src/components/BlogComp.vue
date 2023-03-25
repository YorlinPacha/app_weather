<template>
  <h1 class="text-center">Blog</h1>
  <img v-if="isError" src="@/assets/logo.png" alt="error">
      <img v-if="isLoading" src="@/assets/logo.png" alt="loading">
      <div v-if="!isError && !isLoading" >
                <div v-for="getNew in getNews" :key="getNew.id">
                    <!-- <p>{{ getNew.name }}</p>
                    <p>{{ getNew.fecha }}</p> -->
                   <div class="d-flex justify-content-center">
                    <div class="card-header">
        <div class="row">
            <div class="col-2 col-sm-2">
                
                 <img class="avatar-img" :src=" getNew.avatar " alt="Avatar de May" /> 
            </div>
            <div class="col-8 col-sm-8">
                <h4 class="card-header-title m-0">
                    
                        {{ getNew.name }}
                   
                </h4>
                <small>{{getNew.fecha}}</small>
                <div class="foto-paisaje">
                    <p>{{ getNew.location }}</p>
                <img class="foto " :src=" getNew.foto " alt="fotos" />
            </div>
                <p>{{ getNew.comentario }}</p>
            </div>
        </div>
            
        </div>
    </div>
                </div>
</div>
</template>
<script setup>

// import { ref } from 'vue'
// export default {
//   name: 'BlogComp',
//   setup() {
   
//     let search1= ref(null)
//     let result1 = ref(null)
//     console.log(' no me estas haciendo caso')
      
//     const doNews= async()=>{
//         const response = await fetch("http://localhost:3000/fotografias")
//         const data= await response.json()
//         console.log(data);
//         result1.value = data
//         console.log(result1.value);
//         }
//       return{
//         search1,
//         result1,
//         doNews,
//       }
      
//     }
  
// }




import axios from 'axios'
import {ref} from 'vue'


const getNews = ref(null)

async function getInfo(){
    let isError = false
    let isLoading = true 

    try{
        const response = await axios.get("http://localhost:3000/fotografias")
        getNews.value = await response.data
     console.log( "****", getNews.value)
        
    }catch (error) {
        console.log(error);
        isError = true
    }
  
    isLoading = false
    
    return{
        isError, isLoading, getNews
    }

}

 getInfo()



</script>

<style scoped>
.avatar-img {
 border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
 } 
.card-header-title {
  line-height: 0.7;
}
.card-header-subTitle {
  font-size: 0.8em;
}
  .card-header {
    background-color: transparent;
    padding: 0.5rem 1rem;
    border-bottom: none;
  }
  .foto {
    width: 18rem;
  }


</style>