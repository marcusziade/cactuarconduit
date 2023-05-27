import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'prismjs'
import "prismjs/themes/prism.css"
import "prismjs/components/prism-python"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-swift"
import "prismjs/components/prism-go"
import "prismjs/components/prism-rust"
import "prismjs/components/prism-lua"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
