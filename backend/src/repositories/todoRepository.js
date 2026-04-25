import Todo from '../models/Todo.js';

class TodoRepository {
  async findAll() {
    // Populate the userId field to get the username
    return await Todo.find({})
      .populate('userId', 'username')
      .sort({ createdAt: -1 });
  }

  async findAllByUserId(userId) {
    return await Todo.find({ userId })
      .populate('userId', 'username')
      .sort({ createdAt: -1 });
  }

  async findById(id) {
    return await Todo.findById(id).populate('userId', 'username');
  }

  async create(todoData) {
    const todo = new Todo(todoData);
    await todo.save();
    // Re-fetch to get the populated user info for the socket event
    return await Todo.findById(todo._id).populate('userId', 'username');
  }

  async update(id, todoData) {
    return await Todo.findByIdAndUpdate(id, todoData, { new: true })
      .populate('userId', 'username');
  }

  async delete(id) {
    return await Todo.findByIdAndDelete(id);
  }
}

export default new TodoRepository();
