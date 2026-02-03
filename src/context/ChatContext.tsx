"use client";

import React, { createContext, useContext, useState } from "react";

interface ChatContextType {
    isChatOpen: boolean;
    setIsChatOpen: (isOpen: boolean) => void;
}

const ChatContext = createContext<ChatContextType>({
    isChatOpen: false,
    setIsChatOpen: () => { },
});

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <ChatContext.Provider value={{ isChatOpen, setIsChatOpen }}>
            {children}
        </ChatContext.Provider>
    );
};
