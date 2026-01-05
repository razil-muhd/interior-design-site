"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Star, Image as ImageIcon } from "lucide-react";

const heroImages = [
    "/hero_scene.png",
    "/interior_circle.png",
    "/interior_ceiling.png",
    "/interior_turnkey.png",
];

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#0e2c53]">
            {/* Full Screen Background Slider */}
            <div className="absolute inset-0 w-full h-full">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={heroImages[currentImageIndex]}
                            alt={`Interior Design ${currentImageIndex + 1}`}
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e2c53]/95 via-[#0e2c53]/60 to-transparent" />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 h-screen max-lg:h-auto max-lg:min-h-screen flex flex-col justify-center pt-24 lg:pt-32">
                <div className="flex flex-col lg:flex-row items-center h-full">

                    {/* Left Side Content */}
                    <div className="w-full lg:w-2/3 space-y-6 md:space-y-8 flex flex-col justify-center h-full py-10 lg:py-0 lg:pb-32">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-white leading-tight"
                        >
                            Complete Interior Design Solutions for <span className="text-[#c4a05f]">Homes & Workspaces</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-200 text-base md:text-lg leading-relaxed max-w-xl"
                        >
                            From modern homes to functional offices, we provide end-to-end interior design and execution services. Our process is transparent, timelines are clear, and quality is never compromised.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <button className="bg-[#c4a05f] text-[#0e2c53] px-8 py-3.5 rounded-full font-bold hover:bg-[#b08e4d] transition-colors shadow-lg shadow-[#c4a05f]/20 min-w-[180px]">
                                Talk to Our Designer
                            </button>
                            <Link href="/about" className="border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white hover:text-[#0e2c53] transition-all min-w-[180px] flex items-center justify-center">
                                Explore
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Floating Feature Cards - Responsive Positioning */}
            {/* Mobile: Relative flow below content. Desktop: Absolute positioning overlay */}
            <div className="relative w-full z-20 px-6 pb-12 lg:pb-0 lg:absolute lg:bottom-32">
                <div className="container mx-auto px-0 md:px-6">
                    <div className="flex flex-wrap items-end justify-center lg:justify-end gap-6">

                        {/* Card 1: Excellent Experience */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-[#0e2c53]/80 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex flex-col gap-2 min-w-[200px] flex-1 lg:flex-none shadow-2xl hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/10 rounded-full">
                                    <CheckCircle className="text-[#c4a05f] w-5 h-5" />
                                </div>
                                <span className="text-white font-bold leading-tight">Excellent<br />experience!</span>
                            </div>
                            <div className="flex gap-1 pl-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-3 h-3 text-[#c4a05f] fill-[#c4a05f]" />
                                ))}
                            </div>
                        </motion.div>

                        {/* Card 2: Modern Aesthetics */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="bg-[#c4a05f] p-5 rounded-2xl flex flex-col gap-2 min-w-[200px] flex-1 lg:flex-none shadow-2xl text-[#0e2c53] hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="p-2 bg-[#0e2c53]/10 rounded-full w-fit">
                                <ImageIcon className="text-[#0e2c53] w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold leading-none">Modern<br />aesthetics</h3>
                                <p className="text-[10px] uppercase tracking-wider font-bold mt-2 opacity-80">Interior Design</p>
                            </div>
                        </motion.div>

                        {/* Card 3: Projects Completed */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="bg-[#0e2c53]/80 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex flex-col justify-center items-center min-w-[200px] flex-1 lg:flex-none shadow-2xl text-center hover:-translate-y-2 transition-transform duration-300"
                        >
                            <h3 className="text-4xl font-bold text-white">250<span className="text-[#c4a05f]">+</span></h3>
                            <p className="text-gray-300 text-xs font-medium uppercase tracking-wide mt-1">Projects completed</p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}