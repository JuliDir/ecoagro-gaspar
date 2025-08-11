"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";

interface SectionHeroProps {
  title: {
    primary: string;
    secondary: string;
  };
  subtitle: string;
  backgroundDecorations?: {
    showWheat?: boolean;
    showLeaf?: boolean;
    customIcons?: Array<{
      src: string;
      alt: string;
      width: number;
      height: number;
      className: string;
    }>;
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

export default function SectionHero({
  title,
  subtitle,
  backgroundDecorations = { showWheat: true, showLeaf: true }
}: SectionHeroProps) {
  return (
    <motion.section
      className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-28 md:py-32 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full"></div>
        
        {/* Default icons */}
        {backgroundDecorations.showWheat && (
          <Image
            src="/icons/wheat.svg"
            alt=""
            width={120}
            height={120}
            className="absolute top-16 right-16 opacity-10 invert rotate-12"
          />
        )}
        
        {backgroundDecorations.showLeaf && (
          <Image
            src="/icons/leaf.svg"
            alt=""
            width={80}
            height={80}
            className="absolute bottom-20 left-20 opacity-15 invert -rotate-45"
          />
        )}
        
        {/* Additional crop icons */}
        <Image
          src="/icons/corn.svg"
          alt=""
          width={90}
          height={90}
          className="absolute top-32 left-16 opacity-8 invert rotate-6"
        />
        
        <Image
          src="/icons/bean.svg"
          alt=""
          width={70}
          height={70}
          className="absolute bottom-32 right-24 opacity-10 invert -rotate-12"
        />
        
        <Image
          src="/icons/potato.svg"
          alt=""
          width={85}
          height={85}
          className="absolute top-24 left-1/3 opacity-7 invert rotate-25"
        />
        
        <Image
          src="/icons/orange.svg"
          alt=""
          width={75}
          height={75}
          className="absolute bottom-10 right-1/3 opacity-9 invert -rotate-30"
        />
        
        {/* Custom icons */}
        {backgroundDecorations.customIcons?.map((icon, index) => (
          <Image
            key={index}
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
            className={icon.className}
          />
        ))}
      </div>

      <div className="relative pt-20 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={sectionVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 font-avenir-cyr-heavy"
            variants={sectionVariants}
          >
            <span className="text-white">{title.primary}</span>{" "}
            <span className="text-primary-200">{title.secondary}</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            variants={sectionVariants}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}