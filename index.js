import Vue from 'vue';
import App from './App';
import BoostrapVue from 'bootstrap-vue';

Vue.use(BoostrapVue);


new Vue({
    name: 'root-app',
    el: "#app",
    components: { App },
    render: h => h(App)
})