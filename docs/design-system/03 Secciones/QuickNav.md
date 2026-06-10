# QuickNav (navegación rápida)

**Archivo:** `src/components/sections/QuickNav.astro` — componente **genérico** (props), va inmediatamente después del hero de cada página (sustituyó a la [[CtaBar]]).

## Uso

```astro
<QuickNav
  label="Explora el catálogo"           <!-- default: "Explora el sitio" -->
  enlaces={[{ label: 'Exteriores', href: '#pantallas-exteriores' }, …]}
  ctaLabel="Cotizar catálogo"           <!-- default: "Cotizar ahora" -->
  ctaMessage={WA_MESSAGES.productos}
/>
```

## Diseño

**Barra segmentada full-bleed** sobre banda naranja LED (gradiente `--c-accent` → `--c-accent-dark` con brillo diagonal) — contraste deliberado contra el azul dominante. Único uso protagónico del naranja en el sitio: no replicarlo en otras secciones.

- Grid `grid-auto-columns: 1fr`: **cada botón ocupa una celda igual del 100% del viewport**, separadas por hairlines blancas (inset shadows que funcionan también entre filas).
- Botón: texto blanco bold centrado, min-height 56px → hover la celda se rellena de blanco con texto naranja.
- CTA: celda blanca permanente con texto/icono verde WhatsApp.
- Responsive: 1 fila en desktop → 4 columnas (≤1200) → 2 columnas (≤640, min-height 50px). **Mantener número de items en múltiplos de 4** para que las filas cierren parejas (index: 8 · productos: 10 → 4+4+2).
- El prop `label` ahora es solo el `aria-label` del nav.

## Variantes

| Variante | Color | Dónde |
|---|---|---|
| `accent` (default) | Banda naranja LED | Bajo el hero — navegación por **anclas** de la página |
| `primary` | Banda azul primaria | **Pre-footer global** — accesos a **páginas** clave |

## Dónde se usa

- **Index (accent):** 7 anclas de sección (array en `index.astro`).
- **/productos/ (accent):** 6 categorías (anclas `#<slug>` — [[Tarjetas|CategoryCard]] expone `id={cat.slug}`) + Fichas + Guía + Asesoría.
- **Todas las páginas (primary):** `global/PreFooterNav.astro`, montado en `Base.astro` antes del Footer — catálogo, fichas exterior/interior, renta, instalación, mantenimiento, contacto + CTA. Al crear páginas nuevas no hay que hacer nada: lo trae el layout.

## Soporte global

`global.css`: `[id] { scroll-margin-top: calc(var(--stack-height) + 1rem) }` — toda ancla queda visible bajo el header sticky.
