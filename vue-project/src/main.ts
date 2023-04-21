// import { createApp } from 'vue'
// import App from './App.vue'
import router from './router'

// import './assets/main.css'
import 'vuetify/styles'
import './assets/tailwind.css'

// import { aliases, mdi } from 'vuetify/iconsets/mdi'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import '@mdi/font/css/materialdesignicons.css' 
const vuetify = createVuetify({
  components,
  directives,
  // icons: {
  //   defaultSet: 'mdi',
  //   aliases,
  //   sets: {
  //     mdi,
  //   }
  // },
})

// createApp(App).use(vuetify).use(router).mount('#app')
createApp(App).use(vuetify).use(router).mount('#app')
createApp(App).config.globalProperties.$http = axios


