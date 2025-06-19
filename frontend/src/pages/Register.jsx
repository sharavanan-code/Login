import { useState } from 'react';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await register({ name, email, password });
      alert('Registration successful');
      console.log(res.data);
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  const handleGoToLogin = () => {
    navigate('/login'); // 👈 go to login page
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button type="submit">Register</button>
        <button type="button" onClick={handleGoToLogin}>Login</button>
      </div>
    </form>
  );
}

export default Register;
