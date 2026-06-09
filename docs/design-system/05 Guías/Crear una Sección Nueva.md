# Guía · Crear una Sección Nueva

Receta para añadir una sección reusando el sistema — **objetivo: ≤60 líneas de CSS scoped nuevo**.

## 1. Esqueleto

```astro
---
// MiSeccion.astro — qué hace y dónde se usa
import SectionHeaderDuo from '../ui/SectionHeaderDuo.astro'
import IconCheck from '../ui/icons/IconCheck.astro'
import { url } from '../../utils/url'
// import { waUrl, WA_MESSAGES } from '../../config/site'  // si hay CTA WhatsApp

const items = [ /* datos aquí, nunca en el markup */ ]
---

<section class="section section--dark mi-seccion" id="mi-ancla" aria-labelledby="mi-heading">
  <div class="container">
    <SectionHeaderDuo id="mi-heading" eyebrow="…" title="… <span>keyword</span>"
      desc="…" body1="…" body2="…" />
    <!-- contenido -->
  </div>
</section>

<style>
  /* Solo lo único de esta sección */
</style>
```

## 2. Decisiones de diseño

| Necesitas… | Usa |
|---|---|
| Fondo | alternar `--dark`/`--surface` con las secciones vecinas ([[Colores]]) |
| Encabezado | `SectionHeaderDuo`; con sidebar → [[Split Layout]] + sidebar-header |
| Tarjetas | receta de [[Tarjetas]] (hover canónico incluido) |
| Botones | [[Botones]] — clase local solo para width/justify |
| Iconos | [[Iconos]]; flecha en links → `.link-arrow` |
| Métricas | `.stat-row`/`.stat` ([[Utilidades]]) |
| Tabla | `.tabla-responsive` + `.tabla-seo` |

## 3. Responsive

Revisa qué ya cubre `mobile.css` ([[Responsive]]). Define en scoped solo los breakpoints propios del grid de la sección.

## 4. Integración

1. Importar y colocar en `index.astro` (o la página que toque) respetando Hero → CtaBar → … → CTA Final.
2. Si introduce contenido con valor SEO estructurado → evaluar schema en la página ([[SEO y Datos]]).
3. Documentar la sección en `03 Secciones/` de este vault.

## 5. Checklist final

- [ ] Accesibilidad ([[Convenciones]])
- [ ] Cero hardcodes (grep `#` y `rgba(0,` en el archivo)
- [ ] `npm run build` sin errores
- [ ] Probado en 1440 / 1024 / 768 / 390
