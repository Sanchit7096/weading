import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { motion } from 'framer-motion';
import coupleImg from '../assets/DSC_1546.JPG.jpeg';

const Countdown = () => {
    const targetDate = new Date('2026-05-06T00:00:00');
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTimeLeft({
                days: Math.max(0, differenceInDays(targetDate, now)),
                hours: Math.max(0, differenceInHours(targetDate, now) % 24),
                minutes: Math.max(0, differenceInMinutes(targetDate, now) % 60),
                seconds: Math.max(0, differenceInSeconds(targetDate, now) % 60)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full gold-border flex flex-col items-center justify-center mb-2 shadow-2xl group hover:scale-110 transition-all duration-500 bg-[#B71C1C]">
                <span className="text-4xl md:text-5xl font-serif text-gold-foil drop-shadow-lg">{value.toString().padStart(2, '0')}</span>
                <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#D4AF37] uppercase font-serif mt-1">{label}</span>
            </div>
        </div>
    );

    return (
        <section className="py-24 bg-[#B71C1C] text-center px-4 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h3 className="text-xs tracking-[0.6em] font-serif uppercase text-white/60 mb-6">Counting Down To</h3>
                <h2 className="text-6xl md:text-8xl font-serif text-white mb-20 italic">The Big Day</h2>

                <div className="flex justify-center flex-wrap gap-6 md:gap-10 mb-24">
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <TimeUnit value={timeLeft.minutes} label="Minutes" />
                    <TimeUnit value={timeLeft.seconds} label="Seconds" />
                </div>

                <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 group">
                    <div className="absolute inset-[-10px] rounded-full border-2 border-dashed border-white/10 group-hover:rotate-45 transition-transform duration-[10s] linear animate-slow-spin"></div>
                    <img
                        src={coupleImg}
                        alt="Couple"
                        className="w-full h-full object-cover rounded-full shadow-[0_0_50px_rgba(0,0,0,0.3)] border-4 border-[#B71C1C]"
                    />
                </div>
            </motion.div>

            <style jsx="true">{`
                @keyframes slow-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-slow-spin {
                    animation: slow-spin 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Countdown;
