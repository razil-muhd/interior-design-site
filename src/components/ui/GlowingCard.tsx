"use client";

import React from "react";
import Image from "next/image";

// Helper to generate the complex box-shadow string
const generateBoxShadow = () => {
    let shadows = [];
    const gap = 3; // rem
    const coef = -0.3; // rem

    for (let i = 1; i <= 4; i++) {
        // Outer loop shadows
        shadows.push(`${i * gap}rem 0 0 ${i * coef}rem`);
        shadows.push(`${i * -gap}rem 0 0 ${i * coef}rem`);
        shadows.push(`0 ${i * -gap}rem 0 ${i * coef}rem`); // Fixed typo in SCSS logic interpretation if any, but following SCSS closely
        shadows.push(`0 ${i * gap}rem 0 ${i * coef}rem`);

        for (let j = 1; j <= 4; j++) {
            // Inner loop shadows
            shadows.push(`${i * gap}rem ${j * gap}rem 0 ${i * j * 1.5 * coef}rem`);
            shadows.push(`${i * gap}rem ${j * -gap}rem 0 ${i * j * 1.5 * coef}rem`);
            shadows.push(`${i * -gap}rem ${j * gap}rem 0 ${i * j * 1.5 * coef}rem`);
            shadows.push(`${i * -gap}rem ${j * -gap}rem 0 ${i * j * 1.5 * coef}rem`);
        }
    }

    return shadows.join(",");
};

export const GlowingCard = ({ imageSrc }: { imageSrc: string }) => {
    const boxShadowValue = generateBoxShadow();

    return (
        <div className="card w-[30rem] h-[30rem] bg-white rounded-[2rem] shadow-2xl overflow-hidden relative group">
            <div className="card__img relative h-full w-full flex items-center justify-center">
                <div className="relative z-10 w-[20rem] pointer-events-none">
                    <Image
                        src={imageSrc}
                        alt="Furniture"
                        width={300}
                        height={300}
                        className="w-full h-auto object-contain drop-shadow-lg"
                    />
                </div>

                {/* Grid Effect Container */}
                <div className="card__grid-effect absolute inset-0 grid grid-cols-10 grid-rows-10 z-0">
                    {Array.from({ length: 100 }).map((_, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="card__grid-effect-tile relative block"
                        >
                            <span className="dot" />
                        </a>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .card__grid-effect-tile .dot {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 0.3rem;
          width: 0.3rem;
          border-radius: 50%;
          background: #A9C9FF;
          transition: 500ms linear all;
          box-shadow: ${boxShadowValue};
          color: #A9C9FF; /* The SCSS used color for box-shadow inheritance if currentcolor was used, but here we hardcoded it in generated string? No, generated string has no color. */
          /* Wait, SCSS says: box-shadow: $bxs; and $bxs only has lengths. The color comes from 'color' property if 'currentcolor' is used? 
             Actually SCSS snippet: box-shadow: $bxs;
             Default box-shadow color is text color.
             So we set color: #A9C9FF; 
          */
        }

        .card__grid-effect-tile:hover .dot {
           height: 3rem;
           width: 3rem;
           transition: 70ms linear all;
        }
      `}</style>
        </div>
    );
};
