import useAuthStore from '../store/authStore';
import Navbar from '../components/Navbar';
import { User, Mail, Calendar, Settings } from 'lucide-react';

const Profile = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#333' }}>
      <Navbar />
      
      <div style={{ padding: '80px 60px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start' }}>
          <div style={{ 
            width: '200px', 
            height: '200px', 
            borderRadius: '100px', 
            backgroundColor: '#f0fdf4', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            border: '4px solid #10b981'
          }}>
            <User size={100} color="#10b981" />
          </div>

          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '8px', color: '#111827' }}>
              User <span style={{ color: '#10b981', fontStyle: 'italic', fontWeight: '400' }}>Profile.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '40px' }}>
              Manage your personal information and account settings.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: '#10b981' }}>
                  <User size={20} />
                  <span style={{ fontWeight: '600' }}>Username</span>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{user?.username}</div>
              </div>

              <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: '#10b981' }}>
                  <Mail size={20} />
                  <span style={{ fontWeight: '600' }}>Email Address</span>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{user?.email}</div>
              </div>
            </div>

            <button className="btn-primary" style={{ marginTop: '40px', backgroundColor: '#10b981', width: '200px', borderRadius: '12px' }}>
              <Settings size={18} /> Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

