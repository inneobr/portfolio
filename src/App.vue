<template> 
  <Header/>
  <router-view/>
  <footer id="footer">
    <div class="copyright">
      &copy; <strong><span>inneo</span> by <a href="https://www.linkedin.com/in/inneobr/" target="_blanc">Eduardo Cruz</a></strong>
    </div>
  </footer>
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