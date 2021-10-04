import { createApp } from 'vue'
import App from './App.vue'

import TheLogin from './components/TheLogin.vue'

const app = createApp(App)

app.component('the-login', TheLogin)

app.mount('#app')
