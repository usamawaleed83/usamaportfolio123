import shilajitImg from '../../assets/shilajit-project.png';

const ShilajitShowcase = () => {
    return (
        <section className="py-8 md:py-12 px-8 md:px-20 transition-all duration-500 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="relative rounded-[60px] overflow-hidden min-h-[700px] md:min-h-[850px] flex flex-col border border-[var(--border-color)] shadow-3xl bg-black">
                    {/* Background Layer */}
                    <img
                        src={shilajitImg}
                        alt="Himalayan Shilajit"
                        className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2000ms] opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10"></div>

                    {/* Content Layer */}
                    <div className="relative z-20 h-full flex flex-col justify-center p-12 md:p-24 flex-grow">
                        <div className="inline-block bg-[#ef8354]/20 backdrop-blur-xl border border-[#ef8354]/30 px-6 py-3 rounded-full mb-10 w-fit animate-bounce-slow">
                            <span className="text-[#ef8354] font-black text-xs md:text-sm tracking-[0.3em] uppercase">
                                ✦ Source of Eternal Youth ✦
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter max-w-4xl drop-shadow-2xl">
                            Pure Himalayan <br />
                            <span className="text-[#ef8354] italic">Shilajit</span> for Energy
                        </h2>

                        <p className="text-white/80 text-xl md:text-2xl max-w-2xl mb-14 font-medium leading-relaxed border-l-4 border-[#ef8354] pl-8">
                            Experience the original resin, rich in fulvic acid and 84+ minerals.
                            Lab-tested for purity, sourced with respect from 18,000ft.
                        </p>

                        <div className="flex flex-wrap gap-8">
                            <button className="bg-[#ef8354] text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-[#d86a3d] hover:scale-105 transition-all shadow-2xl shadow-[#ef8354]/30 active:scale-95 uppercase tracking-widest">
                                Shop Resin
                            </button>
                            <button className="bg-white/5 backdrop-blur-2xl border border-white/20 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white/10 transition-all active:scale-95 uppercase tracking-widest">
                                Lab Results
                            </button>
                        </div>
                    </div>

                    {/* Stats/Badges Row */}
                    <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8 p-12 md:p-24 border-t border-white/10 bg-black/40 backdrop-blur-md">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-inner">
                                🚚
                            </div>
                            <div>
                                <h4 className="text-white font-black text-2xl uppercase tracking-tighter">Free Shipping</h4>
                                <p className="text-white/50 font-bold uppercase text-xs tracking-widest">On all orders over PKR 50</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-inner">
                                🛡️
                            </div>
                            <div>
                                <h4 className="text-white font-black text-2xl uppercase tracking-tighter">100% Authentic</h4>
                                <p className="text-white/50 font-bold uppercase text-xs tracking-widest">Third-party lab certified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
            `}} />
        </section>
    );
};

export default ShilajitShowcase;
