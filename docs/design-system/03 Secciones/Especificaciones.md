# Especificaciones técnicas

**Archivo:** `src/components/sections/EspecificacionesIndex.astro` · `id="especificaciones"` · fondo `--surface`

## Diseño

[[Encabezados de Sección|SectionHeaderDuo]] + [[Utilidades|tabla-seo]] comparativa + nota de asesoría.

### Tabla (8 filas)

Columnas: Tipo de pantalla · Paso de pixel (`.text-accent`) · Distancia mínima · Aplicación ideal · Brillo · Uso.

Filas: Ultra HD Interior P2/P2.5 → Interior Fine Pitch P3/P4 → Exterior Urbano P4/P5 → Gran Formato P6/P8 → Autopista P10/P16 → Eventos P3.9/P4.8 → Piso P6.25/P8.9 → Transparente P7.8/P10.

### Nota inferior

`IconInfo` + texto + `specs-nota__link` a `/contacto/` ("Solicitar asesoría gratuita →").

## Notas

- Wrapper `role="region"` + `tabindex="0"` para scroll accesible por teclado.
- Estos datos técnicos son la referencia del sitio: las páginas de producto deben citar los mismos rangos de nits/distancias (coherencia SEO).
