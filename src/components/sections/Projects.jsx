import shilajitImg from '../../assets/shilajit-project.png';
import novaImg from '../../assets/nova-project.png';
import adminDashboardImg from '../../assets/admin-dashboard.png';

const Projects = () => {
    const projects = [
        { 
            title: 'NOVA Studio', 
            category: 'Web App', 
            image: novaImg,
            description: 'Modern web application with sleek design and advanced functionality',
            technologies: ['React', 'Node.js', 'MongoDB']
        },
        { 
            title: 'Himalayan Shilajit', 
            category: 'E-Commerce', 
            image: shilajitImg,
            description: 'Complete e-commerce solution for premium health products',
            technologies: ['WordPress', 'WooCommerce', 'PHP']
        },
        { 
            title: 'Super Admin Dashboard', 
            category: 'Dashboard', 
            image: '/Capture.JPG',
            description: 'Comprehensive admin panel with full system control and analytics',
            technologies: ['React', 'TypeScript', 'Chart.js', 'Material-UI']
        },
    ];

    return (
        <section id="projects" className="py-2 px-8 md:px-20 transition-all duration-500">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <h2 className="text-4xl md:text-6xl font-black text-[var(--theme-text)] tracking-tight leading-none">
                        Work <span className="text-[#ef8354]">Studio</span>
                    </h2>
                    <p className="max-w-md text-[var(--theme-text)] opacity-60 text-lg font-medium leading-relaxed">
                        Curated selection of performance-driven web applications and architectural solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative rounded-[40px] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl hover:shadow-3xl transition-all duration-500">
                            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-[#ef8354] font-black uppercase text-xs tracking-widest mb-2">{project.category}</span>
                                <h3 className="text-2xl font-black text-white mb-3">{project.title}</h3>
                                <p className="text-white/80 text-sm mb-4 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="px-3 py-1 bg-[#ef8354]/20 text-[#ef8354] text-xs font-bold rounded-full border border-[#ef8354]/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
