import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import api from '../api/axios';
import useAuthStore from '../store/authStore';
import useTodoStore from '../store/todoStore';
import TodoItem from '../components/TodoItem';
import Navbar from '../components/Navbar';
import { Plus, Search, LayoutDashboard } from 'lucide-react';

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const { todos, setTodos, addTodo, updateTodo, removeTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await api.get('/todos');
        setTodos(res.data);
      } catch (err) {
        console.error('Failed to fetch todos');
      }
    };
    fetchTodos();

    const socket = io('http://localhost:5000');
    socket.on('todoCreated', (todo) => addTodo(todo));
    socket.on('todoUpdated', (todo) => updateTodo(todo));
    socket.on('todoDeleted', (id) => removeTodo(id));

    return () => socket.disconnect();
  }, []);

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return;
    setLoading(true);
    try {
      await api.post('/todos', newTodo);
      setNewTodo({ title: '', description: '' });
    } catch (err) {
      console.error('Failed to create todo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#333' }}>
      <Navbar />
      
      <div className="dashboard-container" style={{ marginTop: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: '#10b981', padding: '10px', borderRadius: '12px' }}>
              <LayoutDashboard size={24} color="white" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#111827' }}>Hey, {user?.username}!</h2>
              <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>You have {todos.filter(t => !t.completed).length} tasks pending.</p>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '24px', marginBottom: '32px', backgroundColor: '#f9fafb', borderColor: '#e5e7eb' }}>
          <form onSubmit={handleCreateTodo} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input 
              type="text" 
              placeholder="What needs to be done?" 
              value={newTodo.title} 
              onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
              style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', border: '1px solid #e5e7eb' }}
            />
            <div style={{ display: 'flex', gap: '12px' }}>
              <input 
                type="text" 
                placeholder="Description (optional)" 
                value={newTodo.description} 
                onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                style={{ color: '#374151', border: '1px solid #e5e7eb' }}
              />
              <button type="submit" className="btn-primary" disabled={loading} style={{ minWidth: '140px', backgroundColor: '#10b981' }}>
                <Plus size={18} /> {loading ? 'Adding...' : 'Add Task'}
              </button>
            </div>
          </form>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {todos.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
              <Search size={48} style={{ marginBottom: '16px', opacity: 0.2 }} />
              <p>No tasks found. Start by adding one above!</p>
            </div>
          ) : (
            todos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

