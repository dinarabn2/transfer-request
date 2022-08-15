<script setup>
import Menu from './../components/Menu.vue'
import MainPage from './../components/MainPage.vue'
</script>

<template>
   <section class="app">
        <Menu />
        <MainPage />
   </section>
</template>

<style lang="scss">
.app {
    width: 1920px;
    margin: 0 auto;
}
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
}
body {
  background: #F2F7F8;
}

</style>