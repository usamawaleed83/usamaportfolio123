const Skills = () => {
    const skills = ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Tailwind', 'Git', 'HTML5', 'CSS3'];

    return (
        <section id="skills" className="py-2 px-8 md:px-20 border-y border-[var(--border-color)] bg-[var(--theme-bg)] transition-all duration-500">
            <div className="max-w-[1400px] mx-auto text-center">
                <h2 className="text-sm font-black mb-16 text-[var(--theme-text)] opacity-30 uppercase tracking-[0.5em]">The Technical Stack</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {skills.map((skill) => (
                        <div key={skill} className="px-10 py-5 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[24px] text-[var(--theme-text)] font-black text-xl hover:bg-[#ef8354] hover:text-white hover:border-[#ef8354] hover:shadow-2xl hover:shadow-[#ef8354]/20 transition-all duration-300 cursor-default uppercase italic tracking-widest active:scale-95 shadow-lg">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
