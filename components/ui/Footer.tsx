import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full py-10 bg-dark-gray text-white">
            <div className="w-full px-4 py-4 md:px-8 lg:px-60">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo y descripción */}
                    <div className="space-y-4 mt-2.5">
                        <img
                            src="/images/logo.png" 
                            alt="Ecoagro Gaspar" 
                            className="h-12 w-auto"
                        />
                        <p className="text-gray-300 text-sm">
                            Soluciones agrícolas especializadas para el cuidado y protección de cultivos.
                        </p>
                    </div>

                    {/* Productos */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary-500">Productos</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <a href="/productos/cobrestable" className="hover:text-primary-500 transition-colors">
                                    Cobrestable
                                </a>
                            </li>
                            <li>
                                <a href="/productos/bordocold" className="hover:text-primary-500 transition-colors">
                                    Bordocold
                                </a>
                            </li>
                            <li>
                                <a href="/productos/trikopper-50" className="hover:text-primary-500 transition-colors">
                                    Trikopper 50
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Nosotros */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary-500">Nosotros</h3>
                        <div className="text-sm">
                            <a href="/nosotros" className="text-gray-300 hover:text-primary-500 transition-colors">
                                ¿Quiénes somos?
                            </a>
                        </div>
                    </div>

                    {/* Información de contacto */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary-500">Contacto</h3>
                        <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex items-start space-x-2">
                                <Clock className="w-4 h-4 mt-0.5 text-primary-500 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-medium mb-1">Horario de Atención de Administración</h4>
                                    <p>Lunes a Viernes de 8:30 a 14:00 hs</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2">
                                <Phone className="w-4 h-4 mt-0.5 text-primary-500 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-medium mb-1">Teléfono</h4>
                                    <p>+54 9 261 399 0081</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 mt-0.5 text-primary-500 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-medium mb-1">Dirección</h4>
                                    <p>Aristóbulo del Valle 465 - Of. 3<br />
                                       Ciudad Capital, Mendoza, Argentina<br />
                                       CP 5500
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria y créditos */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
                    <p>
                        © {new Date().getFullYear()} Ecoagro Gaspar. Todos los derechos reservados.
                    </p>
                    <p className="mt-2">
                        Desarrollado por{' '}
                        <a 
                            href="https://www.linkedin.com/in/julian-di-rocco/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-primary-500 transition-colors"
                        >
                            Ing. Julián Di Rocco
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}