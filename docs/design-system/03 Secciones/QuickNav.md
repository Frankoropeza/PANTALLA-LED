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

Franja `--c-bg-2` con borde inferior: label uppercase + pills (anclas o rutas) + pill CTA verde WhatsApp (`waUrl(ctaMessage)`).

- Pills: borde `--c-border`, hover azul; CTA verde translúcido.
- ≤900: label arriba. ≤640: carrusel horizontal sin scrollbar, touch 38px+.

## Dónde se usa

- **Index:** 7 anclas de sección (array en `index.astro`).
- **/productos/:** 6 categorías (anclas `#<slug>` — [[Tarjetas|CategoryCard]] expone `id={cat.slug}`) + Fichas técnicas + Guía de pixel.

## Soporte global

`global.css`: `[id] { scroll-margin-top: calc(var(--stack-height) + 1rem) }` — toda ancla queda visible bajo el header sticky.
