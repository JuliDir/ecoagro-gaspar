import Link from 'next/link';
import Image from 'next/image';

export default function Crops() {
  const crops = [
    {
      name: "Soja",
      description:
        "Leguminosa rica en proteínas, ideal para rotación de cultivos. Fija nitrógeno naturalmente y requiere suelos bien drenados.",
      iconFilename: "soy.svg",
      backgroundImage: "/images/crops/soja.jpg",
    },
    {
      name: "Trigo",
      description:
        "Cereal fundamental para la alimentación mundial. Se adapta a diversos climas y suelos, con ciclo de crecimiento invernal.",
      iconFilename: "wheat.svg",
      backgroundImage: "/images/crops/trigo.jpg",
    },
    {
      name: "Papa",
      description:
        "Tubérculo versátil y nutritivo. Requiere suelos sueltos y buen drenaje. Rica en carbohidratos y vitaminas.",
      iconFilename: "potato.svg",
      backgroundImage: "/images/crops/papas.jpg",
    },
    {
      name: "Maíz",
      description:
        "Cereal de alto rendimiento y múltiples usos. Requiere abundante agua y nutrientes durante su desarrollo.",
      iconFilename: "corn.svg",
      backgroundImage: "/images/crops/maiz.jpeg",
    },
    {
      name: "Ajo",
      description:
        "Bulbo aromático con propiedades medicinales. Prefiere climas frescos y suelos bien drenados con materia orgánica.",
      iconFilename: "garlic.svg",
      backgroundImage: "/images/crops/ajo.jpg",
    },
    {
      name: "Ver Otros",
      description:
        "Descubre nuestra amplia gama de cultivos especializados y soluciones nutricionales personalizadas para tu producción.",
      iconFilename: "leaf.svg",
      backgroundImage: "/images/crops/ver-otros.jpeg",
    },
  ];

  return (
    <section className="w-full py-20 bg-white mb-10" id="cultivos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">CULTIVOS</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atendemos las necesidades de tus cultivos y te ofrecemos un plan nutricional
            completo para optimizar la producción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {crops.map((crop, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100 h-64"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${crop.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Default state - Icon only */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <Image
                  src={`/icons/${crop.iconFilename}`}
                  alt={`${crop.name} icon`}
                  width={80}
                  height={80}
                  className="brightness-0 invert"
                />
              </div>

              {/* Hover Overlay with Content */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center text-white">
                  <h4 className="text-2xl font-bold mb-3">{crop.name}</h4>
                  <p className="text-sm leading-relaxed mb-4">{crop.description}</p>
                  <Link
                    href={`/cultivos/${crop.name}`}
                    className="relative z-20 inline-block bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 text-sm"
                  >
                    Conocer Más
                  </Link>
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-dark-gray opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
