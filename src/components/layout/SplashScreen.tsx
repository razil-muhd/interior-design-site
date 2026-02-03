"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSplash } from "@/context/SplashContext";

export const SplashScreen = () => {
    const [stage, setStage] = useState<'playing' | 'fading' | 'complete'>('playing');
    const [progress, setProgress] = useState(0);
    const { completeSplash } = useSplash();
    const videoRef = useRef<HTMLVideoElement>(null);
    const hasTriggeredRef = useRef(false);

    const startFading = () => {
        if (!hasTriggeredRef.current) {
            hasTriggeredRef.current = true;
            console.log("Video ended, starting fade out...");
            setStage('fading');
        }
    };

    const handleFadeComplete = () => {
        console.log("Fade complete, showing page");
        setStage('complete');
        completeSplash();
        document.body.style.overflow = "";
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const video = videoRef.current;
        if (!video) {
            console.log("No video element, skipping to complete");
            setTimeout(() => {
                setStage('complete');
                completeSplash();
                document.body.style.overflow = "";
            }, 500);
            return;
        }

        let isPlaying = false;

        // Handler for when video ends naturally
        const handleVideoEnded = () => {
            console.log("Video playback ended");
            setProgress(100);
            startFading();
        };

        // Handler to update progress bar
        const handleTimeUpdate = () => {
            if (video.duration) {
                const percentage = (video.currentTime / video.duration) * 100;
                setProgress(percentage);
                isPlaying = true;
            }
        };

        // Handler for when video metadata is loaded
        const handleLoadedMetadata = () => {
            console.log(`Video duration: ${video.duration}s - will play full video`);
        };

        // Handler when video can play through without buffering
        const handleCanPlayThrough = () => {
            console.log("Video ready to play");
        };

        // Attempt to play
        const attemptPlay = async () => {
            try {
                video.addEventListener('loadedmetadata', handleLoadedMetadata);
                video.addEventListener('canplaythrough', handleCanPlayThrough);
                video.addEventListener('ended', handleVideoEnded);
                video.addEventListener('timeupdate', handleTimeUpdate);

                video.playbackRate = 2;
                await video.play();
                console.log("Video started playing");
                isPlaying = true;
            } catch (error) {
                console.error("Autoplay failed:", error);
                // Immediate fallback if video fails to play
                setTimeout(() => {
                    console.log("Video failed, fading out immediately");
                    startFading();
                }, 500);
            }
        };

        attemptPlay();

        // Reduced safety timer - if video hasn't started or ended after 6s, force fade
        const safetyTimer = setTimeout(() => {
            if (!hasTriggeredRef.current) {
                console.log("Safety timer: forcing fade after 6s");
                startFading();
            }
        }, 6000); // Reduced from 10s to 6s

        return () => {
            clearTimeout(safetyTimer);
            if (video) {
                video.removeEventListener('ended', handleVideoEnded);
                video.removeEventListener('timeupdate', handleTimeUpdate);
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
                video.removeEventListener('canplaythrough', handleCanPlayThrough);
            }
            document.body.style.overflow = "";
        };
    }, []);

    if (stage === 'complete') {
        console.log("Splash screen removed from DOM");
        return null;
    }

    return (
        <motion.div
            className="fixed inset-0 z-[10000] bg-white overflow-hidden select-none touch-none flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={stage === 'fading' ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onAnimationComplete={() => {
                if (stage === 'fading') {
                    handleFadeComplete();
                }
            }}
        >
            {/* Video Container */}
            <div className="relative w-full max-w-4xl aspect-video flex items-center justify-center p-4">
                <video
                    ref={videoRef}
                    src="/splash.mp4"
                    muted
                    autoPlay
                    playsInline
                    preload="auto"
                    className="w-full h-full object-contain"
                    style={{ mixBlendMode: "multiply" }}
                />
            </div>

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200/30">
                <motion.div
                    className="h-full bg-gradient-to-r from-[#c4a05f] to-[#d4b06f]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                />
            </div>
        </motion.div>
    );
};
