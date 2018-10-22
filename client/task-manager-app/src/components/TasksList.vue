<template>
  <div  id="tasklist">
    <div class="completed">
      <h3>Completed Tasks</h3>
      <div v-for="task in completedTasks" :key="task.id">
        {{task.name}}
      </div>
    </div>
    <div class="pending">
      <h3>Pending Tasks</h3>
      <div v-for="task in pendingTasks" :key="task.id">
        {{task.name}}
      </div>
    </div>
    <!-- <p>Completed Tasks: {{tasks.filter(task=>{return task.status === 1}).length}}</p>
    <p>Pending Tasks: {{tasks.filter(task=>{return task.status === 0}).length}}</p>
    <task v-for="task in tasks" :key="task.id" /> -->
  </div>
</template>

<script type="text/javascript">
import Task from './Task';
import { mapState } from 'vuex'

export default{
  components: {
    Task,
  },
  computed: {
    ...mapState([
      'tasks'
    ]),
    completedTasks() {
      return this.tasks.filter(task => task.status === 1);
    },
    pendingTasks() {
      return this.tasks.filter(task => task.status === 0);
    }
  },
};
</script>
<style>
.completed {
  border: 1px solid rgb(0, 180, 15, 0.5);
  margin-bottom: 20px;
}

.pending {
  border: 1px solid rgba(0, 93, 180, 0.5);
  margin-bottom: 20px;
}
</style>
