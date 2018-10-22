<template>
  <div id="app">
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" 
              data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Task Manager</a>
          </div>
          <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav"></ul>
          </div>
      </div>
    </div>

    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

  export default {
    created() {
      this.fetchTasks();
      this.fetchCategories();
    },
    methods: {
      ...mapActions([
        'setTasks',
        'setCategories',
      ]),
      fetchTasks() {
        axios.get('http://localhost:3000/tasks').then(response => {
          this.setTasks(response.data);
        }).catch(error => {
          console.log(error);
        });
      },
      fetchCategories() {
        axios.get('http://localhost:3000/categories').then(response => {
          this.setCategories(response.data);
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

section {
  width: 50%;
  margin: auto;
  margin-top: 100px;
}
</style>
