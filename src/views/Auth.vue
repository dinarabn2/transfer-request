<template>
  <div class="auth">
    <div class="auth-main">
      <img src="./../assets/main-logo.svg" alt="main-logo" class="auth-logo">
      <div class="descr">"Добро пожаловать в Сервис Доставки Товаров"</div>
      <Form />
    </div>
  </div>
</template>

<script setup>
import Form from './../components/Form.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
}
.auth {
  height: 100vh;
  background: #001529;
  box-shadow: 0px 4px 250px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth-main {
  width: 500px;
  height: 531px;
}
.descr {
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 50px;
}
.auth-logo{
    margin: 0 auto;
    display: block;
}
</style>
