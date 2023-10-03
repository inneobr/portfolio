<template> 
  <Header/>
  <router-view/>
</template>

<script>
  import AOS from './assets/vendor/aos/aos'
  import Header from './Header.vue' 
  export default {
    components: {  
      Header
    },
    data() { 
        return {
          expanded: true,
        }
    },
    created(){
      AOS.init();
    },
  }
</script>