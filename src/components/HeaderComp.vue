<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid bgnav">
      <router-link to="/" class="navbar-brand col-3 d-flex justify-content-center ">
        <img class= "logo" src="../assets/img/logotiempo.png" alt="logo"> 
       
      </router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end col-4">
          <li class="nav-item ">

            <router-link to="/" class="nav-link active border border-muted " id="nav"
            aria-current="page">Semanal</router-link>
          </li>
          <li class="nav-item">

            <router-link to="/daily" class="nav-link active border borde-muted" id="nav2"
            
             >Diario</router-link>
          </li>
          <!-- <div><span class="material-icons-outlined ">
              language
            </span></div> -->

        </ul>
        <form class="d-flex col-6">
          <input class="form-control me-2" type="search" placeholder="Introducir Ciudad" aria-label="Search">
          <button class="btn btn-outline-grey" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>



  
</template>

<script>
export default {
  name: 'HeaderComp',
//  
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bgnav {
  widows: 100%;
  height: 5rem;
  background-color: #C4DDFF;
}

.nav-link {
  background-color: rgba(218, 218, 218, 0.158);
  padding: 0.3em;
  border-radius: 40%;
  margin: 0.1em;

}







.logo {
  max-width: 5em;
 padding: 0.5rem; 
}
#nav.router-link-active {
color: blue;
 background-color: rgba(133, 128, 128, 0.158); 
 
}
#nav2.router-link-active {
color: blue;
 background-color: rgba(133, 128, 128, 0.158); 

}
 #nav, #nav2 {
  color: rgb(196, 187, 66);

} 
.navbar {
  padding: 0;
}
</style>
