"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SplashContextType {
    isSplashComplete: boolean;
    completeSplash: () => void;
}

const SplashContext = createContext<SplashContextType>({
    isSplashComplete: false,
    completeSplash: () => { },
});

export const useSplash = () => useContext(SplashContext);

export const SplashProvider = ({ children }: { children: React.ReactNode }) => {
    const [isSplashComplete, setIsSplashComplete] = useState(false);

    // We can use a ref or effect to check if we've already shown it this session if desired
    // For now, let's reset it on every hard refresh as per typical splash behavior, 
    // or checking session storage if the user wants it once per session. 
    // The user didn't specify, so "every refresh" is standard for "before come to page".

    const completeSplash = () => setIsSplashComplete(true);

    return (
        <SplashContext.Provider value={{ isSplashComplete, completeSplash }}>
            {children}
        </SplashContext.Provider>
    );
};
