# FAQ y Cotización

**Archivo:** `src/components/sections/FaqCotizacionIndex.astro` · `id="faq"` · fondo `--dark`

## Diseño

Grid 6fr/4fr (`.faq-layout`):

- **Izquierda:** eyebrow (`sidebar-header__eyebrow` "Resolvemos tus dudas") + H2 + acordeón de 8 `<details>` nativos — pregunta con chevron rotatorio, respuesta `--c-muted`. Sin JS.
- **Derecha:** `.cotizacion-card` **sticky** — header con banda azul superior (3px) y fondo `--c-primary-light` ("Cotización gratuita / Respuesta en menos de 2 horas") + 4 beneficios con `IconCheck` verde + CTAs full-width (`btn btn--whatsapp` cotizar + `btn btn--outline` llamar con `IconPhone`) + horario.

## Datos — fuente única

Las preguntas vienen de **`src/config/faqs.ts`** (`FAQS`, 8 items). El mismo array genera el schema JSON-LD `FAQPage` en `index.astro` → **UI y SEO nunca divergen**. Para añadir/editar una pregunta se toca SOLO ese archivo.

Beneficios desde array `beneficios` en frontmatter.

## Responsive

≤1024 apila (card deja de ser sticky — mobile.css §13). Touch target de pregunta ≥44px.

## Reuso

- El acordeón `<details>` es el patrón FAQ para cualquier página (sin dependencias).
- La cotizacion-card puede extraerse a componente compartido si otra página la necesita (candidata: `/contacto`).
