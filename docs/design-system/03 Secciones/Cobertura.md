# Cobertura nacional

**Archivo:** `src/components/sections/CoberturaIndex.astro` · `id="cobertura"` · fondo `--surface`

## Diseño

[[Split Layout]] (38/62), **sin mapa decorativo** (eliminado jun 2026):

- **Sidebar sticky:** sidebar-header + `stat-row` (32 estados / +500 proyectos / 10+ años) con borde inferior extra + `btn btn--primary` "Verificar cobertura en mi ciudad" → `/contacto/` + nota con `IconInfo` (guía prepagada).
- **Contenido:** grid 2 col (1 en 640) de 6 `.czona`.

### Card `.czona`

- Header: **pin de ubicación en tile 38px** (radius-md, azul claro; hover → relleno azul) + H3 ciudad + región uppercase + badge.
- Badges: `--flagship` → "Base propia" (azul, `--c-primary-soft`, card con gradiente azul sutil) · `--comercial` → "Red certificada" (neutro).
- Footer con borde: reloj + "Respuesta: **{tiempo}**".

## Datos

Array `zonas` (type, ciudad, region, desc, turnaround): CDMX y EdoMex = flagship (Mismo día); GDL, MTY, Puebla (24–48 h), Cancún (48–72 h) = comercial. Paralelo: `COVERAGE_STATES` en `site.ts` — mantener sincronía.

## Reuso

La card de zona es el patrón para futuras landings locales de SEO (`/pantallas-led-guadalajara/` etc.).
