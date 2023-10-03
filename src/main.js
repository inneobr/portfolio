import { createApp } from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import 'primeflex/primeflex.css';
import router from './router'
import store from './store'
import './assets/theme.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
