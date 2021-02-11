import { createApp } from 'vue'
import App from './App.vue'
//import 'bootstrap'
//import './assets/styles/main.scss';
//import 'bootstrap/dist/css/bootstrap.min.css'
import { store, router } from './plugins/index'
import { navigatorMixin, userIdentityMixin } from './mixins/index'

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(userIdentityMixin)
app.mixin(navigatorMixin)
app.mount('#app')
