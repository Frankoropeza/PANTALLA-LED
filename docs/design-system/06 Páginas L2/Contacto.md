# Página L2 · /contacto/

**Archivo:** `src/pages/contacto.astro` · migrada a `Base.astro` (jun 2026)

## Composición

1. [[Page Hero|PageHero]] — Inicio › Contacto
2. **Formulario + canales** (`--surface`, grid 6/4):
   - **Formulario → WhatsApp** (`.cot-form-card`, banda azul superior): nombre, empresa, tipo de proyecto, ciudad, mensaje. **Sin backend** — un script arma el mensaje con los campos y abre `wa.me` (patrón Gama de México). Inputs 16px (iOS no-zoom), min-height 48px, focus ring azul.
   - **Sidebar sticky**: card de canales (WhatsApp/tel/email con tiles de icono), card de horario (gradiente azul, filas dt/dd discontinuas), card "qué incluye tu cotización" con checks verdes.
3. [[Cobertura]] — reusada tal cual (su CTA apunta aquí mismo, aceptable)

Sin CTA Final: la página entera ya es conversión.

## SEO

Schemas BreadcrumbList + ContactPage (`about` → `#organization`).

## Nota técnica

El script usa `define:vars={{ whatsapp: CONTACT.whatsapp }}` — el número sale de `site.ts`, nunca hardcodeado.
