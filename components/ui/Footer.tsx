"use client";

import { Phone, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full py-10 bg-white text-gray-800">
            <div className="w-full py-4 mx-auto px-4 sm:px-6 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600">
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
                            <div className="flex items-start space-x-2 sm:col-span-2 lg:col-span-1">
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