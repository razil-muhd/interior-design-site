"use client";
import React, { useEffect, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 15 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
        return unsubscribe;
    }, [springValue]);

    return (
        <span ref={ref} className="text-4xl lg:text-5xl font-extrabold text-[#0e2c53]">
            {displayValue}{suffix}
        </span>
    );
};

const About = () => {
    return (
        <section className="relative z-30 mt-20 lg:mt-12 pb-20">
            <div className="container mx-auto px-4 md:px-0 max-w-6xl">

                <div className="bg-white border-b border-gray-200 p-8 md:p-16 w-full relative overflow-hidden">

                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{ backgroundImage: 'radial-gradient(#0e2c53 1px, transparent 1px)', backgroundSize: '32px 32px' }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">

                        <div className="space-y-8 relative">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl md:text-5xl font-black font-sans text-[#0e2c53] leading-[1.1] uppercase tracking-tight"
                            >
                                Your One-Stop <br />
                                Destination For <br />
                                Premium <span className="text-[#c4a05f]">Interior</span> <br />
                                Solutions
                            </motion.h2>

                            <div className="inline-block border-b-4 border-[#c4a05f] pb-2">
                                <span className="text-sm font-bold tracking-widest text-[#0e2c53] uppercase">
                                    Who We Are
                                </span>
                            </div>
                        </div>

                        {/* Right Column: Content & Stats */}
                        <div className="space-y-10 pt-2">
                            <div className="text-gray-500 text-base md:text-[1.05rem] leading-relaxed text-justify font-medium">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="mb-6"
                                    id="mission"
                                >
                                    Cyash Contracting is one of the leading interior service providers in Saudi Arabia, specialized in turn-key Workspace Design and Interior Design Fit-out works. The company has a reputation for sheer dedication to crafting quality interiors.
                                </motion.p>
                                <motion.p
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    id="standards"
                                >
                                    With our skilled professionals having extensive experience in the area and our three decades of success, we set a new standard for our competitors. We help create an ambiance for your business to thrive by finely designing a comfortable and flexible workspace.
                                </motion.p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
                                {/* Stat 1 */}
                                <div className="space-y-1">
                                    <AnimatedCounter value={30} suffix="+" />
                                    <p className="text-[#0e2c53] font-bold text-sm">Years of Success</p>
                                </div>
                                {/* Stat 2 */}
                                <div className="space-y-1">
                                    <AnimatedCounter value={250} suffix="+" />
                                    <p className="text-[#0e2c53] font-bold text-sm">Projects Completed</p>
                                </div>
                                {/* Stat 3 */}
                                <div className="space-y-1">
                                    <AnimatedCounter value={100} suffix="+" />
                                    <p className="text-[#0e2c53] font-bold text-sm">Skilled Experts</p>
                                </div>


                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;