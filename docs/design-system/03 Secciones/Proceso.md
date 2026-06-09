# Proceso (Cómo trabajamos)

**Archivo:** `src/components/sections/ProcesoIndex.astro` · `id="proceso"` · fondo `--dark`

## Diseño

[[Encabezados de Sección|SectionHeaderDuo]] + `<ol>` en **grid de 2 columnas**; con 5 pasos, el último (`:last-child:nth-child(odd)`) cierra a ancho completo con `max-width: 72ch` en la descripción.

### Card `.proceso-paso`

- Fila superior: **número circular 44px** (`--c-primary-light` + borde primario; hover → se rellena de azul con texto blanco) + **badge de tiempo** (`__meta`): reloj + texto uppercase en pill gris.
- H3 + descripción.
- Hover canónico de [[Tarjetas]].

### Tiempos por etapa

| Paso | Meta |
|---|---|
| 01 Consulta y diagnóstico | Gratuito · Mismo día |
| 02 Propuesta técnica | Respuesta en 24–48 h |
| 03 Fabricación y logística | Stock o 1–3 semanas |
| 04 Instalación y puesta en marcha | 1–4 días según formato |
| 05 Capacitación y soporte | Incluido · Soporte 24/7 |

⚠️ Estos tiempos deben coincidir con lo prometido en el FAQ y futuras páginas de servicio.

## Responsive

768 → 1 columna; 640 → número 38px y meta compacta. El componente maneja todo su responsive (mobile.css §12 vacío a propósito).
