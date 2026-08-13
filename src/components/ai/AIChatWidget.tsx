"use client";

import React, { useState } from "react";
import ChatBox from "@/components/ai/ChatBox";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && <ChatBox onClose={() => setIsOpen(false)} />}

      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          aria-label="Open Chat"
          className="w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
}
