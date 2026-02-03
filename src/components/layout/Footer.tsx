import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0e2c53] text-white pt-20 pb-10 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c4a05f]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c4a05f]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="space-y-6">
                        <Link href="/" className="block relative w-32 h-20 -ml-6">
                            <Image
                                src="/logo.png"
                                alt="CYASH Contracting"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 font-sans leading-relaxed">
                            Crafting exceptional spaces that blend luxury, functionality, and timeless design. Your vision, our expertise.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="#"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c4a05f] hover:text-[#0e2c53] transition-all duration-300 group"
                            >
                                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                            </Link>
                            <Link
                                href="#"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c4a05f] hover:text-[#0e2c53] transition-all duration-300 group"
                            >
                                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                            </Link>
                            <Link
                                href="#"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c4a05f] hover:text-[#0e2c53] transition-all duration-300 group"
                            >
                                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                            </Link>
                            <Link
                                href="#"
                                aria-label="Twitter"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c4a05f] hover:text-[#0e2c53] transition-all duration-300 group"
                            >
                                <Twitter size={18} className="group-hover:scale-110 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-[#c4a05f]" />
                            Quick Links
                        </h4>

                        <ul className="space-y-3 font-sans">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Services", href: "/services" },
                                { name: "Projects", href: "/#projects" },
                                { name: "Contact", href: "/contact" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-[#c4a05f] transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#c4a05f]" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-[#c4a05f]" />
                            Our Services
                        </h4>
                        <ul className="space-y-3 font-sans">
                            {servicesData.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="text-gray-400 hover:text-[#c4a05f] transition-colors inline-block hover:translate-x-1 transition-transform"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-[#c4a05f]" />
                            Get in Touch
                        </h4>
                        <ul className="space-y-6 font-sans">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-[#c4a05f]/10 p-2 rounded-lg text-[#c4a05f]">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400">
                                        Level 24, Kingdom Center Tower,<br />
                                        Riyadh, Saudi Arabia
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-[#c4a05f]/10 p-2 rounded-lg text-[#c4a05f]">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400">+966 50 123 4567</p>
                                    <p className="text-gray-400">+966 11 234 5678</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-[#c4a05f]/10 p-2 rounded-lg text-[#c4a05f]">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400">info@cyashcontracting.com</p>
                                    <p className="text-gray-400">projects@cyashcontracting.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-sm text-gray-500">
                    <p>© {currentYear} CYASH Contracting. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-[#c4a05f] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#c4a05f] transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-[#c4a05f] transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
