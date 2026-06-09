# SEO y Datos

## Fuentes únicas de verdad (¡editar SOLO aquí!)

| Dato | Archivo | Consumidores |
|---|---|---|
| Nombre, URL, descripción | `src/config/site.ts` → `SITE` | Base.astro, schemas |
| Teléfono, WhatsApp, email, horarios | `site.ts` → `CONTACT` | TopBar, Footer, CTAs, schema |
| Mensajes prellenados WhatsApp | `site.ts` → `WA_MESSAGES` + `waUrl()` | todos los botones WA |
| Categorías de producto | `site.ts` → `PRODUCT_CATEGORIES` | mega menú, footer |
| FAQ (8 preguntas) | `src/config/faqs.ts` → `FAQS` | [[FAQ y Cotización]] + schema FAQPage |
| Cifras comerciales | repetidas en secciones — +500 proyectos, 10+ años, 2 años garantía, 98%, 32 estados | Hero, CtaBar, Trust, Cobertura |

⚠️ `CONTACT.phone` aún es placeholder (`55 0000 0000`) — actualizar antes de lanzar campañas.

## JSON-LD del index (en `index.astro`)

1. **LocalBusiness** — dirección CDMX, horarios, catálogo de ofertas, `@id #organization`.
2. **FAQPage** — generado con `FAQS.map()` (nunca duplicar textos a mano).
3. **WebSite** — con SearchAction (la ruta `/buscar` no existe aún; inocuo).
4. **BreadcrumbList** — solo "Inicio" en el index.

Patrón de emisión: `<script type="application/ld+json" set:html={JSON.stringify(schema)} />`

## Meta por página (props de `Base.astro`)

`title` (≤60 chars, keyword + marca), `description` (≤160), `canonical`, `ogImage` opcional. Open Graph + Twitter Card incluidos. Fuente Outfit precargada.

## Copy SEO de los encabezados duo

Keywords trabajadas en `body1/body2`: *pantallas LED México, paso de pixel, IP65, nits, SMD/COB, proveedor directo de fábrica, renta/venta/instalación, cobertura nacional, CDMX/Guadalajara/Monterrey*. Mantener este vocabulario en páginas nuevas.
