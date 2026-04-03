const Hero = () => {
  const techStack = [
    {
      name: 'React.js', color: '#ef8354', icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <circle cx="12" cy="12" r="2" fill="#ef8354" />
          <path d="M12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7Z" stroke="#ef8354" strokeWidth="1" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#ef8354" strokeWidth="1" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#ef8354" strokeWidth="1" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#ef8354" strokeWidth="1" transform="rotate(120 12 12)" />
        </svg>
      )
    },
    {
      name: 'Node.js', color: '#339933', icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" stroke="#339933" strokeWidth="2" />
          <path d="M9 10V14M15 10V14M12 10V14" stroke="#339933" strokeWidth="2" />
        </svg>
      )
    },
    {
      name: 'CSS3', color: '#ef8354', icon: (
        <svg viewBox="0 0 24 24" fill="#ef8354" className="w-8 h-8">
          <path d="M5 2L4 5H20L19 5L17.5 21L12 23L6.5 21L5.5 10H8.5L9 18L12 19.5L15 18L15.5 8H5Z" />
        </svg>
      )
    },
    {
      name: 'JavaScript', color: '#F7DF1E', icon: (
        <svg viewBox="0 0 24 24" fill="#F7DF1E" className="w-8 h-8">
          <path d="M0 0H24V24H0V0ZM18.5 17.5V14H16.5V18.5H12V3.5H18.5V8H16.5V5.5H14V16.5H18.5Z" fill="black" />
          <rect x="0" y="0" width="24" height="24" rx="2" />
          <path d="M18.5 17.5H16.5V14H18.5V17.5ZM14 17.5H12V9H14V17.5Z" fill="black" />
        </svg>
      )
    }
  ];

  return (
    <section id="home" className="pt-24 pb-2 px-8 md:px-20 min-h-[80vh] flex items-center">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 mt-8">

        {/* LEFT SIDE: CONTENT */}
        <div className="md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left relative z-20">

          <h1 className="text-5xl md:text-7xl font-black text-[var(--theme-text)] mb-3 tracking-tight relative z-30">
            Usama Waleed
          </h1>

          <div className="mb-6 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-[var(--theme-text)] inline-block">
              <span className="text-[#ef8354]">Web Developer</span> dedicated to building dynamic, efficient, and scalable web solutions.
            </h2>
            <p className="text-base md:text-lg text-[var(--theme-text)] opacity-70 leading-relaxed font-medium">
              With expertise in modern technologies like React, Node.js, and MongoDB, I specialize in crafting end-to-end applications that deliver seamless user experiences and robust backend functionality.
            </p>
          </div>

          {/* Tech Icons - Compact matching SS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-10">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center">
                  {tech.icon}
                </div>
                <span className="text-[10px] font-bold text-[var(--theme-text)] opacity-60 uppercase tracking-tighter">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons - Matching SS shape */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/usama cv.pdf"
              download="Usama_CV.pdf"
              className="bg-[#ef8354] text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-[#d86a3d] hover:scale-105 transition-all shadow-xl shadow-[#ef8354]/20 active:scale-95"
            >
              Download CV
            </a>
            <button className="px-8 py-3 rounded-xl font-bold text-base border-2 border-[#ef8354] text-[#ef8354] bg-transparent hover:bg-[#ef8354] hover:text-white transition-all active:scale-95">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: PROFILE IMAGE (Matching SS exactly) */}
        <div className="md:w-[35%] flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            {/* Circular frame with simple border like SS */}
            <div className="absolute inset-0 rounded-full border-2 border-[#ef8354] z-10 p-2">
              <div className="w-full h-full rounded-full border-[8px] border-[var(--theme-text)] opacity-10 absolute inset-0 -z-10"></div>

              <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center relative shadow-xl">
                <img
                  src="/profile-themed.png"
                  alt="Usama Waleed"
                  className="w-full h-full object-cover"
                  style={{ 
                    objectPosition: '50% 30%',
                    filter: 'contrast(1.05) brightness(1.02)',
                    minWidth: '100%',
                    minHeight: '100%'
                  }}
                />
              </div>
            </div>

            {/* Subtle glow orb */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#ef8354] opacity-5 blur-[50px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
