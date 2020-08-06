<template>
  <div id="page-teacher-list" class="container">
    <header class="page-header">
      <div class="top-bar-container">
         <router-link to="/">
            <img src="../../assets/images/icons/back.svg" alt="Voltar">
          </router-link>
          <img src="../../assets/images/logo.svg" alt="Logo">
      </div>

      <div class="header-content">
        <strong>Estes são os proffys disponiveis.</strong>
      </div>
    </header>
  </div>
</template>

<script>
import './style.css'

export default {
  name: "TeacherList"
}
</script>


