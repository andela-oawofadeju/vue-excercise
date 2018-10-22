<template>
    <div class='ui centered card'>
      <div class='content' v-show="!isEditing">
        <div class='header'>
          {{task.title}}
        </div>
        <div class='meta'>
          {{task.content}}
        </div>
        <div class='extra content'>
          <span class='right floated edit icon' v-on:click="showForm">
            <i class='edit icon'></i>
          </span>
          <span class='right floated trash icon' v-on:click="deletetask(task)">
            <i class='trash icon'></i>
          </span>
        </div>
      </div>
      <div class="content" v-show="isEditing">
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input type='text' v-model="task.title">
          </div>
          <div class='field'>
            <label>Content</label>
            <input type='text' v-model="task.content">
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="hideForm">
              Save
            </button>
          </div>
        </div>
      </div>
      <div class='ui bottom attached green basic button'
        v-show="!isEditing && task.completed" disabled>
        Completed
      </div>
      <div class='ui bottom attached red basic button' v-show="!isEditing && !task.completed">
        Pending
      </div>
    </div>
</template>
<script type="text/javascript">
export default{
  props: ['task'],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deletetask(task) {
      this.$emit('delete-task', task);
    },
    completetask(task) {
      this.$emit('complete-task', task);
    },
  },
};
</script>
