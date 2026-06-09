# QuickNav (navegación rápida)

**Archivo:** `src/components/sections/QuickNavIndex.astro` · **Orden:** inmediatamente después del [[Hero]] (sustituyó a la [[CtaBar]]).

## Diseño

Franja `--c-bg-2` con borde inferior: label uppercase "Explora el sitio" + pills hacia las 7 secciones del index (anclas `#productos`, `#servicios`, `#especificaciones`, `#proceso`, `#testimonios`, `#cobertura`, `#faq`) + pill CTA verde "Cotizar ahora" (WhatsApp, `waUrl`).

- Pills: borde `--c-border`, hover azul (`--c-primary` + `--c-primary-light`).
- CTA: variante verde translúcida (mismo lenguaje que `.btn--whatsapp-soft`).
- ≤900: label arriba, pills debajo. ≤640: carrusel horizontal sin scrollbar, touch 38px+.

## Soporte global

`global.css` define `[id] { scroll-margin-top: calc(var(--stack-height) + 1rem) }` — toda ancla del sitio queda visible bajo el header sticky (válido también para menú y footer).

## Reuso

En páginas L2 largas puede adaptarse con anclas propias (tabla de contenido horizontal). Datos en array `enlaces` del frontmatter.
