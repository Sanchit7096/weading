import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../assets/DSC_1454.JPG.jpeg';
import img2 from '../assets/DSC_1515.JPG.jpeg';

const images = [img1, img2];

const Gallery = () => {
    // Multiply images to ensure smooth infinite loop even with few photos
    const displayImages = [...images, ...images, ...images, ...images, ...images, ...images];

    return (
        <section className="py-24 bg-[#FFF8F0] relative overflow-hidden">
            {/* Wave Pattern Header */}
            <div className="absolute top-0 left-0 w-full h-12 bg-white flex items-center justify-center">
                <div className="w-full h-full opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10' fill='none' stroke='%23B71C1C' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'bottom'
                }}></div>
            </div>

            <div className="text-center mb-16 px-4">
                <h3 className="text-xs tracking-[0.6em] font-serif uppercase text-[#4E342E]/60 mb-4">Our Journey</h3>
                <h2 className="text-4xl md:text-7xl font-serif text-[#B71C1C] italic">Moments Together</h2>
            </div>

            {/* Auto Scrolling Container */}
            <div className="relative flex overflow-hidden py-10">
                <motion.div
                    className="flex gap-6 md:gap-10 px-4 flex-nowrap"
                    animate={{
                        x: [0, "-50%"], 
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35, 
                            ease: "linear",
                        },
                    }}
                    style={{ width: "fit-content" }}
                >
                    {displayImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-white border-2 border-white flex-shrink-0"
                        >
                            <img
                                src={src}
                                className="w-full h-full object-cover"
                                alt={`Journey moment ${index + 1}`}
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-6">
                                <p className="text-white font-serif italic text-xs tracking-widest textShadow">Memory</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-white flex items-center justify-center">
                <div className="w-full h-full opacity-10 rotate-180" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10' fill='none' stroke='%23B71C1C' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat-x'
                }}></div>
            </div>

            <style jsx="true">{`
                .textShadow { text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
            `}</style>
        </section>
    );
};

export default Gallery;
