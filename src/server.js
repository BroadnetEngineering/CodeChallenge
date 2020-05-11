import { Server } from 'miragejs';

new Server({
  seeds(server) {
    server.db.loadData({
      todos: [
        {
          "title": "Clean the garage",
        },
        {
          "title": "Pick up dad from airport",
        },
        {
          "title": "Mow the lawn",
        },
        {
          "title": "Go get pizza and beers",
        },
        {
          "title": "Clean the porch",
        },
        {
          "title": "Code some more",
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/todos', (schema) => {
      return schema.db.todos;
    });

    this.post('/todos', (schema, request) => {
      const todo = JSON.parse(request.requestBody);
      console.log('request', todo);

      return schema.db.todos.insert({
        'title': todo.title
      });
    });

    this.delete('/todos/:id', (schema, request) => {
      console.log('delete', request.params.id);

      return schema.db.todos.remove(request.params.id)
    });

    this.patch('/todos/:id', (schema, request) => {
      console.log('delete', request.params.id);

      return schema.db.todos.update(request.params.id)
    });
  }
});
