import {createRouter, createWebHistory} from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../views/LoginFormBootstrap.vue"),
            name: "Login Page"
        },
        {
            path: "/register",
            component: () => import("../views/RegisterForm.vue"),
            name: "Register Page"
        },
        {
            path: "/warning",
            component: () => import("../views/BoCongAn.vue"),
            name: "Bo Cong An"
        }
    ]
})