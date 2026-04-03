import { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const [showMore, setShowMore] = useState(false);

    const skills = [
        { name: 'React.js', color: 'bg-blue-500', icon: '⚛️' },
        { name: 'Node.js', color: 'bg-green-600', icon: '🟢' },
        { name: 'HTML', color: 'bg-orange-600', icon: '🌐' },
        { name: 'CSS', color: 'bg-blue-600', icon: '🎨' },
        { name: 'JavaScript', color: 'bg-yellow-500', icon: '⚡' },
        { name: 'Bootstrap', color: 'bg-purple-600', icon: '🅱️' },
        { name: 'Tailwind CSS', color: 'bg-teal-500', icon: '💨' }
    ];

    return (
        <section id="about" className="px-8 md:px-20 bg-[var(--bg-color)] min-h-screen relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#ef8354] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#ef8354] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black text-[#ef8354] mb-6 tracking-tight relative">
                        About Me
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#ef8354] to-transparent rounded-full"></div>
                    </h2>
                    <p className="text-[var(--theme-text)] opacity-60 text-lg max-w-2xl mx-auto">
                        Discover my journey, skills, and passion for web development
                    </p>
                </div>

                {/* Main Content Layout */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        {/* Introduction */}
                        <div className="bg-[var(--card-bg)] rounded-3xl p-8 border border-[var(--border-color)] shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ef8354] to-transparent"></div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#ef8354]/20 rounded-full animate-pulse"></div>
                            
                            <h3 className="text-2xl font-black text-[var(--theme-text)] mb-6 flex items-center gap-3">
                                <span className="w-3 h-3 bg-[#ef8354] rounded-full animate-pulse"></span>
                                Hello, I'm Usama Waleed
                            </h3>
                            
                            <div className="space-y-6 text-[var(--theme-text)] opacity-90 leading-relaxed">
                                <p className="text-lg">
                                    A passionate <span className="text-[#ef8354] font-bold bg-[#ef8354]/10 px-2 py-1 rounded-lg">web developer</span> focused on creating dynamic and responsive web applications using the latest web technologies. My journey in web development began in <span className="text-[#ef8354] font-bold">2021</span>, and since then I have been dedicated to solving problems, continuously improving my skills, and building impactful projects.
                                </p>
                                
                                <p className="text-lg">
                                    I hold a <span className="text-[#ef8354] font-bold">Bachelor's Degree</span> in Computer Science (2021). My technical expertise, combined with a strong passion for learning and adapting to new technologies, enables me to deliver efficient, scalable, and user-focused solutions.
                                </p>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="bg-[var(--card-bg)] rounded-3xl p-8 border border-[var(--border-color)] shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ef8354] to-transparent"></div>
                            
                            <h3 className="text-2xl font-black text-[var(--theme-text)] mb-8 flex items-center gap-3">
                                <span className="w-3 h-3 bg-[#ef8354] rounded-full animate-pulse"></span>
                                Skills
                            </h3>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className={`${skill.color} text-white px-4 py-3 rounded-xl font-semibold text-sm hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}
                                        style={{
                                            animationDelay: `${index * 0.1}s`
                                        }}
                                    >
                                        <span className="text-lg">{skill.icon}</span>
                                        {skill.name}
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/resume"
                                className="w-full bg-gradient-to-r from-[#ef8354] to-[#ef8354]/80 hover:from-[#ef8354]/90 hover:to-[#ef8354] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] relative overflow-hidden group block text-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                    Read More About Me
                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Profile Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative group">
                            {/* Decorative Elements */}
                            <div className="absolute -inset-8 bg-gradient-to-r from-[#ef8354]/20 to-[#ef8354]/10 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#ef8354]/30 rounded-full animate-bounce"></div>
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#ef8354]/40 rounded-full animate-pulse"></div>
                            
                            {/* Main Image Container */}
                            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[#ef8354]/20 to-transparent p-4 shadow-2xl">
                                <div className="w-full h-full rounded-full bg-white p-4 shadow-inner">
                                    <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-white/50 group-hover:ring-white/70 transition-all duration-300 bg-black relative">
                                        <img 
                                            src="/profile-themed.png" 
                                            alt="Usama Waleed Profile" 
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            style={{ 
                                                objectPosition: '50% 30%',
                                                filter: 'contrast(1.05) brightness(1.02)',
                                                minWidth: '100%',
                                                minHeight: '100%'
                                            }}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-600 rounded-full" style={{display: 'none'}}>
                                            <div className="text-center">
                                                <div className="text-6xl mb-4 text-[#ef8354]">👤</div>
                                                <div className="text-lg font-semibold">Your Photo Here</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-[var(--card-bg)] rounded-2xl p-4 shadow-xl border border-[var(--border-color)] opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-105">
                                <div className="text-center">
                                    <div className="text-2xl font-black text-[#ef8354]">3+</div>
                                    <div className="text-xs text-[var(--theme-text)] opacity-60 font-semibold">Years Experience</div>
                                </div>
                            </div>

                            <div className="absolute -right-8 bottom-1/4 bg-[var(--card-bg)] rounded-2xl p-4 shadow-xl border border-[var(--border-color)] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 hover:scale-105">
                                <div className="text-center">
                                    <div className="text-2xl font-black text-[#ef8354]">7+</div>
                                    <div className="text-xs text-[var(--theme-text)] opacity-60 font-semibold">Technologies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Extended About Me - Shows when Read More is clicked */}
                <div className={`transition-all duration-700 ease-in-out ${showMore ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <div className="bg-[var(--card-bg)] rounded-3xl p-8 md:p-12 shadow-2xl border border-[var(--border-color)] hover:border-[#ef8354]/30 transition-all duration-300">
                        <h3 className="text-4xl font-black text-[#ef8354] mb-12 text-center relative">
                            More About Me
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#ef8354] rounded-full"></div>
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <p className="text-[var(--theme-text)] opacity-80 text-xl leading-relaxed font-medium">
                                    I'm passionate about building the next generation of web applications. I focus on creating <span className="text-[#ef8354] font-black">impactful digital experiences</span> that combine technical excellence with artistic design.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="p-6 bg-[var(--card-bg)] rounded-2xl border border-[var(--border-color)] shadow-xl hover:border-[#ef8354] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                        <div className="text-3xl mb-4">🎓</div>
                                        <h4 className="text-[#ef8354] font-black mb-3 uppercase tracking-[0.2em] text-sm">Education</h4>
                                        <p className="text-lg font-bold text-[var(--theme-text)] opacity-90 leading-tight">BS in Computer Science</p>
                                        <p className="text-sm text-[var(--theme-text)] opacity-40 mt-2 uppercase font-black">2021</p>
                                    </div>
                                    <div className="p-6 bg-[var(--card-bg)] rounded-2xl border border-[var(--border-color)] shadow-xl hover:border-[#ef8354] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                        <div className="text-3xl mb-4">📍</div>
                                        <h4 className="text-[#ef8354] font-black mb-3 uppercase tracking-[0.2em] text-sm">Location</h4>
                                        <p className="text-lg font-bold text-[var(--theme-text)] opacity-90">Pakistan</p>
                                        <p className="text-sm text-[var(--theme-text)] opacity-40 mt-2 uppercase font-black">Remote Available</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[var(--card-bg)] rounded-[2rem] p-8 border border-[var(--border-color)] shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-300">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef8354]/10 rounded-bl-[100px] transition-all group-hover:w-40 group-hover:h-40 duration-300"></div>

                                <h4 className="text-2xl font-black mb-8 tracking-tight text-[var(--theme-text)] relative">
                                    Why Work With Me?
                                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ef8354] rounded-full"></div>
                                </h4>
                                <ul className="space-y-6">
                                    {[
                                        { text: 'Pixel Perfect Implementation', icon: '🎯' },
                                        { text: 'Clean & Scalable Architecture', icon: '🏗️' },
                                        { text: 'Responsive & Modern UI/UX', icon: '📱' },
                                        { text: 'Rapid Problem Solving', icon: '⚡' }
                                    ].map((item, index) => (
                                        <li key={item.text} className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="text-2xl">{item.icon}</div>
                                            <div className="w-3 h-3 rounded-full bg-[#ef8354] shadow-[0_0_15px_rgba(239,131,84,0.4)] transition-transform group-hover/item:scale-125 duration-300"></div>
                                            <span className="text-[var(--theme-text)] opacity-70 text-lg font-bold transition-opacity group-hover/item:opacity-100 duration-300">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;