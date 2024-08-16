import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js'
import 'bootstrap'
import { VueMasonryPlugin } from 'vue-masonry'

const app = createApp(App)

app.use(router)
app.use(VueMasonryPlugin)

app.mount('#app')