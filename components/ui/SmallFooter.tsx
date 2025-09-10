"use client";

import Image from 'next/image';

export default function SmallFooter() {
    return (
        <footer className="w-full py-2 bg-white border-t border-gray-200">
            <div className="mx-auto px-4 sm:px-6 lg:px-36">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="relative h-10 w-28">
                        <Image
                            src="/images/logo.png"
                            alt="Ecoagro Gaspar"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Diseñado por */}
                    <p className="text-sm text-gray-500">
                        Desarrollado por{' '}
                        <a
                            href="https://www.linkedin.com/in/julian-di-rocco/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            Ing. Julián Di Rocco
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}