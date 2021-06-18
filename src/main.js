import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import AppContainer from './components/AppContainer.vue';
import AppSpacer from './components/AppSpacer.vue';

createApp(App)
  .component('app-container', AppContainer)
  .component('app-spacer', AppSpacer)
  .use(router)
  .mount('#app');
