import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-24 bg-[#FFF8F0] text-center relative overflow-hidden">
            {/* Top Divider */}
            <div className="absolute top-0 left-0 w-full h-8 bg-[url('/assets/divider.png')] bg-repeat-x bg-contain opacity-30"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto px-4"
            >
                <div className="mb-16">
                    <h2 className="text-3xl font-serif text-[#3E2723] mb-4">No Gifts, Please</h2>
                    <p className="text-[#B71C1C]/80 font-serif italic mx-auto max-w-md">
                        "Your presence and blessings are the most precious gifts we could receive. Please join us without bringing any gifts."
                    </p>
                </div>

                {/* Envelope Illustration (CSS Based) */}
                <div className="relative w-48 h-32 mx-auto mb-16 perspective-1000">
                    <motion.div
                        animate={{ rotateY: [0, 5, 0, -5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full bg-[#FCF8F3] shadow-2xl relative rounded-sm border border-[#E3D9C6]"
                    >
                        {/* Top Flap (Closed) */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#F7F1E5] clip-path-v shadow-inner rounded-t-sm"></div>

                        {/* Heart Seal */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-red-600">
                            <Heart fill="currentColor" size={24} />
                        </div>

                        {/* Address Lines Placeholder */}
                        <div className="absolute bottom-4 right-4 space-y-1 opacity-20">
                            <div className="w-16 h-1 bg-black rounded-full"></div>
                            <div className="w-12 h-1 bg-black rounded-full ml-auto"></div>
                        </div>
                    </motion.div>
                </div>

                <h2 className="text-6xl font-script text-[#3E2723] mb-20 leading-none">Thank You</h2>

                {/* Queries Section */}
                <div className="border-t border-[#B71C1C]/10 pt-12 mb-20 relative">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFF8F0] px-6 text-xs tracking-widest uppercase text-[#4E342E]/60 italic">For Any Queries</span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-lg mx-auto">
                        <div>
                            <p className="text-xs font-serif uppercase tracking-wider text-[#A67C00] mb-2">Groom's Side</p>
                            <p className="text-lg font-serif text-[#3E2723]">Family of Late Bhaskar Sahu</p>
                            <div className="flex items-center gap-2 text-sm text-[#B71C1C]/70 mt-1">
                                <Phone size={14} />
                                <span>+91 98981 09690</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-serif uppercase tracking-wider text-[#A67C00] mb-2">Bride's Father</p>
                            <p className="text-lg font-serif text-[#3E2723]">Sri Dinabandhu Sahu</p>
                            <div className="flex items-center gap-2 text-sm text-[#B71C1C]/70 mt-1 text-right md:text-left justify-end md:justify-start">
                                <Phone size={14} />
                                <span>+91 85115 73108</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Verse Section */}
                <div className="pt-8 border-t border-[#D4AF37]/20">
                    <p className="text-2xl font-serif text-[#B71C1C] mb-4 select-none">
                        सदा खुश रहो, सुखी रहो।
                    </p>
                    <p className="text-sm text-[#4E342E]/70 font-serif italic">
                        "May you always be happy and blessed with abundance."
                    </p>
                    <p className="text-[10px] text-[#A67C00] mt-2 font-serif uppercase tracking-tighter">Blessings from Elders</p>
                </div>

                <p className="mt-20 text-[10px] text-[#3E2723]/50 tracking-widest uppercase">
                    With Best Compliments From: Sahu Family, Friends & Relatives
                </p>
            </motion.div>

            <style jsx="true">{`
        .clip-path-v {
          clip-path: polygon(0 0, 100% 0, 50% 100%);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
