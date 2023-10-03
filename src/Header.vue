<template>
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
  <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="./assets/img/profile.jpg" alt="" class="img-fluid rounded-circle">
        <h1 class="text-light"><a href="/">Eduardo Cruz</a></h1>
         <div class="flex social-links justify-content-center align-items-center gap-2 mt-3">
          <span v-for="social in redes" :key="social">
            <a :href="social.link" :class="social.nome" target="_blank"><i :class="social.icon"></i></a>        
          </span>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar navbar-custom">
        <ul>
          <span v-for="menu in menus" :key="menu">
            <router-link :to="menu.link" :class="menu.classe"><i class="icon" :class="menu.icon"></i>{{ menu.nome }}</router-link>
          </span>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  import AOS from './assets/vendor/aos/aos'
  import service from './service/ApiService'
  export default {
    data() { 
        return {
          redes: [],
          menus: []
        }
    },
    methods: {
      getSocial(){
        service.getSocial()
         .then(({ data }) => {
            this.redes = data;   
          })
          .catch(error => {
            console.log(error);
          });
      },
      getMenu(){
        service.getMenu()
         .then(({ data }) => {
            this.menus = data;   
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    updated(){
      AOS.init();
    },
    mounted() {
      this.getSocial();
      this.getMenu();
    }
  }
</script>