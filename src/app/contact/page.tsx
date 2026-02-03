"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Globe, ChevronDown, Instagram, Facebook, Linkedin } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "Turnkey Projects",
        message: ""
    });

    const [isSelectOpen, setIsSelectOpen] = useState(false);

    const services = [
        "Turnkey Projects",
        "Joinery Works",
        "Flooring Solutions",
        "Ceiling Works",
        "Partitions",
        "Wall Cladding",
        "Hand Rails",
        "Curtains & Blinds",
        "Commercial Interiors",
        "Other Services"
    ];

    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            details: ["+966 50 123 4567", "+966 11 234 5678"],
            color: "bg-blue-50 text-blue-600"
        },
        {
            icon: Mail,
            title: "Email",
            details: ["info@cyashcontracting.com", "projects@cyashcontracting.com"],
            color: "bg-gold-50 text-[#c4a05f]"
        },
        {
            icon: MapPin,
            title: "Office Location",
            details: ["Level 24, Kingdom Center Tower,", "Riyadh, Saudi Arabia"],
            color: "bg-purple-50 text-purple-600"
        },
        {
            icon: Clock,
            title: "Working Hours",
            details: ["Sun - Thu: 9:00 AM - 6:00 PM", "Fri - Sat: Closed"],
            color: "bg-green-50 text-green-600"
        }
    ];

    const handleWhatsAppSend = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*New Inquiry from Website*
--------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Message:* ${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        // Using the same number as in the contact info
        const whatsappUrl = `https://wa.me/966501234567?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <main className="min-h-screen bg-[#f8f9fa] pt-32 pb-20">
            {/* Hero Section */}
            <div className="container mx-auto px-6 md:px-12 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl font-serif font-black text-[#0e2c53] mb-6">
                        Let's Create Your <span className="text-[#c4a05f]">Dream Space</span>
                    </h1>
                    <p className="text-gray-500 font-sans text-lg leading-relaxed">
                        Have a project in mind? Our team of experts is ready to transform your vision into reality.
                        Reach out to us through any of the channels below or fill out the form.
                    </p>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-2xl ${info.color} bg-opacity-10`}>
                                        <info.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0e2c53] mb-2">{info.title}</h3>
                                        {info.details.map((detail, i) => (
                                            <p key={i} className="text-gray-500 font-sans text-sm">{detail}</p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Social Media Preview */}
                        <div className="bg-[#0e2c53] p-8 rounded-3xl text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c4a05f]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Globe size={20} className="text-[#c4a05f]" />
                                Global Reach
                            </h3>
                            <p className="text-gray-300 text-sm font-sans mb-6">
                                We execute high-end projects across the Kingdom and beyond.
                            </p>
                            <div className="flex gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(196, 160, 95, 0.2)" }}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer transition-colors"
                                >
                                    <Instagram size={18} className="text-[#c4a05f]" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(196, 160, 95, 0.2)" }}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer transition-colors"
                                >
                                    <Facebook size={18} className="text-[#c4a05f]" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(196, 160, 95, 0.2)" }}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer transition-colors"
                                >
                                    <Linkedin size={18} className="text-[#c4a05f]" />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-[#0e2c53]/5 border border-gray-50 relative"
                        >
                            <h2 className="text-3xl font-bold text-[#0e2c53] mb-8">Send us a Message</h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleWhatsAppSend}>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#c4a05f]/20 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#c4a05f]/20 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+966"
                                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#c4a05f]/20 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2 relative">
                                    <label className="text-sm font-bold text-gray-700 ml-2">Service Needed</label>
                                    <div
                                        className="w-full bg-gray-50 rounded-2xl px-6 py-4 cursor-pointer flex items-center justify-between group hover:bg-white hover:ring-2 hover:ring-[#c4a05f]/20 transition-all"
                                        onClick={() => setIsSelectOpen(!isSelectOpen)}
                                    >
                                        <span className="text-gray-700">{formData.service}</span>
                                        <ChevronDown size={20} className={`text-gray-400 transition-transform ${isSelectOpen ? 'rotate-180' : ''}`} />
                                    </div>

                                    <AnimatePresence>
                                        {isSelectOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-[100] overflow-hidden p-2"
                                            >
                                                {services.map((service) => (
                                                    <div
                                                        key={service}
                                                        className={`px-4 py-3 rounded-xl cursor-pointer transition-colors text-sm font-semibold ${formData.service === service ? 'bg-[#c4a05f]/10 text-[#0e2c53]' : 'text-gray-600 hover:bg-gray-50 hover:text-[#0e2c53]'}`}
                                                        onClick={() => {
                                                            setFormData({ ...formData, service });
                                                            setIsSelectOpen(false);
                                                        }}
                                                    >
                                                        {service}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <div className="col-span-1 md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-2">Your Message</label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us about your project..."
                                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#c4a05f]/20 focus:bg-white transition-all outline-none resize-none"
                                    ></textarea>
                                </div>
                                <div className="col-span-1 md:col-span-2 flex justify-end">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="bg-[#0e2c53] text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-[#25D366] transition-all shadow-lg"
                                    >
                                        Send to WhatsApp
                                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative Section */}
            <div className="container mx-auto px-6 md:px-12 mt-20">
                <div className="h-64 rounded-[3rem] bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 group">
                    <img
                        src="/Turnkey1.jpg"
                        alt="Location Preview"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-[#0e2c53]/40 flex items-center justify-center">
                        <div className="text-center px-6">
                            <h3 className="text-2xl font-bold text-white mb-2 font-serif italic">Visit our Office in Riyadh</h3>
                            <p className="text-white/80 text-sm font-sans uppercase tracking-[0.3em]">Kingdom Center Tower · Level 24</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
