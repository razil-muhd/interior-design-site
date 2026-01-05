"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Mic, Image as ImageIcon, Minimize2, Bot } from "lucide-react";
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
            response: "We specialize in artistic and functional false ceilings. Whether you need decorative gypsum designs, industrial metal grid ceilings, or acoustic solutions for noise control, we integrate them seamlessly with modern lighting."
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
        {
            keywords: ["furniture", "decor", "art", "accessory", "tables", "chairs", "sofa"],
            response: "Our Furniture & Decor service offers curated selections to complete your interior design. We source luxury furniture, custom decor items, and art to match your style and needs."
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
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl w-[90vw] md:w-[400px] h-[500px] md:h-[600px] overflow-hidden flex flex-col border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-[#0e2c53] p-4 flex items-center justify-between text-white shrink-0 relative overflow-hidden">
                            {/* Decorative bg */}
                            <div className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: 'radial-gradient(#c4a05f 1px, transparent 1px)',
                                    backgroundSize: '12px 12px'
                                }}
                            />

                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                                    <Bot className="text-[#c4a05f]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">Windoo</h3>
                                    <p className="text-xs text-gray-300 flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        Online
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 relative z-10">
                                <button onClick={toggleChat} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <Minimize2 size={18} />
                                </button>
                                <button onClick={toggleChat} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Content Area */}
                        {!hasStarted ? (
                            // Welcome Screen
                            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gray-50/50">
                                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 p-4">
                                    <Image
                                        src="/logo.png"
                                        alt="Cyash"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <h4 className="text-[#0e2c53] text-xl font-bold mb-2">Welcome to Windoo!</h4>
                                <p className="text-gray-500 mb-8 text-sm">
                                    I'm your virtual assistant. I can help you with our services, recent projects, or booking a consultation.
                                </p>
                                <button
                                    onClick={handleStartChat}
                                    className="bg-[#0e2c53] text-white px-8 py-3 rounded-full font-bold hover:bg-[#c4a05f] hover:text-[#0e2c53] transition-all shadow-lg transform hover:-translate-y-1"
                                >
                                    Get Started
                                </button>
                            </div>
                        ) : (
                            // Chat Area
                            <>
                                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[80%] p-4 rounded-2xl text-sm shadow-sm ${msg.sender === 'user'
                                                    ? 'bg-[#0e2c53] text-white rounded-br-none'
                                                    : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                                    }`}
                                            >
                                                {msg.text}
                                                <div className={`text-[10px] mt-1 ${msg.sender === 'user' ? 'text-white/50' : 'text-gray-400'}`}>
                                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input Area */}
                                <div className="p-4 bg-white border-t border-gray-100">
                                    <form onSubmit={handleSendMessage} className="flex gap-2 relative">
                                        <div className="flex-1 relative">
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                placeholder="Type your message..."
                                                className="w-full bg-gray-100 text-gray-800 placeholder:text-gray-400 px-4 py-3 pr-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c4a05f]/50 transition-all font-medium"
                                            />
                                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1 text-gray-400">
                                                <button type="button" className="p-1.5 hover:bg-gray-200 rounded-full transition-colors">
                                                    <Mic size={18} />
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={!inputValue.trim()}
                                            className="bg-[#0e2c53] text-white p-3 rounded-xl hover:bg-[#c4a05f] hover:text-[#0e2c53] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Send size={20} />
                                        </button>
                                    </form>
                                    <div className="text-center mt-2">
                                        <p className="text-[10px] text-gray-400">Powered by Windoo</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${isOpen ? 'bg-[#c4a05f]' : 'bg-[#c4a05f]'} text-white rounded-full shadow-2xl flex items-center gap-3 px-6 py-4 transition-colors hover:shadow-[#c4a05f]/20 group`}
            >
                {isOpen ? (
                    <X size={24} className="text-[#0e2c53]" />
                ) : (
                    <>
                        <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
                        <span className="font-bold tracking-wide">Ask Windoo</span>
                    </>
                )}
            </motion.button>
        </div>
    );
}
