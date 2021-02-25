import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start } from 'qiankun'

const apps = [
  {
    name: 'vue',
    entry: '//localhost:10000', // 默认加载这个 html 解析里面的 js 动态地执行 （子应用必须支持跨域）
    container: '#vue',
    activeRule: '/vue'
  },
  {
    name: 'react',
    entry: '//localhost:20000', // 默认加载这个 html 解析里面的 js 动态地执行 （子应用必须支持跨域）
    container: '#react',
    activeRule: '/react'  //激活的路径
  },
]
registerMicroApps(apps, {
  beforeMount: () => {
    console.log('beforeMount')
  }
}) // 注册应用
start({
  // prefetch: false // 取消预加载
})

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
