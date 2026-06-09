# Servicios

**Archivo:** `src/components/sections/ServiciosIndex.astro` · `id="servicios"` · fondo `--dark`

## Diseño

[[Split Layout]] variante `--narrow` (36/64):

- **Sidebar sticky:** sidebar-header + `btn btn--primary` a `/servicios/` + lista de 4 garantías con `IconCheck` (llave en mano, factura, crédito 30 días, cotización mismo día) desde array `garantias`.
- **Contenido:** lista vertical de 8 `.svc-item` separados por borde inferior — número azul + H3 (hover → primario) + desc + **botón circular de flecha** 32px a `/servicios/#<id>` que se activa con el hover de toda la fila.

## Datos

Array `servicios` (num, id, title, desc): venta, renta, instalación, mantenimiento, asesoría, gestión de contenido, diseño de contenido, garantía/postventa. Los `id` se usan como anclas (`<article id>`) y deben existir también en la página `/servicios/`. Fuente paralela: `SERVICES` en `site.ts` (6 items — **desincronizada**, consolidar al migrar la página).

## Notas

El patrón lista-con-flecha es ideal para índices de contenido (FAQ extendido, listados de aplicaciones).
