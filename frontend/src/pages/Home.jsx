import { useRef } from 'react';
import Navbar from '../components/Navbar';
import { CheckCircle2, ArrowRight, Sun, Target, ListTodo, Sparkles } from 'lucide-react';

const Home = () => {
  const featuresRef = useRef(null);

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#333' }}>
      <Navbar />

      <style>{`
        .hero-section {
          padding: 80px 60px;
          display: flex;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
          gap: 40px;
        }
        .hero-title {
          font-size: 4.5rem;
          line-height: 1.1;
          font-weight: 700;
          margin-bottom: 24px;
          color: #1f2937;
        }
        .benefit-card {
          border-radius: 40px;
          padding: 80px;
          display: flex;
          align-items: center;
          gap: 80px;
          margin-bottom: 60px;
        }
        .app-mockup {
          width: 320px;
          height: 600px;
          background-color: #fff;
          border-radius: 40px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          padding: 20px;
          border: 8px solid #333;
        }
        
        @media (max-width: 767px) {
          .hero-section {
            flex-direction: column;
            padding: 40px 24px;
            text-align: center;
          }
          .hero-title {
            font-size: 3rem;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .benefit-card {
            flex-direction: column !important;
            padding: 40px 24px;
            gap: 40px;
            text-align: center;
            border-radius: 24px;
          }
          .benefit-card ul {
            text-align: left;
          }
          .benefit-content h2 {
            font-size: 2rem !important;
          }
          #benefits {
            padding: 24px !important;
          }
          .why-grid {
            padding: 60px 24px !important;
          }
        }
      `}</style>

      <div className="hero-section">
        <div style={{ flex: 1 }} className="hero-content">
          <h1 className="hero-title">
            Manage everyday <br /> life <span style={{ color: '#10b981', fontStyle: 'italic', fontWeight: '400' }}>better.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '500px', marginBottom: '40px', lineHeight: '1.6' }}>
            The one app to help you get organised, stay productive, and live your best life!
          </p>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#000', color: '#fff', padding: '8px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="apple" width="24" />
              <div style={{ fontSize: '0.7rem', textAlign: 'left' }}>Download on the <br /> <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>App Store</span></div>
            </div>
            <div style={{ backgroundColor: '#000', color: '#fff', padding: '8px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="google" width="24" />
              <div style={{ fontSize: '0.7rem', textAlign: 'left' }}>GET IT ON <br /> <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>Google Play</span></div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img src="https://img.freepik.com/free-vector/project-management-concept-illustration_114360-1437.jpg" alt="Hero" style={{ width: '100%', maxWidth: '600px' }} />
        </div>
      </div>

      <div id="benefits" ref={featuresRef} style={{ padding: '60px' }}>
        
        <div className="benefit-card" style={{ backgroundColor: '#fcd34d' }}>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div className="app-mockup">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <img src="https://i.pravatar.cc/40" style={{ borderRadius: '20px' }} alt="user" />
                <span style={{ fontWeight: '800', color: '#10b981', fontSize: '1.2rem' }}>Tasks</span>
              </div>
              <div style={{ padding: '10px', backgroundColor: '#f3f4f6', borderRadius: '12px', marginBottom: '20px', textAlign: 'left' }}>Search task...</div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                <span style={{ padding: '6px 16px', background: '#d1fae5', color: '#059669', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600' }}>Active</span>
                <span style={{ padding: '6px 16px', background: '#fff', borderRadius: '20px', fontSize: '0.8rem' }}>Done</span>
              </div>
              <div style={{ color: '#9ca3af', fontSize: '0.7rem', fontWeight: '700', marginBottom: '10px', textAlign: 'left' }}>TODAY</div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '15px', alignItems: 'center' }}>
                <div style={{ width: '20px', height: '20px', border: '2px solid #ddd', borderRadius: '50%' }}></div>
                <div style={{ fontSize: '0.9rem' }}>Finalise the budget</div>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '15px', alignItems: 'center' }}>
                <div style={{ width: '20px', height: '20px', border: '2px solid #ddd', borderRadius: '50%' }}></div>
                <div style={{ fontSize: '0.9rem' }}>Buy concert tickets</div>
              </div>
            </div>
          </div>

          <div style={{ flex: 1 }} className="benefit-content">
            <CheckCircle2 size={48} color="#10b981" style={{ marginBottom: '24px' }} />
            <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '24px', color: '#1f2937' }}>Get things done with Tasks</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '1.1rem' }}>
                <span>Free your mind from clutter by moving tasks into the app.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '1.1rem' }}>
                <span>Never miss a deadline by adding reminders and due dates!</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '1.1rem' }}>
                <span>Feel the satisfaction of checking tasks off your list.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="benefit-card" style={{ padding: '80px', display: 'flex', alignItems: 'center', gap: '80px' }}>
          <div style={{ flex: 1 }} className="benefit-content">
            <Sun size={48} color="#fbbf24" style={{ marginBottom: '24px' }} />
            <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '24px', color: '#1f2937' }}>Achieve your goals with Planner</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '1.1rem' }}>
                <span>Set your priorities for each day.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '1.1rem' }}>
                <span>Spend your time and energy on the things that help you progress towards your goals.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '1.1rem' }}>
                <span>Highlight your most impactful task for the day to stay focused.</span>
              </li>
            </ul>
            <button className="btn-primary" style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '12px 28px', borderRadius: '12px', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
              Learn more <ArrowRight size={18} />
            </button>
          </div>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div className="app-mockup" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <img src="https://i.pravatar.cc/40" style={{ borderRadius: '20px' }} alt="user" />
                <span style={{ fontWeight: '800', color: '#10b981', fontSize: '1.2rem' }}>Today</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '0.8rem', color: '#6b7280' }}>
                <div style={{ textAlign: 'center' }}>Sun<br/>9</div>
                <div style={{ textAlign: 'center' }}>Mon<br/>10</div>
                <div style={{ textAlign: 'center', background: '#10b981', color: '#fff', borderRadius: '50%', width: '35px' }}>Wed<br/>12</div>
                <div style={{ textAlign: 'center' }}>Thu<br/>13</div>
              </div>
              <div style={{ background: '#fef3c7', padding: '15px', borderRadius: '15px', marginBottom: '20px', textAlign: 'left' }}>
                <div style={{ fontSize: '0.7rem', color: '#92400e', fontWeight: '700' }}>NEXT UP: 1:30 PM</div>
                <div style={{ fontWeight: '600' }}>Team Lunch</div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1, padding: '10px', border: '1px solid #eee', borderRadius: '10px', textAlign: 'center', fontSize: '0.8rem' }}>Daily plan</div>
                <div style={{ flex: 1, padding: '10px', border: '1px solid #eee', borderRadius: '10px', textAlign: 'center', fontSize: '0.8rem' }}>Daily review</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="why-grid" style={{ backgroundColor: '#f9fafb', padding: '100px 60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '16px', color: '#111827' }}>Why Choose 2Do?</h2>
        <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px' }}>
          We built 2Do to solve the problems of traditional productivity tools. Experience the benefits of a truly modern workflow.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #e5e7eb', textAlign: 'left' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#dcfce7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <CheckCircle2 color="#10b981" />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px' }}>Instant Collaboration</h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Sync tasks with teammates in milliseconds. No refresh, no delay, just pure productivity.</p>
          </div>

          <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #e5e7eb', textAlign: 'left' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#fef3c7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Sun color="#fbbf24" />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px' }}>Mental Clarity</h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Reduce cognitive load and stress by offloading your entire schedule into a reliable system.</p>
          </div>

          <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #e5e7eb', textAlign: 'left' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#fee2e2', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Target color="#ef4444" />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px' }}>Secure Privacy</h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Your data is encrypted and protected. You maintain total ownership and control over your tasks.</p>
          </div>

          <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #e5e7eb', textAlign: 'left' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#e0e7ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Sparkles color="#6366f1" />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px' }}>Zero Learning Curve</h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Designed to be intuitive. Start managing your life better in seconds, not hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


