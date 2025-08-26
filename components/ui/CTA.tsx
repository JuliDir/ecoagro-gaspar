"use client";

import Image from "next/image";

export default function CTA() {
    const handleContactClick = () => {
        const contactSection = document.getElementById("contacto");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="w-full bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>

            {/* Wheat decorative elements */}
            <Image
                src="/icons/wheat.svg"
                alt=""
                width={120}
                height={120}
                className="absolute top-8 left-8 opacity-10 invert rotate-12 hidden md:block"
            />
            <Image
                src="/icons/wheat.svg"
                alt=""
                width={80}
                height={80}
                className="absolute bottom-12 right-16 opacity-15 invert -rotate-45 hidden lg:block"
            />
            <Image
                src="/icons/wheat.svg"
                alt=""
                width={60}
                height={60}
                className="absolute top-1/2 left-16 opacity-8 invert rotate-45 hidden xl:block"
            />
            <Image
                src="/icons/wheat.svg"
                alt=""
                width={70}
                height={70}
                className="absolute top-16 right-1/3 opacity-10 invert rotate-90 hidden md:block"
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex gap-8 items-center justify-between flex-col lg:flex-row">
                    {/* Left side - Text content */}
                    <div className="text-left max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            ¿Listo para optimizar tus cultivos?
                        </h2>
                        <p className="text-base md:text-lg opacity-90 leading-relaxed">
                            Contáctanos hoy mismo y descubre cómo podemos ayudarte a
                            <strong className="font-semibold"> mejorar la salud y productividad</strong> de tus plantas.
                        </p>
                    </div>

                    {/* Right side - CTA and trust element */}
                    <div className="flex flex-col gap-4 items-center text-left lg:text-right">
                        <button
                            onClick={handleContactClick}
                            className="group inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-4 py-2 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-primary-600 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30 cursor-pointer"
                        >
                            Contáctanos
                            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>

                        <div className="flex items-center text-sm opacity-75">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Respuesta rápida garantizada
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}