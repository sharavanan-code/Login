import { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      alert('Login successful');
      console.log(res.data);
      // Navigate to dashboard or home after login
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
        <div className="full-page">
      <div className="form-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
   
  );
}

export default Login;
