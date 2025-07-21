'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const WhatsappButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const phoneNumber = '5492613990081';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-16 opacity-0 scale-75'
      }`}
    >
      <button
        onClick={handleClick}
        className="cursor-pointer relative w-16 h-16 bg-green-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Efecto de ondas */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-10 animation-delay-200"></div>
        
        {/* Icono de WhatsApp */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/icons/whatsapp.svg"
            alt="WhatsApp"
            width={32}
            height={32}
            className="brightness-0 invert group-hover:scale-110 transition-transform duration-200"
            priority
          />
        </div>
        
        {/* Tooltip opcional */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          ¡Escríbinos!
        </div>
      </button>
      
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default WhatsappButton;