import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router/index.js'
import VueResource from 'vue-resource'


Vue.use(ElementUI);
Vue.use(VueResource);
Vue.config.productionTip = false


new Vue({
  render: h => h(App),router,
  data: function(){
    return {
      page : ''
    }
  },
}).$mount('#app')
