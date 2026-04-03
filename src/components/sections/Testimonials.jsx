const Testimonials = () => {
    const reviews = [
        { name: 'John Doe', role: 'CTO @ TechFlow', text: 'Usama is a brilliant developer who learns faster than anyone I know. His technical depth is impressive.' },
        { name: 'Sarah Khan', role: 'Product Manager', text: 'Impressive attention to detail and clean, maintainable code. A pleasure to work with on complex tasks.' },
    ];

    return (
        <section className="py-2 px-8 md:px-20 transition-all duration-500">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-sm font-black mb-16 text-[var(--theme-text)] opacity-30 uppercase tracking-[0.5em] text-center">Industry Feedback</h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {reviews.map((r, i) => (
                        <div key={i} className="p-16 bg-[var(--card-bg)] rounded-[60px] border border-[var(--border-color)] shadow-2xl relative text-left group hover:border-[#ef8354] transition-all">
                            <div className="text-8xl text-[#ef8354] font-serif mb-8 opacity-20 group-hover:opacity-40 transition-opacity absolute top-10 right-16">“</div>
                            <p className="text-2xl font-bold text-[var(--theme-text)] opacity-80 mb-12 italic leading-relaxed relative z-10">
                                {r.text}
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-[20px] bg-[#ef8354] text-white flex items-center justify-center font-black text-2xl shadow-xl shadow-[#ef8354]/20">
                                    {r.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-black text-xl text-[var(--theme-text)]">{r.name}</h4>
                                    <p className="text-xs text-[var(--theme-text)] opacity-40 font-black uppercase tracking-widest mt-1">{r.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
