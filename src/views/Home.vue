<template>
  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container">
      <h2 data-aos="zoom-in">Bem vindo!</h2>
      <p data-aos="flip-up" data-aos-duration="2000">
        Você está em um ambiente seguro, então pode ficar tranquilo.<br />
        Este portfolio foi desenvolvido em Vue.js e Java Spring Boot.<br />
        Atualmente roda em um servidor Linux com container Docker.
      </p>  
      <p data-aos="flip-up" data-aos-duration="2000">
        Ele possui diversas funcionalidades, mas você está vendo<br /> 
        apenas 0,01% de todos os recursos disponíveis. 
      </p>  
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {   
  },
}
</script>
