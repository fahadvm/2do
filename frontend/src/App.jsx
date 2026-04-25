import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '80px' }} className="mobile-padding">
        <style>{`
          @media (min-width: 768px) {
            .mobile-padding { padding-bottom: 0 !important; }
          }
        `}</style>


        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Routes>
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;
