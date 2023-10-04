<script setup>
import {reactive} from "vue";

const newUser = reactive({
    username: '',
    password: '',
})

const register = () => {
    console.log(newUser)
}
</script>

<template>
    <div class="login-form">
        <form class="container form-custom" @submit.prevent="register">
            <h5>Register</h5>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input v-model="newUser.username" type="text" class="form-control"
                       id="username"
                       aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="newUser.password" type="password" class="form-control"
                       id="password">
            </div>
            <div class="mb-3 form-check">
                <input v-model="newUser.savePassword" type="checkbox" class="save-password" id="savePassword">
                <label class="form-check-label" for="savePassword">Save Password?</label>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<style scoped>

</style>