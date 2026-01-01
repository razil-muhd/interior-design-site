"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Factory, Lightbulb, Users, Zap, Globe, Award, Sparkles } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#0e2c53]">
                    {/* Fallback pattern if image is missing/loading */}
                    <div className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: 'radial-gradient(#c4a05f 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0e2c53]/80 via-[#0e2c53]/50 to-[#0e2c53]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-7xl font-black font-sans text-white mb-6 tracking-tight uppercase">
                            About <span className="text-[#c4a05f]">Us</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-serif italic max-w-3xl mx-auto">
                            "Crafting spaces that inspire success and innovation."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-3xl md:text-5xl font-bold text-[#0e2c53] mb-8 font-sans"
                        >
                            Our Legacy of Excellence
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-lg leading-relaxed text-justify md:text-center"
                        >
                            Cyash Contracting is one of the leading interior service providers in Saudi Arabia, specialized in turn-key Workspace Design and Interior Design Fit-out works. The company has a reputation for sheer dedication to crafting quality interiors. With our skilled professionals having extensive experience in the area and our three decades of success, we set a new standard for our competitors. Our customers are our top priority. Hence, we help create an ambiance for your business to thrive by finely designing a comfortable and flexible workspace. With the inventiveness and diligence of our architects, we redefine the art of crafting Showrooms, Office Kiosks, Exhibition Stands, and Office Ambiance. We thoughtfully plan your workspace interior according to your solace level and personal preferences.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Saudi Vision 2030 Section */}
            <section className="py-24 bg-gradient-to-br from-[#0e2c53] to-[#0a1e3b] relative overflow-hidden text-white">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#c4a05f 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                />

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        {/* Logo & Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:w-1/3 flex justify-center"
                        >
                            <div className="relative w-64 h-40 md:w-80 md:h-52 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/vision_2030.png"
                                    alt="Saudi Vision 2030"
                                    width={300}
                                    height={200}
                                    className="object-contain w-full h-full invert mix-blend-screen rounded-xl"
                                />
                                {/* Add a glow effect */}
                                <div className="absolute -inset-4 bg-[#c4a05f]/20 blur-2xl -z-10 rounded-full" />
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="md:w-2/3"
                        >
                            <h2 className="text-3xl md:text-5xl font-black font-sans mb-8">
                                Aligned with <br />
                                <span className="text-[#c4a05f]">Saudi Vision 2030</span>
                            </h2>
                            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                                <p>
                                    As the Kingdom of Saudi Arabia embarks on a historic transformation under <strong className="text-white">Vision 2030</strong>, Cyash Contracting is proud to be a catalyst in this journey. We are deeply committed to contributing to a vibrant society, a thriving economy, and an ambitious nation.
                                </p>
                                <p>
                                    Our operations align with the vision's goals of <span className="text-[#c4a05f]">economic diversification</span> and <span className="text-[#c4a05f]">sustainable development</span>. By delivering world-class interior fit-out solutions, we are helping to build the infrastructure that supports modern businesses, tourism, and innovation hubs across the Kingdom.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <div className="bg-white/5 border border-[#c4a05f]/30 px-4 py-2 rounded-full text-sm font-bold text-[#c4a05f] flex items-center gap-2">
                                        <Globe size={16} /> Global Standards
                                    </div>
                                    <div className="bg-white/5 border border-[#c4a05f]/30 px-4 py-2 rounded-full text-sm font-bold text-[#c4a05f] flex items-center gap-2">
                                        <Users size={16} /> Local Talent
                                    </div>
                                    <div className="bg-white/5 border border-[#c4a05f]/30 px-4 py-2 rounded-full text-sm font-bold text-[#c4a05f] flex items-center gap-2">
                                        <Factory size={16} /> Sustainable Growth
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Turnkey Solutions */}
            <section className="py-20 bg-[#0e2c53] text-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <Award className="w-12 h-12 text-[#c4a05f] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">Fulfil Your Dreams Space With Turnkey Solutions</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Our expert engineers are very skilled in validating your concept and reading your mind to give a better design. We use our creative minds and thoughts to achieve your objectives considering the dos and don'ts while designing.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Sparkles,
                                title: "End-to-End Execution",
                                text: "We are equipped with end-to-end interior design and execution from your concept validation to final execution that includes the requirements of an organization."
                            },
                            {
                                icon: Users,
                                title: "Client Interaction",
                                text: "Our process makes us different. First, we interact with you for a better understanding of your vision. Our interior design analyst makes the final requirement list depending on your needs."
                            },
                            {
                                icon: Lightbulb,
                                title: "Latest Technology",
                                text: "We use the best technology for designing your space with the latest model interior ideas to visualize it. We mainly consider space utilization with classic design."
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#c4a05f]/50 transition-all hover:-translate-y-2"
                            >
                                <card.icon className="w-10 h-10 text-[#c4a05f] mb-4" />
                                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{card.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fit Out Company */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0e2c53] mb-8 font-sans text-center">Most Promising Fit Out Company</h2>
                        <p className="text-gray-600 text-lg max-w-4xl mx-auto text-center mb-12">
                            We have an expert team of project managers, engineers, and tradesmen to complete your interior project from start to finish. Cyash Contracting has evolved from a small team to the best commercial fit-out company in Saudi Arabia.
                        </p>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-gray-50 p-8 rounded-2xl">
                                <h4 className="flex items-center gap-3 text-xl font-bold text-[#0e2c53] mb-4">
                                    <Factory className="text-[#c4a05f]" /> Joinery & Manufacturing
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We have a joinery facility in Saudi Arabia to manufacture and refine designs for any of our projects. Our team of in-house construction experts and carpenters use the latest technologies to provide the best quality joinery products to our customers.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl">
                                <h4 className="flex items-center gap-3 text-xl font-bold text-[#0e2c53] mb-4">
                                    <Zap className="text-[#c4a05f]" /> MEP & HVAC Expertise
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We understand the importance of MEP and HVAC to ensure the office is fully functional. Our team of expert engineers handles all technical aspects of each project, allowing us to be one of the few turn-key fit-out contractors in Saudi Arabia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Interior Ideas */}
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
                            Innovative <span className="text-[#c4a05f]">Office Interior</span> Ideas
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Your office interiors should be unique, original, and sustainable. We combine your business goals and brand ideology to deliver an exceptional workspace.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { title: "Use Textures", image: "/office_textures.png" },
                            { title: "Modernize The Space", image: "/office_modern.png" },
                            { title: "Nature Inspired", image: "/office_nature.png" },
                            { title: "Design Oriented", image: "/office_design.png" },
                            { title: "Collaborative", image: "/innovative_office.png" },
                            { title: "Be Transparent", image: "/innovative_office.png" },
                            { title: "General Area Design", image: "/innovative_office.png" },
                            { title: "Color Psychology", image: "/innovative_office.png" },
                            { title: "Wall Murals", image: "/innovative_office.png" },
                            { title: "Sound Quality", image: "/innovative_office.png" },
                            { title: "Natural Ingredients", image: "/innovative_office.png" },
                            { title: "Open Floor Plans", image: "/innovative_office.png" },
                            { title: "Fluid Workspaces", image: "/innovative_office.png" },
                            { title: "Sliding Doors", image: "/innovative_office.png" },
                            { title: "Lounge Areas", image: "/innovative_office.png" },
                            { title: "Quality Conference", image: "/innovative_office.png" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="relative h-48 rounded-xl overflow-hidden group cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
                                    <h4 className="font-bold font-sans text-white text-xl text-center drop-shadow-md group-hover:scale-105 transition-transform">{item.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
