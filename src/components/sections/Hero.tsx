"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner4.jpg",
];

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#0e2c53]">
            {/* Full Screen Background Slider */}
            <div className="absolute inset-0 w-full h-full">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={currentImageIndex}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
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


                    </div>

                </div>
            </div>



        </section>
    );
}