import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';
import useAuthStore from '../store/authStore';
import Navbar from '../components/Navbar';
import { LogIn, Mail, Lock, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await api.post('/login', { email, password });
      setAuth(res.data.user, res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#333' }}>
      <Navbar />
      
      <div className="auth-container" style={{ paddingTop: '60px' }}>
        <div className="animate-fade auth-card" style={{ 
          backgroundColor: '#fff',
          borderRadius: '24px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          border: '1px solid #f3f4f6'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <img src="/logo.png" alt="2Do Logo" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              <span style={{ fontSize: '2rem', fontWeight: '800', color: '#10b981' }}>2Do</span>
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#111827' }}>Welcome Back</h1>
            <p style={{ color: '#6b7280', marginTop: '8px' }}>Log in to manage your daily tasks.</p>
          </div>
          
          {error && (
            <div style={{ backgroundColor: '#fef2f2', color: '#dc2626', padding: '12px', borderRadius: '12px', marginBottom: '24px', textAlign: 'center', fontSize: '0.9rem', border: '1px solid #fee2e2' }}>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '16px', top: '16px', color: '#9ca3af' }} />
              <input 
                type="email" 
                placeholder="Email address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={{ 
                  width: '100%',
                  padding: '16px 16px 16px 48px',
                  backgroundColor: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  outline: 'none',
                  fontSize: '1rem',
                  color: '#111827'
                }}
              />
            </div>

            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '16px', top: '16px', color: '#9ca3af' }} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                style={{ 
                  width: '100%',
                  padding: '16px 48px 16px 48px',
                  backgroundColor: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  outline: 'none',
                  fontSize: '1rem',
                  color: '#111827'
                }}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '16px', top: '16px', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button type="submit" className="btn-primary" disabled={loading} style={{ 
              backgroundColor: '#10b981', 
              padding: '16px', 
              borderRadius: '12px', 
              fontSize: '1rem',
              fontWeight: '700',
              marginTop: '10px'
            }}>
              {loading ? 'Signing in...' : <><LogIn size={20} /> Sign In</>}
            </button>
          </form>
          
          <p style={{ marginTop: '32px', textAlign: 'center', color: '#6b7280', fontSize: '0.95rem' }}>
            Don't have an account? <Link to="/signup" style={{ color: '#10b981', textDecoration: 'none', fontWeight: '700' }}>Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
