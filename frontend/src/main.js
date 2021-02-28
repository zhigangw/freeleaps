import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
//import './assets/styles/main.scss'; //main.scss is loaded in vue.config.js
import { store, router } from './plugins/index'
import { navigatorMixin, userIdentityMixin, errorHanlderMixin } from './mixins/index'
const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(userIdentityMixin)
app.mixin(navigatorMixin)
app.mixin(errorHanlderMixin)
app.mount('#app')
