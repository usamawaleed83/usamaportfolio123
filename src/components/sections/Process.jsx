const Process = () => {
    const steps = [
        { title: 'Research', desc: 'Analyzing the problem space and user requirements.' },
        { title: 'Architect', desc: 'Designing scalable and secure data structures.' },
        { title: 'Execute', desc: 'Building pixel-perfect code with high intensity.' },
        { title: 'Refine', desc: 'Optimizing performance and user experience.' },
    ];

    return (
        <section className="py-2 px-8 md:px-20 transition-all duration-500">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-6xl md:text-8xl font-black mb-24 text-[var(--theme-text)] tracking-tighter italic">
                    The <span className="text-[#ef8354]">Algorithm</span>
                </h2>
                <div className="grid md:grid-cols-4 gap-16">
                    {steps.map((step, i) => (
                        <div key={i} className="relative group">
                            <span className="text-[12rem] font-black text-[var(--theme-text)] opacity-[0.03] absolute -top-32 left-0 group-hover:text-[#ef8354] group-hover:opacity-5 transition-all pointer-events-none italic">
                                {i + 1}
                            </span>
                            <div className="relative z-10 pt-10">
                                <h3 className="text-3xl font-black mb-6 text-[var(--theme-text)] group-hover:text-[#ef8354] transition-colors tracking-tighter uppercase">{step.title}</h3>
                                <p className="text-[var(--theme-text)] opacity-60 text-xl leading-relaxed font-bold">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
