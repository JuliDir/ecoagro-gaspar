import { Phone, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full py-10 bg-gray-100 text-gray-800 border-t border-gray-200">
            <div className="w-full py-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Logo y descripción */}
                    <div className="space-y-4 mt-2.5">
                        <Image
                            src="/images/logo.png" 
                            alt="Ecoagro Gaspar" 
                            width={170}
                            height={100}
                        />
                        <p className="text-gray-600 text-sm">
                            Soluciones agrícolas especializadas para el cuidado y protección de cultivos.
                        </p>
                    </div>

                    {/* Productos */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary-600">Productos</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/products/cobrestable" className="hover:text-primary-600 transition-colors">
                                    Cobrestable®
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/bordocald" className="hover:text-primary-600 transition-colors">
                                    Bordocald®
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/trikopper-50" className="hover:text-primary-600 transition-colors">
                                    Trikopper 50®
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Cultivos */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary-600">Cultivos</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/crops/soja" className="hover:text-primary-600 transition-colors">
                                    Soja
                                </Link>
                            </li>
                            <li>
                                <Link href="/crops/papa" className="hover:text-primary-600 transition-colors">
                                    Papa
                                </Link>
                            </li>
                            <li>
                                <Link href="/crops/vid" className="hover:text-primary-600 transition-colors">
                                    Vid
                                </Link>
                            </li>
                            <li>
                                <Link href="/crops/garbanzo" className="hover:text-primary-600 transition-colors">
                                    Garbanzo
                                </Link>
                            </li>
                            <li>
                                <Link href="/crops/limon" className="hover:text-primary-600 transition-colors">
                                    Limón
                                </Link>
                            </li>
                            <li>
                                <Link href="/crops" className="hover:text-primary-600 transition-colors">
                                    Ver otros
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Nosotros */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary-600">Nosotros</h3>
                        <div className="text-sm">
                            <Link href="/about-us" className="text-gray-600 hover:text-primary-600 transition-colors">
                                ¿Quiénes somos?
                            </Link>
                        </div>
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