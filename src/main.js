import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import AppContainer from './components/AppContainer.vue';
import AppSpacer from './components/AppSpacer.vue';
import BaseButton from './components/BaseButton.vue';
import BaseHeading from './components/BaseHeading.vue';

createApp(App)
  .component('app-container', AppContainer)
  .component('app-spacer', AppSpacer)
  .component('base-button', BaseButton)
  .component('base-heading', BaseHeading)
  .use(router)
  .mount('#app');
