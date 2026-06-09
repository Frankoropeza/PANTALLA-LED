// ============================================================
// PANTALLA LED — Categorías del catálogo (fuente de verdad)
// Consumido por:
//   · sections/CategoriasIndex.astro   (grid del index L1)
//   · pages/productos.astro            (catálogo L2 + schema ItemList)
//   · ui/CategoryCard.astro            (tipado de la card)
// ============================================================

export type CategoriaVisual =
  | 'exterior'
  | 'interior'
  | 'flexible'
  | 'eventos'
  | 'piso'
  | 'transparente'

export interface Categoria {
  slug: string
  title: string
  badge: string
  desc: string
  specs: string[]
  href: string
  visual: CategoriaVisual
  highlight: boolean
}

export const CATEGORIAS: readonly Categoria[] = [
  {
    slug: 'pantallas-exteriores',
    title: 'Pantallas Exteriores',
    badge: 'IP65 · Intemperie',
    desc: 'Alta luminosidad para publicidad al aire libre. Resistentes al agua, polvo y variaciones de temperatura extrema.',
    specs: ['P4', 'P5', 'P6', 'P8', 'P10'],
    href: '/productos/pantallas-exteriores/',
    visual: 'exterior',
    highlight: true,
  },
  {
    slug: 'pantallas-interiores',
    title: 'Pantallas Interiores',
    badge: 'Ultra HD · 4K',
    desc: 'Resolución y colores premium para lobbies, centros comerciales, restaurantes y hoteles de primer nivel.',
    specs: ['P2', 'P2.5', 'P3', 'P4'],
    href: '/productos/pantallas-interiores/',
    visual: 'interior',
    highlight: false,
  },
  {
    slug: 'pantallas-flexibles',
    title: 'Pantallas Flexibles',
    badge: 'Curva · Creativa',
    desc: 'Módulos curvables para diseños cilíndricos, cóncavos y transparentes en arquitectura de vanguardia.',
    specs: ['Curva', 'Cilíndrica', 'Transparente'],
    href: '/productos/pantallas-flexibles/',
    visual: 'flexible',
    highlight: false,
  },
  {
    slug: 'pantallas-eventos',
    title: 'Pantallas para Eventos',
    badge: 'Renta disponible',
    desc: 'Módulos de alta resolución para escenarios, conciertos, convenciones y activaciones de marca.',
    specs: ['Backdrop', 'Escenario', 'Stage LED'],
    href: '/productos/pantallas-eventos/',
    visual: 'eventos',
    highlight: false,
  },
  {
    slug: 'pantallas-piso',
    title: 'Pantallas de Piso',
    badge: 'LED Floor',
    desc: 'Pistas de baile interactivas y pisos visuales para eventos, discotecas y shows en vivo.',
    specs: ['P3.9', 'P6.25', 'Interactivo'],
    href: '/productos/pantallas-piso/',
    visual: 'piso',
    highlight: false,
  },
  {
    slug: 'pantallas-transparentes',
    title: 'Pantallas Transparentes',
    badge: 'Glass LED',
    desc: 'Transparencia de hasta 85% para vitrinas, fachadas de vidrio y aplicaciones arquitectónicas únicas.',
    specs: ['P7.8', 'P10', 'P15.6'],
    href: '/productos/pantallas-transparentes/',
    visual: 'transparente',
    highlight: false,
  },
] as const
