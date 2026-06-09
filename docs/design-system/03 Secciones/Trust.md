# Trust (Por qué elegirnos)

**Archivo:** `src/components/sections/TrustIndex.astro` · `id="nosotros"` · fondo `--surface`

## Diseño

[[Split Layout]] (38/62):

- **Sidebar sticky:** sidebar-header ("Más de 10 años… con pantallas LED") + `btn btn--primary` asesoría (WhatsApp) + `link-arrow` a `/nosotros/` + `stat-row` con valores acentuados (+500 proyectos, 98% satisfechos).
- **Contenido:** grid 2 col (3 col ≥1400) de 6 `.trust-item` — cards horizontales compactas: número `01–06` azul + H3 + desc. Hover suave (solo borde+glow, sin elevación).

## Datos

Array `razones` (num, title, desc): proveedor directo, instalación certificada NOM, soporte 24/7, garantía 2 años, asesoría gratuita, cobertura nacional.

## Notas

- Enlaza a `/nosotros/` — página pendiente de crear.
- Patrón ideal a replicar en páginas de servicio (beneficios de X).
