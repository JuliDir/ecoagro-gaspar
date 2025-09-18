"use client";

import { useState, useEffect } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenWelcomePopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenWelcomePopup", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={cn(
        "bg-white rounded-lg shadow-2xl max-w-md w-full mx-auto",
        "transform transition-all duration-300 scale-100 opacity-100",
        "border border-green-100"
      )}>
        <div className="relative p-6">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>

          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Bienvenidos
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nuestra página se encuentra en actualización. Si hay algo que no encuentres puedes dejarnos tu mensaje.
            </p>
            <Button
              onClick={handleClose}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
            >
              Entendido
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}