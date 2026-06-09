# Página L2 · /servicios/

**Archivo:** `src/pages/servicios.astro` · migrada a `Base.astro` (jun 2026)

## Composición

1. [[Page Hero|PageHero]] — Inicio › Servicios
2. **Detalle de servicios** (`--surface`): [[Encabezados de Sección|SectionHeaderDuo]] + grid 2-col de 8 cards `.sdet` — número circular (hover relleno), descripción, lista de 4 features con `IconCheck` verde y link-arrow "Cotizar este servicio" (WhatsApp con mensaje por servicio).
3. [[Proceso]] — reusada tal cual
4. [[CTA Final]] — reusada tal cual

## Datos — fuente única

**`src/config/servicios.ts`** (`SERVICIOS`, 8 items con `features[]`) alimenta esta página **y** la lista resumen de [[Servicios|ServiciosIndex]] del index. Los `id` (venta, renta, instalacion, mantenimiento, asesoria, contenido, diseno, garantia) son **anclas públicas** — el index y el mega menú enlazan a `/servicios/#<id>`; no renombrar.

## SEO

Schemas BreadcrumbList + ItemList de `Service` (provider → `#organization`, areaServed México).
