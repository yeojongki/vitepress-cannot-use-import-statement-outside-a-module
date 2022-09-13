import Antd from 'ant-design-vue'
import CustomButton from '../components/button/index.vue'
import DefaultTheme from 'vitepress/theme'
import 'ant-design-vue/dist/antd.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: any) {
    app.use(Antd)
    app.component('custom-button', CustomButton)
  },
}
