<template>
  <div class="home">
   <div class="wrapper fadeInDown">
     <div id="formContent">
      <div class="fadeIn first">
            <h1>Crud</h1>
       
         <form v-on:submit.prevent="postNew">
             <input type="text" id="delid" class="fadeIn second " name="id" placeholder="Introducir el Id" v-model="id" >
           <input type="text" id="avatar" class="fadeIn third" name="avatar" placeholder="Introducir enlace avatar" v-model="avatar">
           <input type="text" id="name" class="fadeIn fourth" name="name" placeholder="Introducir el nombre" v-model="name">
           <input type="date" id="fecha" class="fadeIn fifth" name="fecha" placeholder="Introducir la fecha" v-model="fecha">
           <input type="text" id="location" class="fadeIn sixth" name="location" placeholder="Introducir ciudad" v-model="location">
           <input type="text" id="foto" class="fadeIn seventh" name="foto" placeholder="Introducir enlace foto" v-model="foto">
            <input type="text" id="comentario" class="fadeIn eighth" name="comentario" placeholder="Introducir comentario" v-model="comentario">
            <input type="button" class="fadeIn twelfth" @click="updateNew" value="UPDATE">
           <input type="button" class="fadeIn twelfth" @click="getId" value="GET">
           <input type="button" class="fadeIn ninth" @click="delNew" value="DELETE">
           <input type="button" class="fadeIn ninth" @click="search" value="SEARCH">
           <input type="submit" class="fadeIn ninth" value="POST">
           <div class="error" v-if="error">{{ error }}</div>
           </form>
       </div>
       </div>
       <div class="resultados">
   <div class="resultado" v-for="result in results" :key="result.id">
     <img :src="result.avatar" alt="avatar" />
     <h1>ID {{ result.id }}</h1>
     <h2>{{ result.name }}</h2>
     <p>{{ result.comentario }}</p>
     <p>{{ result.fecha }}</p>
     <p>{{ result.location }}</p>
     <img :src="result.foto" alt="foto" />
   </div>
 </div>
    </div>
  </div>

</template>

<script setup>

import axios from 'axios'
import {ref} from 'vue'
const avatar = ref('')
  const name = ref('')
  const fecha = ref('')
  const location = ref('')
  const foto = ref('')
  const comentario = ref('')
  
   
const id = ref('')
  const error =ref ('')
 // coger un id y te proporciona los datos 
  const getId = async () => {
     try {
        const response = await axios.get('http://localhost:3000/fotografias/' + id.value)
        const data = response.data
        console.log (response)
        avatar.value =data.avatar
        name.value = data.name
        fecha.value = data.fecha
        location.value = data.location
        foto.value = data.foto
        comentario.value = data.comentario
   
       } catch (error) {
          alert('El Id no existe')
           console.log(error)
   }
  }
  //eliminas los datos
const delNew = async () => {
  try {
    await axios.delete('http://localhost:3000/fotografias/' + id.value)
    console.log('http://localhost:3000/fotografias/' + id.value)
    alert(`La entrada id: ${id.value} ha sido eliminada de la base de datos`)
   
    id.value =''
    avatar.value=''
    fecha.value=''
    location.value=''
    name.value=''
    foto.value=''
    comentario.value=''

  } catch (error) {
    console.log(error)
  }
}
// para actualizar los datos
const updateNew = async () => {
   try{
const response = await axios.put(`http://localhost:3000/fotografias/${id.value}`,{
  id:id.value,   
  avatar:avatar.value,
     name: name.value,
     fecha: fecha.value,
     location: location.value,
     foto:foto.value,
     comentario:comentario.value
   
   })
   console.log(response)
   id.value = ''
   avatar.value=''
   name.value = ''
   fecha.value = ''
   location.value = ''
     foto.value = ''
     comentario.value = ''
     error.value = ''
     alert ('Actualizado correctamente')
   
 }catch(error) {
     console.log(error);
     error.value = 'Error no se han actualizado los datos'
   }
}
const postNew = async() => {
   try{
    
     if(!name.value|| !fecha.value|| !location.value || !comentario.value || !foto.value || !avatar.value){
     error.value = 'No puede haber campos vacios'
     return
     }
     
     const response = await axios.post ('http://localhost:3000/fotografias',{
     avatar:avatar.value,
     name: name.value,
     fecha: fecha.value,
     location: location.value,
     foto:foto.value,
     comentario:comentario.value
    
   
   })
   console.log(response)
   avatar.value=''
   name.value = ''
   fecha.value = ''
   location.value = ''
     foto.value = ''
     comentario.value = ''
     error.value = ''
     alert ('Nuevo post añadido')
    
 }catch(error) {
     console.log(error);
     error.value = 'Error al envia los datos'
   }
  };

</script>

<style scoped>
.wrapper {
   display: flex;
   align-items: center;
   flex-direction: column; 
   justify-content: center;
   width: 100%;
   min-height: 100%;
   padding: 20px;
 } 
 #formContent {
   -webkit-border-radius: 10px 10px 10px 10px;
   border-radius: 10px 10px 10px 10px;
   background: #fff;
   padding: 30px;
   width: 90%;
   max-width: 850px;
   position: relative;
   padding: 0px;
   -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
   box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
   text-align: center;
 }
 #formContent-2 {
   -webkit-border-radius: 10px 10px 10px 10px;
   border-radius: 10px 10px 10px 10px;
   background: #fff;
   padding: 40px;
   width: 90%;
   max-width: 550px;
   position: relative;
   padding: 0px;
   -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
   box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
   text-align: center;
  
 }
 input[type=button], input[type=submit], input[type=reset]  {
   background-color: #56baed;
   border: none;
   color: white;
   padding: 15px 80px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   text-transform: uppercase;
   font-size: 13px;
   -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
   box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
   -webkit-border-radius: 5px 5px 5px 5px;
   border-radius: 5px 5px 5px 5px;
   margin: 5px 20px 40px 20px;
   -webkit-transition: all 0.3s ease-in-out;
   -moz-transition: all 0.3s ease-in-out;
   -ms-transition: all 0.3s ease-in-out;
   -o-transition: all 0.3s ease-in-out;
   transition: all 0.3s ease-in-out;
 }
 input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
   background-color: #39ace7;
 }
 input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
   -moz-transform: scale(0.95);
   -webkit-transform: scale(0.95);
   -o-transform: scale(0.95);
   -ms-transform: scale(0.95);
   transform: scale(0.95);
 }
 input[type=text], [type=date] {
   background-color: #f6f6f6;
   border: none;
   color: #0d0d0d;
   padding: 15px 32px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 16px;
   margin: 5px;
   width: 85%;
   border: 2px solid #f6f6f6;
   /* -webkit-transition: all 0.5s ease-in-out;
   -moz-transition: all 0.5s ease-in-out;
   -ms-transition: all 0.5s ease-in-out;
   -o-transition: all 0.5s ease-in-out;
   transition: all 0.5s ease-in-out;
   -webkit-border-radius: 5px 5px 5px 5px;
   border-radius: 5px 5px 5px 5px; */
 }
 input[type=text]:focus {
   background-color: #fff;
   border-bottom: 2px solid #5fbae9;
 }
 input[type=text]:placeholder {
   color: #cccccc;
 }
 /* ANIMATIONS */
 /* Simple CSS3 Fade-in-down Animation */
 /* .fadeInDown {
   -webkit-animation-name: fadeInDown;
   animation-name: fadeInDown;
   -webkit-animation-duration: 1s;
   animation-duration: 1s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
 }
 @-webkit-keyframes fadeInDown {
   0% {
     opacity: 0;
     -webkit-transform: translate3d(0, -100%, 0);
     transform: translate3d(0, -100%, 0);
   }
   100% {
     opacity: 1;
     -webkit-transform: none;
     transform: none;
   }
 }
 @keyframes fadeInDown {
   0% {
     opacity: 0;
     -webkit-transform: translate3d(0, -100%, 0);
     transform: translate3d(0, -100%, 0);
   }
   100% {
     opacity: 1;
     -webkit-transform: none;
     transform: none;
   }
 }
 /* Simple CSS3 Fade-in Animation */
 /* @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
 @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
 @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
 .fadeIn {
   opacity:0;
   -webkit-animation:fadeIn ease-in 1;
   -moz-animation:fadeIn ease-in 1;
   animation:fadeIn ease-in 1;
   -webkit-animation-fill-mode:forwards;
   -moz-animation-fill-mode:forwards;
   animation-fill-mode:forwards;
   -webkit-animation-duration:1s;
   -moz-animation-duration:1s;
   animation-duration:1s;
 }  */
 /* .fadeIn.first {
   -webkit-animation-delay: 0.4s;
   -moz-animation-delay: 0.4s;
   animation-delay: 0.4s;
 }
 .fadeIn.second {
   -webkit-animation-delay: 0.6s;
   -moz-animation-delay: 0.6s;
   animation-delay: 0.6s;
 }
 .fadeIn.third {
   -webkit-animation-delay: 0.8s;
   -moz-animation-delay: 0.8s;
   animation-delay: 0.8s;
 }
 .fadeIn.fourth {
   -webkit-animation-delay: 1s;
   -moz-animation-delay: 1s;
   animation-delay: 1s;
 }
 *:focus {
     outline: none;
 } 
 #icon {
   width:60%;
 } */
 .error{
   background-color: red;
   color:white;
 }
 #delid{
   margin-top: 2rem;
 }
 
</style>