const Blogs = () => {
    const posts = [
        { title: 'The Future of MERN', date: 'JAN 2026', tag: 'TECH' },
        { title: 'UI Aesthetics 101', date: 'DEC 2025', tag: 'DESIGN' },
        { title: 'Scaling Node APIs', date: 'NOV 2025', tag: 'DEV' },
    ];

    return (
        <section id="blogs" className="py-8 md:py-12 px-8 md:px-20 transition-all duration-500">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-4xl md:text-5xl font-black mb-20 text-[var(--theme-text)] tracking-tight uppercase">Recent <span className="text-[#ef8354]">Journal</span></h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {posts.map((p, i) => (
                        <article key={i} className="p-12 bg-[var(--card-bg)] rounded-[40px] border border-[var(--border-color)] hover:border-[#ef8354] transition-all cursor-pointer group shadow-xl">
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-[10px] font-black bg-[#ef8354] text-white px-3 py-1 rounded-md tracking-widest">{p.tag}</span>
                                <span className="text-xs text-[var(--theme-text)] opacity-30 font-black tracking-widest">{p.date}</span>
                            </div>
                            <h3 className="text-3xl font-black text-[var(--theme-text)] group-hover:text-[#ef8354] transition-colors leading-tight mb-12 tracking-tighter">{p.title}</h3>
                            <div className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:bg-[#ef8354] group-hover:border-[#ef8354] transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--theme-text)] group-hover:text-white transition-colors"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
