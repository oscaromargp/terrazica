# 🏨 Terrazica - Landing Page Premium Dark Mode

<div align="center">
    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" alt="Terrazica Hotel" width="400"/>
    <br/><br/>
    <a href="https://terrazica.netlify.app" target="_blank">
        <img src="https://img.shields.io/badge/🌐 Ver Demo-En Vivo-0EA5E9?style=for-the-badge" alt="Live Demo"/>
    </a>
</div>

---

## 📋 Descripción

**Terrazica** es una landing page premium de estilo Dark Luxury diseñada para un hotel boutique ubicado en **Zicatela, Puerto Escondido, Oaxaca**.

El sitio está orientado a un nicho de mercado específico: surfistas, nómadas digitales, turistas internacionales y la comunidad LGBTQ+. La propuesta de valor se centra en ofrecer una experiencia única que combina surf, comunidad y atardeceres inolvidable.

### ✨ Características Principales

- 🌐 **Multilingüe (ESP/ENG)** - Con detección automática de IP
- 📱 **Diseño 100% Responsivo** - Mobile-first approach
- 🎨 **Estilo Dark Luxury** - Estética premium con acentos en azul océano
- 🔄 **Flip Cards Interactivas** - Para展示 habitaciones/servicios
- 🌊 **Efectos Visuales** - Partículas flotantes y animaciones premium
- 💬 **WhatsApp Integration** - Botón flotante para reservas directas
- 📍 **SEO Local** - Optimizado para búsquedas en Google Maps
- 🏳️‍🌈 **Espacio Inclusivo** - Diseño inclusivo para la comunidad LGBTQ+

---

## 💰 Producto - Habitaciones y Precios

| Habitación | Precio/Noche | Características |
|------------|-------------|-----------------|
| **Estándar** | $800 MXN | Cama Queen, Baño Privado, Wi-Fi, Vista Jardín |
| **Suite Vista Mar** | $1,400 MXN | Cama King, Balcón Privado, Vista al Mar, Amenidades Premium |
| **Villa Privada** | $2,500 MXN | Terraza Privada, Cocina, Acceso Directo a la Playa |

### 🧴 Amenidades Incluidas

- 🧘 Yoga Matinal (Clases diarias)
- 🍳 Desayuno Orgánico Local
- 🏊 Alberca con Vista al Mar
- 🧴 Spa y Tratamientos
- 🍹 Bar & Restaurante
- 🚗 Estacionamiento Seguro y Gratuito
- 🏄 Clases de Surf con Instructores Certificados
- 🐕 Mascotas Bienvenidas (Pet-Friendly)

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Propósito |
|------------|-----------|
| **HTML5** | Estructura semántica del sitio |
| **Tailwind CSS** | Framework de estilos (vía CDN) |
| **Custom CSS** | Sistema de diseño personalizado |
| **JavaScript (ES6+)** | Interactividad y animaciones |
| **Google Fonts** | Plus Jakarta Sans + Inter |
| **Google Maps API** | Embed de ubicación |
| **IPAPI** | Detección de país para traducción |

---

## 📁 Estructura del Proyecto

```
terrazica/
├── images/                  # Imágenes del proyecto
├── index.html             # Estructura principal (13 secciones)
├── styles.css             # Sistema de diseño CSS
├── script.js              # Funcionalidad JavaScript
├── README.md              # Este archivo
└── .gitignore            # Configuración Git
```

### 📑 Secciones del Sitio (13 en total)

1. **Language Banner** - Selector de idioma flotante
2. **Navbar** - Navegación fija con scroll effect
3. **Hero Section** - Video/foto de fondo con CTA
4. **Social Proof** - Métricas y estadísticas
5. **About/Friendly** - Sobre nosotros y comunidad
6. **Services/Rooms** - Flip cards de habitaciones
7. **Amenities** - Grid de amenidades
8. **Gallery** - Galería de imágenes
9. **Testimonials** - Testimonios de huéspedes
10. **Location** - Mapa interactivo y datos de contacto
11. **FAQ** - Preguntas frecuentes (acordeón)
12. **Final CTA** - Llamada a la acción final
13. **Footer** - Links, redes sociales y copyright

---

## 🎯 Prompts Originales de Creación

### Prompt Base
```
Crea una landing page premium dark mode para un hotel boutique 
llamado Terrazica en Zicatela, Puerto Escondido. El sitio debe 
ser multilingüe (español/inglés), tener detección automática de IP, 
incluir flip cards para las habitaciones, integración con WhatsApp, 
y estar orientado a surfistas, nómadas digitales y comunidad LGBTQ+.
```

### Análisis del Proyecto

| Aspecto | Detalle |
|---------|---------|
| **Nombre** | Terrazica |
| **Ubicación** | Av. Del Morro 3, Zicatela, Oaxaca |
| **Tipo de Web** | Landing Page Hotel Boutique |
| **Sector** | Turismo/Surf/Hospitalidad |
| **Nicho** | Surfistas, Nómadas Digitales, LGBTQ+ |
| **Color Principal** | Azul Océan (#0EA5E9) |
| **Estilo Visual** | Dark Luxury, Moderno, Inclusivo |
| **Idioma** | Español/Inglés (automático) |

---

## 📝 Changelog

### v1.0.0 (2024-01-01)
- ✅ Creación inicial del proyecto
- ✅ Estructura HTML con 13 secciones
- ✅ Sistema de diseño Dark Luxury
- ✅ Flip cards para habitaciones
- ✅ Integración WhatsApp

### v2.0.0 (2024-01-15)
- ✅ Sistema de traducción ESP/ENG
- ✅ Detección automática de IP
- ✅ Animaciones de partículas
- ✅ FAQ acordeón interactivo
- ✅ Optimización SEO

### v3.0.0 (2024-02-01)
- ✅ Detección de IP mejorada
- ✅ SEO Open Graph tags
- ✅ Botón flotante WhatsApp
- ✅ Mapas embebidos
- ✅ Mobile menu optimizado
- ✅ Documentación completa README

---

## ⚙️ Configuración

### Variables Editables

Para personalizar el sitio, modifica los siguientes valores en el código:

```javascript
// WhatsApp (script.js)
const whatsappNumber = '+529541030517';

// Email (index.html)
const contactEmail = 'hola@terrazica.com';

// Dirección (index.html)
const address = 'Av. Del Morro 3, Zicatela';
```

### Cómo Clonar el Proyecto

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/terrazica.git

# Entrar al directorio
cd terrazica

# Abrir en navegador
# Simply open index.html in your browser
```

---

## 🚀 Deployment

### GitHub Pages (Gratuito)

```bash
# 1. Push a GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Ir a Settings > Pages
# 3. Source: Deploy from branch
# 4. Branch: main, Folder: /
# 5. Save y esperar ~2 minutos
```

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# O conectar directamente desde GitHub
# https://vercel.com
```

### Netlify (Alternativo)

```bash
# Arrastrar folder directamente
# O conectar desde GitHub
# https://netlify.com
```

---

## 🔍 SEO - Meta Tags

```html
<!-- Open Graph -->
<meta property="og:title" content="Terrazica | Tu Refugio Frente al Mar">
<meta property="og:description" content="Hotel boutique en Zicatela. Surf, Comunidad y Atardeceres Inolvidables">
<meta property="og:type" content="website">
<meta property="og:url" content="https://terrazica.com">
<meta property="og:image" content="https://images.unsplash.com/photo-1507525428034-b723cf961d3e">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Terrazica | Hotel en Zicatela">
<meta name="twitter:description" content="Tu refugio frente al mar">
```

### Schema Markup (Local Business)

```json
{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Terrazica",
  "description": "Hotel boutique en Zicatela, Puerto Escondido",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Del Morro 3",
    "addressLocality": "Zicatela",
    "addressRegion": "Oaxaca",
    "addressCountry": "MX"
  },
  "telephone": "+529541030517",
  "priceRange": "$$"
}
```

---

## 🎨 Personalización

### Cambiar Color Principal

En `styles.css`, busca y modifica:

```css
:root {
    --primary: #0EA5E9;  /* Cambia a tu color */
    --primary-light: #38BDF8;
    --primary-dark: #0284C7;
}
```

### Agregar Nuevo Testimonio

En `index.html`,找到 `#testimonials` y agrega:

```html
<div class="glass-card p-8">
    <div class="flex gap-1 mb-4">★★★★★</div>
    <p class="text-gray-300 mb-6">"Tu testimonio aquí"</p>
    <div class="flex items-center gap-3">
        <div class="w-12 h-12 bg-ocean-500 rounded-full">Inicial</div>
        <div>
            <div class="font-semibold">Nombre</div>
            <div class="text-sm text-gray-400">Ciudad, País</div>
        </div>
    </div>
</div>
```

### Agregar FAQ

En `index.html`,找到 `#faq` y agrega:

```html
<div class="glass-card p-6">
    <button class="faq-toggle w-full flex items-center justify-between">
        <span class="font-semibold">Tu Pregunta</span>
        <svg class="w-5 h-5">...</svg>
    </button>
    <div class="faq-content mt-4 text-gray-300 hidden">
        Tu Respuesta
    </div>
</div>
```

---

## 🗺️ Roadmap - Fases del Proyecto

### Fase 1: MVP ✅ (Completado)
- Landing page básica
- Sistema de diseño Dark Luxury
- Flip cards de habitaciones
- Integración WhatsApp

### Fase 2: Multilingüe ✅ (Completado)
- Traducción ESP/ENG
- Detección automática de IP
- SEO básico

### Fase 3: Interactividad ✅ (Completado)
- Animaciones de scroll
- Partículas flotantes
- FAQ acordeón
- Mobile menu

### Fase 4: Optimización 🔄 (En Progreso)
- [ ] Añadir más imágenes de la propiedad
- [ ] Integrar booking engine
- [ ] Blog section
- [ ] Newsletter signup

---

## 📞 Créditos

### Desarrollador
- **Nombre:** [Tu Nombre]
- **Email:** [tu-email@ejemplo.com]
- **GitHub:** [github.com/tu-usuario]

### Recursos Utilizados
- Imágenes: [Unsplash](https://unsplash.com)
- Fonts: [Google Fonts](https://fonts.google.com)
- Icons: [SVG Inline](https://github.com/)

### Licencia
MIT License - Feel free to use and modify for your own projects.

---

<div align="center">
    <br/>
    <p>🏄 🌊 ¡Listo para surfear las mejores olas! 🏄 🌊</p>
    <br/>
    <a href="https://wa.me/529541030517?text=Hola,%20quisiera%20reservar%20en%20Terrazica">
        <img src="https://img.shields.io/badge/Reservar por WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp"/>
    </a>
</div>
