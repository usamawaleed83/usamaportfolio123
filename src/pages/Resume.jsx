import { Link } from 'react-router-dom';

const Resume = () => {
    const skills = {
        frontend: [
            { name: 'React.js', level: 'Advanced', percentage: 90 },
            { name: 'Redux', level: 'Intermediate', percentage: 70 },
            { name: 'Tailwind CSS', level: 'Expert', percentage: 95 },
            { name: 'HTML5', level: 'Expert', percentage: 95 },
            { name: 'CSS3', level: 'Expert', percentage: 95 }
        ],
        backend: [
            { name: 'Node.js', level: 'Advanced', percentage: 85 }
        ],
        databases: [
            { name: 'MongoDB', level: 'Advanced', percentage: 85 },
            { name: 'MySQL', level: 'Intermediate', percentage: 70 }
        ],
        tools: [
            { name: 'Git', level: 'Advanced', percentage: 90 },
            { name: 'Material UI', level: 'Advanced', percentage: 85 },
            { name: 'Radix UI', level: 'Advanced', percentage: 85 },
            { name: 'GitHub', level: 'Advanced', percentage: 90 }
        ]
    };

    const experiences = [
        {
            title: 'OpenSpace AI - Final Year Project',
            company: 'University Project',
            location: 'Remote | Currently working',
            technologies: ['React', 'MongoDB', 'Node.js', 'APIs', 'Authentication'],
            description: 'Developing a comprehensive AI-powered platform with multiple integrated modules',
            achievements: [
                'Real-time Chat System with group chat and direct messaging capabilities',
                'Advanced User Management with role-based access control',
                'Profile Management with customizable user preferences',
                'Workflow Management for task organization and tracking',
                'Real-time Notification System for updates and alerts',
                'Integration with AI-powered features',
                'Implementing real-time communications',
                'Database design and optimization using MongoDB'
            ]
        },
        {
            title: 'Advanced Workflow Diagram Maker',
            company: 'Personal Project',
            location: 'Remote | December 2024',
            technologies: ['React', 'Tailwind', 'APIs', 'Authentication', 'MongoDB'],
            description: 'Created a versatile diagram creation tool supporting multiple diagram types',
            achievements: [
                'Flow Diagrams with customizable nodes and connections',
                'Sequence Diagrams for process visualization',
                'Process Diagrams with branching and decision points',
                'Organization Charts with hierarchical structures',
                'Real-time collaboration features',
                'Export functionality to various formats',
                'Implemented drag-and-drop interface',
                'Canvas-based drawing with zoom and pan capabilities'
            ]
        },
        {
            title: 'Frontend Designer',
            company: '',
            location: '',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
            description: 'Led the frontend development of multiple projects from inception to deployment',
            achievements: [
                'Implemented responsive designs with cross-browser compatibility',
                'Utilized Bootstrap and Tailwind CSS for efficient stylesheets',
                'Collaborated with SEO team to optimize website performance',
                'Managed web hosting and deployment processes'
            ]
        },
        {
            title: 'Ecommerce Developer',
            company: '',
            location: '',
            technologies: ['WordPress', 'Shopify', 'JavaScript'],
            description: 'Specialized in developing and customizing WordPress and Shopify stores',
            achievements: [
                'Implemented custom product configurators and advanced search',
                'Optimized store performance by 40% improvement in page load times',
                'Participated in full software development life cycle',
                'Collaborated with design and marketing teams'
            ]
        }
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

                {/* Header Section - Centered Profile */}
                <div className="bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)] rounded-3xl p-12 md:p-16 border border-[var(--border-color)] shadow-2xl mb-12 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ef8354] via-[#ef8354]/50 to-transparent"></div>
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ef8354]/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#ef8354]/5 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                        {/* Profile Image */}
                        <div className="mb-8 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#ef8354] to-[#ef8354]/60 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-[#ef8354]/30 bg-black shadow-2xl">
                                <img 
                                    src="/profile-themed.png" 
                                    alt="Usama Waleed" 
                                    className="w-full h-full object-cover"
                                    style={{ 
                                        objectPosition: '50% 30%',
                                        minWidth: '100%',
                                        minHeight: '100%'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Name and Title */}
                        <h1 className="text-5xl md:text-6xl font-black text-[var(--theme-text)] mb-3 tracking-tight">
                            Usama Waleed
                        </h1>
                        <div className="inline-block bg-gradient-to-r from-[#ef8354] to-[#ef8354]/80 text-white px-8 py-3 rounded-full text-xl md:text-2xl font-bold shadow-lg mb-6">
                            Web Developer
                        </div>
                        
                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center gap-6 mt-6">
                            <div className="bg-[var(--bg-color)] px-6 py-3 rounded-xl border border-[var(--border-color)]">
                                <div className="text-2xl font-black text-[#ef8354]">3+</div>
                                <div className="text-sm text-[var(--theme-text)] opacity-60">Years Experience</div>
                            </div>
                            <div className="bg-[var(--bg-color)] px-6 py-3 rounded-xl border border-[var(--border-color)]">
                                <div className="text-2xl font-black text-[#ef8354]">15+</div>
                                <div className="text-sm text-[var(--theme-text)] opacity-60">Projects Completed</div>
                            </div>
                            <div className="bg-[var(--bg-color)] px-6 py-3 rounded-xl border border-[var(--border-color)]">
                                <div className="text-2xl font-black text-[#ef8354]">10+</div>
                                <div className="text-sm text-[var(--theme-text)] opacity-60">Technologies</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Me Section */}
                <div className="bg-[var(--card-bg)] rounded-3xl p-8 md:p-12 border border-[var(--border-color)] shadow-2xl mb-8 hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef8354]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ef8354]/5 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#ef8354] to-[#ef8354]/80 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                                💼
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-[var(--theme-text)]">About Me</h3>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Column - Main Description */}
                            <div className="space-y-6">
                                <div className="bg-[var(--bg-color)] rounded-2xl p-6 border-l-4 border-[#ef8354] hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className="w-8 h-8 bg-[#ef8354]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-[#ef8354] text-lg">👋</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-[var(--theme-text)] mb-3">Hello!</h4>
                                            <p className="text-[var(--theme-text)] opacity-90 leading-relaxed">
                                                I'm <span className="text-[#ef8354] font-bold">Usama Waleed</span>, a passionate <span className="text-[#ef8354] font-bold">Web Developer</span> with a keen eye for creating seamless, user-centric web applications. With a strong foundation in modern web technologies, I specialize in building dynamic and scalable solutions that not only meet but exceed client expectations.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[var(--bg-color)] rounded-2xl p-6 border-l-4 border-[#ef8354]/50 hover:border-[#ef8354] hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-[#ef8354]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-[#ef8354] text-lg">💡</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-[var(--theme-text)] mb-3">My Expertise</h4>
                                            <p className="text-[var(--theme-text)] opacity-90 leading-relaxed">
                                                My expertise spans across the entire web development spectrum, from crafting intuitive front-end interfaces using <span className="text-[#ef8354] font-bold">React.js</span>, to developing robust back-end systems with <span className="text-[#ef8354] font-bold">Node.js</span>. I'm passionate about clean code, performance optimization, and staying at the forefront of technological advancements in the ever-evolving world of web development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Key Highlights */}
                            <div className="space-y-4">
                                <div className="bg-gradient-to-br from-[#ef8354]/10 to-transparent rounded-2xl p-6 border border-[#ef8354]/20 hover:border-[#ef8354]/50 transition-all duration-300">
                                    <h4 className="text-xl font-bold text-[var(--theme-text)] mb-4 flex items-center gap-2">
                                        <span className="text-[#ef8354]">🎯</span>
                                        What I Do Best
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-[var(--theme-text)] opacity-80">
                                            <span className="text-[#ef8354] mt-1 text-lg flex-shrink-0">▸</span>
                                            <span>Building responsive and dynamic web applications</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-[var(--theme-text)] opacity-80">
                                            <span className="text-[#ef8354] mt-1 text-lg flex-shrink-0">▸</span>
                                            <span>Creating seamless user experiences</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-[var(--theme-text)] opacity-80">
                                            <span className="text-[#ef8354] mt-1 text-lg flex-shrink-0">▸</span>
                                            <span>Developing scalable backend solutions</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-[var(--theme-text)] opacity-80">
                                            <span className="text-[#ef8354] mt-1 text-lg flex-shrink-0">▸</span>
                                            <span>Performance optimization and clean code</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-[var(--bg-color)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[#ef8354]/50 transition-all duration-300">
                                    <h4 className="text-xl font-bold text-[var(--theme-text)] mb-4 flex items-center gap-2">
                                        <span className="text-[#ef8354]">🚀</span>
                                        Core Values
                                    </h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-[#ef8354]/5 rounded-lg p-3 text-center hover:bg-[#ef8354]/10 transition-colors">
                                            <div className="text-2xl mb-1">⚡</div>
                                            <div className="text-sm font-semibold text-[var(--theme-text)]">Fast</div>
                                        </div>
                                        <div className="bg-[#ef8354]/5 rounded-lg p-3 text-center hover:bg-[#ef8354]/10 transition-colors">
                                            <div className="text-2xl mb-1">🎨</div>
                                            <div className="text-sm font-semibold text-[var(--theme-text)]">Creative</div>
                                        </div>
                                        <div className="bg-[#ef8354]/5 rounded-lg p-3 text-center hover:bg-[#ef8354]/10 transition-colors">
                                            <div className="text-2xl mb-1">🔧</div>
                                            <div className="text-sm font-semibold text-[var(--theme-text)]">Reliable</div>
                                        </div>
                                        <div className="bg-[#ef8354]/5 rounded-lg p-3 text-center hover:bg-[#ef8354]/10 transition-colors">
                                            <div className="text-2xl mb-1">📈</div>
                                            <div className="text-sm font-semibold text-[var(--theme-text)]">Scalable</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section - Redesigned */}
                <div className="bg-[var(--card-bg)] rounded-3xl p-8 md:p-12 border border-[var(--border-color)] shadow-2xl mb-8 hover:shadow-3xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#ef8354] to-[#ef8354]/80 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                            🛠️
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-[var(--theme-text)]">Skills</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Frontend Skills */}
                        <div className="bg-[var(--bg-color)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[#ef8354]/50 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border-color)]">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                                    F
                                </div>
                                <h4 className="text-2xl font-bold text-[var(--theme-text)]">Frontend</h4>
                            </div>
                            <div className="space-y-4">
                                {skills.frontend.map((skill, index) => (
                                    <div key={index} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[var(--theme-text)] font-semibold text-lg">{skill.name}</span>
                                            <span className="text-[#ef8354] text-xs font-bold bg-[#ef8354]/10 px-3 py-1 rounded-full">{skill.level}</span>
                                        </div>
                                        <div className="h-2 bg-[var(--card-bg)] rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 group-hover:scale-x-105"
                                                style={{ width: `${skill.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div className="bg-[var(--bg-color)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[#ef8354]/50 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border-color)]">
                                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                                    B
                                </div>
                                <h4 className="text-2xl font-bold text-[var(--theme-text)]">Backend</h4>
                            </div>
                            <div className="space-y-4">
                                {skills.backend.map((skill, index) => (
                                    <div key={index} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[var(--theme-text)] font-semibold text-lg">{skill.name}</span>
                                            <span className="text-[#ef8354] text-xs font-bold bg-[#ef8354]/10 px-3 py-1 rounded-full">{skill.level}</span>
                                        </div>
                                        <div className="h-2 bg-[var(--card-bg)] rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-1000 group-hover:scale-x-105"
                                                style={{ width: `${skill.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Database Skills */}
                        <div className="bg-[var(--bg-color)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[#ef8354]/50 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border-color)]">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                                    D
                                </div>
                                <h4 className="text-2xl font-bold text-[var(--theme-text)]">Databases</h4>
                            </div>
                            <div className="space-y-4">
                                {skills.databases.map((skill, index) => (
                                    <div key={index} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[var(--theme-text)] font-semibold text-lg">{skill.name}</span>
                                            <span className="text-[#ef8354] text-xs font-bold bg-[#ef8354]/10 px-3 py-1 rounded-full">{skill.level}</span>
                                        </div>
                                        <div className="h-2 bg-[var(--card-bg)] rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1000 group-hover:scale-x-105"
                                                style={{ width: `${skill.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tools & Others */}
                        <div className="bg-[var(--bg-color)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[#ef8354]/50 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border-color)]">
                                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                                    T
                                </div>
                                <h4 className="text-2xl font-bold text-[var(--theme-text)]">Tools & Others</h4>
                            </div>
                            <div className="space-y-4">
                                {skills.tools.map((skill, index) => (
                                    <div key={index} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[var(--theme-text)] font-semibold text-lg">{skill.name}</span>
                                            <span className="text-[#ef8354] text-xs font-bold bg-[#ef8354]/10 px-3 py-1 rounded-full">{skill.level}</span>
                                        </div>
                                        <div className="h-2 bg-[var(--card-bg)] rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-1000 group-hover:scale-x-105"
                                                style={{ width: `${skill.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Work Experience */}
                <div className="bg-[var(--card-bg)] rounded-3xl p-8 md:p-12 border border-[var(--border-color)] shadow-2xl mb-8 hover:shadow-3xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#ef8354] to-[#ef8354]/80 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                            💼
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-[var(--theme-text)]">Work Experience</h3>
                    </div>
                    
                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-[var(--bg-color)] rounded-2xl border border-[var(--border-color)] hover:border-[#ef8354]/50 transition-all duration-300 overflow-hidden group">
                                {/* Header Section */}
                                <div className="bg-gradient-to-r from-[#ef8354]/10 to-transparent p-6 border-b border-[var(--border-color)]">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="flex-1">
                                            <h4 className="text-2xl font-bold text-[var(--theme-text)] mb-2 group-hover:text-[#ef8354] transition-colors">
                                                {exp.title}
                                            </h4>
                                            {exp.company && (
                                                <div className="flex items-center gap-2 text-[#ef8354] font-semibold mb-1">
                                                    <span className="w-2 h-2 bg-[#ef8354] rounded-full"></span>
                                                    {exp.company}
                                                </div>
                                            )}
                                            {exp.location && (
                                                <div className="flex items-center gap-2 text-[var(--theme-text)] opacity-60 text-sm">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    {exp.location}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-[#ef8354]/10 rounded-xl flex items-center justify-center group-hover:bg-[#ef8354]/20 transition-colors">
                                                <span className="text-2xl">💻</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, idx) => (
                                            <span key={idx} className="bg-[var(--card-bg)] text-[#ef8354] px-3 py-1.5 rounded-lg text-sm font-semibold border border-[#ef8354]/20 hover:border-[#ef8354] hover:bg-[#ef8354]/10 transition-all">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <p className="text-[var(--theme-text)] opacity-90 mb-4 font-medium text-lg">
                                        {exp.description}
                                    </p>
                                    
                                    <div className="space-y-2">
                                        {exp.achievements.map((achievement, idx) => (
                                            <div key={idx} className="flex items-start gap-3 text-[var(--theme-text)] opacity-80 hover:opacity-100 transition-opacity group/item">
                                                <div className="flex-shrink-0 w-6 h-6 bg-[#ef8354]/10 rounded-lg flex items-center justify-center mt-0.5 group-hover/item:bg-[#ef8354]/20 transition-colors">
                                                    <span className="text-[#ef8354] text-sm font-bold">✓</span>
                                                </div>
                                                <span className="flex-1">{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="bg-[var(--card-bg)] rounded-3xl p-8 md:p-12 border border-[var(--border-color)] shadow-2xl mb-8 hover:shadow-3xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#ef8354] to-[#ef8354]/80 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                            🎓
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-[var(--theme-text)]">Education</h3>
                    </div>
                    
                    <div className="bg-[var(--bg-color)] rounded-2xl border border-[var(--border-color)] hover:border-[#ef8354]/50 transition-all duration-300 overflow-hidden group">
                        {/* Header with Gradient */}
                        <div className="bg-gradient-to-r from-[#ef8354]/10 to-transparent p-6 border-b border-[var(--border-color)]">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#ef8354] to-[#ef8354]/80 rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                                    🎓
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-2xl font-bold text-[var(--theme-text)] mb-2 group-hover:text-[#ef8354] transition-colors">
                                        Bachelor of Computer Science (BSCS)
                                    </h4>
                                    <div className="text-[#ef8354] font-semibold text-lg mb-3">
                                        Shaheed Zulfikar Ali Bhutto Institute of Science & Technology
                                    </div>
                                    <div className="flex flex-wrap items-center gap-4 text-[var(--theme-text)] opacity-70">
                                        <div className="flex items-center gap-2 bg-[var(--card-bg)] px-3 py-1.5 rounded-lg">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="font-semibold">Islamabad</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-[var(--card-bg)] px-3 py-1.5 rounded-lg">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="font-semibold">2021 - Present</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="p-6">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-[#ef8354]/5 rounded-xl p-4 text-center hover:bg-[#ef8354]/10 transition-colors">
                                    <div className="text-2xl mb-2">📚</div>
                                    <div className="text-sm font-semibold text-[var(--theme-text)] opacity-80">Computer Science</div>
                                </div>
                                <div className="bg-[#ef8354]/5 rounded-xl p-4 text-center hover:bg-[#ef8354]/10 transition-colors">
                                    <div className="text-2xl mb-2">🎯</div>
                                    <div className="text-sm font-semibold text-[var(--theme-text)] opacity-80">Bachelor's Degree</div>
                                </div>
                                <div className="bg-[#ef8354]/5 rounded-xl p-4 text-center hover:bg-[#ef8354]/10 transition-colors">
                                    <div className="text-2xl mb-2">⏳</div>
                                    <div className="text-sm font-semibold text-[var(--theme-text)] opacity-80">In Progress</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Me Section */}
                <div className="bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)] rounded-3xl p-8 md:p-12 border border-[var(--border-color)] shadow-2xl mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#ef8354]/5 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#ef8354] to-[#ef8354]/80 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                                📞
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-[var(--theme-text)]">Contact Me</h3>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <a href="tel:+923106976599" className="flex items-center gap-4 bg-[var(--bg-color)] p-6 rounded-2xl hover:border-[#ef8354] border-2 border-transparent transition-all duration-300 hover:scale-105 group">
                                <div className="text-4xl group-hover:scale-110 transition-transform">📞</div>
                                <div>
                                    <div className="text-[var(--theme-text)] opacity-60 text-sm mb-1">Phone</div>
                                    <div className="text-[var(--theme-text)] font-bold text-lg group-hover:text-[#ef8354] transition-colors">
                                        +92 310 6976599
                                    </div>
                                </div>
                            </a>

                            <a href="mailto:usamawaleed83@gmail.com" className="flex items-center gap-4 bg-[var(--bg-color)] p-6 rounded-2xl hover:border-[#ef8354] border-2 border-transparent transition-all duration-300 hover:scale-105 group">
                                <div className="text-4xl group-hover:scale-110 transition-transform">📧</div>
                                <div>
                                    <div className="text-[var(--theme-text)] opacity-60 text-sm mb-1">Email</div>
                                    <div className="text-[var(--theme-text)] font-bold text-lg group-hover:text-[#ef8354] transition-colors break-all">
                                        usamawaleed83@gmail.com
                                    </div>
                                </div>
                            </a>
                        </div>

                        <p className="text-[var(--theme-text)] opacity-70 text-center text-lg leading-relaxed">
                            Feel free to reach out to me for any inquiries, collaborations, or just to say hello. I'm always excited to connect with fellow developers and potential clients!
                        </p>
                    </div>
                </div>

                {/* Download CV Button */}
                <div className="text-center">
                    <a
                        href="/Usama_Waleed_CV.pdf"
                        download="Usama_Waleed_CV.pdf"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ef8354] to-[#ef8354]/80 hover:from-[#ef8354]/90 hover:to-[#ef8354] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
                    >
                        <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;