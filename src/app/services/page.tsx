"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { servicesData } from "@/data/services";

export default function ServicesPage() {
    return (
        <main className="bg-gray-50 min-h-screen overflow-x-hidden pt-28">

            {/* Header Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#0e2c53] pt-24">
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(#c4a05f 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black font-sans text-white mb-4 uppercase"
                    >
                        Our <span className="text-[#c4a05f]">Services</span>
                    </motion.h1>
                    <p className="text-xl text-gray-300 font-serif italic max-w-2xl mx-auto">
                        "Excellence in every detail, from concept to completion."
                    </p>
                </div>
            </section>

            {/* Services Grid Section - New Card Design */}
            <section className="py-12 md:py-20 lg:py-32 container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col h-full border border-gray-100 relative"
                        >
                            {/* Card Image */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-[#0e2c53]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Card Content */}
                            <div className="p-8 flex flex-col flex-grow relative">
                                {/* Icon Badge */}
                                <div className="absolute -top-6 right-8 bg-[#c4a05f] p-3 rounded-xl shadow-lg z-20">
                                    <service.icon className="w-6 h-6 text-[#0e2c53]" />
                                </div>

                                <h3 className="text-2xl font-bold text-[#0e2c53] mb-3 font-sans group-hover:text-[#c4a05f] transition-colors relative z-10">
                                    {service.label}
                                </h3>

                                <p className="text-gray-500 mb-6 line-clamp-2 leading-relaxed flex-grow relative z-10">
                                    {service.description}
                                </p>

                                <div className="inline-flex items-center gap-2 text-[#0e2c53] font-bold uppercase tracking-wider text-sm hover:translate-x-2 transition-transform duration-300 relative z-10">
                                    View More <ArrowRight className="w-4 h-4 text-[#c4a05f]" />
                                </div>

                            </div>

                            {/* Stretched Link for Full Card Clickability - Moved to Parent */}
                            <Link
                                href={`/services/${service.id}`}
                                className="absolute inset-0 z-30"
                                aria-label={`View details for ${service.label}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Footer */}
            <section className="bg-[#0e2c53] py-16 md:py-20 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Space?</h2>
                    <Link
                        href="/#contact"
                        className="inline-block bg-[#c4a05f] text-[#0e2c53] px-10 py-4 rounded-full font-bold hover:bg-white transition-all shadow-lg transform hover:-translate-y-1"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </main>
    );
}
