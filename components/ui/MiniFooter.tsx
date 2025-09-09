"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function MiniFooter() {
    return (
        <div className="w-full bg-gray-50 border-t border-gray-200">
            <div className="mx-auto px-4 sm:px-6 lg:px-36 py-3">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
                    {/* Logo pequeño */}
                    <div className="flex items-center">
                        <Image
                            src="/images/logo-leaf.png"
                            alt="Ecoagro Gaspar"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </div>
                    
                    {/* Crédito a Julian */}
                    <div className="text-xs text-gray-500">
                        <span>Creado por </span>
                        <Link
                            href="https://www.linkedin.com/in/julian-di-rocco/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                        >
                            Julian di rocco
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}