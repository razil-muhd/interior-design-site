"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Mic, Image as ImageIcon, Minimize2, Bot, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
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
        // --- Services (General) - High Priority ---
        {
            keywords: ["service", "what do you do", "offer", "work", "specializ", "capabilities", "providing", "provide"],
            response: "We offer a comprehensive range of interior services including:\n• Turnkey Projects (Design & Build)\n• Custom Joinery & Manufacturing\n• Flooring Solutions (Marble, Parquet, Tiles)\n• Ceiling Works (Gypsum, Metal, Acoustic)\n• Partitions (Glass, Gypsum)\n• Wall Cladding & Decor\n• Handrails & Metal Works\n• Curtains & Blinds\n• MEP & HVAC Services"
        },

        // --- General Greetings (Lower Priority or Strict) ---
        {
            keywords: ["hello", "good morning", "good afternoon", "greetings", "hey"], // Removed "hi", "hey" to avoid partial matches like "which"
            response: "Hello! Welcome to Cyash Contracting. I'm Windoo, your AI assistant. Feel free to ask about our services, projects, or how to get in touch!"
        },
        {
            keywords: ["who are you", "what is this", "are you a bot", "are you ai"],
            response: "I am Windoo, the automated assistant for Cyash Contracting. I'm here to help you navigate our services and answer questions about our company."
        },
        {
            keywords: ["thank", "thanks", "cool", "great", "ok"],
            response: "You're welcome! Let me know if you need anything else."
        },

        // --- Company Info ---
        {
            keywords: ["about", "company", "cyash", "history", "who is cyash"],
            response: "Cyash Contracting is a leading interior service provider in Saudi Arabia with over 30 years of success. We specialize in turn-key Workspace Design and Interior Design Fit-out works, known for our dedication to crafting quality interiors."
        },
        {
            keywords: ["experience", "years", "long", "old"],
            response: "We have over 30 years of success in the industry, executing high-quality projects across the Kingdom."
        },
        {
            keywords: ["stats", "numbers", "projects", "completed"],
            response: "We have completed over 250 projects and have a team of more than 100 skilled experts dedicated to excellence."
        },
        {
            keywords: ["location", "where", "address", "located", "office"],
            response: "We are located at Level 24, Kingdom Center Tower, Riyadh, Saudi Arabia."
        },
        {
            keywords: ["contact", "phone", "email", "call", "reach", "number"],
            response: "You can reach us at:\n📞 +966 50 123 4567\n✉️ info@cyashcontracting.com\nWe look forward to hearing from you!"
        },

        // --- Strategic & Vision ---
        {
            keywords: ["vision 2030", "2030", "saudi vision", "future"],
            response: "We are deeply committed to Saudi Vision 2030. We contribute to the Kingdom's transformation by fostering sustainable development, empowering local talent, and building world-class infrastructure that diversifies the economy. \n\nOur projects align with the Vision's goal of creating a vibrant society and a thriving economy. You can learn more about this historic transformation at the official website: https://www.vision2030.gov.sa/"
        },
        {
            keywords: ["mission", "goal", "aim"],
            response: "Our mission is to deliver exceptional interior solutions that blend luxury, functionality, and timeless design, ensuring every space we touch inspires success."
        },
        {
            keywords: ["vision", "dream"],
            response: "Our vision is to be the premier choice for luxury interior contracting in the region, setting new standards for quality and innovation."
        },
        {
            keywords: ["values", "standards", "quality"],
            response: "We operate with core values of Integrity, Quality, Innovation, and Client-Centricity. We don't just build spaces; we build relationships based on trust."
        },

        // --- Services (Specific) ---
        {
            keywords: ["turnkey", "turn key", "end to end", "design and build"],
            response: "Our Turnkey Projects are our flagship service. We take full responsibility from initial concept validation to final handover. This includes space planning, 3D visualization, material procurement, construction, project management, and quality control. We ensure your project is delivered on time, within budget, and to the highest standards."
        },
        {
            keywords: ["joinery", "wood", "carpentry", "cabinet", "furniture", "manufacturing"],
            response: "We operate a dedicated joinery facility in Saudi Arabia, allowing us to produce high-end custom woodwork. From bespoke cabinets and wardrobes to intricate wall paneling and reception desks, our expert craftsmen bring unique designs to life with precision."
        },
        {
            keywords: ["flooring", "floor", "marble", "tile", "parquet", "carpet"],
            response: "We provide premium flooring solutions tailored to your space's traffic and aesthetic needs. This includes installing luxury marble, granite, ceramic tiles, solid wood parquet, and heavy-duty office carpet tiles."
        },
        {
            keywords: ["ceiling", "gypsum", "lighting", "overhead"],
            response: "We specialize in artistic and functional  ceilings. Whether you need decorative gypsum designs, industrial metal grid ceilings, or acoustic solutions for noise control, we integrate them seamlessly with modern lighting."
        },
        {
            keywords: ["partition", "divider", "glass", "wall", "separate"],
            response: "Our partition systems optimize space without compromising style. We offer frameless glass partitions for open-feel offices, gypsum walls for privacy, and acoustic barriers. We can customize dividers to suit any office layout."
        },
        {
            keywords: ["cladding", "panel", "3d", "feature wall", "stone wall"],
            response: "Add texture and character to your space with our Wall Cladding services. We use natural stone, wood veneers, and 3D architectural panels to create striking feature walls and exterior facades that make a lasting impression."
        },
        {
            keywords: ["handrail", "stair", "railing", "balustrade", "stainless"],
            response: "Safety meets style with our custom Handrails. We design and install modern railing systems using tempered glass, stainless steel, and polished wood to complement your interior architecture, specifically for staircases and balconies."
        },
        {
            keywords: ["curtain", "blind", "window", "motorized", "fabric"],
            response: "Complete your space with luxury Curtains & Blinds. We supply and install blackout curtains, sheer fabrics, roller blinds, and fully motorized smart systems for modern offices and homes."
        },
        {
            keywords: ["mep", "hvac", "electric", "plumbing", "ac", "air condition"],
            response: "We have specific expertise in MEP (Mechanical, Electrical, and Plumbing) and HVAC. Our engineers handle all technical aspects to ensure your office is fully functional, safe, and comfortable. This allows us to truly be a one-stop Turnkey provider."
        },
        // --- Turnkey Specifics ---
        {
            keywords: ["electrical", "wiring", "cctv", "networking", "lan"],
            response: "Our turnkey solutions include full electrical and networking setup. We handle commercial installations, LAN networking for offices, CCTV security integration, and ensuring all power systems support your appliances and HVAC needs."
        },
        {
            keywords: ["guest", "customer experience", "hospitality design"],
            response: "We follow the 'Think like a guest' philosophy. For restaurants and hotels, we design for elegance and comfort—from lighting to seating—to ensure guests feel valued and want to return."
        },
        {
            keywords: ["brand", "identity", "story"],
            response: "We believe in being true to your brand. Your interior design will visually express your unique identity through aligned colors, materials, and layouts, creating a strong connection with your customers."
        },
        {
            keywords: ["storage", "kitchen", "pantry"],
            response: "We never skimp on storage. Essential for smooth operations, we thoughtfully plan adequate storage for ingredients, equipment, and supplies to ensure a clean, organized, and efficient workspace or kitchen."
        },
        {
            keywords: ["showroom", "retail", "display"],
            response: "For showrooms, it's not just visual—it's about access. We design layouts that optimize product showcasing and customer flow, ensuring your space effectively drives sales and highlights your brand."
        },
        {
            keywords: ["ac", "air condition", "ventilation", "cooling"],
            response: "Atmospheric condition is crucial. We install various AC systems (Split, Inverter, Centralized) tailored to your space to ensure a comfortable environment for staff and customers."
        },


        // --- Joinery & Fit-out Specifics ---
        {
            keywords: ["reception", "desk", "counter", "lobby", "welcome"],
            response: "Reception counters are the public face of your firm. We craft welcoming reception desks using MDF, glass, and hardwood to match your company's aesthetic and workflow, ensuring a lasting first impression."
        },
        {
            keywords: ["display rack", "rack", "showroom shelf", "retail shelf"],
            response: "Display racks are the backbone of retail. We design and manufacture custom racks from glass, wood, gypsum, and MDF to effectively showcase your products and attract business."
        },
        {
            keywords: ["exhibition", "stand", "booth", "event display", "pop-up"],
            response: "We create captivating exhibition stands, including pop-up displays and modular custom stands. Our designs help you stand out in exhibition halls and promote your products effectively."
        },
        {
            keywords: ["Korian", "countertop", "granite", "kitchen counter", "pantry top"],
            response: "We specialize in Corian and Korean countertops, which offer seamless edges and smooth finishes. While granite is robust, Corian provides excellent durability and a wide range of fade-resistant colors."
        },
        {
            keywords: ["display stand", "brochure stand", "magazine rack"],
            response: "Our custom display stands are perfect for reception areas to hold brochures and magazines. Available in various materials and finishes, they serve both functional and aesthetic purposes."
        },


        // --- Flooring Specifics ---
        {
            keywords: ["tile flooring", "marble floor", "granite floor", "ceramic tile", "porcelain"],
            response: "We offer various tile flooring options including Marble and Granite for a luxurious, cool feel, as well as durable Vitrified and Ceramic tiles suitable for high-traffic areas."
        },
        {
            keywords: ["carpet flooring", "office carpet", "carpet tile"],
            response: "Carpet flooring is excellent for noise absorption and retaining warmth. It provides a soft, professional feel perfect for offices and homes, available in various grades and designs."
        },
        {
            keywords: ["vinyl flooring", "wpc", "spc", "pvc floor"],
            response: "Vinyl flooring is a cost-effective, water-resistant solution. We install WPC and SPC models which are durable, easy to set up, and ideal for damp areas like bathrooms or kitchens."
        },
        {
            keywords: ["raised flooring", "access floor", "server room floor"],
            response: "Raised flooring is essential for server rooms and modern offices to hide electrical and data cabling. We install systems raised 12 inches to 6 feet to manage utilities efficiently."
        },
        {
            keywords: ["rubber flooring", "gym floor", "safety floor"],
            response: "Rubber flooring is the top choice for gyms, play schools, and sports areas due to its soft cushioning, non-slip grip, and noise absorption properties."
        },
        {
            keywords: ["parquet flooring", "wooden floor", "engineered wood"],
            response: "Parquet flooring offers a timeless, retro luxury. We provide both solid wood and engineered wood options that bring warmth and elegance to high-end homes and hotels."
        },

        // --- Ceiling Specifics ---
        {
            keywords: ["gypsum ceiling", "false ceiling", "pop ceiling"],
            response: "Gypsum is our most popular modern ceiling solution. It's fire-resistant, excellent for thermal insulation, and allows for versatile, artistic designs with integrated lighting."
        },
        {
            keywords: ["aluminum ceiling", "metal ceiling"],
            response: "Aluminum ceilings are lightweight, durable, and moisture-resistant. They are ideal for commercial spaces requiring a clean, industrial look or specific hygiene standards."
        },
        {
            keywords: ["wooden ceiling", "timber ceiling"],
            response: "Wooden ceilings add unmatched luxury and warmth. Using Teak or MDF, they offer great natural insulation and sound suppression, perfect for upscale offices and residences."
        },
        {
            keywords: ["glass ceiling", "skylight"],
            response: "Glass ceilings create a spacious, transparent feel, constructing a connection with the outdoors. We use heat-resistant glass to allow natural light while keeping the interior cool."
        },

        // --- Partition Specifics ---
        {
            keywords: ["glass partition", "glass wall", "office glass"],
            response: "Glass partitions maintain an open, spacious office atmosphere while providing necessary separation. We offer frosted or tempered glass options with aluminum or frameless fittings."
        },
        {
            keywords: ["drywall", "gypsum partition", "dry wall"],
            response: "Drywall partitions (Gypsum) are a fast, fire-resistant, and cost-effective way to divide space. They are sleek, lightweight, and offer excellent acoustic privacy."
        },
        {
            keywords: ["movable partition", "folding wall", "sliding wall"],
            response: "Movable partitions offer ultimate flexibility. Convert a large hall into smaller meeting rooms specifically when needed with our sliding and folding wall systems."
        },

        // --- Cladding Specifics ---
        {
            keywords: ["acp", "aluminum cladding", "composite panel"],
            response: "Aluminum Composite Panels (ACP) protect your building's exterior while adding a modern aesthetic. We use high-quality, fire-retardant panels (like Vitracore G2) in various thicknesses."
        },
        {
            keywords: ["stone cladding", "exterior stone"],
            response: "Stone cladding ensures durability and high insulation. While labor-intensive, it increases property value, offers fire resistance, and lasts 30-60 years with minimal maintenance."
        },
        {
            keywords: ["glass cladding", "glazing", "facade glass"],
            response: "Glass cladding improves weather resistance and thermal insulation. We use tempered or vitrified glass to give your building a stunning, modern exterior facade."
        },

        // --- Handrail & Curtain Specifics ---
        {
            keywords: ["glass handrail", "glass railing", "stair rail"],
            response: "Glass handrails provide safety without blocking views. They are elegant, modern, and often paired with stainless steel for a premium finish on balconies and staircases."
        },
        {
            keywords: ["steel handrail", "stainless steel rail"],
            response: "Stainless steel handrails are durable, cost-effective, and versatile. They are the most popular choice for commercial buildings due to their strength and low maintenance."
        },
        {
            keywords: ["motorized curtain", "roller blind", "office blind"],
            response: "We supply manual and motorized roller blinds perfect for offices. They offer excellent insulation, light control, and a sleek modern appearance."
        },
        {
            keywords: ["fabric curtain", "blackout", "sheer"],
            response: "From sheer curtains for light filtration to heavy blackout fabrics for privacy, we offer a wide range of custom-tailored curtains to suit any interior luxuriously."
        },

        // --- Commercial Interior Specifics ---
        {
            keywords: ["hospital interior", "clinic design", "medical fitout"],
            response: "Our healthcare interiors prioritize hygiene and tranquility. We use non-Red List materials and specialized lighting to create positive healing environments for patients."
        },
        {
            keywords: ["pharmacy design", "medical shop"],
            response: "Pharmacy design focuses on efficient workflow and organized medicine display. We ensure clean, sanitary environments with easy access for staff and customers."
        },
        {
            keywords: ["restaurant design", "cafe interior", "dining space"],
            response: "For restaurants and cafes, we create immersive ambiences. From kitchen workflow to customer seating, we design spaces that enhance the dining experience and encourage return visits."
        },
        {
            keywords: ["showroom interior", "retail design", "shop fitout"],
            response: "A showroom's design directly impacts sales. We create elegant product displays and effective lighting schemes that highlight your merchandise and elevate your brand value."
        },

        // --- Sectors ---
        {
            keywords: ["office", "workspace", "corporate"],
            response: "Offices are our specialty! We create flexible, modern workspaces that enhance productivity and reflect your brand identity. From open layouts to executive suites, we do it all."
        },
        {
            keywords: ["home", "residen", "villa", "apartment", "house"],
            response: "Yes, we serve private residences. We bring luxury and comfort to your home with our bespoke design and fit-out services, turning your personal vision into a reality."
        },
        {
            keywords: ["restaurant", "cafe", "hospital", "clinic", "showroom", "retail"],
            response: "We serve a variety of commercial sectors including Restaurants, Clinics, Hospitals, and retail Showrooms. We understand the specific operational and regulatory needs of these spaces."
        }
    ];

    const findBestResponse = (input: string) => {
        const lowerInput = input.toLowerCase();

        // 1. Direct Keyword Match
        for (const item of knowledgeBase) {
            if (item.keywords.some(keyword => lowerInput.includes(keyword))) {
                return item.response;
            }
        }

        // 2. Generic Fallbacks for recognized intents regarding "Help" or "Price"
        if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("quote")) {
            return "Since every project is unique, we provide custom quotes based on your specific needs. Please contact us at +966 50 123 4567 to schedule a free consultation.";
        }

        // 3. Helpful Default Fallback (for unknown services or general queries)
        return "That's an interesting request! While I don't have specific details on that right now, we offer a very flexible range of services and may be able to help you with that as well. \n\nPlease contact our expert team directly at +966 50 123 4567 — we'd love to discuss how we can make it happen!";
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
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 shadow-inner backdrop-blur-md">
                                    <Bot className="text-[#c4a05f]" size={28} />
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
                                                    <div className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-[#c4a05f] flex items-center justify-center border-2 border-white shadow-sm">
                                                        <Bot size={12} className="text-white" />
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

            {/* Premium Toggle Button */}
            {!isOpen && (
                <motion.button
                    onClick={toggleChat}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#0e2c53] text-white rounded-full shadow-[0_10px_40px_rgba(14,44,83,0.3)] flex items-center gap-3 px-6 py-4 transition-all group border border-white/10 overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#c4a05f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 flex items-center gap-3">
                        <div className="bg-white/10 p-2 rounded-full">
                            <Bot size={24} className="text-[#c4a05f]" />
                        </div>
                        <span className="font-bold tracking-wide pr-1">Ask Windoo</span>
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                    </div>
                </motion.button>
            )}
        </div>
    );
}
