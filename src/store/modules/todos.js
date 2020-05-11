import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('/api/todos');

    commit('setTodos', response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post('/api/todos', { title });

    commit('newTodo', response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`/api/todos/${id}`);

    commit('removeTodo', id)
  },

  async updateTodo({ commit }, id) {
    const response = await axios.patch(`/api/todos/${id}`);

    console.log('UPDATE FROM STORE', response);
    commit('updTodo', response)
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
  updTodo: (state, id) => state.todos = state.todos.splice(todo => todo.id !== id),
};

export default {
  state,
  getters,
  actions,
  mutations
}