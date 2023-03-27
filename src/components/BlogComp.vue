<template>
  <h1 class="text-center">Blog</h1>
  <img v-if="isError" src="@/assets/logo.png" alt="error">
      <img v-if="isLoading" src="@/assets/logo.png" alt="loading">
      <div v-if="!isError && !isLoading" >
        <div v-for="getNew in getNews" :key="getNew.id">
          <!-- <p>{{ getNew.name }}</p>
            <p>{{ getNew.fecha }}</p> -->
            <!-- <div class="row"> 
              <div class="col sm-4">  -->
                <div class="card  col-4 d-flex justify-content-center">
                  <div class="row">
                     <div class="card-header col-12">
        <div class="row col-6">
            <div class="col-2 col-sm-2">
                
                 <img class="avatar-img  " :src=" getNew.avatar " alt="Avatar de May" /> 
            </div>
            <div class="col-10  ">
                <h4 class="card-header-title">
                    
                        {{ getNew.name }}
                   
                </h4>
                <small class="fecha">{{getNew.fecha}}</small>
                </div>
                </div>
                </div>
                <div class="foto-paisaje ">
                    <p>{{ getNew.location }}</p>
                <img class="foto" :src=" getNew.foto " alt="fotos" />
            </div>
                <p>{{ getNew.comentario }}</p>
            </div>
        </div>
      </div>   
        </div>
    
 
<!-- <div class="card col-4 ">
  <div class="card-body ">
    <div class="row">
      <div class="col-sm-12">
      <img class="avatar-img col-3" :src=" getNew.avatar " alt="Avatar de May" /> 
      <h4 class="card-header-title col-9 ">{{ getNew.name }}</h4>
  </div>
</div>
    <small>{{getNew.fecha}}</small>
    <p>{{ getNew.location }}</p>
    
  </div>
  <img class="foto col-6" :src=" getNew.foto " alt="fotos" />
  <p>{{ getNew.comentario }}</p>
</div> -->
        <!-- </div>
        </div> -->
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
  font-size: large;
}
.fecha {
  font-size: 0.7em;
}
  .card-header {
    background-color: transparent;
    padding: 0.5rem 1rem;
    border-bottom: none;
  }
   .foto {
   max-width: 100%;
  } 


</style>