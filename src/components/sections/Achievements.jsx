import { Link } from 'react-router-dom';

const Achievements = () => {
    const achievements = [
        { label: 'Projects Completed', value: '15+', sub: 'High Quality' },
        { label: 'Technologies Mastered', value: '10+', sub: 'Modern Stack' },
        { label: 'Years Experience', value: '3+', sub: 'Web Development' },
        { label: 'Client Satisfaction', value: '100%', sub: 'Success Rate' },
    ];

    const certificateAchievement = {
        title: "Completed React.js course from Great Learning",
        description: "This comprehensive course covered advanced React concepts, state management, and best practices for building modern web applications.",
        certificate: "React.js Mastery Certificate",
        institution: "Great Learning Academy",
        date: "2024"
    };

    return (
        <section id="achievements" className="py-20 px-8 md:px-20 transition-all duration-500 bg-[var(--bg-color)]">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 text-[var(--theme-text)] tracking-tight">
                        Achievement <span className="text-[#ef8354]">Highlight</span>
                    </h2>
                    <p className="text-[var(--theme-text)] opacity-60 text-lg max-w-2xl mx-auto">
                        Showcasing my journey of continuous learning and professional growth
                    </p>
                </div>

                {/* Certificate Achievement Highlight */}
                <div className="bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)] rounded-3xl p-8 md:p-12 border border-[var(--border-color)] shadow-2xl mb-16 hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ef8354] via-[#ef8354]/50 to-transparent"></div>
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ef8354]/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#ef8354]/5 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        {/* Certificate Visual */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#ef8354] to-[#ef8354]/60 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="relative bg-white rounded-2xl p-8 shadow-2xl border-4 border-[#ef8354]/20 hover:border-[#ef8354]/40 transition-all duration-300">
                                {/* Certificate Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#ef8354] to-[#ef8354]/80 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                                        🏆
                                    </div>
                                    <div>
                                        <div className="text-gray-600 text-sm font-semibold uppercase tracking-wider">Certificate of</div>
                                        <div className="text-gray-800 text-lg font-black">COMPLETION</div>
                                    </div>
                                </div>
                                
                                {/* Certificate Content */}
                                <div className="text-center mb-6">
                                    <div className="text-gray-600 text-sm mb-2">Presented to</div>
                                    <div className="text-2xl font-black text-gray-800 mb-4">Usama Waleed</div>
                                    <div className="text-gray-600 text-sm leading-relaxed">
                                        For successfully completing a five online course
                                    </div>
                                    <div className="text-lg font-bold text-[#ef8354] mt-2">React JS Tutorial</div>
                                </div>

                                {/* Certificate Footer */}
                                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                                    <div className="text-xs text-gray-500">Great Learning Academy</div>
                                    <div className="w-16 h-8 bg-gradient-to-r from-[#ef8354] to-[#ef8354]/80 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Achievement Details */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#ef8354] to-[#ef8354]/80 rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                                    🏆
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-[var(--theme-text)] mb-3 leading-tight">
                                        {certificateAchievement.title}
                                    </h3>
                                    <p className="text-[var(--theme-text)] opacity-80 leading-relaxed text-lg">
                                        {certificateAchievement.description}
                                    </p>
                                </div>
                            </div>

                            {/* Achievement Stats */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-[var(--bg-color)] rounded-2xl p-4 border border-[var(--border-color)] hover:border-[#ef8354]/50 transition-all">
                                    <div className="text-2xl font-black text-[#ef8354]">2024</div>
                                    <div className="text-sm text-[var(--theme-text)] opacity-60">Completed</div>
                                </div>
                                <div className="bg-[var(--bg-color)] rounded-2xl p-4 border border-[var(--border-color)] hover:border-[#ef8354]/50 transition-all">
                                    <div className="text-2xl font-black text-[#ef8354]">React.js</div>
                                    <div className="text-sm text-[var(--theme-text)] opacity-60">Technology</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {achievements.map((ach, index) => (
                        <div key={index} className="p-8 bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] shadow-xl text-center group transition-all hover:-translate-y-2 hover:border-[#ef8354]/50 hover:shadow-2xl duration-300">
                            <h3 className="text-[#ef8354] text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">{ach.label}</h3>
                            <div className="text-4xl md:text-5xl font-black text-[var(--theme-text)] mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-300">{ach.value}</div>
                            <div className="text-xs text-[var(--theme-text)] opacity-40 font-bold uppercase tracking-widest">{ach.sub}</div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Link to="/achievements" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ef8354] to-[#ef8354]/80 hover:from-[#ef8354]/90 hover:to-[#ef8354] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group">
                        <span>View All Achievements</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
