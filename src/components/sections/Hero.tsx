"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSplash } from "@/context/SplashContext";
import { TypewriterEffect } from "../ui/TypewriterEffect";

const sliderImages = [
    "/banner.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner4.jpg",
    "/bannerd.jpg",
];

const services = [
    { id: '01', title: 'Office interiors', icon: '🏢' },
    { id: '02', title: 'Commercial interiors', icon: '🏛️' },
    { id: '03', title: 'Fit out works', icon: '🛠️' },
    { id: '04', title: 'Glass partition & More', icon: '🪟' },
];

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeService, setActiveService] = useState(0);
    const { isSplashComplete } = useSplash();

    // Auto-advance slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
        }, 5000); // Increased to 5s to allow for loading
        return () => clearInterval(timer);
    }, []);

    // Preload all slider images
    useEffect(() => {
        sliderImages.forEach((src) => {
            const img = new window.Image();
            img.src = src;
        });
    }, []);

    const words = [
        { text: "Modern Interior Studio." },
        { text: "End-to-End Interior Solutions" },
        { text: "From Concept to Completion" },
    ];

    return (
        <section className="relative w-full min-h-screen bg-white overflow-hidden pt-28 md:pt-24 flex items-center mb-12">
            <div className="container mx-auto px-6 md:px-12 h-full">
                <div className="flex flex-col lg:flex-row items-center h-full gap-12 lg:gap-16">

                    {/* Left Side: Text Content */}
                    <motion.div
                        className="w-full lg:w-5/12 z-20 relative flex flex-col justify-center order-2 lg:order-1"
                        initial={{ x: "-100vw", opacity: 0 }}
                        animate={isSplashComplete ? { x: 0, opacity: 1 } : { x: "-100vw", opacity: 0 }}
                        transition={{
                            duration: 1.5,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.4
                        }}
                    >
                        {/* Decorative Dots Pattern */}
                        <div className="absolute -top-12 -left-12 grid grid-cols-5 gap-2 opacity-20">
                            {[...Array(25)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0e2c53]"></div>
                            ))}
                        </div>

                        {/* Heading */}
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0e2c53] leading-[1.2] mb-8 min-h-[3em] flex items-center">
                            <TypewriterEffect
                                words={words}
                                className="inline-block"
                                cursorClassName="bg-[#c4a05f]"
                            />
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={isSplashComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                            className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg"
                        >
                            We will help you to make an elegant and luxurious interior designed by professional interior designer.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isSplashComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                            className="flex gap-4"
                        >
                            <Link href="/about">
                                <button className="bg-[#0e2c53] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#c4a05f] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    Explore
                                </button>
                            </Link>
                        </motion.div>

                        {/* Mobile Services List */}
                        <div className="lg:hidden mt-8 w-full flex flex-col gap-3 pb-12">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                                    className="relative flex items-center p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-sm w-full h-[70px]"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-2xl bg-white/40">
                                        {service.icon}
                                    </div>
                                    <div className="flex flex-col ml-3 whitespace-nowrap overflow-hidden">
                                        <div className="flex items-center gap-2">
                                            <span className="text-blue-600 font-bold text-xs tracking-widest opacity-80">{service.id}</span>
                                            <span className="text-gray-900 font-bold text-sm truncate">{service.title}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Image Slider + Floating Services */}
                    <div className="w-full lg:w-7/12 relative h-[50vh] lg:h-[80vh] order-1 lg:order-2">
                        {/* Image Slider */}
                        <motion.div
                            initial={{ x: "100vw", opacity: 0 }}
                            animate={isSplashComplete ? { x: 0, opacity: 1 } : { x: "100vw", opacity: 0 }}
                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.2
                            }}
                            className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl bg-[#eff2f1]"
                        >
                            <AnimatePresence mode="popLayout" initial={false}>
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ y: "100%", opacity: 0.5 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "-100%", opacity: 0.5 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                                    <Image
                                        src={sliderImages[currentImageIndex]}
                                        alt="Modern Interior"
                                        fill
                                        className="object-cover transition-opacity duration-500"
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                        priority
                                        onLoadingComplete={(img) => {
                                            img.classList.remove("opacity-0");
                                        }}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>

                        {/* Floating Services Sidebar (Desktop Only) */}
                        <div className="hidden lg:flex absolute left-[-40px] top-1/2 -translate-y-1/2 flex-col gap-4 z-30">
                            {services.map((service, index) => {
                                // Define unique entrance directions for each card
                                const entranceInitial = [
                                    { x: 100, y: -100, opacity: 0 }, // 01: Top-Right
                                    { x: 100, y: 100, opacity: 0 },  // 02: Bottom-Right
                                    { x: -100, y: 0, opacity: 0 },   // 03: Left
                                    { x: 200, y: 0, opacity: 0 },    // 04: Far Right
                                ][index];

                                return (
                                    <motion.div
                                        key={service.id}
                                        className={`
                                            relative flex items-center p-3 rounded-full cursor-pointer overflow-hidden
                                            ${activeService === index
                                                ? 'bg-[#0e2c53] shadow-2xl'
                                                : 'bg-white/90 backdrop-blur-md shadow-lg hover:bg-white'
                                            }
                                        `}
                                        initial={entranceInitial}
                                        animate={{
                                            x: 0,
                                            y: 0,
                                            opacity: 1,
                                            width: activeService === index ? 320 : 70,
                                            height: 70
                                        }}
                                        transition={{
                                            // General entrance animation - starts AFTER text and image
                                            opacity: { duration: 0.6, delay: 2.0 + (index * 0.15) },
                                            x: { type: "spring", stiffness: 50, damping: 15, delay: 2.0 + (index * 0.15) },
                                            y: { type: "spring", stiffness: 50, damping: 15, delay: 2.0 + (index * 0.15) },
                                            // Expansion/Interaction transition
                                            width: { type: "spring", stiffness: 300, damping: 30 },
                                            height: { type: "spring", stiffness: 300, damping: 30 }
                                        }}
                                        onHoverStart={() => setActiveService(index)}
                                    >
                                        {/* Icon Container */}
                                        <div className={`
                                            flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full text-2xl
                                            ${activeService === index ? 'bg-white/20' : 'bg-[#f3f4f6]'}
                                        `}>
                                            <motion.span
                                                initial={{ scale: 0, rotate: -45 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{
                                                    delay: 2.2 + (index * 0.15),
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                            >
                                                {service.icon}
                                            </motion.span>
                                        </div>

                                        {/* Text Content */}
                                        <AnimatePresence mode="popLayout">
                                            {activeService === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="flex flex-col ml-4 whitespace-nowrap"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-[#c4a05f] font-bold text-xs tracking-widest opacity-80">{service.id}</span>
                                                        <span className="text-white font-bold text-lg">{service.title}</span>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
}