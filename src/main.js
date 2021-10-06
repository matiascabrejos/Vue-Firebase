import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'

import TheLogin from './components/TheLogin.vue'
import TheButton from './components/TheButton.vue'

const app = createApp(App)

app.component('the-login', TheLogin)
app.component('the-button', TheButton)

app.use(store)
app.mount('#app')
