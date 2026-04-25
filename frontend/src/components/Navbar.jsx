import { useState } from 'react';
import { 
  CheckCircle2, Search, ChevronDown, User, LogOut, 
  Sun, Moon, Sparkles, GraduationCap, Briefcase, Heart, Leaf 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [showFeatures, setShowFeatures] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const FeatureItem = ({ icon: Icon, color, title, desc }) => (
    <div style={{ display: 'flex', gap: '16px', padding: '12px', cursor: 'pointer', borderRadius: '12px', transition: '0.2s' }} className="feature-hover-item">
      <div style={{ marginTop: '4px' }}>
        <Icon size={20} color={color} />
      </div>
      <div>
        <div style={{ fontWeight: '700', color: '#111827', fontSize: '0.95rem' }}>{title}</div>
        <div style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '2px' }}>{desc}</div>
      </div>
    </div>
  );

  return (
    <nav style={{ 
      padding: '20px 60px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      backgroundColor: '#fff',
      borderBottom: '1px solid #f3f4f6',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <style>{`
        .feature-hover-item:hover { background-color: #f9fafb; }
        .mega-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          padding: 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 10px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease-out;
        }
        .features-trigger:hover .mega-menu {
          opacity: 1;
          visibility: visible;
          margin-top: 0;
        }
      `}</style>

      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
        <img src="/logo.png" alt="2Do Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#10b981' }}>2Do</span>
      </Link>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px', fontWeight: '500', color: '#4b5563' }}>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>Todos</Link>
        
        <div className="features-trigger" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <a href="#benefits" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            Benefits <ChevronDown size={16} />
          </a>

          <div className="mega-menu">
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#9ca3af', letterSpacing: '0.05em', marginBottom: '16px', paddingLeft: '12px' }}>OUR BENEFITS</div>
              <FeatureItem icon={Sun} color="#fbbf24" title="Planner" desc="Plan your day with intention" />
              <FeatureItem icon={Moon} color="#0d9488" title="Journal" desc="Reflect and grow daily" />
              <FeatureItem icon={Sparkles} color="#ea580c" title="Lists" desc="Organise anything" />
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#9ca3af', letterSpacing: '0.05em', marginBottom: '16px', paddingLeft: '12px' }}>FOR YOU</div>
              <FeatureItem icon={GraduationCap} color="#64748b" title="Students" desc="Stay on top of uni" />
              <FeatureItem icon={Briefcase} color="#64748b" title="Professionals" desc="Make every workday count" />
              <FeatureItem icon={Heart} color="#64748b" title="Families" desc="Run your household smoothly" />
              <FeatureItem icon={Leaf} color="#64748b" title="Wellness" desc="Build habits that nurture your mind" />
            </div>
          </div>
        </div>
        
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/profile" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'inherit' }}>
              <User size={20} /> Profile
            </Link>
            <button 
              onClick={handleLogout} 
              className="btn-primary" 
              style={{ backgroundColor: '#ef4444', padding: '10px 24px', borderRadius: '8px', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn-primary" style={{ backgroundColor: '#10b981', padding: '10px 24px', borderRadius: '8px', textDecoration: 'none', color: '#fff' }}>
            Get Started
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

