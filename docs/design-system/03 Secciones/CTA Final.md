# CTA Final

**Archivo:** `src/components/sections/CTAFinalIndex.astro` · **Orden:** última sección antes del footer

## Diseño

Banda de cierre con borde superior, fondo `--c-bg` y glow elíptico azul centrado (blur 40px, `aria-hidden`):

- **Izquierda:** eyebrow "¿Listo para tu proyecto LED?" + H2 con segunda línea acentuada + descripción (cotización sin costo, respuesta <2h, instalación certificada).
- **Derecha:** columna de 2 botones (min-width 260px): `btn btn--whatsapp btn--lg` "Solicitar cotización gratis" + `btn btn--outline btn--lg` con `IconPhone` y el teléfono de `CONTACT.phone`.

## Responsive

≤900 (componente) y ≤768 (mobile.css §14): apila centrado, botones full-width (max 400px, min-height 52px).

## Reuso

Patrón de cierre estándar — replicar en toda página interior como última sección (cambiar solo headline y mensaje WhatsApp por página vía `WA_MESSAGES`).
