<template>
  <div class="boton">
    <button class="MeGusta" @click="megustas">
      <img
        class="like"
        src="https://img.icons8.com/color/1x/facebook-like--v3.gif"
        alt=""
      />
    </button>
    <!-- corazon de favoritos-->
    <button class="favorito vacio" v-show="!isFavorito" @click="addFavorite">
      <img src="https://cdn-icons-png.flaticon.com/32/535/535285.png" alt="" />
    </button>
    <button class="favorito">
      <img
        v-show="isFavorito"
        @click="addFavorite"
        src="https://cdn-icons-png.flaticon.com/32/210/210545.png"
        alt=""
      />
    </button>
    
    <p>Me gusta {{ megusta }}</p>
    <p>Favoritos {{ contador }}</p>
  </div>
</template>

<script>
// import { count } from "console";
import { ref } from "vue";
export default {
  name: "BotonMeGusta",

  setup() {
    let isFavorito = ref(false);
    let megusta = ref(0);
    const contador = ref(0);
    const megustas = () => {
      console.log("me gusta");
      console.log(megusta);
      megusta.value++;
    };

    // seccion favoritos
    console.log("contador inicial", contador.value);
    const addFavorite = function () {
      isFavorito.value = !isFavorito.value;
      console.log(isFavorito.value);
      console.log("contador imicial", contador.value);

    
      if (isFavorito.value == true) {
        contador.value++;
        console.log(contador.value);
      } 
      else {
        contador.value--;
        console.log(contador.value);
      }
    };

    return {
      megusta,
      megustas,
      isFavorito,
      addFavorite,
      contador,
    };
  },
};
</script>

<style scoped>
.MeGusta {
  border: 0;
  border-radius: 50px;
  background-color: white;
}
.like {
  width: 2.5rem;
  height: auto;
}
.boton {
  row-gap: 2;
}
.favorito {
  background-color: white;
  float: right;
  border: 0;
  border-radius: 50px;
}
</style>
