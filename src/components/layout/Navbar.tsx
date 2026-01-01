"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change state early on scroll
            if (window.scrollY > window.innerHeight * 0.1) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Standard nav links
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About us", href: "/about" },
        { name: "Services", href: "/services" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 pointer-events-none ${isScrolled
                    ? "py-3 bg-transparent"
                    : "py-3 bg-[#0e2c53]/95 backdrop-blur-sm "
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 z-50 pointer-events-auto">
                        <Link href="/" className="block relative">
                            <Image
                                src="/logo.png"
                                alt="CYASH Contracting"
                                width={280}
                                height={100}
                                className={`w-auto object-contain transition-all duration-500 ${isScrolled ? "h-28 brightness-100 invert-0" : "h-28 brightness-0 invert"
                                    }`}
                            />
                        </Link>
                    </div>

                    {/* Navigation - Transforms from Links to Icon */}
                    <div className="flex items-center gap-8 pointer-events-auto">
                        <AnimatePresence mode="wait">
                            {!isScrolled ? (
                                /* Full Navigation (Visible at Top) */
                                <motion.div
                                    key="full-nav"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                                    className="flex items-center gap-8"
                                >
                                    <nav className="hidden md:flex items-center gap-8 text-[#c4a05f] text-sm font-medium tracking-wide">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className="hover:text-white transition-colors relative group font-sans"
                                            >
                                                {link.name}
                                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c4a05f] transition-all group-hover:w-full" />
                                            </Link>
                                        ))}
                                    </nav>
                                    <Link
                                        href="#contact"
                                        className="hidden md:inline-block bg-[#c4a05f] text-[#0e2c53] px-6 py-2.5 rounded-full font-bold hover:bg-white transition-all text-sm font-sans"
                                    >
                                        Get in touch
                                    </Link>

                                    {/* Mobile Menu Trigger (when at top) */}
                                    <button
                                        onClick={() => setIsMenuOpen(true)}
                                        className="md:hidden text-[#c4a05f] hover:text-white transition-colors"
                                    >
                                        <Menu size={28} />
                                    </button>
                                </motion.div>
                            ) : (
                                /* Collapsed Icon (Visible on Scroll) */
                                <motion.div
                                    key="scrolled-icons"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    className="flex items-center gap-3"
                                >
                                    <button
                                        onClick={() => setIsMenuOpen(true)}
                                        className="bg-[#0e2c53] text-[#c4a05f] p-3 rounded-full shadow-lg hover:bg-[#c4a05f] hover:text-[#0e2c53] transition-colors"
                                    >
                                        <Menu size={24} />
                                    </button>

                                    <Link href="#contact" className="hidden md:block bg-[#0e2c53] text-[#c4a05f] p-3 rounded-full shadow-lg hover:bg-[#c4a05f] hover:text-[#0e2c53] transition-colors">
                                        <Phone size={24} />
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </header>

            {/* Sidebar Menu (Right Side) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-[1500] bg-black/20 backdrop-blur-[2px] pointer-events-auto"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%", skewX: 0 }}
                            animate={{ x: 0, skewX: 0 }}
                            exit={{ x: "100%", skewX: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                mass: 1
                            }}
                            className="fixed top-0 right-0 h-full w-[85vw] md:w-[350px] lg:w-[25vw] z-[9999] bg-[#ffffff] shadow-2xl p-8 flex flex-col pointer-events-auto rounded-tl-none rounded-bl-[6rem] overflow-hidden"
                            style={{
                                borderLeft: "1px solid rgba(196, 160, 95, 0.2)"
                            }}
                        >
                            {/* Water-like background decoration */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#f8f9fa] to-white -z-10 pointer-events-none" />
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#c4a05f]/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#0e2c53]/5 rounded-full blur-3xl pointer-events-none" />

                            <div className="flex justify-end mb-12 relative z-50">
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 rounded-full bg-gray-50 text-[#0e2c53] hover:bg-[#c4a05f] hover:text-white transition-all shadow-sm cursor-pointer"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6 pl-4">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (index * 0.05) }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-2xl md:text-3xl font-bold text-[#0e2c53] hover:text-[#c4a05f] transition-colors font-sans flex items-center gap-4 group"
                                        >
                                            <span className="w-0 h-[2px] bg-[#c4a05f] group-hover:w-8 transition-all duration-300" />
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="pt-8"
                                >
                                    <Link
                                        href="#contact"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="inline-block w-full text-center bg-[#0e2c53] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#c4a05f] transition-all shadow-lg transform hover:-translate-y-1"
                                    >
                                        Get in touch
                                    </Link>
                                </motion.div>
                            </nav>

                            <div className="mt-auto pl-4 text-xs text-gray-400 font-sans space-y-2">
                                <p className="font-bold text-[#0e2c53]">CONTACT</p>
                                <p>+966 50 123 4567</p>
                                <p>info@cyashcontracting.com</p>
                                <div className="h-px w-20 bg-gray-200 my-4" />
                                <p>© 2024 CYASH Contracting.</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
