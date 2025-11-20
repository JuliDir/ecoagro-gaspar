# EcoAgroGaspar

Sitio web institucional de EcoAgroGaspar, empresa dedicada a productos agroquímicos y soluciones para el agro. El sitio presenta el catálogo de productos, información de cultivos, testimonios de clientes y recursos útiles para el sector agrícola.

## Tecnologías

- **Next.js 15** - Framework React con App Router
- **React 19** - Biblioteca de interfaces de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **Embla Carousel** - Carruseles
- **Lucide React** - Iconos

## Requisitos Previos

- Node.js 18.x o superior
- npm, yarn, pnpm o bun

## Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd ecoagrogaspar
```

2. Instalar las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

## Ejecución

### Modo Desarrollo

Ejecutar el servidor de desarrollo con hot-reload:

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

### Modo Producción

1. Construir el proyecto:
```bash
npm run build
```

2. Iniciar el servidor de producción:
```bash
npm run start
```

### Otros Comandos

- **Lint**: Ejecutar el linter de código
```bash
npm run lint
```

## Estructura del Proyecto

```
ecoagrogaspar/
├── app/                    # Rutas y páginas (App Router)
│   ├── crops/             # Página de cultivos
│   ├── products/          # Catálogo de productos
│   ├── testimonials/      # Testimonios de clientes
│   └── faqs/              # Preguntas frecuentes
├── components/            # Componentes React reutilizables
├── lib/                   # Utilidades y datos
└── public/                # Archivos estáticos
```
