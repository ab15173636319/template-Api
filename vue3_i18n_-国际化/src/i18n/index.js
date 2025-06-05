import {
    createI18n
} from "vue-i18n"
import zh from "./language/zh"
import en from "./language/en"

const i18n = createI18n({
    legacy: false, // legacy: false表示使用Vue 3的Composition API模式
    locale: "zh", //默认语言
    messages: { // 定义支持的语言及其对应的消息对象
        zh,
        en
    }
})

export default i18n