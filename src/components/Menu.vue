<script setup>
    import MenuList from './MenuList.vue'
    import LogOut from './LogOut.vue'
</script>

<template>
    <nav class="menu">
        <img src="./../assets/menu-logo.svg" alt="menu-logo">
        <MenuList />
        <LogOut />
    </nav>
</template>

<style lang="scss" scoped>
.menu {
    position: fixed;
    width: 250px;
    background: #FFFFFF;
    padding: 50px;
    height: 100vh;
    img {
        display: block;
        margin: 0 auto;
    }
}
</style>