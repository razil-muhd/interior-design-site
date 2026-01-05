"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { servicesData } from "@/data/services";

interface ServiceDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
    // Unwrap params using React.use() for Next.js 15+ compatibility
    const { slug } = use(params);
    const service = servicesData.find((s) => s.id === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#0e2c53]">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#0e2c53]/80" /> {/* Overlay */}
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black font-sans text-white mb-6 uppercase">
                            {service.title}
                        </h1>
                        <Link href="/services" className="inline-flex items-center gap-2 text-[#c4a05f] hover:text-white transition-colors font-bold uppercase tracking-widest text-sm">
                            <ArrowLeft className="w-4 h-4" /> Back to Services
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">

                        <div className="w-full lg:w-2/3">
                            <h2 className="text-3xl font-bold text-[#0e2c53] mb-8 font-sans border-b-4 border-[#c4a05f] inline-block pb-2">
                                Service Overview
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10 text-justify">
                                {service.description}
                            </p>

                            <div className="bg-gradient-to-br from-[#0e2c53] to-[#1a4570] p-8 rounded-2xl text-white">
                                <h3 className="text-2xl font-bold mb-4">Why Choose Cyash Contracting?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#c4a05f] flex-shrink-0 mt-1" />
                                        <span>Expert craftsmanship with attention to detail</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#c4a05f] flex-shrink-0 mt-1" />
                                        <span>Premium quality materials and finishes</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#c4a05f] flex-shrink-0 mt-1" />
                                        <span>Timely project delivery and execution</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#c4a05f] flex-shrink-0 mt-1" />
                                        <span>Trusted by leading businesses in Saudi Arabia</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full lg:w-1/3 space-y-8">
                            <div className="bg-[#0e2c53] p-8 rounded-2xl text-white text-center shadow-xl">
                                <h3 className="text-2xl font-bold mb-4">Need this Service?</h3>
                                <p className="text-gray-300 mb-8">Get completely customized solutions for your space today.</p>
                                <Link
                                    href="/#contact"
                                    className="inline-block w-full bg-[#c4a05f] text-[#0e2c53] py-4 rounded-xl font-bold hover:bg-white transition-all"
                                >
                                    Book a Consultation
                                </Link>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                                <h4 className="font-bold text-[#0e2c53] mb-4 uppercase text-sm tracking-wider">Other Services</h4>
                                <ul className="space-y-3">
                                    {servicesData.filter(s => s.id !== service.id).map(s => (
                                        <li key={s.id}>
                                            <Link href={`/services/${s.id}`} className="text-gray-600 hover:text-[#c4a05f] transition-colors flex items-center justify-between group">
                                                <span>{s.label}</span>
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}
