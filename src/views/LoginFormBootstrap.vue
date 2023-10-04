<script setup>
import {reactive} from "vue";

const users = reactive({
    username: '',
    password: '',
    savePassword: false
})

//ham xu ly su kien login
const onLogin = () => {
    console.log(users)
}

//loai bo dau tieng viet
const removeAccent = (event) => {
    event.target.value = event.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}
</script>

<template>
    <div class="login-form">
        <form class="container form-custom" @submit.prevent="onLogin">
            <h5>Login</h5>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input @keyup="removeAccent($event)" v-model="users.username" type="text" class="form-control"
                       id="username"
                       aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input @keyup="removeAccent($event)" v-model="users.password" type="password" class="form-control"
                       id="password">
            </div>
            <div class="mb-3 form-check">
                <input v-model="users.savePassword" type="checkbox" class="save-password" id="savePassword">
                <label class="form-check-label" for="savePassword">Save Password?</label>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<style scoped>

</style>