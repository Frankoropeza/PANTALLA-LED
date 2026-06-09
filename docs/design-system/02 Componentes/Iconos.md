# Iconos

**Fuente:** `src/components/ui/icons/` — componentes Astro que reemplazan SVGs inline. **Nunca pegar paths SVG duplicados** en secciones; si un icono se usa 2+ veces, se convierte en componente aquí.

## Catálogo

| Componente | Props (default) | Uso |
|---|---|---|
| `IconWhatsApp` | `size` (18) | Botones WhatsApp (fill) |
| `IconPhone` | `size` (18), `strokeWidth` (2) | Botones de llamada |
| `IconCheck` | `size` (16), `strokeWidth` (2.5) | Listas de beneficios/garantías |
| `IconArrowRight` | `size` (16), `strokeWidth` (2.5) | Links y CTAs con flecha |
| `IconInfo` | `size` (16), `strokeWidth` (2) | Notas informativas |

```astro
import IconCheck from '../ui/icons/IconCheck.astro'
<IconCheck size={18} strokeWidth={2} />
```

## Convenciones

1. Todos renderizan `aria-hidden="true"` — son decorativos; el significado va en el texto.
2. Estilo: stroke 24×24 viewBox, `stroke="currentColor"` → heredan color del padre por CSS (`color: var(--c-primary)` etc.). WhatsApp es la excepción (fill, glifo de marca).
3. Tamaños habituales: 12–14px inline en texto, 16–20px en botones, 38–44px en thumbnails.
4. SVGs únicos de una sola sección (chevron del FAQ, reloj, pin, estrella, escudo de verificación) pueden quedarse inline — promover a componente cuando se repitan.

## Candidatos a promover

- Reloj (usado en [[Proceso]] y [[Cobertura]]) → `IconClock`
- Pin de ubicación ([[Cobertura]]) → `IconMapPin`
