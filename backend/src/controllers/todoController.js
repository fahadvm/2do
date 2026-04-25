import todoService from '../services/todoService.js';

class TodoController {
  async getTodos(req, res) {
    try {
      const todos = await todoService.getAllTodos(); 
      res.json(todos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async createTodo(req, res) {
    try {
      const todo = await todoService.createTodo(req.user.id, req.body);
      req.app.get('io').emit('todoCreated', todo);
      res.status(201).json(todo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateTodo(req, res) {
    try {
      const todo = await todoService.updateTodo(req.user.id, req.params.id, req.body);
      req.app.get('io').emit('todoUpdated', todo);
      res.json(todo);
    } catch (err) {
      const status = err.message === 'Unauthorized' ? 403 : 400;
      res.status(status).json({ message: err.message });
    }
  }

  async deleteTodo(req, res) {
    try {
      await todoService.deleteTodo(req.user.id, req.params.id);
      req.app.get('io').emit('todoDeleted', req.params.id);
      res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
      const status = err.message === 'Unauthorized' ? 403 : 400;
      res.status(status).json({ message: err.message });
    }
  }
}

export default new TodoController();

