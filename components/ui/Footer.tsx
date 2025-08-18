"use client";

import { Phone, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    // Función para abrir Google Maps
    const openGoogleMaps = () => {
        // Coordenadas de Ecoagro Gaspar
        const latitude = -32.85;
        const longitude = -68.8;
        
        // URL para abrir en Google Maps
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        
        // Abrir en una nueva pestaña
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <footer className="w-full py-10 bg-white text-gray-800">
            <div className="w-full py-4 mx-auto px-4 sm:px-6 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Logo y descripción */}
                    <div className="space-y-4 mt-2.5">
                        <Image
                            src="/images/logo.png"
                            alt="Ecoagro Gaspar"
                            width={170}
                            height={100}
                        />
                        <p className="text-gray-600 text-sm max-w-sm">
                            Soluciones agrícolas especializadas para el cuidado y protección de cultivos.
                        </p>
                    </div>

                    {/* Información de contacto */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary-600">Contacto</h3>
                        <div className="space-y-3 text-sm text-gray-600">
                            <div className="flex items-start space-x-2">
                                <Clock className="w-4 h-4 mt-0.5 text-primary-600 flex-shrink-0" />
                                <div>
                                    <h4 className="text-gray-800 font-medium mb-1">Horario de atención</h4>
                                    <p>Lunes a Viernes de 8:30 a 16:30 hs</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2">
                                <Phone className="w-4 h-4 mt-0.5 text-primary-600 flex-shrink-0" />
                                <div>
                                    <h4 className="text-gray-800 font-medium mb-1">Teléfono</h4>
                                    <a
                                        href="tel:+542613990081"
                                        className="hover:text-primary-600 transition-colors"
                                    >
                                        +54 9 261 399 0081
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 mt-0.5 text-primary-600 flex-shrink-0" />
                                <div>
                                    <h4 className="text-gray-800 font-medium mb-1">Dirección</h4>
                                    <p>PARQUE INDUSTRIAL LAS HERAS<br />
                                        Calle 12 eje Norte RT Lote 4<br />
                                        Las Heras, Mendoza, Argentina
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mapa */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary-600">Visítanos</h3>
                        <div 
                            className="relative w-full h-48 rounded-lg overflow-hidden cursor-pointer group shadow-md"
                            onClick={openGoogleMaps}
                            title="Click para abrir en Google Maps"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.8!2d-68.8!3d-32.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDUxJzAwLjAiUyA2OMKwNDgnMDAuMCJX!5e0!3m2!1sen!2sar!4v1672934123456!5m2!1sen!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0, pointerEvents: 'none' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Ecoagro Gaspar"
                                className="rounded-lg"
                            />

                            {/* Overlay clickeable */}
                            <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-300" />

                            {/* Overlay con información */}
                            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                <h4 className="font-semibold text-gray-800 text-sm">Ecoagro Gaspar</h4>
                                <p className="text-gray-600 text-xs">Las Heras, Mendoza</p>
                                <p className="text-primary-600 text-xs mt-1 font-medium">
                                    Click para abrir en Maps
                                </p>
                            </div>

                            {/* Indicador de click */}
                            <div className="absolute top-3 right-3 bg-primary-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg 
                                    className="w-4 h-4" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria y créditos */}
                <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-500">
                    <p>
                        © {new Date().getFullYear()} Ecoagro Gaspar. Todos los derechos reservados.
                    </p>
                    <p className="mt-2">
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