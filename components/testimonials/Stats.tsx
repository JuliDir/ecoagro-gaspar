"use client";

import { easeOut, motion } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';

type StatId = 'clients' | 'projects' | 'satisfaction' | 'experience';

interface Stat {
    id: StatId;
    finalValue: number;
    label: string;
    suffix: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
}

const stats: Stat[] = [
    {
        id: 'clients',
        finalValue: 500,
        label: 'Clientes Satisfechos',
        suffix: '+',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        color: 'text-primary',
        bgColor: 'bg-primary/5'
    },
    {
        id: 'satisfaction',
        finalValue: 100,
        label: 'Satisfacción del Cliente',
        suffix: '%',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
        color: 'text-primary',
        bgColor: 'bg-primary/5'
    },
    {
        id: 'experience',
        finalValue: 60,
        label: 'Años de actividad',
        suffix: '+',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: 'text-primary',
        bgColor: 'bg-primary/5'
    }
]

export default function Stats() {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState<Record<StatId, number>>({
        clients: 0,
        projects: 0,
        satisfaction: 0,
        experience: 0
    });
    const sectionRef = useRef<HTMLElement>(null);

    const animateCounter = useCallback((statId: string, finalValue: number, duration = 2000) => {
        const startTime = Date.now();
        const startValue = 0;

        const updateCounter = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(startValue + (finalValue - startValue) * easeOutQuart);

            setCounters(prev => ({
                ...prev,
                [statId]: currentValue
            }));

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    stats.forEach((stat, index) => {
                        setTimeout(() => {
                            animateCounter(stat.id, stat.finalValue, 2500);
                        }, index * 200);
                    });
                }
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -10% 0px'
            }
        );

        // Store the current ref value to avoid stale closure
        const currentSectionRef = sectionRef.current;

        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, [isVisible, animateCounter]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: easeOut
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="pb-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Stats Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={cardVariants}
                            className="relative group"
                        >
                            {/* Card */}
                            <div className={`relative bg-white ${stat.bgColor} border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 transform overflow-hidden`}>

                                {/* Icon */}
                                <div className="relative z-10 mb-6">
                                    <div className={`${stat.color} inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10`}>
                                        {stat.icon}
                                    </div>
                                </div>

                                {/* Counter */}
                                <div className="relative z-10 mb-4">
                                    <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                                        {counters[stat.id]}{stat.suffix}
                                    </div>
                                </div>

                                {/* Label */}
                                <div className="relative z-10">
                                    <p className="text-gray-600 font-medium text-base leading-tight">
                                        {stat.label}
                                    </p>
                                </div>

                                {/* Subtle border accent */}
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-600/60"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
                .text-primary {
                    color: var(--color-primary, #2563eb);
                }
                
                .bg-primary\/5 {
                    background-color: color-mix(in srgb, var(--color-primary, #2563eb) 5%, transparent);
                }
                
                .bg-primary\/10 {
                    background-color: color-mix(in srgb, var(--color-primary, #2563eb) 10%, transparent);
                }
                
                .bg-primary\/20 {
                    background-color: color-mix(in srgb, var(--color-primary, #2563eb) 20%, transparent);
                }
                
                .bg-primary\/40 {
                    background-color: color-mix(in srgb, var(--color-primary, #2563eb) 40%, transparent);
                }
                
                .from-primary\/20 {
                    --tw-gradient-from: color-mix(in srgb, var(--color-primary, #2563eb) 20%, transparent);
                }
                
                .to-primary\/40 {
                    --tw-gradient-to: color-mix(in srgb, var(--color-primary, #2563eb) 40%, transparent);
                }
            `}</style>
        </section>
    );
}