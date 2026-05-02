import * as React from 'react';
import { useState, useRef, useEffect } from 'react';

export default function OTPPage() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // الانتقال للحقل التالي
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(30);
      setOtp(['', '', '', '']);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.title}>أدخل رمز التحقق</h1>

        <div style={styles.otpBox}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              style={styles.otpInput}
              onFocus={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.15)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onBlur={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.08)';
                e.target.style.transform = 'scale(1)';
              }}
            />
          ))}
        </div>

        <button style={styles.btn}>تأكيد</button>

        <div 
          style={{
            ...styles.timer,
            cursor: timer === 0 ? 'pointer' : 'default',
          }}
          onClick={handleResend}
        >
          {timer > 0 
            ? `إعادة الإرسال خلال ${formatTime(timer)}`
            : 'إعادة إرسال الرمز'
          }
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(160deg, #0b0f3a, #0a1c5c, #05082f)',
    color: 'white',
    minHeight: '100vh',
    direction: 'rtl',
  },
  container: {
    padding: '20px',
    paddingTop: '80px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  otpBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    direction: 'ltr',
  },
  otpInput: {
    width: '50px',
    height: '60px',
    textAlign: 'center',
    fontSize: '20px',
    border: 'none',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.08)',
    color: 'white',
    outline: 'none',
    transition: '0.2s',
  },
  btn: {
    width: '100%',
    marginTop: '30px',
    padding: '15px',
    border: 'none',
    borderRadius: '30px',
    background: 'linear-gradient(90deg, #3ddc97, #2bb673)',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  timer: {
    textAlign: 'center',
    marginTop: '15px',
    opacity: 0.7,
    fontSize: '14px',
  },
};
