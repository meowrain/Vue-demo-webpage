import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/*引入bootstrap包 */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
/*引入photoswipe */
import vue3PhotoPreview from 'vue3-photo-preview';
import 'vue3-photo-preview/dist/index.css'
const app = createApp(App)
app.use(vue3PhotoPreview)
app.use(router)
app.mount('#app')
