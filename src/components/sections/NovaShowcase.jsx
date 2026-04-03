import novaImg from '../../assets/nova-project.png';

const NovaShowcase = () => {
    return (
        <section className="py-8 md:py-12 px-8 md:px-20 transition-all duration-500 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="relative rounded-[60px] overflow-hidden min-h-[700px] md:min-h-[850px] flex flex-col border border-[var(--border-color)] shadow-3xl bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
                    {/* Background Layer */}
                    <img
                        src={novaImg}
                        alt="NOVA Studio"
                        className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2000ms] opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/60 to-[#0a0e27]/95 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e27]/90 via-transparent to-transparent z-10"></div>

                    {/* Accent Glow */}
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full z-10"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full z-10"></div>

                    {/* Content Layer */}
                    <div className="relative z-20 h-full flex flex-col justify-center p-12 md:p-24 flex-grow">
                        <div className="inline-block bg-blue-500/10 backdrop-blur-xl border border-blue-400/30 px-6 py-3 rounded-full mb-10 w-fit">
                            <span className="text-blue-400 font-black text-xs md:text-sm tracking-[0.3em] uppercase">
                                ⚡ NOVA CODE TECHNOLOGY
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter max-w-4xl drop-shadow-2xl">
                            Forge Your Apex <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 italic">Digital Presence</span>
                        </h2>

                        <p className="text-white/80 text-xl md:text-2xl max-w-2xl mb-14 font-medium leading-relaxed border-l-4 border-blue-500 pl-8">
                            Engineering elite digital ecosystems that redefine performance standards.
                            We turn ambitious visions into architectural masterpieces.
                        </p>

                        <div className="flex flex-wrap gap-8">
                            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-blue-500/30 active:scale-95 uppercase tracking-widest">
                                Initiate Project
                            </button>
                            <button className="bg-white/5 backdrop-blur-2xl border-2 border-blue-400/30 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white/10 hover:border-blue-400/50 transition-all active:scale-95 uppercase tracking-widest">
                                Consult Experts
                            </button>
                        </div>
                    </div>

                    {/* Tech Stack Row */}
                    <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8 p-12 md:p-24 border-t border-white/10 bg-[#0a0e27]/60 backdrop-blur-md">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/20 flex items-center justify-center text-3xl shadow-inner">
                                🚀
                            </div>
                            <div>
                                <h4 className="text-white font-black text-2xl uppercase tracking-tighter">Next-Gen Stack</h4>
                                <p className="text-white/50 font-bold uppercase text-xs tracking-widest">React, Node, AI-Powered</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/20 flex items-center justify-center text-3xl shadow-inner">
                                ⚡
                            </div>
                            <div>
                                <h4 className="text-white font-black text-2xl uppercase tracking-tighter">Lightning Fast</h4>
                                <p className="text-white/50 font-bold uppercase text-xs tracking-widest">Optimized Performance</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/20 flex items-center justify-center text-3xl shadow-inner">
                                🎨
                            </div>
                            <div>
                                <h4 className="text-white font-black text-2xl uppercase tracking-tighter">Premium Design</h4>
                                <p className="text-white/50 font-bold uppercase text-xs tracking-widest">Futuristic UI/UX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NovaShowcase;
