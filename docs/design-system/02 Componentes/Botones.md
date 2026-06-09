# Botones

**Fuente:** `src/styles/global.css`. Sistema base `.btn` + modificadores. **Nunca** crear botones custom en secciones — componer con estas clases y, si hace falta, una clase local solo para posicionamiento (`width`, `margin`, `justify-content`).

## Sistema actual

| Clases | Apariencia | Uso |
|---|---|---|
| `.btn .btn--primary` | Azul sólido + sombra azul | CTA principal de sección |
| `.btn .btn--outline` | Borde gris → azul al hover | CTA secundario, teléfono |
| `.btn .btn--outline-white` | Borde blanco translúcido | Sobre fondos de color |
| `.btn .btn--ghost` | Transparente, borde sutil | Acciones terciarias |
| `.btn .btn--whatsapp` | Verde WhatsApp sólido + sombra verde | **CTA de conversión** (cotizar) |
| `.btn .btn--whatsapp-soft` | Verde translúcido con borde | WhatsApp en contextos menos agresivos (hero) |
| `+ .btn--lg` | Padding y peso mayores | Hero, CTA final, cierres de sección |

## Ejemplos reales del index

```astro
<!-- Hero -->
<a href={url('/productos/')} class="btn btn--primary btn--lg">
  Ver catálogo LED <IconArrowRight size={16} />
</a>
<a href={waUrl(WA_MESSAGES.cotizacion)} class="btn btn--whatsapp-soft btn--lg"
   target="_blank" rel="noopener noreferrer">
  <IconWhatsApp size={18} /> Cotizar por WhatsApp
</a>

<!-- Card de cotización: full-width vía clase local -->
<a class="btn btn--whatsapp cotizacion-card__btn-wa">…</a>
```

```css
/* CSS local: SOLO posicionamiento */
.cotizacion-card__btn-wa { width: 100%; justify-content: center; }
```

## Reglas

1. WhatsApp con `target="_blank" rel="noopener noreferrer"` y URL generada con `waUrl(WA_MESSAGES.x)` — ver [[SEO y Datos]].
2. Icono dentro del botón → componente de [[Iconos]], 16–20px.
3. Touch target móvil ≥44px: lo garantiza `mobile.css` §17.
4. Jerarquía por sección: máx. 1 botón primario + 1 secundario.

## Legacy

Los botones `.btn-primary/.btn-secondary/.btn-outline` (sin doble guión) y las páginas que los usaban **fueron eliminados** (jun 2026) junto con `Layout.astro`, los `Header/Footer/Hero.astro` raíz y la integración Tailwind. No reintroducir.
