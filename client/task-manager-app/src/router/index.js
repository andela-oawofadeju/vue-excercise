import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import AddCategory from '../components/AddCategory';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/new_category',
      name: 'addCategory',
      component: AddCategory,
    },
  ],
});
