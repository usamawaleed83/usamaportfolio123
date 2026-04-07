import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState({
        totalMessages: 0,
        todayMessages: 0,
        unreadMessages: 0
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Check for token in URL (from Google OAuth redirect)
        const urlParams = new URLSearchParams(window.location.search);
        const tokenFromUrl = urlParams.get('token');
        
        if (tokenFromUrl) {
            localStorage.setItem('adminToken', tokenFromUrl);
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }

        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin');
            return;
        }
        fetchMessages();
        fetchStats();
    }, [navigate]);

    const fetchMessages = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch('https://usamaportfolio-backend-production.up.railway.app/api/admin/messages', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setMessages(data.messages || []);
            }
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
        setIsLoading(false);
    };

    const fetchStats = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch('https://usamaportfolio-backend-production.up.railway.app/api/admin/stats', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setStats(data.stats || stats);
            }
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/');
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-[var(--bg-color)] py-8 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-[var(--theme-text)] mb-2">
                            Admin <span className="text-[#ef8354]">Dashboard</span>
                        </h1>
                        <p className="text-[var(--theme-text)] opacity-60">Manage your portfolio and view messages</p>
                    </div>
                    <div className="flex gap-3">
                        <Link to="/" className="px-6 py-3 bg-[var(--card-bg)] text-[var(--theme-text)] rounded-xl font-semibold border border-[var(--border-color)] hover:border-[#ef8354] transition-all">
                            View Portfolio
                        </Link>
                        <button 
                            onClick={handleLogout}
                            className="px-6 py-3 bg-[#ef8354] text-white rounded-xl font-semibold hover:bg-[#ef8354]/90 transition-all"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border-color)] shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                                <span className="text-2xl">📧</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[var(--theme-text)]">{stats.totalMessages}</h3>
                                <p className="text-[var(--theme-text)] opacity-60 font-semibold">Total Messages</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border-color)] shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                                <span className="text-2xl">📅</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[var(--theme-text)]">{stats.todayMessages}</h3>
                                <p className="text-[var(--theme-text)] opacity-60 font-semibold">Today's Messages</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border-color)] shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                <span className="text-2xl">🔔</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[var(--theme-text)]">{stats.unreadMessages}</h3>
                                <p className="text-[var(--theme-text)] opacity-60 font-semibold">Unread Messages</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Messages Section */}
                <div className="bg-[var(--card-bg)] rounded-3xl p-8 border border-[var(--border-color)] shadow-2xl">
                    <h2 className="text-3xl font-black text-[var(--theme-text)] mb-6">Recent Messages</h2>
                    
                    {isLoading ? (
                        <div className="text-center py-8">
                            <div className="text-[var(--theme-text)] opacity-60">Loading messages...</div>
                        </div>
                    ) : messages.length === 0 ? (
                        <div className="text-center py-8">
                            <div className="text-6xl mb-4">📭</div>
                            <div className="text-[var(--theme-text)] opacity-60">No messages yet</div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {messages.map((message, index) => (
                                <div key={index} className="bg-[var(--bg-color)] rounded-2xl p-6 border border-[var(--border-color)]">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                                        <div>
                                            <h3 className="text-xl font-black text-[var(--theme-text)]">{message.name}</h3>
                                            <p className="text-[#ef8354] font-semibold">{message.email}</p>
                                        </div>
                                        <div className="text-[var(--theme-text)] opacity-60 text-sm">
                                            {formatDate(message.createdAt || new Date())}
                                        </div>
                                    </div>
                                    <p className="text-[var(--theme-text)] opacity-80 leading-relaxed">{message.message}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;