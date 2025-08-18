export default function Separator() {
    return (
        <div className="relative w-full bg-white">
            {/* Ondas superiores */}
            <div className="w-full overflow-hidden">
                <svg className="w-full h-24 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
                    {/* Primera fila de ondas - verde claro */}
                    <path
                        d="M0,60 Q150,45 300,50 T600,65 Q750,70 900,55 T1200,60 L1200,120 L0,120 Z"
                        fill="#7cb342"
                        className="opacity-90"
                    />
                    {/* Segunda fila de ondas - verde medio */}
                    <path
                        d="M0,75 Q100,60 200,65 Q350,70 500,75 Q650,80 800,70 Q950,60 1200,75 L1200,120 L0,120 Z"
                        fill="#4a7c59"
                        className="opacity-80"
                    />
                    {/* Tercera fila de ondas - verde oscuro */}
                    <path
                        d="M0,90 Q75,80 150,85 Q300,90 450,95 Q600,100 750,90 Q900,80 1200,90 L1200,120 L0,120 Z"
                        fill="#164A37"
                    />
                </svg>
            </div>

            {/* Ondas inferiores - inmediatamente debajo */}
            <div className="w-full overflow-hidden">
                <svg className="w-full h-24 md:h-32 rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
                    {/* Primera fila de ondas - verde claro */}
                    <path
                        d="M0,60 Q150,45 300,50 T600,65 Q750,70 900,55 T1200,60 L1200,120 L0,120 Z"
                        fill="#7cb342"
                        className="opacity-90"
                    />
                    {/* Segunda fila de ondas - verde medio */}
                    <path
                        d="M0,75 Q100,60 200,65 Q350,70 500,75 Q650,80 800,70 Q950,60 1200,75 L1200,120 L0,120 Z"
                        fill="#4a7c59"
                        className="opacity-100"
                    />
                    {/* Tercera fila de ondas - verde oscuro */}
                    <path
                        d="M0,90 Q75,80 150,85 Q300,90 450,95 Q600,100 750,90 Q900,80 1200,90 L1200,120 L0,120 Z"
                        fill="#164A37"
                    />
                </svg>
            </div>
        </div>
    )
}