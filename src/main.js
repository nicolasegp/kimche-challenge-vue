import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/spectre.min.css'
import './assets/icons.min.css'
import './assets/web.css'

createApp(App)
	.use( createPinia() )
	.mount('#app')
