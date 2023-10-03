<template> 
  <Header />
  <main id="main">
    <router-view/>
  </main>
</template>

<script>
  import Header from './Header.vue' 
  export default {
    components: {  
      Header
    }
  }
</script>