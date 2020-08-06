<template>
  <div id="page-landing">
    <div id="page-landing-content">
      <div class="logo-container">
        <img src="../../assets/images/logo.svg" alt="Proffy">
        <h2>Sua plataforma de estudos online</h2>
      </div>

      <img 
        src="../../assets/images/landing.svg" 
        alt="Plataforma de estudos"
        class="hero-image"
        />

        <div class="buttons-container">
          <router-link to="/study" class="study">
            <img src="../../assets/images/icons/study.svg" alt="Estudar">
            Estudar
          </router-link>
          <router-link to="/give-classes" class="give-classes">
            <img src="../../assets/images/icons/give-classes.svg" alt="Estudar">
            Dar aulas
          </router-link>
        </div>

        <span class="total-connections">
          Total de 200 conexões já realizadas <img src="../../assets/images/icons/purple-heart.svg" alt="Coração Roxo">
        </span>
    </div>
  </div>
</template>

<script>
import './style.css'

export default{
  name: 'Landing'
}
</script>


