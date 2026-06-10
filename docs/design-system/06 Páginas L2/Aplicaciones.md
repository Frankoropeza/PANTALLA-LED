# Página L2 · /aplicaciones/

**Archivo:** `src/pages/aplicaciones.astro` · blueprint homologado a [[Productos]]/[[Servicios]] (jun 2026)

## Composición

1. [[Page Hero|PageHero]] — hero limpio 2 col con kicker y body2
2. [[QuickNav]] accent — pill por sector → anclas `#<slug>` + "Ver catálogo LED" + CTA (8 celdas)
3. **TrustStrip** — multisector, llave en mano, a la medida, cobertura
4. **Resumen** (`--surface`): [[Encabezados de Sección|SectionHeaderDuo]] + grid 3-col de 6 tarjetas-enlace `.rapp` (badge de sector + título + desc + footer "Ver casos de uso" con flecha circular)
5. **AplicacionSpotlight ×6** (`sections/AplicacionSpotlight.astro`, tercera gemela de los spotlights) — fondos alternados, [[Split Layout]] sticky: badge sector + H2 + intro editorial + **chips "Pantallas recomendadas"** (cross-link a los spotlights de `/productos/#<cat>-detalle`) + CTA WhatsApp por sector | grid 2×2 de casos de uso. **`id="<slug>"` = ancla pública** (mega menú la usa)
6. [[Reviews]] + [[CTA Final]] — reusadas (los testimonios son multisector: encajan perfecto aquí)

## Datos — fuente única

`src/config/aplicaciones.ts`: slug, title, badge, desc, intro, features[4], pantallas[] (recomendadas con ancla). **`APPLICATIONS` de site.ts ahora se deriva de aquí** — el mega menú apunta a `/aplicaciones/#<slug>` (anclas reales, sin 404s).

## Sectores

Publicidad Exterior (DOOH) · Eventos y Espectáculos · Centros Comerciales · Restaurantes y Hoteles · Estadios y Deportivos · Educación. El cross-linking sector→categoría de producto refuerza el SEO interno.
