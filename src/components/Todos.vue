<template>
  <div class="todos-wrapper">
    <div class="list-wrapper">
      <ul class="todo-list">
        <li v-for="todo in allTodos" :key="todo.id">
          <div class="form-check"> 
            <label class="form-check-label d-flex flex-row my-flex-container"> 

              <!-- actions -->
              <div class="my-flex-item">
                <div v-if="todo !== editingMessage">
                  <button class="btn btn-primary todo-list-btn" @click="editMessage(todo)">Edit</button>
                  <button class="btn btn-primary todo-list-btn" @click="deleteTodo(todo.id)">Delete</button>
                </div>
                <div v-else>
                  <button class="btn btn-primary todo-list-btn" @click="updateTodo(todo.id), cancelEditing()">Update</button>
                </div>
              </div>

              <!-- content -->
              <div class="my-flex-item">
                <div v-if="todo !== editingMessage">
                  <div class="todo-list-item" v-if="todo !== editingMessage">{{ todo.title }}</div>
                  <input class="input-todo-title" v-else v-model="todo.title">
                </div>
                <div v-else>
                  <input type="text" class="input-todo-title" v-model="todo.title">
                </div>
              </div>

            </label> 
          </div> 
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "Todos",
  data() {
    return {
      editingMessage: null
    }
  },
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    editMessage(todo) {
      this.editingMessage = todo;
      this.title = todo.text;
    },
    cancelEditing() {
      this.editingMessage = null;
    }
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  }
}
</script>

<style scoped>
label {
  padding: 5px 0;
}
.card-body {
  padding: 2rem 1.5rem
}
.form-check {
  padding-left: 1rem;
}
.row {
  margin-right: 0;
  margin-left: 0;
  padding: 0;
}
.list-wrapper {
  margin-top: 12px;
}
.list-wrapper ul li {
  padding: .4rem 0;
  border-bottom: 1px solid rgba(0,0,0,.125);
}
.input-todo-title {
  color: gray;
  margin-left: 5px;
  padding: 0 5px;
  width:
}
.todo-list-btn {
  height: 22px;
  font-size: .625rem;
  padding: 0 6px;
  margin: 0 3px 0 0;
  display: inline-block;
}
.todo-list-item {
  padding-left: 8px;
  vertical-align: middle;
  color: #343a40;
}
</style>