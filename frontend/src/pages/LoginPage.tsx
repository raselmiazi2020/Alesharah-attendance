import { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/slices/authSlice';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      dispatch(setCredentials({ token: response.data.token, user: response.data.user }));
      navigate('/dashboard');
    } catch (error) {
      setError('Login failed. Check credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-semibold text-slate-900">Alesharah Smart Attendance</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-slate-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-slate-500 focus:outline-none"
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" className="w-full rounded-xl bg-slate-900 px-4 py-3 text-white hover:bg-slate-700">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
