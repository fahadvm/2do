import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, ListTodo, Settings, Plus } from 'lucide-react';


import useAuthStore from '../store/authStore';

const MobileNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  
  const isActive = (path) => location.pathname === path;

  return (
    <div className="mobile-nav-wrapper">
      <style>{`
        .mobile-nav-wrapper {
          display: none;
          position: fixed;
          bottom: 20px;
          left: 20px;
          right: 20px;
          height: 70px;
          z-index: 2000;
        }

        .nav-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
        }

        .nav-items-container {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 20px;
          z-index: 10;
        }

        .nav-item {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #64748b;
          text-decoration: none;
          flex: 1;
          transition: 0.3s;
          margin-right: 15px;
        }

        .nav-item:nth-child(3) {
          margin-right: 80px; /* Space for the FAB after removing heart icon */
        }

        .nav-item.active {
          color: #ffffff;
        }


        .fab-button {
          position: absolute;
          right: 25px;
          top: -15px;
          width: 56px;
          height: 56px;
          background: #0f172a;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          border: 4px solid #fff;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .fab-button:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .mobile-nav-wrapper {
            display: block;
          }
        }
      `}</style>

      <svg className="nav-background" preserveAspectRatio="none" viewBox="0 0 360 70">
        <path 
          d="M30 0 H235 C242 0 245 4 250 10 C258 20 270 32 288 32 C306 32 318 20 326 10 C331 4 334 0 341 0 H330 Q360 0 360 30 V40 Q360 70 330 70 H30 Q0 70 0 40 V30 Q0 0 30 0 Z" 
          fill="#0f172a" 
        />
      </svg>

      <div className="nav-items-container">
        <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          <Home size={22} strokeWidth={1.5} />
        </Link>

        <Link to="/dashboard" className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}>
          <ListTodo size={22} strokeWidth={1.5} />
        </Link>


        <Link to="/profile" className={`nav-item ${isActive('/profile') ? 'active' : ''}`}>
          <Settings size={22} strokeWidth={1.5} />
        </Link>


        <button 
          className="fab-button"
          onClick={() => navigate(user ? '/dashboard' : '/login')}
        >
          <Plus size={24} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default MobileNav;

