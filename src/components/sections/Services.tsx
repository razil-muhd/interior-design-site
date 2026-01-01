"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {
    Home,
    Hammer,
    Layers,
    PaintRoller,
    Columns2,
    BrickWall,
    TrendingUp,
    Blinds,
    ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        id: "turnkey",
        label: "Turnkey Projects",
        description: "Complete design & build solutions from concept to handover.",
        icon: Home,
        image: "/service_turnkey.png",
    },
    {
        id: "joinery",
        label: "Joinery Works",
        description: "Bespoke carpentry and custom wooden masterpieces.",
        icon: Hammer,
        image: "/service_joinery.png",
    },
    {
        id: "flooring",
        label: "Flooring Solutions",
        description: "Premium marble, parquet, and tile installations.",
        icon: Layers,
        image: "/service_flooring.png",
    },
    {
        id: "ceiling",
        label: "Ceiling Works",
        description: "Artistic false ceilings and integrated lighting systems.",
        icon: PaintRoller,
        image: "/service_ceiling.png",
    },
    {
        id: "partition",
        label: "Partitions",
        description: "Glass and gypsum dividers for modern workspaces.",
        icon: Columns2,
        image: "/service_partition.png",
    },
    {
        id: "cladding",
        label: "Wall Cladding",
        description: "Textured stone, wood, and panel feature walls.",
        icon: BrickWall,
        image: "/service_cladding.png",
    },
    {
        id: "handrail",
        label: "Hand Rails",
        description: "Stylish safety railings in glass, metal, and wood.",
        icon: TrendingUp,
        image: "/service_handrail.png",
    },
    {
        id: "curtains",
        label: "Curtains & Blinds",
        description: "Luxury window treatments and motorized systems.",
        icon: Blinds,
        image: "/service_curtains.png",
    },
];

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

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <Link href={`/services#${service.id}`} className="absolute inset-0 z-20">
                                <span className="sr-only">View {service.label} details</span>
                            </Link>
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.label}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Gradient (Default visible slightly, stronger on hover) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2c53] via-[#0e2c53]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                            {/* Content Container */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-white">

                                <div className="mb-auto transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 opacity-100 lg:opacity-80 lg:group-hover:opacity-100">
                                    <div className="bg-[#c4a05f] p-3 rounded-xl inline-block mb-4 shadow-lg">
                                        <service.icon className="w-6 h-6 text-[#0e2c53]" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold font-sans mb-2 transform bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                    {service.label}
                                </h3>

                                <div className="h-auto lg:h-0 lg:group-hover:h-auto overflow-hidden transition-all duration-500">
                                    <p className="text-sm text-gray-300 leading-relaxed mb-6 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-500 delay-100 line-clamp-3">
                                        {service.description}
                                    </p>

                                    <span
                                        className="inline-flex items-center gap-2 text-[#c4a05f] font-bold text-sm tracking-widest uppercase hover:text-white transition-colors group/link opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-500 delay-200"
                                    >
                                        View Project <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    </span>
                                </div>
                            </div>

                            {/* Decorative Line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-[#c4a05f] transition-all duration-700 w-full lg:w-0 lg:group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}