import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router.js'
import axios from "axios";

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)  // 라우터 사용
app.config.globalProperties.$axios = axios; 
app.mount('#app')
