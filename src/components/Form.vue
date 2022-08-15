<script setup>
import {ref} from 'vue';
import router from './../router/index';

let username = ref('');
let password = ref('');

const signIn = () => {
    if (username.value == 'DinaraDinara' && password.value == 'DDEvrika2022I') {
        router.push({path: '/main'})
    }
}

</script>

<template>
    <section class="form">
        <div class="login">
            <img class="user" src="./../assets/user.svg" alt="user">
            <input type="text" placeholder="Логин"   v-model="username" >
        </div>
        <div class="password">
            <img class="lock" src="./../assets/lock.svg" alt="password">
            <input type="password" placeholder="Пароль"  v-model="password" >
            <img src="./../assets/Eye.svg" alt="eye" class="eye"/>
        </div>
        <input id ="remember" type="checkbox" name="check">
        <span>Запомнить</span>
        <button @click="signIn">Вход</button>
    </section>
</template>


<style scoped>
.login {
    position: relative;
}
.user{
    position: absolute;
    top: 20px;
    left: 20px;
}
.password {
    position: relative;
}
.lock {
    position: absolute;
    top: 20px;
    left: 20px;
}
.eye {
    position: absolute;
    right: 30px;
    top: 20px;
    cursor: pointer;
}
input {
    width: 500px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 5px;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    padding: 20px 20px 20px 50px;
    margin-bottom: 40px;
}
input[name="check"] {
    width: 17px;
    height: 17px;
    cursor: pointer;
}
span {
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: 8px;
}
.form {
    margin-top: 70px;
}
button {
    width: 125px;
    height: 56px;
    background: #029AAD;
    border-radius: 5px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    display: block;
    margin: 0 auto;
    margin-top: 70px;
    cursor: pointer;
    transition: .5s all;
    border: none;
}
</style>