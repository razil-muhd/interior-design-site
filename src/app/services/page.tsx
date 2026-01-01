"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

// Service Data (reused/expanded)
const services = [
    {
        id: "turnkey",
        label: "Turnkey Projects",
        title: "Complete Turnkey Solutions",
        description: "From concept to handover, we manage every aspect of your project. Our turnkey solutions ensure a seamless experience, handling design, procurement, and construction with precision and care.",
        details: [
            "Comprehensive Project Management",
            "Design & Build Integration",
            "Quality Assurance & Control",
            "Timely Delivery Assurance"
        ],
        image: "/service_turnkey.png"
    },
    {
        id: "joinery",
        label: "Joinery Works",
        title: "Bespoke Joinery & Woodworks",
        description: "Our custom joinery service brings warmth and character to any space. We create bespoke furniture, cabinets, and architectural woodwork that perfectly matches your vision.",
        details: [
            "Custom Furniture Design",
            "High-Quality Wood Selection",
            "Precision Manufacturing",
            "Installation Excellence"
        ],
        image: "/service_joinery.png"
    },
    {
        id: "flooring",
        label: "Flooring Solutions",
        title: "Premium Flooring Installation",
        description: "Transform your floors with our wide range of premium materials. Whether it's marble, parquet, or modern tiles, we ensure flawless installation and long-lasting durability.",
        details: [
            "Marble & Stone Flooring",
            "Parquet & Hardwood",
            "Ceramic & Porcelain Tiles",
            "Carpet Tiling for Offices"
        ],
        image: "/service_flooring.png"
    },
    {
        id: "ceiling",
        label: "Ceiling Works",
        title: "False Ceiling & Lighting",
        description: "Elevate your interiors with our artistic ceiling solutions. We specialize in gypsum, metal, and acoustic ceilings integrated with modern lighting systems.",
        details: [
            "Gypsum Board Ceilings",
            "Metal & Grid Ceilings",
            "Acoustic Solutions",
            "Integrated Lighting Design"
        ],
        image: "/service_ceiling.png"
    },
    {
        id: "partition",
        label: "Partitions",
        title: "Office Partitions & Dividers",
        description: "Create functional and aesthetic workspaces with our partition systems. We offer glass, gypsum, and modular partitions that optimize space without compromising style.",
        details: [
            "Frameless Glass Partitions",
            "Gypsum Wall Partitions",
            "Acoustic Barriers",
            "Operable Walls"
        ],
        image: "/service_partition.png"
    },
    {
        id: "cladding",
        label: "Wall Cladding",
        title: "Decorative Wall Cladding",
        description: "Add texture and depth to your walls. Our cladding services cover stone, wood, and 3D panels to create striking feature walls.",
        details: [
            "Stone & Marble Cladding",
            "Wooden Wall Paneling",
            "3D Wall Panels",
            "Exterior Facade Cladding"
        ],
        image: "/service_cladding.png"
    },
    {
        id: "handrail",
        label: "Hand Rails",
        title: "Staircase & Railing Systems",
        description: "Safety meets style. We design and install modern handrails using glass, stainless steel, and wood to complement your interior architecture.",
        details: [
            "Glass Balustrades",
            "Stainless Steel Railings",
            "Wooden Handrails",
            "Custom Metalwork"
        ],
        image: "/service_handrail.png"
    },
    {
        id: "curtains",
        label: "Curtains & Blinds",
        title: "Window Treatments",
        description: "Complete your space with our luxury curtains and blinds. We offer a vast selection of fabrics and motorized systems for convenience and elegance.",
        details: [
            "Blackout & Sheer Curtains",
            "Roller & Roman Blinds",
            "Motorized Systems",
            "Custom Upholstery"
        ],
        image: "/service_curtains.png"
    },
];

export default function ServicesPage() {
    return (
        <main className="bg-white min-h-screen overflow-x-hidden">
            {/* Reuse Navbar */}
            <Navbar />

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

            {/* Navigation Anchor Links Container */}
            <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm hidden md:block">
                <div className="container mx-auto px-6 overflow-x-auto">
                    <div className="flex justify-center gap-6 min-w-max">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                href={`#${service.id}`}
                                className="text-sm font-bold text-[#0e2c53] hover:text-[#c4a05f] uppercase tracking-wider transition-colors"
                            >
                                {service.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Detailed Services Sections */}
            <div className="container mx-auto px-6 py-20">
                <div className="space-y-32">
                    {services.map((service, index) => (
                        <section
                            key={service.id}
                            id={service.id}
                            className="scroll-mt-40 overflow-hidden" // Offset for sticky headers
                        >
                            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="lg:w-1/2"
                                >
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#0e2c53] mb-6 font-sans">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.details.map((detail, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-[#c4a05f] flex-shrink-0" />
                                                <span className="text-[#0e2c53] font-medium">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Image Content */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl group"
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Decorative border */}
                                    <div className="absolute inset-0 border-[10px] border-white/10 pointer-events-none" />
                                </motion.div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            {/* CTA Footer */}
            <section className="bg-[#0e2c53] py-20 mt-20 text-center">
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
