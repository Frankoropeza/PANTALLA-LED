# Guía · Crear una Página Nueva

## Plantilla base

```astro
---
import Base from '../layouts/Base.astro'
import CtaBar from '../components/CtaBar.astro'
import { SITE } from '../config/site'
// secciones…

const title = 'Keyword Principal | Complemento — PantallaLED'   // ≤60 chars
const description = '…'                                          // ≤160 chars
const canonical = `${SITE.url}/mi-ruta/`

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Mi Página', item: canonical },
  ],
}
---

<Base {title} {description} {canonical}>
  <!-- 1. Hero propio (o variante reducida) -->
  <CtaBar />   <!-- 2. SIEMPRE inmediatamente después del hero -->
  <!-- 3. Secciones de contenido -->
  <!-- 4. CTA Final como cierre -->
  <script type="application/ld+json" set:html={JSON.stringify(schemaBreadcrumb)} />
</Base>
```

## Reglas

1. **Usar `Base.astro`**, nunca el `Layout.astro` legacy.
2. Orden obligatorio: Hero → CtaBar → contenido → [[CTA Final]] (adaptar headline y `WA_MESSAGES.<página>`).
3. URLs siempre con `url()` de `utils/url.ts` y trailing slash.
4. Breadcrumb visual con `.breadcrumb-bar` ([[Utilidades]]) + schema BreadcrumbList.
5. Página de producto → añadir schema `Product`; de servicio → `Service`.

## Backlog de páginas (prioridad)

| Página | Notas |
|---|---|
| `/productos/<categoría>/` ×6 | los CTAs del index YA enlazan ahí — prioridad alta. Reusar card de [[Categorías]] y tabla de [[Especificaciones]] |
| `/nosotros/` | enlazada desde [[Trust]] |
| Migrar `/productos`, `/servicios`, `/contacto` | de Layout legacy a Base + sistema; al terminar, borrar `Layout.astro`, `Header/Footer/Hero.astro` raíz y los botones legacy de global.css |
| Landings locales `/pantallas-led-<ciudad>/` | reusar card de [[Cobertura]] |
| `/buscar` | o retirar SearchAction del schema WebSite |
