# 🚀 Portfolio Personal - Luciano André Cabrales Lefimil

**Desarrollador Full Stack | Automatización Backend | Integración de APIs**

Un sitio web moderno y optimizado construido con Astro, diseñado para destacar mis habilidades técnicas y experiencia en desarrollo web.

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

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

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Astro** - Framework principal para sitio estático
- **TypeScript** - Tipado estático para JavaScript
- **CSS3** - Estilos personalizados con CSS Grid y Flexbox
- **Astro:assets** - Optimización automática de imágenes

### Herramientas de Desarrollo
- **Vite** - Build tool y desarrollo
- **Sharp** - Procesamiento de imágenes
- **ESLint** - Linting de código

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm, yarn o pnpm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/portfolio-luciano-cabrales.git

# Navegar al directorio
cd portfolio-luciano-cabrales

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
│   └── assets/
│       ├── Luciano_Cabrales_CV.pdf
│       └── round_pfp.png
├── src/
│   ├── components/
│   │   ├── BaseHead.astro
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   └── contacto.astro
│   ├── assets/
│   │   ├── round_pfp.png
│   │   └── Luciano_Cabrales_CV.pdf
│   └── consts.ts
├── astro.config.mjs
└── package.json
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

## 🔧 Personalización

### Cambiar Información Personal

Edita el archivo `src/consts.ts`:

```typescript
export const SITE_TITLE = 'Tu Nombre';
export const SITE_DESCRIPTION = 'Tu descripción profesional';
```

### Modificar Estilos

Los estilos principales están en cada componente `.astro`. Las variables CSS globales se encuentran en:

```css
:root {
  --accent-light-dev: 59, 130, 246;
  --accent-dark-dev: 29, 78, 216;
  --accent-gradient-dev: linear-gradient(45deg, white, #3b82f6 30%, #1d4ed8 60%, white);
}
```

### Agregar Nuevas Páginas

1. Crea un nuevo archivo en `src/pages/`
2. Sigue la estructura de `index.astro`
3. Actualiza la navegación en `Header.astro`

## 📊 Optimizaciones SEO

- ✅ Meta descriptions personalizadas
- ✅ Títulos de página descriptivos
- ✅ Alt text en todas las imágenes
- ✅ Estructura semántica HTML5
- ✅ Schema markup (JSON-LD)
- ✅ Sitemap automático
- ✅ Open Graph tags

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

Configura GitHub Actions con el workflow oficial de Astro para deploy automático.

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
- 📧 Email: lacabrales@gmail.com
- 📱 WhatsApp: +56 9 9791 3908
- 💼 LinkedIn: [luciano-cabrales-lefimil](https://www.linkedin.com/in/luciano-cabrales-lefimil-58736427a/)
- 🌍 Ubicación: Santiago, Chile

---

⭐ Si este proyecto te resultó útil, ¡no olvides darle una estrella!

## 🔄 Changelog

### v1.0.0 (2024)
- ✨ Lanzamiento inicial del portfolio
- 🎨 Diseño responsivo completo
- ⚡ Optimizaciones de rendimiento
- 📱 Soporte móvil completo
- 🔍 SEO optimizado