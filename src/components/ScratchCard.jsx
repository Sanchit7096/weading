import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import CustomScratchCard from './CustomScratchCard';

const ScratchCardSection = () => {
    const [isScratched, setIsScratched] = useState(false);

    const handleComplete = () => {
        setIsScratched(true);
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#D4AF37', '#B71C1C', '#FFF8F0']
        });
    };

    // Realistic gold texture SVG
    const goldTexture = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3ClinearGradient id='gold' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23D4AF37;stop-opacity:1' /%3E%3Cstop offset='25%25' style='stop-color:%23F9F295;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23B8860B;stop-opacity:1' /%3E%3Cstop offset='75%25' style='stop-color:%23F9F295;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23D4AF37;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23gold)' /%3E%3Crect width='400' height='200' fill='black' opacity='0.05' filter='url(%23noise)' /%3E%3C/svg%3E";

    const [dimensions, setDimensions] = useState({ width: 400, height: 200 });

    useEffect(() => {
        const updateDimensions = () => {
            const width = Math.min(window.innerWidth * 0.9, 400);
            setDimensions({
                width: width,
                height: width / 2
            });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const settings = {
        width: dimensions.width,
        height: dimensions.height,
        image: goldTexture,
        finishPercent: 50,
        onComplete: handleComplete,
        brushSize: 30
    };

    return (
        <section className="py-24 bg-[#FFF8F0] relative overflow-hidden flex flex-col items-center">
            {/* Wave Pattern Top */}
            <div className="absolute top-0 left-0 w-full h-12 bg-white flex items-center justify-center">
                <div className="w-full h-full opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10' fill='none' stroke='%23B71C1C' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'bottom'
                }}></div>
            </div>

            <div className="text-center mb-12 px-4">
                <h2 className="text-lg font-serif tracking-[0.4em] uppercase text-[#4E342E] mb-2">
                    Scratch to reveal the date
                </h2>
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[30px] md:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] gold-border cursor-crosshair group touch-none"
                style={{ width: dimensions.width, height: dimensions.height }}
            >
                {/* Revealed Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-4 md:p-6 text-center paper-texture">
                    <p className="text-[#4E342E] font-serif text-sm md:text-lg mb-1 md:mb-2 tracking-[0.3em] md:tracking-[0.5em] uppercase opacity-70">The Wedding Day</p>
                    <p className="text-[#B71C1C] font-script text-4xl md:text-6xl font-bold drop-shadow-sm">6th May, 2026</p>
                    <p className="text-gold-foil font-serif text-[10px] md:text-sm mt-2 md:mt-4 italic tracking-widest">Save the Date</p>
                </div>

                {/* Scratch Layer */}
                {!isScratched && (
                    <div className="absolute inset-0 z-10">
                        <CustomScratchCard {...settings} />
                    </div>
                )}
            </motion.div>

            {/* Wave Pattern Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-white flex items-center justify-center">
                <div className="w-full h-full opacity-10 rotate-180" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10' fill='none' stroke='%233E2723' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat-x'
                }}></div>
            </div>
        </section>
    );
};

export default ScratchCardSection;
