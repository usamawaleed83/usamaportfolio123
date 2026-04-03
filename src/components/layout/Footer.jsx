const Footer = () => {
    return (
        <footer className="py-12 px-8 transition-all duration-500 border-t border-[var(--border-color)]">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <p className="text-[var(--theme-text)] opacity-30 text-xs font-black tracking-[0.4em] uppercase text-center md:text-left">
                    © {new Date().getFullYear()} Usama Waleed. Crafted with <span className="text-[#ef8354]">Intensity</span> & <span className="text-[#ef8354]">Style</span>.
                </p>

                <div className="flex gap-10">
                    {['In', 'Gh', 'Tw'].map(s => (
                        <a key={s} href="#" className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center text-xs font-black text-[var(--theme-text)] opacity-40 hover:opacity-100 hover:border-[#ef8354] hover:text-[#ef8354] transition-all">
                            {s}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
