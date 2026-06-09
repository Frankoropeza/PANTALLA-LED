# Estructura del Proyecto

Astro 5 estático (`output: 'static'`), Tailwind instalado pero el diseño vive en **CSS vanilla con tokens** (container plugin deshabilitado). Deploy: GitHub Pages con dominio `pantalla-led.com` (CNAME).

```
src/
├── config/
│   ├── site.ts          ← datos del negocio: SITE, CONTACT, WA_MESSAGES,
│   │                       PRODUCT_CATEGORIES, SERVICES, COVERAGE_STATES…
│   └── faqs.ts          ← FAQS (única fuente: UI + JSON-LD)
├── styles/
│   ├── global.css       ← TOKENS (:root) + reset + .container/.section + botones
│   ├── components.css   ← componentes compartidos (importado por global.css)
│   ├── mobile.css       ← overrides responsive AL FINAL de la cascada
│   └── tailwind.css     ← solo directivas
├── layouts/
│   ├── Base.astro       ← layout ACTUAL (TopBar+Header+Footer globales, SEO meta)
│   └── Layout.astro     ← LEGACY (usado por contacto/productos/servicios)
├── components/
│   ├── global/          ← TopBar, Header (mega menú), Footer, WhatsAppButton
│   ├── sections/        ← las 10 secciones del index (sufijo *Index)
│   ├── ui/              ← SectionHeader, SectionHeaderDuo
│   │   └── icons/       ← IconWhatsApp, IconPhone, IconCheck, IconArrowRight, IconInfo
│   ├── CtaBar.astro     ← banda de métricas (todas las páginas)
│   └── Header/Footer/Hero.astro  ← LEGACY raíz (solo Layout.astro viejo)
├── pages/
│   ├── index.astro      ← orquestador: importa secciones + 4 schemas JSON-LD
│   ├── productos.astro, servicios.astro, contacto.astro   ← LEGACY
│   └── productos/[slug].astro
├── content/             ← colecciones markdown (productos/, servicios/)
└── utils/url.ts         ← helper url() para rutas con base
```

## Cascada CSS (orden importa)

`global.css` → importa `components.css` (inicio) y `mobile.css` (FINAL, gana con !important quirúrgico) → estilos scoped de cada componente Astro.

## Principio rector

`index.astro` es un **orquestador limpio**: solo importa secciones y define schemas. Las secciones son autocontenidas (datos en frontmatter + markup + CSS scoped mínimo). Todo lo repetible vive en `components.css`/`global.css`/`ui/`.
