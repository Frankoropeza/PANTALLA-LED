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

**Banda de acento naranja LED** (gradiente `--c-accent` → `--c-accent-dark` con brillo diagonal) — contraste deliberado contra el azul dominante, patrón Gama de México. Es el único uso protagónico del naranja en el sitio: no replicarlo en otras secciones para que conserve su poder de contraste.

- Label blanco uppercase con barra blanca.
- Pills glass blancas translúcidas (`rgba(255,255,255,.12)` + borde `.28` + blur) → hover se rellenan de blanco con texto naranja oscuro y elevación.
- CTA: pill blanca sólida con texto/icono en verde WhatsApp.
- ≤900: label arriba. ≤640: carrusel horizontal sin scrollbar, touch 38px+.

## Dónde se usa

- **Index:** 7 anclas de sección (array en `index.astro`).
- **/productos/:** 6 categorías (anclas `#<slug>` — [[Tarjetas|CategoryCard]] expone `id={cat.slug}`) + Fichas técnicas + Guía de pixel.

## Soporte global

`global.css`: `[id] { scroll-margin-top: calc(var(--stack-height) + 1rem) }` — toda ancla queda visible bajo el header sticky.
