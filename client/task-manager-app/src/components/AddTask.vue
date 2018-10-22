<template>
  <div class='ui basic content center aligned segment addtask'>
    <div class='ui centered card'>
      <div class='content'>
        <h3>Create Task</h3>
        <form class='ui-form' ref="form">
          <div class='field'>
            <label>Name</label><br />
            <input v-model="name" type='text' ref='name' defaultValue="">
          </div>
          <div class='field'>
            <label>Category</label> <br />
            <select name="category" id="category" ref="category_id">
              <option v-for="category in categories" v-bind:value="category.id" v-bind:key="category.id">
                {{category.name}}
              </option>
            </select>
          </div>
          <div class='buttons'>
            <button v-on:click.prevent="sendForm()">
              Add new task
            </button>
            <button v-on:click.prevent="resetForm">
              Clear
            </button>
            <button v-on:click="redirectToCategories">
              Add New Category
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import sweetalert from 'sweetalert';
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      category_id: '',
    };
  },    
  methods: {
    ...mapActions([
      'addTask'
    ]),
    resetForm() {
      this.$refs.form.reset();
    },
    sendForm() {
      if (this.name.length > 0) {
        const task = {
          name: this.name,
          category_id: this.$refs.category_id.value,
        };
      
        // call to the back to save task 
        axios.post('http://localhost:3000/tasks', task).then(response => {
          this.addTask(response.data);
          sweetalert('Success!', 'New Task Created!', 'success');
          this.resetForm();
        }).catch(error => {
          console.log(error);
        });
      }
    },
    redirectToCategories() {
      this.$router.push('/new_category');
    }
  },
  computed: {
    ...mapState([
      'categories'
    ]),
  }
};
</script>

<style>
.addtask {
  border: 1px solid #eee;
  padding-bottom: 20px;
}

.buttons {
  margin-top: 20px;
}
</style>

