import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await loginUser({ email, password });
            login(res.data.token, res.data.user);
            navigate('/');
        } catch (err) {
            alert('Login Failed: ' + (err.response?.data?.error || err.message));
        }
    };

    return (
        <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="bg-[#161b22] p-8 rounded-xl border border-[#30363d] w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
                <input className="w-full mb-4 p-3 bg-[#0d1117] border border-[#30363d] rounded text-white" 
                       placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="w-full mb-6 p-3 bg-[#0d1117] border border-[#30363d] rounded text-white" 
                       placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="w-full bg-[#238636] hover:bg-[#2ea043] text-white p-3 rounded font-bold">Sign In</button>
            </form>
        </div>
    );
};
export default Login;