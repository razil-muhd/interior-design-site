"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

type Tab = "mission" | "values";

export default function MissionVision() {
    const [activeTab, setActiveTab] = useState<Tab>("mission");

    return (
        <section className="bg-white py-20 lg:py-28 relative overflow-hidden z-40">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#c4a05f]/5 rounded-bl-full -z-0 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#0e2c53]/5 rounded-tr-full -z-0 blur-3xl" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-5xl font-black font-sans text-[#0e2c53] mb-4 uppercase leading-tight">
                        Your One-Stop <br /> Destination For <br /> <span className="text-[#c4a05f]">Premium Interior</span> Solutions
                    </h2>
                    <p className="text-gray-500 font-sans text-lg">
                        Find the path that matches your goals.
                    </p>
                </div>

                {/* Toggle Switch */}
                <div className="flex justify-center mb-16 relative z-[1000]">
                    <div className="bg-gray-100 p-1 rounded-full inline-flex relative">
                        {/* Background Slider */}
                        <motion.div
                            className="absolute top-1 bottom-1 bg-white rounded-full shadow-md z-0"
                            initial={false}
                            animate={{
                                left: activeTab === "mission" ? "4px" : "50%",
                                width: "calc(50% - 4px)"
                                // x: activeTab === "mission" ? 0 : "100%" 
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />

                        <button
                            onClick={() => setActiveTab("mission")}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 w-48 text-center ${activeTab === "mission" ? "text-[#0e2c53]" : "text-gray-500 hover:text-gray-700"}`}
                        >
                            Our Mission & Vision
                        </button>
                        <button
                            onClick={() => setActiveTab("values")}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 w-48 text-center ${activeTab === "values" ? "text-[#0e2c53]" : "text-gray-500 hover:text-gray-700"}`}
                        >
                            Our Values
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    {activeTab === "mission" ? (
                        <motion.div
                            key="mission"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            {/* Text Content */}
                            <div className="space-y-6 lg:pr-12">
                                <h3 className="text-3xl font-bold text-[#0e2c53] font-sans">Crafting Future-Ready Spaces</h3>
                                <p className="text-gray-600 leading-relaxed text-justify">
                                    Our mission is to revolutionize the interior design landscape by merging aesthetic brilliance with functional innovation. We strive to create environments that not only look breathtaking but also enhance the quality of life for those who inhabit them. We envision a world where every space tells a unique story of elegance and purpose.
                                </p>
                                <ul className="space-y-4 pt-4">
                                    {[
                                        "Innovative Design Thinking",
                                        "Sustainable & Eco-friendly Practices",
                                        "Client-Centric Customization"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[#0e2c53] font-medium">
                                            <span className="bg-[#c4a05f]/20 p-1 rounded-full text-[#c4a05f]">
                                                <Check size={16} strokeWidth={3} />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-6">
                                    <Link href="/about#mission" className="flex items-center gap-2 text-[#c4a05f] font-bold text-sm tracking-wide group hover:text-[#0e2c53] transition-colors">
                                        LEARN MORE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group">
                                <Image
                                    src="/interior_mission_vision.png"
                                    alt="Futuristic Interior Vision"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2c53]/60 to-transparent opacity-60" />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="values"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            {/* Image (Swapped for variety) */}
                            <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group order-last lg:order-first">
                                <Image
                                    src="/interior_values.png"
                                    alt="Premium Craftsmanship Values"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2c53]/60 to-transparent opacity-60" />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-6 lg:pl-12">
                                <h3 className="text-3xl font-bold text-[#0e2c53] font-sans">Uncompromising Quality & Trust</h3>
                                <p className="text-gray-600 leading-relaxed text-justify">
                                    At our core, we believe that true luxury lies in the details. Our values are rooted in integrity, transparency, and an obsession with craftsmanship. We don't just build interiors; we build lasting relationships founded on trust and a shared commitment to excellence. Every material selected and every line drawn reflects our pledge to perfection.
                                </p>
                                <ul className="space-y-4 pt-4">
                                    {[
                                        "Transparency in Every Step",
                                        "Dedication to Craftsmanship",
                                        "Timely Delivery Promise"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[#0e2c53] font-medium">
                                            <span className="bg-[#c4a05f]/20 p-1 rounded-full text-[#c4a05f]">
                                                <Check size={16} strokeWidth={3} />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-6">
                                    <Link href="/about#standards" className="flex items-center gap-2 text-[#c4a05f] font-bold text-sm tracking-wide group hover:text-[#0e2c53] transition-colors">
                                        DISCOVER OUR STANDARDS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
