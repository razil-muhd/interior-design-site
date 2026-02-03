"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { servicesData } from "@/data/services";

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Configuration for horizontal scroll
    const ITEM_WIDTH = 450;
    const MOBILE_ITEM_WIDTH = 300;
    const GAP = 40;

    // Transform vertical scroll to horizontal movement
    // We use a slightly different approach to ensure it stops accurately
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(servicesData.length - 1) * 80}%`]);

    return (
        <section id="services" className="relative bg-[#f8f9fa] py-12">
            {/* Header Content - Before Scroll */}
            <div className="container mx-auto px-6 md:px-12 pt-12 pb-12">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-[#c4a05f] font-bold tracking-[0.3em] uppercase text-xs mb-4">Our Expertise</h4>
                        <h2 className="text-5xl md:text-7xl font-black font-sans text-[#0e2c53] mb-8 uppercase leading-tight tracking-tighter">
                            What We <span className="text-[#c4a05f]">Do</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-[#c4a05f] mb-8" />
                        <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                            Specializing in turn-key Workspace Design and high-end Interior Fit-out solutions across Saudi Arabia.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Horizontal Scroll Area */}
            <div ref={containerRef} className="h-[250vh] relative">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div
                        className="flex gap-10 px-6 md:px-[10vw]"
                        style={{ x }}
                    >
                        {servicesData.map((service, index) => (
                            <Link
                                href={`/services/${service.id}`}
                                key={service.id}
                                className="group relative flex-shrink-0 w-[300px] md:w-[450px] h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                            >
                                {/* Background Image */}
                                <Image
                                    src={service.image}
                                    alt={service.label}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2c53] via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-[#c4a05f] font-mono text-sm tracking-widest block mb-2 opacity-80">
                                            0{index + 1}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                                            {service.label}
                                        </h3>
                                        <p className="text-white/70 text-sm md:text-base font-medium line-clamp-2 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Action Indicator */}
                                    <div className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] opacity-40 group-hover:opacity-100 transition-all duration-300">
                                        <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" />
                                        Explore Service
                                    </div>
                                </div>

                                {/* Custom Decorative Icon in Background */}
                                <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                    <service.icon className="w-8 h-8 text-[#c4a05f]" />
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
