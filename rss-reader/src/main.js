import './assets/main.css'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia()) // ❗ Esto es obligatorio
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
