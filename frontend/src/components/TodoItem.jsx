import { useState } from 'react';
import { Trash2, CheckCircle, Circle, Edit3, X, Check, User } from 'lucide-react';
import api from '../api/axios';
import useAuthStore from '../store/authStore';

const TodoItem = ({ todo }) => {
  const currentUser = useAuthStore((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDesc, setEditedDesc] = useState(todo.description);

  const todoCreatorId = todo.userId?._id || todo.userId;
  const isOwner = currentUser?.id === todoCreatorId;
  const creatorName = todo.userId?.username || 'Unknown';

  const toggleComplete = async () => {
    try {
      await api.put(`/todos/${todo._id}`, { completed: !todo.completed });
    } catch (err) {
      console.error('Failed to update todo');
    }
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/todos/${todo._id}`, { title: editedTitle, description: editedDesc });
      setIsEditing(false);
    } catch (err) {
      console.error('Failed to update todo');
    }
  };

  const deleteTodo = async () => {
    try {
      await api.delete(`/todos/${todo._id}`);
    } catch (err) {
      console.error('Failed to delete todo');
    }
  };

  return (
    <div className="animate-fade" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '8px', 
      alignItems: 'stretch',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '16px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
          <button onClick={toggleComplete} style={{ background: 'none', border: 'none', cursor: 'pointer', color: todo.completed ? '#10b981' : '#9ca3af' }}>
            {todo.completed ? <CheckCircle size={24} /> : <Circle size={24} />}
          </button>
          
          {isEditing ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <input 
                value={editedTitle} 
                onChange={(e) => setEditedTitle(e.target.value)} 
                style={{ padding: '8px', fontSize: '1rem', border: '1px solid #d1d5db', borderRadius: '8px', color: '#111827' }}
              />
              <input 
                value={editedDesc} 
                onChange={(e) => setEditedDesc(e.target.value)} 
                style={{ padding: '8px', fontSize: '0.9rem', border: '1px solid #d1d5db', borderRadius: '8px', color: '#4b5563' }}
                placeholder="Description"
              />
            </div>
          ) : (
            <div className="todo-content">
              <div className={`todo-title ${todo.completed ? 'completed' : ''}`} style={{ color: '#111827' }}>{todo.title}</div>
              {todo.description && <div className="todo-desc" style={{ color: '#6b7280' }}>{todo.description}</div>}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {isOwner && (
            <>
              {isEditing ? (
                <>
                  <button onClick={handleUpdate} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#10b981' }}>
                    <Check size={20} />
                  </button>
                  <button onClick={() => setIsEditing(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}>
                    <X size={20} />
                  </button>
                </>
              ) : (
                <button onClick={() => setIsEditing(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}>
                  <Edit3 size={18} />
                </button>
              )}
            </>
          )}
          {isOwner && !isEditing && (
            <button onClick={deleteTodo} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', padding: '4px' }}>
              <Trash2 size={18} />
            </button>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #f3f4f6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#6b7280' }}>
          <User size={12} />
          <span>Created by: <strong style={{ color: '#10b981' }}>{creatorName}</strong></span>
        </div>
        <span className={`badge ${todo.completed ? 'badge-done' : 'badge-pending'}`} style={{ 
          backgroundColor: todo.completed ? '#dcfce7' : '#fef9c3',
          color: todo.completed ? '#166534' : '#854d0e',
          fontSize: '0.7rem'
        }}>
          {todo.completed ? 'Done' : 'Pending'}
        </span>
      </div>
    </div>
  );
};

export default TodoItem;

