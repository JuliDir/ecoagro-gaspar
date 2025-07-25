"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const PageLoader = () => {
  const [showLoader, setShowLoader] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const fadeOutDuration = 500
  const displayDuration = 2000

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("page-loader-shown")

    if (!alreadyShown) {
      setShowLoader(true)
      sessionStorage.setItem("page-loader-shown", "true")

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
    } else {
      setHasAnimated(true)
    }
  }, [])

  if (hasAnimated) return null

  return (
    <AnimatePresence>
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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white px-6"
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

          {/* Animación de carga opcional debajo del logo */}
          <motion.div
            className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex space-x-2">
              <motion.div
                className="w-3 h-3 bg-primary-600 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-3 h-3 bg-primary-600 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
              <motion.div
                className="w-3 h-3 bg-primary-600 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader