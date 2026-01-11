"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";
import { servicesData } from "@/data/services";

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
    const pathname = usePathname();

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

            {/* Service Navigation Tabs */}
            <div className="bg-white border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 py-6">
                        {servicesData.map((service) => {
                            const isActive = pathname?.includes(service.id);
                            return (
                                <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    className={`
                                        text-xs md:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 border
                                        ${isActive
                                            ? "bg-[#0e2c53] text-[#3b82f6] border-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse"
                                            : "bg-gray-50 text-gray-500 border-transparent hover:bg-gray-100 hover:text-[#0e2c53]"
                                        }
                                    `}
                                >
                                    {service.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-20 lg:py-32 overflow-hidden">
                <div className="container mx-auto px-6">

                    {/* Main Description */}
                    {/* Main Description - Left Aligned with Accent */}
                    {/* Redesigned Overview Section */}
                    <div className="w-full mb-32 relative">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-[#c4a05f]/5 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0e2c53]/5 rounded-full blur-3xl -z-10 translate-x-1/3 translate-y-1/3" />

                        <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#c4a05f]" />

                            <div className="grid lg:grid-cols-12 gap-8 items-start">
                                {/* Title Column */}
                                <div className="lg:col-span-3">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <h2 className="text-4xl md:text-5xl font-black text-[#0e2c53] font-sans leading-tight mb-4">
                                            Service <br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4a05f] to-[#b08e4d]">Overview</span>
                                        </h2>
                                        <div className="h-1.5 w-24 bg-[#0e2c53] rounded-full opacity-20" />
                                    </motion.div>
                                </div>

                                {/* Content Column */}
                                <div className="lg:col-span-9">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="relative"
                                    >
                                        <span className="absolute -top-8 -left-6 text-8xl text-[#c4a05f]/10 font-serif leading-none select-none">"</span>
                                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light relative z-10">
                                            {description}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sub Sections - Zig Zag Layout */}
                    {subSections && subSections.map((section, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-20 lg:mb-32`}>

                            {/* Text Content */}
                            <div className="w-full lg:w-1/2">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="h-px flex-1 bg-gradient-to-r from-[#c4a05f] to-transparent max-w-[100px]" />
                                        <span className="text-[#c4a05f] font-bold text-sm uppercase tracking-widest">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-[#0e2c53] font-sans leading-tight">
                                        {section.title}
                                    </h3>

                                    <div className="text-gray-600 text-lg leading-relaxed text-left whitespace-pre-line">
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
