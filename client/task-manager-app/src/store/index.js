import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    categories: [],
    tasks: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, taskId) {
      const index = state.findIndex(task => task.id === taskId);
      state.tasks = [
        ...state.tasks.slice(0, index),
        ...state.tasks.slice(index),
      ];
    },
    updateTask(state, updatedTask) {
      const index = state.findIndex(task => task.id === updatedTask.id);
      state.tasks = [
        ...state.tasks.slice(0, index),
        updatedTask,
        ...state.tasks.slice(index),
      ];
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    addCategory(state, category) {
      state.categories.push(category);
    },
  },
  actions: {
    setTasks(context, tasks) {
      context.commit('setTasks', tasks);
    },
    addTask(context, task) {
      context.commit('addTask', task);
    },
    deleteTask(context, taskId) {
      context.commit('deleteTask', taskId);
    },
    updateTask(context, updatedTask) {
      context.commit('updateTask', updatedTask);
    },
    setCategories(context, categories) {
      context.commit('setCategories', categories);
    },
    addCategory(context, category) {
      context.commit('addCategory', category);
    },
  },
});

export default store;
