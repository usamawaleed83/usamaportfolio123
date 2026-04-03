const Newsletter = () => {
    return (
        <section className="py-8 md:py-12 px-8 md:px-20 transition-all duration-500">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-[var(--theme-text)] p-12 md:p-20 rounded-[50px] text-[var(--theme-bg)] text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#ef8354] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px]"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#ef8354] opacity-5 rounded-full translate-x-1/2 translate-y-1/2 blur-[80px]"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase">Stay Updated</h2>
                        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-bold opacity-60">Join the circle for exclusive insights into my development journey.</p>

                        <form className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 bg-[var(--theme-bg)] text-[var(--theme-text)] px-8 py-4 rounded-xl text-lg font-bold placeholder:opacity-40 focus:outline-none transition-all border-2 border-transparent focus:border-[#ef8354]"
                            />
                            <button className="bg-[#ef8354] text-white px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-[#ef8354]/20 active:scale-95 uppercase tracking-widest">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
