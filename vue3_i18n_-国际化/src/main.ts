import {
    createApp
} from 'vue'
import {
    createPinia
} from 'pinia'

// 导入i8n
import i18n from "./i18n"


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 注册国际化插件，启用多语言支持
app.use(i18n)

app.mount('#app')