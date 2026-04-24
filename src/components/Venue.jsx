import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

const Venue = () => {
    return (
        <section className="py-24 bg-[#B71C1C] text-center md:text-right text-white px-4 relative overflow-hidden flex flex-col items-center md:items-end justify-center min-h-[80vh]">
            {/* Temple/Mandir Line Art Background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[60%] opacity-10 md:opacity-20 pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=2000"
                    alt=""
                    className="w-full h-auto object-contain filter brightness-200"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-4xl px-4 md:mr-20"
            >
                <p className="text-sm md:text-xl tracking-[0.4em] md:tracking-[0.8em] font-serif uppercase text-white/50 mb-8 md:mb-12">The Venue</p>

                <div className="mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-serif text-white mb-2 italic tracking-widest">Bridegroom's Residence</h2>
                    <address className="not-italic text-sm md:text-base font-serif text-white/70 tracking-wider">
                        Nabarangapur, Digapahandi, Gm.
                    </address>
                </div>

                <div className="relative w-full max-w-2xl mx-auto md:ml-auto rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-4 border-[#FFF8F0]/20 aspect-video group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.150731057564!2d84.56336737521156!3d19.38694438188565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIzJzEzLjAiTiA4NMKwMzMnNTYuMCJF!5e0!3m2!1sen!2sin!4v1713950000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Wedding Venue Location"
                        className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    ></iframe>

                    <a
                        href="https://maps.app.goo.gl/ukmneKWPbW6E3iQj6?g_st=aw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-auto md:top-4 md:left-4 md:translate-x-0 bg-white text-[#B71C1C] px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold shadow-lg hover:bg-white/90 transition-colors"
                    >
                        <span>View Location</span>
                        <ExternalLink size={14} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Venue;
