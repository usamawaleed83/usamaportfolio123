import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, setTheme } = useTheme();
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isResumePage = location.pathname === '/resume';
  const isAchievementsPage = location.pathname === '/achievements';
  const isAdminPage = location.pathname.startsWith('/admin');
  const isOnSubPage = isResumePage || isAchievementsPage || isAdminPage;

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 transition-all duration-500 bg-[var(--theme-bg)] border-b border-[var(--border-color)] shadow-sm">
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-20 py-5 flex justify-between items-center">
          {/* Logo */}
          {isOnSubPage ? (
            <Link to="/" className="text-2xl md:text-3xl font-black flex items-center tracking-tighter hover:scale-105 transition-transform">
              <span className="text-[var(--theme-text)]">My</span>
              <span className="text-[#ef8354]">Portfolio</span>
            </Link>
          ) : (
            <a href="#home" className="text-2xl md:text-3xl font-black flex items-center tracking-tighter hover:scale-105 transition-transform">
              <span className="text-[var(--theme-text)]">My</span>
              <span className="text-[#ef8354]">Portfolio</span>
            </a>
          )}

          {/* Mobile Menu Toggle & Actions */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setShowThemeModal(true)}
              className="p-2.5 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-inherit text-[#ef8354] transition-all shadow-sm active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--theme-text)] p-2 hover:text-[#ef8354] transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex gap-10 text-[var(--theme-text)] text-sm md:text-base font-bold uppercase tracking-widest">
              {isOnSubPage ? (
                <>
                  <li><Link to="/" onClick={() => setTimeout(() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="hover:text-[#ef8354] transition-all relative group">Home<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ef8354] transition-all group-hover:w-full"></span></Link></li>
                  <li><Link to="/" onClick={() => setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="hover:text-[#ef8354] transition-all relative group">About<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ef8354] transition-all group-hover:w-full"></span></Link></li>
                  <li><Link to="/" onClick={() => setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="hover:text-[#ef8354] transition-all relative group">Projects<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ef8354] transition-all group-hover:w-full"></span></Link></li>
                  <li><Link to="/" onClick={() => setTimeout(() => document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="hover:text-[#ef8354] transition-all relative group">Blogs<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ef8354] transition-all group-hover:w-full"></span></Link></li>
                  <li><Link to="/" onClick={() => setTimeout(() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="hover:text-[#ef8354] transition-all relative group">Achievements<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ef8354] transition-all group-hover:w-full"></span></Link></li>
                  <li><Link to="/" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="hover:text-[#ef8354] transition-all relative group">Contact<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ef8354] transition-all group-hover:w-full"></span></Link></li>
                </>
              ) : (
                <>
                  <li><a href="#home" className="hover:text-[#ef8354] transition-all relative group">Home<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ef8354] transition-all group-hover:w-full"></span></a></li>
                  <li><a href="#about" className="hover:text-[#ef8354] transition-all relative group">About<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ef8354] transition-all group-hover:w-full"></span></a></li>
                  <li><a href="#projects" className="hover:text-[#ef8354] transition-all relative group">Projects<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ef8354] transition-all group-hover:w-full"></span></a></li>
                  <li><a href="#blogs" className="hover:text-[#ef8354] transition-all relative group">Blogs<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ef8354] transition-all group-hover:w-full"></span></a></li>
                  <li><a href="#achievements" className="hover:text-[#ef8354] transition-all relative group">Achievements<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ef8354] transition-all group-hover:w-full"></span></a></li>
                  <li><a href="#contact" className="hover:text-[#ef8354] transition-all relative group">Contact<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ef8354] transition-all group-hover:w-full"></span></a></li>
                </>
              )}
            </ul>

            <div className="flex items-center gap-6">
              {/* Theme Toggle Button - White box, Orange icon */}
              <button
                onClick={() => setShowThemeModal(true)}
                className="p-3 rounded-2xl bg-white border border-gray-200 text-[#ef8354] hover:border-[#ef8354] transition-all group shadow-sm active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
              </button>

              {/* Admin Access - Theme-Aware Pill Style */}
              <a href="/admin" className="px-6 py-2.5 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all shadow-sm active:scale-95 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#ef8354] transition-colors"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                <span className="text-gray-900 dark:text-white text-xs font-black uppercase tracking-widest whitespace-nowrap">Login as Admin</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`lg:hidden w-full bg-[var(--theme-bg)] border-b border-[var(--border-color)] transition-all duration-300 ease-in-out overflow-hidden shadow-xl ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col px-8 gap-5 text-[var(--theme-text)] text-sm font-bold uppercase tracking-widest mt-2">
            {isOnSubPage ? (
              <>
                <li><Link to="/" onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#ef8354] transition-all">Home</Link></li>
                <li><Link to="/" onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#ef8354] transition-all">About</Link></li>
                <li><Link to="/" onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#ef8354] transition-all">Projects</Link></li>
                <li><Link to="/" onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#ef8354] transition-all">Blogs</Link></li>
                <li><Link to="/" onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#ef8354] transition-all">Achievements</Link></li>
                <li><Link to="/" onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#ef8354] transition-all">Contact</Link></li>
                <li className="pt-4 border-t border-gray-200 dark:border-white/10">
                  <a href="/admin" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex w-full py-3 px-6 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-white/10 items-center justify-center gap-3 text-xs font-black uppercase tracking-widest shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#ef8354]"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    <span className="text-gray-900 dark:text-white">Login as Admin</span>
                  </a>
                </li>
              </>
            ) : (
              <>
                <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ef8354] transition-all">Home</a></li>
                <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ef8354] transition-all">About</a></li>
                <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ef8354] transition-all">Projects</a></li>
                <li><a href="#blogs" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ef8354] transition-all">Blogs</a></li>
                <li><a href="#achievements" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ef8354] transition-all">Achievements</a></li>
                <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ef8354] transition-all">Contact</a></li>
                <li className="pt-4 border-t border-gray-200 dark:border-white/10">
                  <a href="/admin" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex w-full py-3 px-6 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-white/10 items-center justify-center gap-3 text-xs font-black uppercase tracking-widest shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#ef8354]"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    <span className="text-gray-900 dark:text-white">Login as Admin</span>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Theme Selection Modal - High Contrast B/W */}
      {showThemeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-black/60 transition-all duration-300">
          <div
            className="w-full max-w-[360px] bg-[#1a1c23] rounded-[32px] overflow-hidden shadow-2xl p-8 border border-white/5 animate-in fade-in zoom-in duration-300"
          >
            <h2 className="text-white text-xl font-black text-center mb-8 tracking-tight">Choose Theme</h2>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => { setTheme('light'); setShowThemeModal(false); }}
                className="w-full h-14 bg-[#BFC0C0] text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all border border-transparent active:scale-95 shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                Light Mode
              </button>

              <button
                onClick={() => { setTheme('dark'); setShowThemeModal(false); }}
                className="w-full h-14 bg-[#4F5D75] text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all border border-transparent active:scale-95 shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                Dark Mode
              </button>

              <button
                onClick={() => setShowThemeModal(false)}
                className="w-full h-14 text-white/40 hover:text-white font-bold transition-colors text-sm mt-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
