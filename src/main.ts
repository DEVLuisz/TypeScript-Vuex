import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import roteador from './Pages/Routes'
import { key, store } from './Store/Vuex'

createApp(App)
  .use(roteador)
  .use(store, key)
    .mount('#app')
