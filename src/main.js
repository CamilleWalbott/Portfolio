import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './lang/i18n.js';

// Créer l'application Vue et utiliser le plugin vue-i18n
createApp(App)
    .use(i18n)
    .mount('#app')
