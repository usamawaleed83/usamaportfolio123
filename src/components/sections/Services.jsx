const Services = () => {
    const services = [
        { title: 'Frontend Mastery', desc: 'Crafting immersive interfaces using React, Next.js, and high-performance CSS.', icon: '⚡' },
        { title: 'Backend Power', desc: 'Building secure, lightning-fast APIs and complex server architectures.', icon: '🛠️' },
        // { title: 'Full Stack Flow', desc: 'End-to-end MERN development with a focus on business scalability.', icon: '🌊' },
        { title: 'E-commerce Shopify Development', desc: 'Crafting custom Shopify stores with advanced features and optimized for conversions.', icon: '🛒' },
    ];

    return (
        <section id="services" className="px-8 md:px-20 transition-all duration-500">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-3xl md:text-5xl font-black mb-12 text-center tracking-tight text-[var(--theme-text)] uppercase">
                    Design & <span className="text-[#ef8354]">Engineering</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 bg-[var(--card-bg)] rounded-[40px] border border-[var(--border-color)] hover:border-[#ef8354] transition-all duration-500 group relative overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 backdrop-blur-md">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--theme-text)] opacity-[0.02] rounded-bl-full pointer-events-none group-hover:bg-[#ef8354] group-hover:opacity-5 transition-all"></div>

                            <div className="text-5xl mb-6 transition-transform group-hover:scale-110 origin-left">{service.icon}</div>
                            <h3 className="text-2xl font-black mb-4 tracking-tight text-[var(--theme-text)]">{service.title}</h3>
                            <p className="text-[var(--theme-text)] opacity-60 leading-relaxed text-base font-medium">{service.desc}</p>

                            <div className="mt-6 w-10 h-1 bg-[#ef8354] rounded-full transition-all group-hover:w-16"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
