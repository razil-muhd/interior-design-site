"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, Instagram, Facebook, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/data/services";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);

    const socialLinks = [
        { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
        { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 h-24 md:h-28 px-6 md:px-12 flex justify-between items-center bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/50">
                {/* Logo Section */}
                <Link href="/" className="relative h-full w-[200px] md:w-[24rem] flex items-center py-0">
                    <Image
                        src="/logo.png"
                        alt="CYASH Contracting"
                        fill
                        className="object-contain position-left pl-0"
                        style={{ objectPosition: 'left' }}
                        priority
                    />
                </Link>

                {/* Right Side Buttons */}
                <div className="flex items-center gap-4">
                    {/* Phone Button */}
                    <Link
                        href="/contact"
                        className="w-12 h-12 rounded-full bg-[#0e2c53] flex items-center justify-center text-[#c4a05f] hover:bg-[#c4a05f] hover:text-[#0e2c53] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <Phone size={20} />
                    </Link>

                    {/* Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="w-12 h-12 rounded-full bg-[#0e2c53] flex items-center justify-center text-[#c4a05f] hover:bg-[#c4a05f] hover:text-[#0e2c53] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </nav>

            {/* Sidebar Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
                        />

                        {/* Sidebar Drawer - Matching the Inspect Element Code */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-[85vw] md:w-[400px] lg:w-[28vw] z-[9999] bg-[#ffffff] shadow-2xl p-8 flex flex-col pointer-events-auto rounded-tl-none rounded-bl-[4rem] overflow-y-auto"
                            style={{ borderLeft: "1px solid rgba(196, 160, 95, 0.2)" }}
                        >
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#f8f9fa] to-white -z-10 pointer-events-none"></div>
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#c4a05f]/5 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#0e2c53]/5 rounded-full blur-3xl pointer-events-none"></div>

                            {/* Close Button */}
                            <div className="flex justify-end mb-8 relative z-50">
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-3 bg-white rounded-full hover:bg-gray-50 transition-colors shadow-sm border border-gray-100"
                                >
                                    <X size={24} className="text-[#0e2c53]" />
                                </button>
                            </div>

                            {/* Menu Links */}
                            <nav className="flex flex-col gap-4 pl-4 flex-1">
                                {["Home", "About us", "Services"].map((item) => (
                                    <div
                                        key={item}
                                        onMouseEnter={() => item === "Services" && setIsServicesHovered(true)}
                                        onMouseLeave={() => item === "Services" && setIsServicesHovered(false)}
                                        className="relative group"
                                    >
                                        <Link
                                            href={item === "Home" ? "/" : item === "Services" ? "/services" : item === "About us" ? "/about" : `/${item.toLowerCase().replace(" ", "")}`}
                                            className="text-3xl font-bold text-[#0e2c53] hover:text-[#c4a05f] transition-colors flex items-center gap-2 group w-fit"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span>{item}</span>
                                            {item === "Services" && (
                                                <ChevronDown
                                                    size={24}
                                                    className={`transition-transform duration-300 ${isServicesHovered ? 'rotate-180 text-[#c4a05f]' : ''}`}
                                                />
                                            )}
                                        </Link>

                                        {/* Sub-menu for Services */}
                                        {item === "Services" && (
                                            <AnimatePresence>
                                                {isServicesHovered && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0, y: -10 }}
                                                        animate={{ opacity: 1, height: "auto", y: 0 }}
                                                        exit={{ opacity: 0, height: 0, y: -10 }}
                                                        className="overflow-hidden flex flex-col mt-4 border-l-2 border-[#c4a05f]/20 pl-6 gap-2"
                                                    >
                                                        {servicesData.map((service) => (
                                                            <Link
                                                                key={service.id}
                                                                href={`/services/${service.id}`}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="text-base font-semibold text-gray-500 hover:text-[#c4a05f] transition-all py-1.5 flex items-center gap-2"
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[#c4a05f]/30" />
                                                                {service.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* CTA Button */}
                            <div className="mt-8 px-2">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block w-full bg-[#0e2c53] text-white py-3 px-8 rounded-xl text-center font-bold text-base hover:bg-[#c4a05f] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Get in touch
                                </Link>

                                {/* Social Links - Added below CTA */}
                                <div className="flex items-center justify-center gap-6 mt-8">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#0e2c53] hover:text-[#c4a05f] transition-colors border border-gray-100 shadow-sm hover:shadow-md"
                                            aria-label={social.label}
                                        >
                                            <social.icon size={20} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Footer Contact Info */}
                            <div className="mt-auto pl-4 text-xs text-gray-400 font-sans space-y-2">
                                <h4 className="font-bold text-[#0e2c53] mb-4 text-xs tracking-widest uppercase">Contact</h4>
                                <p className="text-[#0e2c53] text-sm">+966 50 123 4567</p>
                                <p className="text-[#0e2c53] text-sm mb-6">info@cyashcontracting.com</p>
                                <p className="pt-4 border-t border-gray-100">© 2024 CYASH Contracting.</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
