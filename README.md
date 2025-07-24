# 🚀 Portfolio Personal - Luciano André Cabrales Lefimil

**Desarrollador Full Stack | Automatización Backend | Integración de APIs**

Un sitio web moderno y optimizado construido con Astro, diseñado para destacar mis habilidades técnicas y experiencia en desarrollo web.

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

> **Nota**: Este proyecto está basado en el **Blog Template oficial de Astro**, adaptado como portfolio personal. Incluye funcionalidad de blog opcional que puedes implementar para compartir artículos técnicos y proyectos.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz elegante con gradientes dinámicos y efectos visuales
- **📱 Totalmente Responsivo**: Optimizado para dispositivos móviles y desktop
- **⚡ Rendimiento Optimizado**: 
  - Imágenes optimizadas con lazy/eager loading
  - Core Web Vitals optimizados
  - Prevención de Cumulative Layout Shift (CLS)
- **🌟 Animaciones Fluidas**: Efectos de entrada progresivos y transiciones suaves
- **♿ Accesible**: Cumple con estándares de accesibilidad web
- **🔍 SEO Optimizado**: Meta tags y estructura semántica
- **📝 Blog Opcional**: Sistema de blog integrado con soporte para Markdown
- **🗂️ Navegación Completa**: Múltiples secciones (Experiencia, Proyectos, Sobre Mí, Contacto)

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Astro** - Framework principal para sitio estático
- **TypeScript** - Tipado estático para JavaScript
- **CSS3** - Estilos personalizados con CSS Grid y Flexbox
- **Astro:assets** - Optimización automática de imágenes
- **Markdown** - Para contenido de blog (opcional)

### Herramientas de Desarrollo
- **Vite** - Build tool y desarrollo
- **Sharp** - Procesamiento de imágenes

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm, yarn o pnpm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Luudeus/Portfolio.git

# Navegar al directorio
cd Portfolio

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:4321
```

### Build para Producción

```bash
# Generar build estático
npm run build

# Previsualizar build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── blog/                     # Assets para posts del blog (opcional)
├── src/
│   ├── assets/
│   │   ├── round_pfp.png        # Foto de perfil
│   │   └── Luciano_Cabrales_CV.pdf
│   ├── components/
│   │   ├── BaseHead.astro       # Meta tags y SEO
│   │   ├── Header.astro         # Navegación principal
│   │   ├── Footer.astro         # Pie de página
│   │   ├── FormattedDate.astro  # Componente de fecha para blog
│   │   └── HeaderLink.astro     # Enlaces de navegación
│   ├── content/
│   │   └── blog/                # Posts del blog (Markdown)
│   │       ├── first-post.md    # Post de ejemplo (opcional)
│   │       └── ...              # Más posts
│   ├── layouts/
│   │   ├── Layout.astro         # Layout base
│   │   └── BlogPost.astro       # Layout para posts de blog
│   ├── pages/
│   │   ├── index.astro          # Página principal (portfolio)
│   │   ├── experiencia.astro    # Página de experiencia laboral
│   │   ├── proyectos.astro      # Página de proyectos
│   │   ├── sobre-mi.astro       # Página sobre mí
│   │   ├── contacto.astro       # Página de contacto
│   │   ├── blog/
│   │   │   ├── index.astro      # Lista de posts (opcional)
│   │   │   └── [...slug].astro  # Páginas dinámicas de blog
│   │   └── rss.xml.js           # Feed RSS (opcional)
│   ├── styles/
│   │   └── global.css           # Estilos globales
│   └── consts.ts                # Constantes del sitio
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── LICENSE
```

## 🎨 Características de Diseño

### Esquema de Colores
- **Primario**: Azul (`#3b82f6`, `#1d4ed8`, `#1e40af`)
- **Texto**: Grises escalables para máxima legibilidad
- **Glassmorphism**: Efectos de cristal con backdrop-filter

### Optimizaciones de Rendimiento

#### Imágenes
```astro
<Image 
  src={ProfilePhoto} 
  alt="Luciano Cabrales - Desarrollador Full Stack"
  loading="eager"    // Para imágenes above-the-fold
  width={200}
  height={200}
  format="webp"
/>
```

#### CSS
- Mobile-first approach
- CSS Grid y Flexbox para layouts eficientes
- Animaciones con `transform` para mejor rendimiento

## 📝 Funcionalidad de Blog (Opcional)

Este portfolio incluye un sistema de blog completo basado en el template oficial de Astro:

### Activar el Blog
1. Descomenta las rutas de blog en `src/pages/blog/`
2. Agrega posts en `src/content/blog/` usando Markdown
3. Actualiza la navegación en `Header.astro`

### Crear un Post
```markdown
---
title: 'Mi primer post técnico'
description: 'Describiendo mi experiencia con...'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

Contenido del post en Markdown...
```

### Features del Blog
- ✅ Collection API de Astro para contenido
- ✅ Feed RSS automático
- ✅ Páginas dinámicas con `[...slug].astro`
- ✅ SEO optimizado para cada post
- ✅ Fechas formateadas automáticamente

## 📑 Secciones del Portfolio

El portfolio incluye las siguientes páginas principales:

### 🏠 **Página Principal** (`index.astro`)
- Hero section con información personal
- Stack tecnológico con badges interactivos
- Enlaces de contacto y descarga de CV
- Llamadas a la acción

### 💼 **Experiencia** (`experiencia.astro`)
- Historial laboral detallado
- Proyectos realizados por empresa
- Tecnologías utilizadas en cada posición
- Logros y responsabilidades

### 🚀 **Proyectos** (`proyectos.astro`)
- Portfolio de proyectos técnicos
- Screenshots y demostraciones
- Tecnologías utilizadas
- Enlaces a código fuente y demos

### 👨‍💻 **Sobre Mí** (`sobre-mi.astro`)
- Historia personal y profesional
- Habilidades y competencias
- Intereses y motivaciones
- Filosofía de desarrollo

### 📞 **Contacto** (`contacto.astro`)
- Formulario de contacto
- Información de contacto directa
- Enlaces a redes sociales
- Disponibilidad y ubicación

### Cambiar Información Personal

Edita el archivo `src/consts.ts`:

```typescript
export const SITE_TITLE = 'Tu Nombre';
export const SITE_DESCRIPTION = 'Tu descripción profesional';
export const TWITTER_HANDLE = '@tutwitter';
export const MY_NAME = 'Tu Nombre';
```

### Modificar Estilos

Los estilos principales están en:
- `src/styles/global.css` - Estilos globales
- Cada componente `.astro` - Estilos específicos

```css
:root {
  --accent-light-dev: 59, 130, 246;
  --accent-dark-dev: 29, 78, 216;
  --accent-gradient-dev: linear-gradient(45deg, white, #3b82f6 30%, #1d4ed8 60%, white);
}
```

### Agregar Nuevas Páginas

1. Crea un nuevo archivo en `src/pages/`
2. Sigue la estructura de las páginas existentes (`experiencia.astro`, `proyectos.astro`, etc.)
3. Actualiza la navegación en `Header.astro`
4. Agrega el enlace correspondiente en el menú principal

## 📊 Optimizaciones SEO

- ✅ Meta descriptions personalizadas
- ✅ Títulos de página descriptivos
- ✅ Alt text en todas las imágenes
- ✅ Estructura semántica HTML5
- ✅ Schema markup personalizado
- ✅ Open Graph tags
- ✅ Feed RSS para blog
- ✅ Sitemap automático

## 🌐 Deployment

### Netlify (Recomendado)

```bash
# Build
npm run build

# Deploy con Netlify CLI
netlify deploy --prod --dir=dist
```

### Vercel

```bash
npm run build
vercel --prod
```

### GitHub Pages

```bash
# Instalar adapter
npm install @astrojs/github-pages

# Configurar astro.config.mjs
export default defineConfig({
  output: 'static',
  adapter: githubPages(),
  site: 'https://Luudeus.github.io',
  base: '/Portfolio',
});
```

## 📈 Performance

### Métricas Objetivo
- **LCP**: < 1.2s
- **FID**: < 100ms  
- **CLS**: < 0.1
- **Performance Score**: 90+

### Optimizaciones Implementadas
- Carga eager para imágenes above-the-fold
- Lazy loading para contenido below-the-fold
- Compresión de imágenes automática (WebP/AVIF)
- CSS crítico inline
- Prefetch de recursos importantes
- Collection API para mejor performance del blog

## 🚀 Stack Técnico Destacado

Este portfolio demuestra experiencia práctica en:

### Backend & APIs
- **Python** (Flask, Jinja2)
- **C#** (.NET)
- **PHP** 
- **API REST** integrations
- **EspoCRM** customization
- **SQL Server** database management

### Frontend & Frameworks
- **JavaScript/TypeScript** 
- **Astro** (este proyecto)
- **Responsive Web Design**
- **CSS Grid & Flexbox**

### DevOps & Tools
- **Azure DevOps** 
- **AWS S3** 
- **Selenium** automation
- **Web Scraping** 
- **OCR** processing

## 🎯 Basado en Astro Blog Template

Este proyecto extiende el [Blog Template oficial de Astro](https://github.com/withastro/astro/tree/main/examples/blog) con:

- ✨ **Portfolio Landing Page**: Página principal personalizada
- 🎨 **Diseño Moderno**: Gradientes y animaciones personalizadas
- ⚡ **Optimizaciones de Performance**: Mejoras específicas para portfolio
- 📱 **Responsive Design**: Adaptado para mostrar proyectos y habilidades
- 🔧 **Componentes Reutilizables**: Sistema de componentes escalable

### Mantener el Blog (Opcional)
Si deseas agregar un blog técnico:
1. Descomenta las páginas en `src/pages/blog/`
2. Agrega contenido en `src/content/blog/`
3. Personaliza el layout en `src/layouts/BlogPost.astro`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Luciano André Cabrales Lefimil**
- 📧 Email: [lacabrales@gmail.com](mailto:lacabrales@gmail.com)
- 📱 WhatsApp: [+56 9 9791 3908](https://wa.me/56997913908)
- 💼 LinkedIn: [luciano-cabrales-lefimil](https://www.linkedin.com/in/luciano-cabrales-lefimil-58736427a/)
- 🌍 Ubicación: La Serena, Coquimbo Region, Chile

---

⭐ Si este proyecto te resultó útil, ¡no olvides darle una estrella!

## 🔄 Changelog

### v1.0.0 (2024)
- ✨ Lanzamiento inicial del portfolio basado en Astro Blog Template
- 🎨 Diseño responsivo completo con gradientes modernos
- ⚡ Optimizaciones de rendimiento y Core Web Vitals
- 📱 Soporte móvil completo con breakpoints optimizados
- 🔍 SEO optimizado con meta tags personalizados
- 📄 CV descargable integrado
- 🌟 Animaciones de entrada progresivas
- 📝 Sistema de blog opcional para contenido técnico