export default function RootSeparator() {
  return (
    <div className="relative w-full h-32 md:h-40 overflow-hidden bg-white">
      <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none" fill="none">
        {/* Raíz principal - verde claro */}
        <path
          d="M0,100 Q200,80 400,120 Q600,160 800,100 Q1000,40 1200,80"
          stroke="#7cb342"
          strokeWidth="8"
          fill="none"
          className="opacity-90"
        />

        {/* Raíz secundaria entrelazada - verde medio */}
        <path
          d="M0,120 Q150,60 350,140 Q550,180 750,120 Q950,60 1200,100"
          stroke="#4a7c59"
          strokeWidth="6"
          fill="none"
          className="opacity-85"
        />

        {/* Raíz terciaria - verde oscuro */}
        <path
          d="M0,80 Q250,140 450,80 Q650,20 850,100 Q1050,160 1200,120"
          stroke="#164A37"
          strokeWidth="10"
          fill="none"
          className="opacity-95"
        />

        {/* Raíces más finas entrelazadas */}
        <path
          d="M100,90 Q300,150 500,70 Q700,30 900,110 Q1100,170 1200,90"
          stroke="#7cb342"
          strokeWidth="4"
          fill="none"
          className="opacity-70"
        />

        <path
          d="M0,140 Q200,100 400,160 Q600,200 800,140 Q1000,80 1200,140"
          stroke="#4a7c59"
          strokeWidth="5"
          fill="none"
          className="opacity-75"
        />

        {/* Raíces adicionales para mayor densidad */}
        <path
          d="M50,110 Q250,70 450,130 Q650,170 850,90 Q1050,50 1200,110"
          stroke="#164A37"
          strokeWidth="3"
          fill="none"
          className="opacity-60"
        />

        <path
          d="M0,60 Q180,120 380,80 Q580,40 780,120 Q980,180 1200,60"
          stroke="#7cb342"
          strokeWidth="7"
          fill="none"
          className="opacity-80"
        />
      </svg>
    </div>
  )
}
