
<template>
  <div>
    <TasksList />
    <AddTask />
  </div>
</template>


<script>
import sweetalert from 'sweetalert';
import TasksList from './TasksList';
import AddTask from './AddTask';

export default {
  name: 'Home',
  components: {
    TasksList,
    AddTask,
  },
};
</script>