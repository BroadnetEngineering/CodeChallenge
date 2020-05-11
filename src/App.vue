<template>
  <div id="app">
    <div class="container">
      <div class="justify-content-center">

        <!-- jumbotron -->
        <Description />

        <!-- todo container -->
        <div class="col-lg-12">
          <div class="card px-3">
              <div class="card-body">
                <AddTodo />
                <Todos />
              </div>
          </div>
        </div>

      </div>
  </div>
</div>
</template>

<script>
import Description from './components/Description.vue'
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo';

export default {
  name: 'App',
  components: {
    Description,
    AddTodo,
    Todos
  }
}
</script>

<style>
dl, ol, ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
input {
  margin-right: 10px;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
}
.container {
  max-width: 940px;
  margin: 0 auto;
}
</style>