"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

export interface SubSection {
    title: string;
    content: string;
    image?: string; // Optional image for the sub-section
}

export interface ServiceContentProps {
    title: string;
    description: string; // Intro/Main description
    image: string;
    subSections?: SubSection[]; // Optional structured sub-sections
    fullContent?: React.ReactNode; // Optional free-form content
}

export default function ServicePageLayout({ title, description, image, subSections, fullContent }: ServiceContentProps) {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section - Enhanced Design */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#0e2c53]">
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0e2c53]/90 via-[#0e2c53]/50 to-[#0e2c53]/90" /> {/* Gradient Overlay */}
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-sans text-white mb-6 uppercase max-w-5xl mx-auto leading-tight drop-shadow-2xl">
                            {title}
                        </h1>
                        <Link href="/services" className="inline-flex items-center gap-2 text-[#c4a05f] hover:text-white transition-colors font-bold uppercase tracking-widest text-sm bg-white/10 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 hover:bg-[#c4a05f] hover:border-[#c4a05f]">
                            <ArrowLeft className="w-4 h-4" /> Back to Services
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 lg:py-32 overflow-hidden">
                <div className="container mx-auto px-6">

                    {/* Main Description */}
                    <div className="max-w-4xl mx-auto mb-24 text-center">
                        <h2 className="text-3xl font-bold text-[#0e2c53] mb-8 font-sans border-b-4 border-[#c4a05f] inline-block pb-2">
                            Overview
                        </h2>
                        <div className="text-gray-600 text-xl leading-relaxed space-y-6 whitespace-pre-line">
                            {description}
                        </div>
                    </div>

                    {/* Sub Sections - Zig Zag Layout */}
                    {subSections && subSections.map((section, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-20 lg:mb-32`}>

                            {/* Text Content */}
                            <div className="w-full lg:w-1/2">
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#c4a05f]/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />

                                    <h3 className="text-2xl md:text-3xl font-bold text-[#0e2c53] mb-6 font-sans relative z-10">
                                        {section.title}
                                    </h3>
                                    <div className="text-gray-600 leading-relaxed text-justify space-y-4 whitespace-pre-line relative z-10">
                                        {section.content}
                                    </div>
                                </div>
                            </div>

                            {/* Image Content (if available) - or decorative fallback */}
                            <div className="w-full lg:w-1/2">
                                {section.image ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl"
                                    >
                                        <Image
                                            src={section.image}
                                            alt={section.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </motion.div>
                                ) : (
                                    <div className="hidden lg:flex items-center justify-center p-12 opacity-10">
                                        <CheckCircle2 size={200} className="text-[#0e2c53]" />
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}

                    {/* Free Form Content */}
                    {fullContent && (
                        <div className="mt-12">
                            {fullContent}
                        </div>
                    )}

                    {/* CTA */}
                    <div className="mt-20 bg-[#0e2c53] p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10"
                            style={{ backgroundImage: 'radial-gradient(#c4a05f 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                        />
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Start Your Project With Us</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                            Ready to transform your space? Contact our expert team for a consultation.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-block bg-[#c4a05f] text-[#0e2c53] px-10 py-4 rounded-full font-bold hover:bg-white transition-all shadow-lg transform hover:-translate-y-1 relative z-10"
                        >
                            Get in Touch
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}
