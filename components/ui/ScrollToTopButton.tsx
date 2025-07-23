'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón cuando el usuario haya scrolleado más de 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    setIsClicked(true);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Reset del estado de click después de la animación
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          <motion.button
            onClick={scrollToTop}
            className="group relative w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-colors flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={isClicked ? { scale: [1, 1.2, 1] } : {}}
            transition={{ 
              scale: { duration: 0.15 }
            }}
            aria-label="Ir arriba"
          >
            <motion.div 
              className="absolute inset-0 rounded-full bg-primary-600 opacity-30"
              initial={{ scale: 0, opacity: 0.3 }}
              whileHover={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              animate={isClicked ? { y: [-2, -6, -2] } : {}}
              transition={{ duration: 0.3 }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap pointer-events-none"
              initial={{ opacity: 0, y: 5 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
            >
              Ir arriba
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800"></div>
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;