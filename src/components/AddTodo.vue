<template>
<div class="add-todo">
  <h4 class="card-title">Awesome Todo list</h4>
  <div class="add-items"> 
    <form @submit="onSubmit">
      <input type="text" v-model="title" placeholder="What do you need to do today?">
      <button class="btn btn-primary">Submit</button> 
    </form>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "AddTodo",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
      this.title = '';
    }
  }
}
</script>

<style scoped>
h4 {
  color: #000000;
  margin: 0.625rem;
  text-transform: capitalize;
  font-size: 0.875rem;
  font-weight: 500;
}
.btn-primary {
  padding: 0 20px;
}
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  outline: 0;
}
input[type="button"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  cursor: pointer;
}
</style>