"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const PageLoader = () => {
  const [showLoader, setShowLoader] = useState(true)
  const [hasAnimated, setHasAnimated] = useState(false)
  const fadeOutDuration = 500
  const displayDuration = 2000

  useEffect(() => {
    setShowLoader(true)
    setHasAnimated(false) 

    const timer = setTimeout(() => {
      setShowLoader(false) 
    }, displayDuration)

    const markAnimatedTimer = setTimeout(() => {
      setHasAnimated(true)
    }, displayDuration + fadeOutDuration)

    return () => {
      clearTimeout(timer)
      clearTimeout(markAnimatedTimer)
    }
  }, []) 

  if (hasAnimated) {
    return null
  }

  return (
    <AnimatePresence onExitComplete={() => setHasAnimated(true)}>
      {showLoader && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ 
            opacity: 0, 
            transition: { 
              duration: fadeOutDuration / 1000, 
              ease: "easeOut" 
            } 
          }} 
          transition={{ duration: 0.3, ease: "easeOut" }} 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a1c1e]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 0.8,
              transition: { 
                duration: fadeOutDuration / 1000, 
                ease: "easeOut" 
              }
            }}
            transition={{ duration: 0.4, ease: "easeOut" }} 
            className="relative w-102 h-102" 
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
              fill
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader