import React from 'react';
import { Heart, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import weddingBg from '../assets/wedding-bg.png';

const Hero = () => {
    // Elegant Floral URLs (Transparent & Suits Wedding Theme)
    const topFlower = "https://www.transparentpng.com/download/floral/frame-floral-wedding-invitation-free-download-transparent-3.png";
    const bottomFlower = "https://www.transparentpng.com/download/floral/wedding-floral-corner-transparent-images-12.png";

    return (
        <section
            className="relative min-h-screen w-full overflow-hidden flex items-end justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${weddingBg})` }}
        >
            {/* Background Overlay for better readability */}
            <div className="absolute inset-0 bg-[#FFF8F0]/40 md:bg-[#FFF8F0]/70 backdrop-blur-[1px] md:backdrop-blur-[2px]" />

            {/* --- Background Decorations (Top Corners) --- */}
            <div className="absolute top-0 left-0 w-[40%] md:w-[25%] opacity-40 z-0 pointer-events-none -rotate-12 translate-x-[-10%] translate-y-[-10%] animate-float">
                <img src={topFlower} className="w-full h-auto" alt="" style={{ mixBlendMode: 'multiply' }} />
            </div>
            <div className="absolute top-0 right-0 w-[40%] md:w-[25%] opacity-40 z-0 pointer-events-none rotate-90 scale-x-[-1] translate-x-[10%] translate-y-[-10%] animate-float" style={{ animationDelay: '2s' }}>
                <img src={topFlower} className="w-full h-auto" alt="" style={{ mixBlendMode: 'multiply' }} />
            </div>

            {/* --- Main Central Arch Panel --- */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative z-10 w-[90%] md:w-[95%] max-w-[1000px] min-h-[85vh] flex flex-col items-center justify-center shadow-2xl border-x-4 md:border-x-8 border-t-4 md:border-t-8 border-[#D4AF37]/30 backdrop-blur-sm paper-texture"
                style={{
                    backgroundColor: 'rgba(255, 248, 240, 0.85)',
                    borderRadius: '500px 500px 0 0',
                    paddingTop: '8vh',
                }}
            >
                {/* Content Container */}
                <div className="text-center z-20 px-4 md:px-12 py-10">
                    <p className="text-[10px] md:text-sm tracking-[0.5em] font-serif uppercase text-[#4E342E]/60 mb-8">
                        Together with their families
                    </p>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mb-10"
                    >
                        <span className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] font-serif text-xs md:text-sm tracking-[0.4em] uppercase rounded-full">
                            Save the Date
                        </span>
                    </motion.div>

                    {/* Top Heart Trio */}
                    <div className="flex justify-center gap-2 mb-6">
                        <Heart size={18} fill="#B71C1C" stroke="none" className="-rotate-12 animate-pulse" />
                        <Heart size={14} fill="#B71C1C" stroke="none" className="translate-y-2 opacity-70" />
                        <Heart size={18} fill="#B71C1C" stroke="none" className="rotate-12 animate-pulse" />
                    </div>

                    {/* Elegant Names */}
                    <div className="flex flex-col items-center mb-6">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-script text-[#B71C1C] leading-none drop-shadow-lg">
                            Sonali
                        </h1>
                        <div className="flex items-center gap-4 my-4">
                            <div className="h-[1px] w-8 md:w-16 bg-[#D4AF37]/50" />
                            <span className="text-3xl md:text-5xl font-script text-gold-foil italic">&</span>
                            <div className="h-[1px] w-8 md:w-16 bg-[#D4AF37]/50" />
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-script text-[#B71C1C] leading-none drop-shadow-lg">
                            Sagar
                        </h1>
                    </div>

                    {/* Bottom Heart Duo */}
                    <div className="flex justify-center gap-3 mt-4 mb-8">
                        <Heart size={16} fill="#B71C1C" stroke="none" className="-rotate-12" />
                        <Heart size={16} fill="#B71C1C" stroke="none" className="rotate-12" />
                    </div>

                    <p className="text-sm md:text-xl font-serif text-[#4E342E]/80 mb-10 italic max-w-md mx-auto">
                        Invite you to celebrate their marriage
                    </p>

                    {/* Gold Ornament Divider */}
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-[1px] w-12 md:w-24 bg-[#D4AF37]/40" />
                        <div className="w-3 h-3 rotate-45 border border-[#D4AF37] bg-[#FFF8F0]" />
                        <div className="h-[1px] w-12 md:w-24 bg-[#D4AF37]/40" />
                    </div>

                    {/* Sanskrit Shloka Text */}
                    <p className="text-lg md:text-2xl lg:text-3xl font-serif text-[#B71C1C] leading-relaxed drop-shadow-sm opacity-90 max-w-2xl mx-auto italic">
                        वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। <br className="hidden md:block" />
                        निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
                    </p>
                </div>
            </motion.div>

            {/* --- Foreground Flowers (Overlap) --- */}
            <div className="absolute bottom-0 left-0 w-[45%] md:w-[22%] z-30 pointer-events-none translate-x-[-15%] translate-y-[10%]">
                <img src={bottomFlower} className="w-full h-auto opacity-90 hue-rotate-[340deg]" alt="" style={{ mixBlendMode: 'multiply' }} />
            </div>
            <div className="absolute bottom-0 right-0 w-[45%] md:w-[22%] z-30 pointer-events-none scale-x-[-1] translate-x-[15%] translate-y-[10%]">
                <img src={bottomFlower} className="w-full h-auto opacity-90 hue-rotate-[340deg]" alt="" style={{ mixBlendMode: 'multiply' }} />
            </div>


        </section>
    );
};

export default Hero;