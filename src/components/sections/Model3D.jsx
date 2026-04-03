const Model3D = () => {
    return (
        <section className="py-8 md:py-12 px-8 md:px-20 transition-all duration-500">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-gradient-to-br from-[var(--card-bg)] to-transparent rounded-[80px] p-16 md:p-32 text-center border border-[var(--border-color)] relative overflow-hidden min-h-[600px] flex flex-col items-center justify-center shadow-3xl">
                    <div className="absolute inset-0 bg-[#ef8354]/5 opacity-20 pointer-events-none"></div>
                    <h2 className="text-5xl md:text-8xl font-black mb-10 relative z-10 tracking-tighter italic text-[var(--theme-text)]">3D Reality</h2>
                    <p className="text-[var(--theme-text)] opacity-60 text-2xl mb-16 max-w-2xl relative z-10 leading-relaxed font-bold">Step into an interactive 3D dimension where code meets visual art.</p>
                    <button className="bg-[var(--theme-text)] text-[var(--theme-bg)] px-16 py-6 rounded-3xl font-black text-2xl relative z-10 hover:bg-[#ef8354] hover:text-white transition-all shadow-2xl active:scale-95 uppercase tracking-widest">
                        Enter Dimension
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Model3D;
