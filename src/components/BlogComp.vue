<template>
  <div class=" cuerpo ">
  <h1 class="text-center p-5 ">Blog</h1>
  <hr>
  <img v-if="isError" src="@/assets/logo.png" alt="error">
      <img v-if="isLoading" src="@/assets/logo.png" alt="loading">
      <div v-if="!isError && !isLoading" >
        <div class="container">
          

        <div v-for="getNew in getNews" :key="getNew.id">
          <!-- <p>{{ getNew.name }}</p>
            <p>{{ getNew.fecha }}</p> -->
            
             <!-- <div class="row">  -->
              <!-- <div class="col sm-4">  -->
                <!-- <div class="card m-5 col-12 d-flex justify-content-center">
                  <div class="row"> -->
                     <!-- <div class="card-header col-12">
        <div class="p-2 bd-highlight col-12">
            <div class="col-4 col-sm-4">
                
                 <img class="avatar-img  " :src=" getNew.avatar " alt="Avatar de May" /> 
            </div>
            <div class="col-8  ">
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
      </div>    -->
        <!-- </div>
      </div> -->
 
 <div class="card  ">
  <div class="card-body col-12 ">
    <div >
      <div class="lalala">
      <img class="avatar-img col-3" :src=" getNew.avatar " alt="Avatar de May" /> 
      <div class="px-2">
        <h4 class="card-header-title mb-0">{{ getNew.name }}</h4>
        <small class="text-muted py-0">{{getNew.fecha}} </small>
      </div>
  </div>
</div>
    
    
  </div >
  <div class="p-2">
    <p class="px-4">{{ getNew.location }} </p>
    <img class="foto " :src=" getNew.foto " alt="fotos" />
    <p >{{ getNew.comentario }}</p>
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
.container{
  display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    
    
}
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
  /* .card-header {
    background-color: transparent;
    padding: 0.5rem 1rem;
    border-bottom: none;
  } */
   .foto {
    max-width: 100%;
   width: 25rem;
   height: 20rem;
   border-radius: 10px;
   
  } 
  .card {
    border: 1px solid rgba(236, 231, 231, 0.11);
    box-shadow: 5px 5px 6px 4px rgb(197, 195, 195);
    margin-bottom: 4rem;

  }

 .lalala {
  display: flex;
 }
  .cuerpo {
    background-color: #c4ddff75;
    
  }  
  

</style>