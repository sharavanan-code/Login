import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
import '../styles/Form.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register({ name, email, password });
      alert('Registration successful');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="full-page">
      <div className="form-card">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
