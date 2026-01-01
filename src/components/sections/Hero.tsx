"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
    "/interior_circle.png",
    "/hero_scene.png",
    "/interior_ceiling.png",
    "/interior_turnkey.png",
];

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-[#0e2c53] min-h-[115vh] flex flex-col relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 pb-48 flex-1 flex flex-col pt-32 lg:pt-40">
                <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 flex-1">

                    <div className="w-full lg:w-1/2 max-w-2xl space-y-8 text-left pt-8 lg:pt-0">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-[#c4a05f] leading-tight"
                        >
                            Complete Interior Design Solutions for Homes & Workspaces
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white text-lg leading-relaxed max-w-lg lg:mx-0"
                        >
                            From modern homes to functional offices, we provide end-to-end interior design and execution services. Our process is transparent, timelines are clear, and quality is never compromised.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap items-center justify-start gap-4 mb-12"
                        >
                            <button className="bg-[#c4a05f] text-[#0e2c53] px-8 py-3 rounded-full font-bold hover:bg-[#b08e4d] transition-colors shadow-lg min-w-[200px]">
                                Talk to Our Designer
                            </button>
                            <Link href="/about" className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#0e2c53] transition-all min-w-[200px] flex items-center justify-center">
                                Explore
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
                        >
                            <p className="text-[#c4a05f] text-xs font-bold uppercase tracking-widest mb-3 text-left">Quick Links</p>
                            <div className="flex flex-wrap justify-start gap-2">
                                {[
                                    { name: "Turnkey", id: "turnkey" },
                                    { name: "Joinery", id: "joinery" },
                                    { name: "Flooring", id: "flooring" },
                                    { name: "Ceilings", id: "ceiling" },
                                    { name: "Partitions", id: "partition" },
                                    { name: "Cladding", id: "cladding" },
                                    { name: "Handrails", id: "handrail" },
                                    { name: "Curtains", id: "curtains" }
                                ].map((service) => (
                                    <Link
                                        key={service.id}
                                        href={`/services#${service.id}`}
                                        className="text-xs text-gray-300 hover:text-white px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#c4a05f]/20 border border-transparent hover:border-[#c4a05f]/50 transition-all whitespace-nowrap"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>


                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:-mt-32 px-4">
                        <div className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px] rounded-t-full rounded-b-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl group">

                            <div className="absolute inset-0 rounded-t-full rounded-b-[3rem] border-2 border-[#c4a05f]/30 z-20 pointer-events-none"></div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <Image
                                        src={heroImages[currentImageIndex]}
                                        alt={`Modern Interior ${currentImageIndex + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="absolute top-1/2 right-4 -translate-y-1/2 w-[500px] h-[500px] bg-[#c4a05f]/10 rounded-full -z-10 blur-[100px]" />
                    </div>

                </div>
            </div>
        </section>
    );
}