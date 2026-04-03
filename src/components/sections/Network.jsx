const Network = () => {
    return (
        <section id="network" className="py-8 md:py-12 px-8 md:px-20 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ef8354]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="max-w-[1000px] mx-auto text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter italic text-[var(--theme-text)]">
                    Global <span className="text-[#ef8354]">Reach</span>
                </h2>
                <p className="text-[var(--theme-text)] opacity-60 text-2xl mb-16 leading-relaxed font-medium">
                    Connecting with innovators worldwide. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="flex justify-center gap-10">
                    <div className="w-24 h-24 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center text-4xl shadow-xl hover:scale-110 hover:border-[#ef8354] transition-all cursor-pointer">🌍</div>
                    <div className="w-24 h-24 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center text-4xl shadow-xl hover:scale-110 hover:border-[#ef8354] transition-all cursor-pointer">🤝</div>
                    <div className="w-24 h-24 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center text-4xl shadow-xl hover:scale-110 hover:border-[#ef8354] transition-all cursor-pointer">🚀</div>
                </div>
            </div>
        </section>
    );
};

export default Network;
