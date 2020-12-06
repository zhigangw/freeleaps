import { createApp } from 'vue'
import App from './App.vue'
import { store, router } from './plugins/index'
import { navigatorMixin, userIdentityMixin } from './mixins/index'

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(userIdentityMixin)
app.mixin(navigatorMixin)
app.mount('#app')
