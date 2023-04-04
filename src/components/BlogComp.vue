<template>
  <div class=" cuerpo ">
    <h1 class="text-center p-5 textoBlog ">Información de interés</h1>
    <img v-if="isError" src="@/assets/logo.png" alt="error">
    <img v-if="isLoading" src="@/assets/logo.png" alt="loading">
    <div v-if="!isError && !isLoading">
      <div class="container">
        <div v-for="getNew in getNews" :key="getNew.id">
          <div class="card  ">
            <div class="card-body col-12 ">
              <div>
                <div class="card-principal">
                  <img class="avatar-img col-3" :src="getNew.avatar" alt="Avatar de May" />
                  <div class="px-2">
                    <h4 class="card-header-title mb-0">{{ getNew.name }}</h4>
                    <small class="text-muted py-0">{{ getNew.fecha }} </small>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2">
              <p class="px-4">{{ getNew.location }} </p>
              <img class="foto " :src="getNew.foto" alt="fotos" />
              <p>{{ getNew.comentario }}</p>
              <div class="megusta">
                <BotonMeGusta />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BotonMeGusta from './BotonMeGusta.vue';
import axios from 'axios'
import { ref } from 'vue'
const getNews = ref(null)
async function getInfo() {
  let isError = false
  let isLoading = true
  try {
    const response = await axios.get("http://localhost:3000/fotografias")
    getNews.value = await response.data
    console.log("****", getNews.value)

  } catch (error) {
    console.log(error);
    isError = true
  }
  isLoading = false

  return {
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

 .card-principal {
  display: flex;

 }
 .megusta{
  display: block;
  justify-content: end;
  margin-right: 0;
 
  
 }
 .boton{
  justify-content: end;
 }

  .cuerpo {
     background-color: #c4ddff75; 
  min-height: 100vh;
  } 

  .textoBlog{
    color: #757575;
  }
 
  @media (max-width: 1020px){
    .container{
    grid-template-columns: repeat(2, 1fr);  
  }
  }
  @media (max-width: 740px){
    .container{
    grid-template-columns: repeat(1, 1fr);  
  }
  }
</style>