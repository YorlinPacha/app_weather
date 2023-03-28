<template>
<h1>hola soy el formulario</h1>
</template>

<script>
// import axios from 'axios'
const axios = require('axios');
let data = JSON.stringify({
  "avatar": "https://randomuser.me/api/portraits/women/3.jpg",
  "name": "Otro nombre2",
  "fecha": "22/03/2023",
  "location": "Bilbao",
  "foto": "https://s2.ppllstatics.com/elcorreo/www/multimedia/202202/11/media/MM-atardeceres-bilbao/3.JPG",
  "comentario": "Bonito cielo al atardecer en la ría de Bilbao"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/fotografias',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

const axios2 = require('axios');

let configDEL = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/fotografias/18',
  headers: { 
    'Content-Type': 'application/json'
  }
};

axios2.request(configDEL)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
</script>

