"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Mic, Image as ImageIcon, Minimize2, Bot, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { useChat } from "@/context/ChatContext";

type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
};

export default function ChatWidget() {
    const { isChatOpen: isOpen, setIsChatOpen: setIsOpen } = useChat();
    const [hasStarted, setHasStarted] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, hasStarted]);

    const handleStartChat = () => {
        setHasStarted(true);
        // Add initial greeting from bot
        setTimeout(() => {
            addMessage("Hello! I am Windoo from Cyash Contracting. How can I help you transform your space today?", 'bot');
        }, 500);
    };

    const addMessage = (text: string, sender: 'user' | 'bot') => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            sender,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, newMessage]);
    };

    // Knowledge Base Data - Comprehensive Training
    const knowledgeBase = [
        // --- Flooring ---
        {
            keywords: ["flooring", "floor", "tiles", "carpet", "vinyl", "parquet"],
            response: "We offer several high-quality flooring options tailored to your needs:\n• Tile (Marble, Granite, Vitrified, Porcelain)\n• Carpet (Luxury, Heat-retaining, Acoustic)\n• Vinyl (Cost-effective, WPC/SPC waterproof models)\n• Raised Access (12\" to 6' height for data/MEP utilities)\n• Rubber (Safe, High-grip for gyms/schools)\n• Parquet (Pure wood or Moisture-resistant Engineered wood)"
        },
        {
            keywords: ["marble", "granite", "vitrified", "porcelain", "ceramic"],
            response: "Our tile solutions range from luxury Marble and Granite for a high-end look to Vitrified and Porcelain tiles for superior durability. Ceramic tiles are also available as a cost-effective choice for walls."
        },
        {
            keywords: ["carpet", "rug", "soft floor"],
            response: "Carpet flooring is perfect for offices and homes for noise absorption. Our carpets are heat-retaining and provide a cushioning effect that protects fragile objects."
        },
        {
            keywords: ["vinyl", "wpc", "spc", "waterproof"],
            response: "Vinyl is a popular budget-friendly choice. We specificially recommend WPC and SPC models for areas with water access as they are completely waterproof."
        },
        {
            keywords: ["raised flooring", "access floor", "server room"],
            response: "Raised flooring is essential for server rooms and modern offices to hide cables. We can fix heights from 12 inches up to 6 feet, using concrete, steel, or wood panels."
        },

        // --- Ceiling ---
        {
            keywords: ["ceiling", "roof", "gypsum", "pop"],
            response: "Our ceiling specialists work with:\n• Gypsum (Most popular, Fire-retardant)\n• Aluminum (Moisture/Termite resistant)\n• Wooden (Teak/MDF, Luxurious look)\n• Celotex (Quick, Heat-retaining)\n• Glass (Transparent, Spacious feel)\n• PVC/POP (Cost-effective options)"
        },

        // --- Cladding & Facade ---
        {
            keywords: ["cladding", "facade", "acp", "vitracore"],
            response: "We provide various exterior and interior cladding: Aluminum (ACP/Vitracore G2), Glass (Tempered/Vitrified), Stone (Wet/Dry attachment), and Gypsum wall skins."
        },

        // --- Partition ---
        {
            keywords: ["partition", "divider", "glass wall", "office wall"],
            response: "Divide your space with style: Glass (Frosted/Tempered), Wooden (Fixed/Moveable), Drywall (Fire-retardant), or Movable partitions for flexible layouts."
        },

        // --- Joinery & Furniture ---
        {
            keywords: ["joinery", "furniture", "woodwork", "cabinet", "reception"],
            response: "Our in-house joinery facility crafts bespoke furniture: Reception counters, Kitchen/Pantry tops (Corian/Granite), Exhibition stands, and custom Office desks."
        },

        // --- Turnkey & MEP ---
        {
            keywords: ["turnkey", "full project", "mep", "hvac", "electrical"],
            response: "Our Turnkey solution covers everything: Design, Electrical (Phase 1-3), Networking, CCTV, HVAC (Centralized), and complete furnishing. We manage the entire project from concept to handover."
        },

        // --- Healthcare & Medical ---
        {
            keywords: ["hospital", "clinic", "pharmacy", "medical"],
            response: "We specialize in Healthcare fit-outs using medical-grade, non-toxic materials, specialized lighting, and designs that promote healing and hygiene."
        },

        // --- Retail & Showrooms ---
        {
            keywords: ["showroom", "retail", "mall", "shop"],
            response: "For showrooms and malls, we prioritize 'Visual & Access'. We design layouts with high product visibility and strategic lighting to enhance the customer experience."
        },

        // --- General & Contact ---
        {
            keywords: ["service", "what do you do", "offer"],
            response: "Cyash Contracting offers a total interior solution: Turnkey Projects, Joinery, Flooring, Ceilings, Partitions, Cladding, Handrails, and specialized Fit-outs for Offices, Hospitals, and Restaurants."
        },
        {
            keywords: ["contact", "phone", "email", "call", "whatsapp"],
            response: "You can reach us at +966 50 123 4567 or info@cyashcontracting.com. We also have a dedicated 'Send to WhatsApp' button on our Contact page!"
        },
        {
            keywords: ["location", "address", "riyadh"],
            response: "Our office is located at Level 24, Kingdom Center Tower, Riyadh, Saudi Arabia."
        }
    ];

    const findBestResponse = (input: string) => {
        const lowerInput = input.toLowerCase();

        // Improved matching: Look for keyword matches within the input words
        const inputWords = lowerInput.split(/\W+/);

        for (const item of knowledgeBase) {
            const isMatch = item.keywords.some(keyword => {
                const keywordWords = keyword.split(/\W+/);
                // Direct match or all words in a multi-word keyword are present
                return lowerInput.includes(keyword) ||
                    keywordWords.every(kWord => inputWords.includes(kWord));
            });

            if (isMatch) return item.response;
        }

        // Price/Quote Intent
        if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("how much")) {
            return "As every project is unique, we offer customized pricing. Please contact us at +966 50 123 4567 or use our contact form for a personalized quote.";
        }

        // Global Fallback
        return "I understand you're interested in our services! We specialize in high-end Turnkey Interiors, Flooring, and specialized Fit-outs in Saudi Arabia. \n\nPlease call us at +966 50 123 4567 — our experts would love to discuss your specific project!";
    };

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        // User message
        addMessage(inputValue, 'user');
        const userText = inputValue; // Capture for closure
        setInputValue("");
        setIsTyping(true);

        // Simulate Bot Response with Logic
        setTimeout(() => {
            const responseText = findBestResponse(userText);
            addMessage(responseText, 'bot');
            setIsTyping(false);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 font-sans max-w-[calc(100vw-3rem)]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 30 }}
                        className="bg-white/95 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col border border-white/50 fixed inset-0 w-full h-[100dvh] rounded-none md:relative md:inset-auto md:w-[400px] md:h-[600px] md:rounded-3xl"
                    >
                        {/* Premium Header */}
                        <div className="bg-gradient-to-r from-[#0e2c53] to-[#1a4f8b] p-6 flex items-center justify-between text-white shrink-0 relative overflow-hidden">
                            {/* Decorative Sparkles */}
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Sparkles size={60} />
                            </div>

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center border border-white/30 shadow-inner backdrop-blur-md overflow-hidden p-1.5">
                                    <img
                                        src="/windooface.png"
                                        alt="Windoo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl leading-tight">Windoo AI</h3>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        <p className="text-xs text-blue-100 font-medium">Always Online</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 relative z-10">
                                <button onClick={toggleChat} className="p-2 hover:bg-white/10 rounded-full transition-colors active:scale-95">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Content Area */}
                        {!hasStarted ? (
                            // Welcome Screen
                            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gray-50/50 relative overflow-hidden">
                                {/* Decorative Background Pattern */}
                                <div className="absolute inset-0 opacity-5 pointer-events-none"
                                    style={{ backgroundImage: 'radial-gradient(#0e2c53 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                                />

                                {/* Content Wrapper with Z-Index */}
                                <div className="relative z-10 flex flex-col items-center w-full">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="w-24 h-24 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl flex items-center justify-center mb-8 p-1 border border-white/50"
                                    >
                                        <Image
                                            src="/logo.png"
                                            alt="Cyash"
                                            width={80}
                                            height={80}
                                            className="object-contain drop-shadow-sm"
                                        />
                                    </motion.div>
                                    <motion.h4
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-[#0e2c53] text-2xl font-black mb-3 font-sans"
                                    >
                                        Hello, I'm Windoo!
                                    </motion.h4>
                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-gray-500 mb-10 text-sm leading-relaxed max-w-[260px]"
                                    >
                                        Your personal interior design assistant. Ask me about services, ideas, or bookings.
                                    </motion.p>
                                    <motion.button
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        onClick={handleStartChat}
                                        className="bg-[#0e2c53] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#c4a05f] hover:text-[#0e2c53] transition-all shadow-xl shadow-[#0e2c53]/20 hover:shadow-[#c4a05f]/30 active:scale-95 flex items-center gap-2 cursor-pointer"
                                    >
                                        Start Chatting <Send size={18} />
                                    </motion.button>
                                </div>
                            </div>
                        ) : (
                            // Chat Area
                            <>
                                <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                                    {messages.map((msg, idx) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                            key={msg.id}
                                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[85%] p-4 text-sm shadow-md backdrop-blur-sm relative group ${msg.sender === 'user'
                                                    ? 'bg-gradient-to-br from-[#0e2c53] to-[#2c4a7c] text-white rounded-2xl rounded-tr-sm'
                                                    : 'bg-white border border-gray-100/50 text-gray-800 rounded-2xl rounded-tl-sm'
                                                    }`}
                                            >
                                                {msg.sender === 'bot' && (
                                                    <div className="absolute -left-2 -top-2 w-7 h-7 rounded-full bg-white flex items-center justify-center border-2 border-white shadow-md overflow-hidden p-0.5">
                                                        <img
                                                            src="/windooface.png"
                                                            alt="Windoo"
                                                            className="w-full h-full object-contain"
                                                        />
                                                    </div>
                                                )}
                                                <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                                                <div className={`text-[10px] mt-2 opacity-50 flex items-center gap-1 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex justify-start pl-2"
                                        >
                                            <div className="bg-white/80 border border-gray-100 p-4 rounded-2xl rounded-tl-sm shadow-sm flex gap-1.5">
                                                <span className="w-2 h-2 bg-[#c4a05f] rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                                                <span className="w-2 h-2 bg-[#c4a05f] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                                <span className="w-2 h-2 bg-[#c4a05f] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                                            </div>
                                        </motion.div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Modern Input Area */}
                                <div className="p-4 bg-white/80 backdrop-blur-md border-t border-gray-100">
                                    <form onSubmit={handleSendMessage} className="flex gap-3 relative items-end">
                                        <div className="flex-1 relative bg-gray-100/80 rounded-2xl transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-[#c4a05f]/20 focus-within:shadow-md border border-transparent focus-within:border-[#c4a05f]/30">
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                placeholder="Ask Windoo..."
                                                className="w-full bg-transparent text-gray-800 placeholder:text-gray-400 px-5 py-4 pr-12 rounded-2xl focus:outline-none font-medium text-sm"
                                            />
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            type="submit"
                                            disabled={!inputValue.trim()}
                                            className="bg-[#0e2c53] text-white p-4 rounded-2xl hover:bg-[#c4a05f] hover:text-[#0e2c53] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#0e2c53]/10"
                                        >
                                            <Send size={20} />
                                        </motion.button>
                                    </form>
                                    <div className="text-center mt-3">
                                        <p className="text-[10px] uppercase tracking-widest text-[#c4a05f] opacity-80 font-bold">Powered by Windoole</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Premium Side Trigger */}
            {!isOpen && (
                <div
                    className="fixed left-1/2 -translate-x-1/2 md:left-auto md:right-0 top-24 md:top-1/2 md:-translate-y-1/2 z-[100] flex items-center group cursor-pointer transition-all duration-300"
                    onClick={toggleChat}
                >
                    {/* Speech Bubble - Hidden on small mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="mr-2 relative hidden sm:block"
                    >
                        <div className="bg-white px-3 py-2 md:px-4 md:py-3 rounded-2xl shadow-xl border border-[#c4a05f]/30 whitespace-nowrap">
                            <p className="text-[#0e2c53] text-[11px] md:text-[13px] font-bold">
                                Hi! I am <span className="text-[#c4a05f]">Windoo</span>... <br />
                                <span className="text-[10px] opacity-70">Click to chat</span>
                            </p>
                            {/* Bubble Tail */}
                            <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-r border-t border-[#c4a05f]/30 rotate-45" />
                        </div>
                    </motion.div>

                    {/* Windoo Image - Smaller on mobile */}
                    <motion.div
                        whileHover={{ x: -10, scale: 1.05 }}
                        className="relative w-20 h-24 sm:w-28 sm:h-32 md:w-40 md:h-48"
                    >
                        <Image
                            src="/windoo.png"
                            alt="Windoo"
                            fill
                            className="object-contain drop-shadow-2xl"
                        />
                        {/* Status Indicator */}
                        <div className="absolute top-2 left-2 md:top-4 md:left-4 flex h-3 w-3 md:h-4 md:w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-green-500 border-2 border-white"></span>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
