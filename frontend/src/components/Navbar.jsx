import { useState } from 'react';
import { 
  CheckCircle2, Search, ChevronDown, User, LogOut, 
  Sun, Moon, Sparkles, GraduationCap, Briefcase, Heart, Leaf, Menu, X
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
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
    <nav className="nav-wrapper">
      <style>{`
        .nav-wrapper {
          padding: 0 60px;
          height: var(--nav-height);
          display: flex;
          justify-content: space-between;
          align-items: center;
          backgroundColor: #fff;
          border-bottom: 1px solid #f3f4f6;
          position: sticky;
          top: 0;
          z-index: 1000;
          background: white;
        }
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
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          font-weight: 500;
          color: #4b5563;
          height: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #4b5563;
        }
        @media (max-width: 767px) {
          .nav-wrapper { padding: 0 24px; }
          .nav-links { display: none; }
          .mobile-menu-btn { display: block; }
          
          .nav-links.mobile-open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: var(--nav-height);
            left: 0;
            right: 0;
            background: white;
            padding: 24px;
            gap: 20px;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            align-items: flex-start;
          }
          .features-trigger .mega-menu {
            display: none;
          }
        }
      `}</style>

      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}>
        <img src="/logo.png" alt="2Do Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#10b981' }}>2Do</span>
      </Link>
      
      <button className="mobile-menu-btn hidden-mobile" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''} hidden-mobile`}>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsMobileMenuOpen(false)}>Todos</Link>
        
        <div className="features-trigger" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <a href="#benefits" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            Benefits <ChevronDown size={16} className="hidden-mobile" />
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', height: '100%' }} className="user-nav-actions">

            <style>{`
              @media (max-width: 767px) {
                .user-nav-actions {
                  flex-direction: column;
                  width: 100%;
                  align-items: flex-start !important;
                }
              }
            `}</style>

            <Link to="/profile" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'inherit' }} onClick={() => setIsMobileMenuOpen(false)}>
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
          <Link to="/login" className="btn-primary" style={{ backgroundColor: '#10b981', padding: '10px 24px', borderRadius: '8px', textDecoration: 'none', color: '#fff' }} onClick={() => setIsMobileMenuOpen(false)}>
            Get Started
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


