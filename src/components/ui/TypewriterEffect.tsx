"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName = "bg-blue-500",
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            const fullText = words[currentWordIndex].text;

            setCurrentText((prev) =>
                isDeleting
                    ? fullText.substring(0, prev.length - 1)
                    : fullText.substring(0, prev.length + 1)
            );

            // Typing Speed Logic
            let speed = 150;
            if (isDeleting) speed = 50; // Faster deleting

            if (!isDeleting && currentText === fullText) {
                // Finished typing word, pause before deleting
                speed = 2000;
                setIsDeleting(true);
            } else if (isDeleting && currentText === "") {
                // Finished deleting, move to next word
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                speed = 500;
            }

            setTypingSpeed(speed);
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

    return (
        <div className={className}>
            <motion.span>{currentText}</motion.span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className={`inline-block h-[1em] w-[4px] ml-1 align-middle ${cursorClassName}`}
            />
        </div>
    );
};
