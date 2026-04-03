import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const errorParam = urlParams.get('error');
        
        if (errorParam === 'oauth_not_configured') {
            setError('Google OAuth is not configured. Please use regular login or contact admin.');
        } else if (errorParam === 'unauthorized') {
            setError('Your Gmail account is not authorized. Please contact admin.');
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('adminToken', data.token);
                navigate('/admin/dashboard');
            } else {
                setError(data.message || 'Invalid credentials');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Login failed. Please try again.');
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-[var(--bg-color)] flex flex-col">
            <div className="w-full bg-[var(--card-bg)] border-b border-[var(--border-color)] px-4 py-3">
                <div className="max-w-[1400px] mx-auto flex justify-between items-center">
                    <Link to="/" className="text-xl font-black flex items-center tracking-tighter hover:scale-105 transition-transform">
                        <span className="text-[var(--theme-text)]">My</span>
                        <span className="text-[#ef8354]">Portfolio</span>
                    </Link>
                    <Link to="/" className="text-[var(--theme-text)] hover:text-[#ef8354] font-semibold text-sm transition-colors">
                        ← Back to Portfolio
                    </Link>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center px-4">
                <div className="max-w-xs w-full">
                    <div className="bg-[var(--card-bg)] rounded-xl p-5 border border-[var(--border-color)] shadow-xl">
                        <div className="text-center mb-5">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#ef8354] to-[#ef8354]/80 rounded-lg flex items-center justify-center text-lg shadow-lg mx-auto mb-2">
                                🔐
                            </div>
                            <h1 className="text-xl font-black text-[var(--theme-text)] mb-1">Admin Login</h1>
                            <p className="text-[var(--theme-text)] opacity-60 text-xs">Access your portfolio dashboard</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    value={credentials.username}
                                    onChange={handleInputChange}
                                    placeholder="Username"
                                    required
                                    className="w-full bg-transparent border-b-2 border-[var(--border-color)] py-2 text-sm font-semibold text-[var(--theme-text)] placeholder:text-[var(--theme-text)] placeholder:opacity-40 focus:outline-none focus:border-[#ef8354] transition-all"
                                />
                            </div>

                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleInputChange}
                                    placeholder="Password"
                                    required
                                    className="w-full bg-transparent border-b-2 border-[var(--border-color)] py-2 text-sm font-semibold text-[var(--theme-text)] placeholder:text-[var(--theme-text)] placeholder:opacity-40 focus:outline-none focus:border-[#ef8354] transition-all"
                                />
                            </div>

                            {error && (
                                <div className="text-red-500 text-center font-semibold text-xs">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#ef8354] text-white py-2.5 rounded-lg font-black text-sm uppercase tracking-widest hover:scale-[1.02] transition-all shadow-lg shadow-[#ef8354]/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </button>
                        </form>

                        <div className="relative my-3">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[var(--border-color)]"></div>
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="px-3 bg-[var(--card-bg)] text-[var(--theme-text)] opacity-60 font-semibold">OR</span>
                            </div>
                        </div>

                        <a
                            href="http://localhost:5000/api/admin/auth/google"
                            className="w-full bg-white hover:bg-gray-50 text-gray-800 py-2.5 rounded-lg font-black text-sm flex items-center justify-center gap-2 transition-all shadow-lg border border-gray-200 hover:scale-[1.02] active:scale-95"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Continue with Google
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;