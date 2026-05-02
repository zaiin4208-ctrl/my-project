import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

export const LoginPage: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login then navigate to dashboard
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-card slide-up">
        <div className="login-header">
          <h1>تسجيل الدخول</h1>
          <p>اهلا وسهلا بك</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="phone">رقم الهاتف</label>
            <input
              id="phone"
              type="tel"
              placeholder="05xxxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">كلمة المرور</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'جاري الدخول...' : 'تسجيل الدخول'}
          </button>
        </form>

        <div className="login-footer">
          <a href="#forgot">هل نسيت كلمة المرور؟</a>
          <p>ليس لديك حساب؟ <a href="#register">إنشاء حساب</a></p>
        </div>
      </div>
    </div>
  );
};
