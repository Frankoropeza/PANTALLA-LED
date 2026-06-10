# Página L2 · /servicios/

**Archivo:** `src/pages/servicios.astro` · blueprint homologado a [[Productos]] (jun 2026)

## Composición

1. [[Page Hero|PageHero]] — hero limpio 2 col con kicker y body2
2. [[QuickNav]] accent — pill por servicio → anclas `#<id>` + "Cómo trabajamos" (#proceso) + CTA (10 celdas = filas parejas)
3. **TrustStrip** — técnicos certificados, respuesta inmediata, un solo responsable, contrato y factura
4. **Resumen** (`--surface`): [[Encabezados de Sección|SectionHeaderDuo]] + grid 2-col de 8 tarjetas-enlace `.rsvc` (número circular + título + desc + flecha circular; toda la card baja a su spotlight)
5. **ServicioSpotlight ×8** (`sections/ServicioSpotlight.astro`, gemela de CategoriaSpotlight) — fondos alternados, [[Split Layout]] con sidebar sticky (badge "Servicio NN" + H2 + intro editorial + CTA WhatsApp por servicio + link a contacto) | grid 2×2 de alcances con tile-check verde. **El `id` del spotlight ES el ancla pública** `/servicios/#<id>` (enlazada desde index, mega menú y PreFooterNav)
6. [[Proceso]] + [[CTA Final]] — reusadas tal cual

## Datos — fuente única

`src/config/servicios.ts`: `num, id, title, desc, intro` (párrafo SEO del spotlight) y `features[4]` (alcances). Alimenta el index (ServiciosIndex), el resumen y los spotlights — un solo lugar para editar.

## SEO

Schemas BreadcrumbList + ItemList de `Service`. 8 intros editoriales con keywords (norma NOM, P3.9/P4.8, Nova Star/Linsn, pólizas, ROI…).
