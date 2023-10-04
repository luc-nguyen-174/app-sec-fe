import '@babel/polyfill'
import 'mutationobserver-shim'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import('quasar/dist/quasar.css')
import './assets/css/style.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {router} from "@/router";
import {createApp} from 'vue'
import App from './App.vue'
import {Quasar} from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App)
app.use(Quasar, quasarUserOptions)
app.use(router)
app.mount('#app')
