import express from 'express';
import userController from '../controllers/userController.js';
import todoController from '../controllers/todoController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);

router.get('/todos', auth, todoController.getTodos);
router.post('/todos', auth, todoController.createTodo);
router.put('/todos/:id', auth, todoController.updateTodo);
router.delete('/todos/:id', auth, todoController.deleteTodo);

export default router;

