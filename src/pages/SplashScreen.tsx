import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css';

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Hide logo after 2 seconds
    const logoTimer = setTimeout(() => {
      const logo = document.getElementById('logo');
      if (logo) logo.classList.add('fade-out');
    }, 2000);

    // Show card after 2.4 seconds
    const cardTimer = setTimeout(() => {
      const cardBox = document.getElementById('cardBox');
      if (cardBox) cardBox.classList.add('show-card');
    }, 2400);

    // Navigate to login after 4.5 seconds
    const navTimer = setTimeout(() => {
      navigate('/login');
    }, 4500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(cardTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div className="splash-container">
      {/* Logo */}
      <div className="logo" id="logo">
        <svg viewBox="0 0 100 100">
          <polygon points="10,10 80,10 70,25 20,25" fill="#22c55e"/>
          <polygon points="10,35 60,35 50,50 10,50" fill="#22c55e"/>
          <polygon points="10,60 40,60 30,75 10,75" fill="#22c55e"/>
        </svg>
      </div>

      {/* Card */}
      <div className="card-box" id="cardBox">
        <div className="card">
          <div className="chip"></div>
          <div className="number">9760 **** 5055 7007</div>
          <div className="wave"></div>
        </div>
        <div className="text">The Right to <span>Pay</span></div>
      </div>
    </div>
  );
};
