"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "@/data/services";

export default function Services() {
    return (
        <section className="py-24 lg:py-32 bg-[#f4f4f4] relative overflow-hidden" id="services">
            {/* Subtle Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#0e2c53 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header Text */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-[#c4a05f] font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Expertise</h4>
                        <h2 className="text-4xl md:text-6xl font-black font-sans text-[#0e2c53] mb-8 uppercase leading-tight tracking-tight">
                            What We <span className="text-[#c4a05f]">Do</span>
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl font-sans leading-relaxed text-justify md:text-center max-w-3xl mx-auto">
                            We serve mainly offices, restaurants, clinics, cafeterias and hospitals, showrooms, and private residences. We provide a variety of interior and exterior services with diverse materials and design concepts.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
                        >
                            {/* Card Image */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Link href={`/services/${service.id}`}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-[#0e2c53]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                            </div>

                            {/* Card Content */}
                            <div className="p-8 flex flex-col flex-grow relative">
                                {/* Icon Badge */}
                                <div className="absolute -top-6 right-8 bg-[#c4a05f] p-3 rounded-xl shadow-lg">
                                    <service.icon className="w-6 h-6 text-[#0e2c53]" />
                                </div>

                                <h3 className="text-2xl font-bold text-[#0e2c53] mb-3 font-sans group-hover:text-[#c4a05f] transition-colors">
                                    <Link href={`/services/${service.id}`}>
                                        {service.label}
                                    </Link>
                                </h3>

                                <p className="text-gray-500 mb-6 line-clamp-2 leading-relaxed flex-grow">
                                    {service.description}
                                </p>

                                <Link
                                    href={`/services/${service.id}`}
                                    className="inline-flex items-center gap-2 text-[#0e2c53] font-bold uppercase tracking-wider text-sm hover:translate-x-2 transition-transform duration-300"
                                >
                                    View More <ArrowRight className="w-4 h-4 text-[#c4a05f]" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}