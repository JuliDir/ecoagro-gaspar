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

## Deployment en cPanel

Este proyecto está configurado como sitio estático (`output: 'export'`) lo que facilita su deployment en cPanel sin necesidad de un servidor Node.js.

### Requisitos en el Servidor

- Acceso a cPanel con File Manager
- Dominio o subdominio configurado
- Soporte para archivos HTML estáticos (disponible en todos los planes de hosting)

### Pasos para el Deployment

#### 1. Build del Proyecto (Local)

Primero, genera los archivos estáticos en tu máquina local:

```bash
npm run build
```

Este comando creará una carpeta `out/` con todos los archivos estáticos del sitio.

#### 2. Preparar los Archivos

Los archivos para subir están en la carpeta `out/` que contiene:
- `index.html` - Página principal
- `_next/` - Assets optimizados (CSS, JS, imágenes)
- Otras páginas HTML para cada ruta

#### 3. Subir al Servidor vía cPanel

**Opción A: File Manager (Recomendado para usuarios nuevos)**

1. Accede a tu cPanel
2. Abre **File Manager**
3. Navega a la carpeta raíz de tu dominio:
   - Para el dominio principal: `public_html/`
   - Para un subdominio: `public_html/subdominio/`
4. **Elimina o respalda** el contenido existente
5. Sube **todo el contenido** de la carpeta `out/` (no la carpeta `out/` en sí):
   - Selecciona **Upload** en File Manager
   - Arrastra todos los archivos de `out/`
   - Espera a que termine la carga

**Opción B: FTP (Recomendado para proyectos grandes)**

1. Configura un cliente FTP (FileZilla, WinSCP, etc.)
2. Conecta usando las credenciales de tu cPanel:
   - Host: `ftp.tudominio.com`
   - Usuario: Tu usuario de cPanel
   - Puerto: 21 (o 22 para SFTP)
3. Navega a `public_html/` (o tu directorio)
4. Sube todo el contenido de `out/`

**Opción C: Terminal SSH (Si tienes acceso SSH)**

```bash
# Comprimir localmente
cd out
tar -czf sitio.tar.gz *

# En el servidor (vía SSH)
cd public_html
tar -xzf sitio.tar.gz
rm sitio.tar.gz
```

#### 4. Configurar el Dominio

Si usas un subdominio o dominio adicional:

1. En cPanel, ve a **Domains** o **Subdomains**
2. Crea/verifica que el dominio apunte a la carpeta correcta
3. Ejemplo: `subdominio.tudominio.com` → `public_html/subdominio/`

#### 5. Configurar .htaccess (Opcional pero Recomendado)

Crea un archivo `.htaccess` en la raíz con las siguientes reglas:

```apache
# Habilitar compresión
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache para assets estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Redirigir HTTP a HTTPS (si tienes SSL)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Seguridad básica
<FilesMatch "\.(env|json|config\.js|md)$">
  Order allow,deny
  Deny from all
</FilesMatch>
```

#### 6. Verificar el Sitio

1. Accede a tu dominio en el navegador
2. Verifica que todas las páginas carguen correctamente
3. Comprueba la consola del navegador para errores
4. Prueba la navegación entre páginas

### Actualizaciones Futuras

Para actualizar el sitio:

1. Realiza cambios en tu código local
2. Ejecuta `npm run build`
3. Sube **solo los archivos modificados** de `out/` o reemplaza todo el contenido
4. La caché del navegador puede requerir una recarga forzada (Ctrl+F5)

### Troubleshooting

**Problema: Páginas muestran 404**
- Verifica que todos los archivos de `out/` se hayan subido
- Asegúrate de no haber subido la carpeta `out/` en sí, solo su contenido

**Problema: Assets no cargan (CSS/JS)**
- Revisa que la carpeta `_next/` esté en la raíz correcta
- Verifica los permisos de archivos (644 para archivos, 755 para carpetas)

**Problema: Imágenes no se ven**
- Las imágenes de Unsplash requieren conexión a internet
- Verifica que las imágenes locales estén en la carpeta correcta

**Problema: Errores de permisos**
- En File Manager, selecciona todos los archivos → Change Permissions
- Archivos: 644, Carpetas: 755

### Notas Importantes

- Este sitio es **100% estático**, no requiere Node.js en el servidor
- No necesitas configurar variables de entorno en producción
- El sitio se reconstruye completamente con cada `npm run build`
- Los cambios requieren rebuild y re-upload, no hay hot-reload en producción
