import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import './Dashboard.css';

const dashboardData = [
  { name: 'Jan', guests: 400, revenue: 2400 },
  { name: 'Feb', guests: 300, revenue: 1398 },
  { name: 'Mar', guests: 200, revenue: 9800 },
  { name: 'Apr', guests: 278, revenue: 3908 },
  { name: 'May', guests: 189, revenue: 4800 },
  { name: 'Jun', guests: 239, revenue: 3800 },
];

const recentGuests = [
  { id: 1, name: 'أحمد محمد', email: 'ahmad@example.com', date: '2024-01-15', status: 'Active' },
  { id: 2, name: 'فاطمة علي', email: 'fatma@example.com', date: '2024-01-14', status: 'Active' },
  { id: 3, name: 'محمود سالم', email: 'mahmoud@example.com', date: '2024-01-13', status: 'Inactive' },
  { id: 4, name: 'ليلى حسن', email: 'layla@example.com', date: '2024-01-12', status: 'Active' },
  { id: 5, name: 'علي كريم', email: 'ali@example.com', date: '2024-01-11', status: 'Active' },
];

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h1>لوحة التحكم</h1>
        <button className="logout-btn" onClick={handleLogout}>تسجيل الخروج</button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">👥</div>
          <div className="stat-content">
            <h3>إجمالي الزوار</h3>
            <p className="stat-number">1,234</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">💰</div>
          <div className="stat-content">
            <h3>الإيرادات</h3>
            <p className="stat-number">$52,500</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">📈</div>
          <div className="stat-content">
            <h3>النمو</h3>
            <p className="stat-number">+23%</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">⭐</div>
          <div className="stat-content">
            <h3>التقييم</h3>
            <p className="stat-number">4.8/5</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <h2>عدد الزوار</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="guests" fill="#667eea" name="الزوار" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>الإيرادات</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#22c55e" name="الإيرادات" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Guests Table */}
      <div className="table-card">
        <h2>الزوار الأخيرون</h2>
        <table className="guests-table">
          <thead>
            <tr>
              <th>الاسم</th>
              <th>البريد الإلكتروني</th>
              <th>التاريخ</th>
              <th>الحالة</th>
              <th>الإجراء</th>
            </tr>
          </thead>
          <tbody>
            {recentGuests.map((guest) => (
              <tr key={guest.id}>
                <td>{guest.name}</td>
                <td>{guest.email}</td>
                <td>{guest.date}</td>
                <td>
                  <span className={`status-badge ${guest.status.toLowerCase()}`}>
                    {guest.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn edit">تعديل</button>
                  <button className="action-btn delete">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
