import Vue from "vue";
import Router from "vue-router";

const home = () => import("./views/home/home.vue");
const login = () => import("./views/login/login.vue");
const register = () => import("./views/register/register.vue");

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: home
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: "/register",
            name: "register",
            component: register
        }
    ]
});
