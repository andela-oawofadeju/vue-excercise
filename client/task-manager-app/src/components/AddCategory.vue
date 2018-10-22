<template>
  <div class='add_category'>
    <div class='ui centered card'>
      <div class='content'>
        <h3>Add Category</h3>
        <form class='ui-form' ref="form">
          <div class='field'>
            <label>Name</label><br />
            <input v-model="name" type='text' defaultValue="" />
          </div>
         
          <div class='buttons'>
            <button class='ui basic blue button' v-on:click.prevent="sendForm()">
              Add Category
            </button>
            <button class='ui basic red button' v-on:click.prevent="resetForm">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    ...mapActions([
      'addCategory'
    ]),
    resetForm() {
      this.$refs.form.reset();
    },
    sendForm() {
      if (this.name.length > 0) {
        const category = {
          name: this.name,
        };

        axios.post('http://localhost:3000/categories', category).then(response => {
          this.addCategory(response.data);
          this.resetForm();
          this.$router.push('/');
        }).catch(error => {
          console.log(error);
        })
      }
    },
  },
};
</script>

<style scoped>
  .buttons {
    margin-top: 20px;
  }
</style>

