import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import app from './app.vue' //fichier app.vue local
import MovieItemComponent from './components/movieitem.vue'
import MovieListComponent from './components/movielist.vue'
import MovieStore from './moviesStore.js'
import routes from '../node/routes';
/* import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' */

Vue.use(Vuex);

Vue.use(VueRouter);

/* Vue.use(BootstrapVue); */

Vue.component('movie-item', MovieItemComponent);
Vue.component('movie-list', MovieListComponent);


new Vue({
  el: '#app',
  render: h => h(app),
  router: routes,
  store: MovieStore,
})