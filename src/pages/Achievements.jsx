import { Link } from 'react-router-dom';
import { useState } from 'react';

const Achievements = () => {
    const [showCertificateModal, setShowCertificateModal] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const achievements = [
        {
            id: 1,
            title: "React Course Completion",
            year: "2024",
            description: "Completed an intensive React course covering advanced concepts and best practices.",
            category: "Education",
            verified: true,
            hasDownload: true
        },
        {
            id: 2,
            title: "Python Coding Competition - ITClub Pakistan",
            year: "2024",
            description: "Participated and excelled in a nationwide Python coding competition organized by ITClub Pakistan.",
            category: "Competition",
            verified: true,
            hasDownload: true
        },
        {
            id: 3,
            title: "Microsoft Learn Student Ambassador",
            year: "2024",
            description: "Selected as a Microsoft Learn Student Ambassador, representing and promoting Microsoft technologies on campus.",
            category: "Leadership",
            verified: true,
            hasDownload: true
        },
        {
            id: 4,
            title: "MLSA Activities Participation",
            year: "2024",
            description: "Actively participated in various Microsoft Learn Student Ambassador activities and events.",
            category: "Activities",
            verified: true,
            hasDownload: true
        },
        {
            id: 5,
            title: "WordPress Development Certification",
            year: "2023",
            description: "Completed comprehensive WordPress development training covering custom themes, plugins, and advanced customization techniques.",
            category: "WordPress",
            verified: true,
            hasDownload: true,
            certificateImage: "/DSTP_Certificate_ UJJJCMMK5 (1).pdf",
            certificatePdf: "/DSTP_Certificate_ UJJJCMMK5 (1).pdf"
        },
        {
            id: 6,
            title: "Freelancer",
            year: "Oct 2022",
            description: "Started freelancing career with successful completion of multiple web development projects for various clients, specializing in responsive design and modern web technologies.",
            category: "Freelancing",
            verified: true,
            hasDownload: true,
            certificateImage: "/DSTP_Certificate_ SGS52AFMK.pdf",
            certificatePdf: "/DSTP_Certificate_ SGS52AFMK.pdf"
        },
        {
            id: 7,
            title: "Vision X Web Developer",
            year: "2023",
            description: "Working as a Web Developer at Vision X, contributing to cutting-edge web projects.",
            category: "Professional",
            verified: true,
            hasDownload: false
        }
    ];

    const additionalActivities = [
        "Organized coding workshops for junior students",
        "Contributed to open-source projects on GitHub",
        "Presented at local tech meetups on web development topics",
        "Mentored newcomers in university coding club",
        "Developed custom WordPress plugins for client projects",
        "Created responsive WordPress themes for various industries",
        "Completed 15+ successful freelance projects with 5-star ratings",
        "Specialized in WordPress e-commerce solutions and payment integrations"
    ];

    return (
        <div className="min-h-screen bg-[var(--bg-color)] py-12 px-4 md:px-8">
            <div className="max-w-[1200px] mx-auto">
                {/* Back Button */}
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 text-[#ef8354] hover:text-[#ef8354]/80 mb-8 font-semibold transition-all hover:gap-3 duration-300"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Portfolio
                </Link>

                {/* Header Section */}
                <div className="bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)] rounded-3xl p-12 md:p-16 border border-[var(--border-color)] shadow-2xl mb-12 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ef8354] via-[#ef8354]/50 to-transparent"></div>
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ef8354]/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#ef8354]/5 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10 text-center">
                        <div className="mb-8 relative group">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#ef8354] to-[#ef8354]/80 rounded-2xl flex items-center justify-center text-4xl shadow-lg mx-auto group-hover:scale-110 transition-transform">
                                🏆
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black text-[var(--theme-text)] mb-4 tracking-tight">
                            My <span className="text-[#ef8354]">Achievements</span>
                        </h1>
                        <p className="text-[var(--theme-text)] opacity-60 text-xl max-w-2xl mx-auto">
                            A showcase of my professional accomplishments, certifications, and contributions to the tech community
                        </p>
                    </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid gap-8 mb-12">
                    {achievements.map((achievement) => (
                        <div key={achievement.id} className="bg-[var(--card-bg)] rounded-3xl p-8 md:p-10 border border-[var(--border-color)] shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-[#ef8354]/50 group">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                {/* Achievement Icon/Preview */}
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#ef8354] to-[#ef8354]/80 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                                        {achievement.category === 'Education' && '📚'}
                                        {achievement.category === 'Competition' && '🏆'}
                                        {achievement.category === 'Leadership' && '👑'}
                                        {achievement.category === 'Activities' && '🎯'}
                                        {achievement.category === 'Professional' && '💼'}
                                        {achievement.category === 'WordPress' && '🌐'}
                                        {achievement.category === 'Freelancing' && '💻'}
                                    </div>
                                </div>

                                {/* Achievement Details */}
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-black text-[var(--theme-text)] mb-2 group-hover:text-[#ef8354] transition-colors">
                                                {achievement.title}
                                            </h3>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="bg-[#ef8354]/10 text-[#ef8354] px-3 py-1 rounded-full text-sm font-bold">
                                                    {achievement.year}
                                                </span>
                                                <span className="bg-[var(--bg-color)] text-[var(--theme-text)] px-3 py-1 rounded-full text-sm font-semibold border border-[var(--border-color)]">
                                                    {achievement.category}
                                                </span>
                                                {achievement.verified && (
                                                    <div className="flex items-center gap-1 text-green-500 text-sm font-semibold">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        Verified
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-[var(--theme-text)] opacity-80 leading-relaxed text-lg mb-6">
                                        {achievement.description}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-3">
                                        <button 
                                            onClick={() => {
                                                setSelectedCertificate(achievement);
                                                setShowCertificateModal(true);
                                            }}
                                            className="inline-flex items-center gap-2 bg-[#ef8354] hover:bg-[#ef8354]/90 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            Preview
                                        </button>
                                        
                                        {achievement.hasDownload && (
                                            <a 
                                                href={achievement.certificatePdf || '#'} 
                                                download={`${achievement.title.replace(/\s+/g, '_')}_Certificate.pdf`}
                                                className="inline-flex items-center gap-2 bg-[var(--bg-color)] hover:bg-[var(--border-color)] text-[var(--theme-text)] px-6 py-3 rounded-xl font-semibold border border-[var(--border-color)] transition-all hover:scale-105"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                Download
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional University Activities */}
                <div className="bg-[var(--card-bg)] rounded-3xl p-8 md:p-10 border border-[var(--border-color)] shadow-2xl mb-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#ef8354] to-[#ef8354]/80 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                            🎓
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-[var(--theme-text)]">Additional University Activities</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        {additionalActivities.map((activity, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-[var(--bg-color)] rounded-2xl border border-[var(--border-color)] hover:border-[#ef8354]/50 transition-all">
                                <div className="w-6 h-6 bg-[#ef8354]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-[#ef8354] text-sm font-bold">✓</span>
                                </div>
                                <span className="text-[var(--theme-text)] opacity-90 font-medium">{activity}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center py-8 border-t border-[var(--border-color)]">
                    <p className="text-[var(--theme-text)] opacity-40 text-sm">
                        © 2026 My Portfolio. All rights reserved.
                    </p>
                </div>

                {/* Certificate Preview Modal */}
                {showCertificateModal && selectedCertificate && (
                    <div className="fixed inset-0 z-50 bg-[var(--bg-color)] transition-all duration-300">
                        <div className="w-full h-full flex flex-col">
                            {/* Modal Header - Minimal */}
                            <div className="bg-[var(--card-bg)] p-2 border-b border-[var(--border-color)] flex-shrink-0">
                                <div className="flex items-center justify-between max-w-full mx-auto px-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-gradient-to-br from-[#ef8354] to-[#ef8354]/80 rounded-md flex items-center justify-center text-sm shadow-lg">
                                            {selectedCertificate.category === 'WordPress' && '🌐'}
                                            {selectedCertificate.category === 'Freelancing' && '💻'}
                                            {selectedCertificate.category === 'Education' && '📚'}
                                            {selectedCertificate.category === 'Competition' && '🏆'}
                                            {selectedCertificate.category === 'Leadership' && '👑'}
                                            {selectedCertificate.category === 'Activities' && '🎯'}
                                            {selectedCertificate.category === 'Professional' && '💼'}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-[var(--theme-text)]">{selectedCertificate.title}</h3>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => setShowCertificateModal(false)}
                                        className="inline-flex items-center gap-1 bg-[#ef8354] hover:bg-[#ef8354]/90 text-white px-3 py-1.5 rounded-md font-medium transition-all hover:scale-105 shadow-lg text-xs"
                                    >
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        Close
                                    </button>
                                </div>
                            </div>

                            {/* Certificate Display - Maximum Space */}
                            <div className="flex-1 overflow-hidden">
                                <div className="w-full h-full p-1">
                                    <div className="bg-white rounded-lg border border-[var(--border-color)] h-full shadow-2xl overflow-hidden">
                                        <iframe
                                            src={selectedCertificate.certificateImage}
                                            className="w-full h-full border-0"
                                            title={`${selectedCertificate.title} Certificate`}
                                            style={{ 
                                                width: '100%',
                                                height: '100%',
                                                minHeight: 'calc(100vh - 60px)'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Achievements;