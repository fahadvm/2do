import todoRepository from '../repositories/todoRepository.js';

class TodoService {
  async getAllTodos() {
    return await todoRepository.findAll();
  }

  async getUserTodos(userId) {
    return await todoRepository.findAllByUserId(userId);
  }

  async createTodo(userId, todoData) {
    return await todoRepository.create({ ...todoData, userId });
  }

  async updateTodo(userId, todoId, updateData) {
    const todo = await todoRepository.findById(todoId);
    if (!todo) throw new Error('Todo not found');
    
    // Robust ownership check (handles both populated and non-populated userId)
    const ownerId = todo.userId._id ? todo.userId._id.toString() : todo.userId.toString();
    if (ownerId !== userId) throw new Error('Unauthorized');
    
    return await todoRepository.update(todoId, updateData);
  }

  async deleteTodo(userId, todoId) {
    const todo = await todoRepository.findById(todoId);
    if (!todo) throw new Error('Todo not found');
    
    const ownerId = todo.userId._id ? todo.userId._id.toString() : todo.userId.toString();
    if (ownerId !== userId) throw new Error('Unauthorized');

    return await todoRepository.delete(todoId);
  }
}

export default new TodoService();
