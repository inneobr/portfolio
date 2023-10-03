<template>
  <header id="header" v-if="menus">
    <div class="d-flex flex-column">
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
  import service from './service/ApiService'
  export default {
    data() { 
        return {
          redes: [],
          menus: [],
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
      },
    },
    mounted() {
      this.getSocial();
      this.getMenu();
    }
  }
</script>