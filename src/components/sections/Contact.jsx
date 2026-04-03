import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        }

        setIsSubmitting(false);
    };
    return (
        <section id="contact" className="py-2 px-8 md:px-20 transition-all duration-500">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-16 text-[var(--theme-text)] tracking-tight">
                    Let's <span className="text-[#ef8354]">Talk</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-16">
                    <div className="flex flex-col justify-center">
                        <p className="text-2xl text-[var(--theme-text)] opacity-80 leading-tight mb-12 tracking-tight font-black transition-colors">
                            I'm ready for the next challenge. Let's create something <span className="text-[#ef8354]">extraordinary</span> together.
                        </p>

                        <div className="space-y-10">
                            <div className="group">
                                <span className="text-[var(--theme-text)] opacity-30 uppercase tracking-[0.4em] text-[10px] font-black block mb-4 px-1">Email Me Directly</span>
                                <a href="mailto:usamawaleed83@gmail.com" className="text-2xl md:text-3xl font-black text-[var(--theme-text)] hover:text-[#ef8354] transition-all underline decoration-[#ef8354]/20 underline-offset-[8px] block">
                                    usamawaleed83@gmail.com
                                </a>
                            </div>

                            <div>
                                <span className="text-[var(--theme-text)] opacity-30 uppercase tracking-[0.4em] text-[10px] font-black block mb-4 px-1">Follow My Progress</span>
                                <div className="flex flex-wrap gap-8">
                                    <a href="https://www.linkedin.com/in/usama-waleed" target="_blank" rel="noopener noreferrer" className="text-lg font-black text-[var(--theme-text)] opacity-60 hover:opacity-100 hover:text-[#ef8354] transition-all hover:-translate-y-1 uppercase tracking-tighter">
                                        LinkedIn
                                    </a>
                                    <a href="https://github.com/usamawaleed83" target="_blank" rel="noopener noreferrer" className="text-lg font-black text-[var(--theme-text)] opacity-60 hover:opacity-100 hover:text-[#ef8354] transition-all hover:-translate-y-1 uppercase tracking-tighter">
                                        GitHub
                                    </a>
                                    <a href="https://twitter.com/usamawaleed" target="_blank" rel="noopener noreferrer" className="text-lg font-black text-[var(--theme-text)] opacity-60 hover:opacity-100 hover:text-[#ef8354] transition-all hover:-translate-y-1 uppercase tracking-tighter">
                                        Twitter
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-[var(--card-bg)] p-10 md:p-14 rounded-[50px] border border-[var(--border-color)] shadow-xl space-y-8 backdrop-blur-xl">
                        <div className="space-y-8">
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Name" 
                                    required
                                    className="w-full bg-transparent border-b-2 border-[var(--border-color)] py-3 text-lg font-black text-[var(--theme-text)] placeholder:text-[var(--theme-text)] placeholder:opacity-40 focus:outline-none focus:border-[#ef8354] transition-all" 
                                />
                            </div>

                            <div className="relative group">
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email" 
                                    required
                                    className="w-full bg-transparent border-b-2 border-[var(--border-color)] py-3 text-lg font-black text-[var(--theme-text)] placeholder:text-[var(--theme-text)] placeholder:opacity-40 focus:outline-none focus:border-[#ef8354] transition-all" 
                                />
                            </div>

                            <div className="relative group">
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Message" 
                                    rows="3" 
                                    required
                                    className="w-full bg-transparent border-b-2 border-[var(--border-color)] py-3 text-lg font-black text-[var(--theme-text)] placeholder:text-[var(--theme-text)] placeholder:opacity-40 focus:outline-none focus:border-[#ef8354] transition-all resize-none"
                                ></textarea>
                            </div>
                        </div>

                        {submitStatus === 'success' && (
                            <div className="text-green-500 text-center font-bold">
                                ✅ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="text-red-500 text-center font-bold">
                                ❌ Failed to send message. Please try again or email me directly.
                            </div>
                        )}

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#ef8354] text-white py-5 rounded-[20px] font-black text-xl uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl shadow-[#ef8354]/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
