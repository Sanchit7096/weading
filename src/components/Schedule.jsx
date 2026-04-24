import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Flower2, Music, Heart, Utensils } from 'lucide-react';

const events = [
    {
        title: "Lunch Ceremony",
        time: "12:00 PM onwards",
        date: "May 03, 2026",
        description: "Join us for a celebratory lunch at our residence.",
        icon: <Utensils className="text-orange-600" />,
        color: "bg-orange-50"
    },
    {
        title: "Mehendi Ceremony",
        time: "4:00 PM onwards",
        date: "May 04, 2026",
        description: "Adorning the hands with beautiful henna patterns amidst music and joy.",
        icon: <Music className="text-pink-600" />,
        color: "bg-pink-50"
    },
    {
        title: "Haldi Ceremony",
        time: "9:00 AM onwards",
        date: "May 05, 2026",
        description: "A fun-filled ceremony of applying turmeric paste for a natural glow.",
        icon: <Flower2 className="text-yellow-600" />,
        color: "bg-yellow-50"
    },
    {
        title: "Batabarana",
        time: "8:00 PM",
        date: "May 06, 2026",
        description: "Sacred rituals followed by traditional ceremonies.",
        icon: <Flower2 className="text-yellow-600" />,
        color: "bg-yellow-50"
    },
    {
        title: "Hastagranthi",
        time: "10:00 PM",
        date: "May 06, 2026",
        description: "The divine knot ceremony symbolizing eternal union.",
        icon: <Heart fill="#B71C1C" stroke="none" />,
        color: "bg-red-50"
    }
];

const Schedule = () => {
    return (
        <section className="py-24 bg-[#FFF8F0]">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-serif text-[#4E342E]">Wedding Schedule</h2>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-[#B71C1C]/20 -translate-x-1/2"></div>

                <div className="space-y-12 md:space-y-16">
                    {events.map((event, index) => (
                        <div key={index} className={`flex items-center gap-6 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                            
                            {/* Timeline dot */}
                            <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-[#FFF8F0] bg-[#B71C1C] flex items-center justify-center shadow-lg transform shrink-0">
                                <Flower2 size={20} className="text-[#D4AF37] md:size-6" strokeWidth={1} />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`w-full md:w-[45%] p-5 md:p-6 rounded-2xl shadow-xl gold-border bg-white group hover:scale-[1.02] transition-all paper-texture`}
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                                    <div>
                                        <span className="text-[#D4AF37] text-[10px] md:text-xs font-serif tracking-widest uppercase block mb-1">{event.date}</span>
                                        <h4 className="text-xl md:text-2xl font-serif text-gold-foil">{event.title}</h4>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#B71C1C] bg-[#FFF8F0] px-4 py-1.5 rounded-full text-[10px] md:text-sm font-bold shadow-sm border border-[#D4AF37]/20">
                                        <Clock size={14} className="animate-spin-slow" />
                                        {event.time}
                                    </div>
                                </div>
                                <p className="text-[#4E342E]/80 font-serif text-sm md:text-base mb-6 leading-relaxed">{event.description}</p>

                                {/* Decoration */}
                                <div className="flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] text-[#A67C00] uppercase tracking-widest font-serif">Auspicious Moment</span>
                                    <div className="w-10 h-10 rounded-full bg-[#B71C1C]/5 flex items-center justify-center border border-[#D4AF37]/20">
                                        {event.icon}
                                    </div>
                                </div>
                            </motion.div>

                            <div className="hidden md:block md:w-[45%]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;
