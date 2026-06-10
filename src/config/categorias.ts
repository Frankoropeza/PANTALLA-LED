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

export interface CategoriaFeature {
  title: string
  desc: string
}

export interface CategoriaSpotlight {
  /** Párrafo editorial SEO que abre la sección de detalle */
  intro: string
  /** 4 sub-líneas / capacidades de la categoría */
  features: CategoriaFeature[]
  /** Ficha técnica markdown relacionada (si existe) */
  fichaHref?: string
}

export interface Categoria {
  slug: string
  title: string
  badge: string
  desc: string
  specs: string[]
  href: string
  visual: CategoriaVisual
  highlight: boolean
  spotlight: CategoriaSpotlight
}

export const CATEGORIAS: readonly Categoria[] = [
  {
    slug: 'pantallas-exteriores',
    title: 'Pantallas Exteriores',
    badge: 'IP65 · Intemperie',
    desc: 'Alta luminosidad para publicidad al aire libre. Resistentes al agua, polvo y variaciones de temperatura extrema.',
    specs: ['P4', 'P5', 'P6', 'P8', 'P10'],
    href: '/productos/#pantallas-exteriores-detalle',
    visual: 'exterior',
    highlight: true,
    spotlight: {
      intro:
        'Los espectaculares y fachadas digitales exigen equipos que aguanten sol directo, lluvia y operación continua. Nuestras pantallas exteriores combinan certificación IP65, brillo de 5,000 a 10,000 nits y gabinetes de aluminio con ventilación activa — visibles a plena luz del día y construidas para durar más de 100,000 horas. Cada proyecto incluye cálculo estructural, instalación bajo norma NOM y garantía de fábrica de 2 años.',
      features: [
        {
          title: 'Espectaculares y vallas digitales',
          desc: 'P6 a P10 para vías de alto tráfico y autopistas: máxima visibilidad a 8–15 metros con consumo optimizado.',
        },
        {
          title: 'Fachadas y medios formatos',
          desc: 'P4 y P5 para frentes comerciales y plazas: balance ideal entre resolución, brillo y costo por m².',
        },
        {
          title: 'Protección IP65 real',
          desc: 'Sellado contra agua y polvo, operación de −20 °C a +60 °C y refresco ≥ 1,920 Hz sin parpadeo en cámara.',
        },
        {
          title: 'Estructura e instalación',
          desc: 'Diseño y fabricación de estructura metálica, cableado certificado y trámite de anclajes con el inmueble.',
        },
      ],
      fichaHref: '/productos/pantalla-exterior/',
    },
  },
  {
    slug: 'pantallas-interiores',
    title: 'Pantallas Interiores',
    badge: 'Ultra HD · 4K',
    desc: 'Resolución y colores premium para lobbies, centros comerciales, restaurantes y hoteles de primer nivel.',
    specs: ['P2', 'P2.5', 'P3', 'P4'],
    href: '/productos/#pantallas-interiores-detalle',
    visual: 'interior',
    highlight: false,
    spotlight: {
      intro:
        'En interiores la audiencia está a metros de distancia y la imagen tiene que ser impecable. Las pantallas interiores Ultra HD (P2 a P4) entregan reproducción de color de nivel broadcast, alto refresco y brillo calibrado de 800 a 1,500 nits — perfectas para lobbies corporativos, retail, restaurantes y centros comerciales donde la imagen es parte de la marca.',
      features: [
        {
          title: 'Ultra HD P2 / P2.5',
          desc: 'Densidad de pixel para visión a 2–4 metros: control rooms, salas de juntas, exhibiciones y TV en vivo.',
        },
        {
          title: 'Fine pitch P3 / P4',
          desc: 'El estándar para lobbies, hoteles y tiendas: gran formato con costo eficiente y color uniforme.',
        },
        {
          title: 'Diseño slim y silencioso',
          desc: 'Gabinetes delgados de montaje empotrado o suspendido, sin ventiladores ruidosos en espacios premium.',
        },
        {
          title: 'Gestión de contenido incluida',
          desc: 'Configuración Nova Star / Linsn, capacitación de tu equipo y actualización remota desde la nube.',
        },
      ],
      fichaHref: '/productos/pantalla-interior/',
    },
  },
  {
    slug: 'pantallas-flexibles',
    title: 'Pantallas Flexibles',
    badge: 'Curva · Creativa',
    desc: 'Módulos curvables para diseños cilíndricos, cóncavos y transparentes en arquitectura de vanguardia.',
    specs: ['Curva', 'Cilíndrica', 'Transparente'],
    href: '/productos/#pantallas-flexibles-detalle',
    visual: 'flexible',
    highlight: false,
    spotlight: {
      intro:
        'Cuando la arquitectura no es plana, la pantalla tampoco debe serlo. Los módulos flexibles se curvan sobre columnas, esquinas y geometrías orgánicas sin perder resolución ni uniformidad de color. Son la herramienta de los proyectos creativos: experiencias inmersivas, retail de autor y arquitectura comercial que busca diferenciarse.',
      features: [
        {
          title: 'Módulos curvables',
          desc: 'Radios de curvatura cerrados en cóncavo y convexo, con magnetos de instalación rápida sobre estructura.',
        },
        {
          title: 'Columnas y cilindros',
          desc: 'Envolventes de 360° para columnas de centros comerciales, casinos y corporativos de doble altura.',
        },
        {
          title: 'Esquinas y diedros',
          desc: 'Uniones a 90° sin costuras visibles para fachadas interiores continuas y cajas de luz volumétricas.',
        },
        {
          title: 'Ingeniería de proyecto',
          desc: 'Render previo, despiece módulo a módulo y supervisión de montaje para que el diseño se cumpla exacto.',
        },
      ],
      fichaHref: '/productos/pantalla-flexible/',
    },
  },
  {
    slug: 'pantallas-eventos',
    title: 'Pantallas para Eventos',
    badge: 'Renta disponible',
    desc: 'Módulos de alta resolución para escenarios, conciertos, convenciones y activaciones de marca.',
    specs: ['Backdrop', 'Escenario', 'Stage LED'],
    href: '/productos/#pantallas-eventos-detalle',
    visual: 'eventos',
    highlight: false,
    spotlight: {
      intro:
        'Un evento no admite segundas tomas. Los módulos para escenario (P3.9 y P4.8, el estándar de la industria) son ligeros, de armado rápido con candados de precisión y alto refresco para transmisión en vivo sin parpadeo. Disponibles en venta para producciones recurrentes o en renta con operador, transporte y desmontaje incluidos.',
      features: [
        {
          title: 'Backdrops de escenario',
          desc: 'Muros LED para conciertos, conferencias y festivales con procesamiento en vivo de múltiples señales.',
        },
        {
          title: 'Renta por día o temporada',
          desc: 'Entrega, montaje, operador durante el evento y desmontaje — tú solo conectas tu contenido.',
        },
        {
          title: 'Alto refresco para cámara',
          desc: '≥ 3,840 Hz: transmisiones y videos sin bandas ni flicker, listo para streaming y pantallas IMAG.',
        },
        {
          title: 'Rigging y seguridad',
          desc: 'Sistemas de colgado certificados, cálculo de cargas y personal con experiencia en producción.',
        },
      ],
    },
  },
  {
    slug: 'pantallas-piso',
    title: 'Pantallas de Piso',
    badge: 'LED Floor',
    desc: 'Pistas de baile interactivas y pisos visuales para eventos, discotecas y shows en vivo.',
    specs: ['P3.9', 'P6.25', 'Interactivo'],
    href: '/productos/#pantallas-piso-detalle',
    visual: 'piso',
    highlight: false,
    spotlight: {
      intro:
        'El piso también puede ser pantalla. Los módulos LED floor soportan hasta 600 kg/m² con superficie antiderrapante y sensores de interactividad opcionales que reaccionan al paso de las personas. Son el centro de atención en pistas de baile, activaciones de marca, museos interactivos y escenarios híbridos piso-muro.',
      features: [
        {
          title: 'Carga de 600 kg/m²',
          desc: 'Estructura reforzada y superficie de policarbonato antiderrapante: soporta multitudes y equipo rodante.',
        },
        {
          title: 'Interactividad por sensores',
          desc: 'Detección capacitiva del paso para efectos que siguen el movimiento — el público se vuelve parte del show.',
        },
        {
          title: 'Pistas de baile y eventos',
          desc: 'Armado modular rápido para bodas, discotecas y festivales, integrado con el contenido del escenario.',
        },
        {
          title: 'Instalación permanente',
          desc: 'Versiones para retail y museos con tráfico continuo, mantenimiento frontal y módulos reemplazables.',
        },
      ],
    },
  },
  {
    slug: 'pantallas-transparentes',
    title: 'Pantallas Transparentes',
    badge: 'Glass LED',
    desc: 'Transparencia de hasta 85% para vitrinas, fachadas de vidrio y aplicaciones arquitectónicas únicas.',
    specs: ['P7.8', 'P10', 'P15.6'],
    href: '/productos/#pantallas-transparentes-detalle',
    visual: 'transparente',
    highlight: false,
    spotlight: {
      intro:
        'Publicidad en la vitrina sin sacrificar la vista del interior. Las pantallas transparentes alcanzan hasta 85% de transparencia con módulos ultraligeros que se integran al cristal existente — la fachada se convierte en medio publicitario de día y de noche, sin obra mayor y sin bloquear la luz natural del local.',
      features: [
        {
          title: 'Hasta 85% de transparencia',
          desc: 'El interior sigue visible: ideal para vitrinas de retail, concesionarias y fachadas corporativas de cristal.',
        },
        {
          title: 'Ultraligeras (≈12 kg/m²)',
          desc: 'Se cuelgan del cancel o la losa sin refuerzo estructural — instalación limpia en plazas y locales rentados.',
        },
        {
          title: 'Brillo para escaparate',
          desc: '2,500 a 4,000 nits: contenido visible de día detrás del cristal y espectacular de noche.',
        },
        {
          title: 'Mantenimiento frontal',
          desc: 'Módulos de acceso frontal con servicio sin desmontar la pantalla ni cerrar el punto de venta.',
        },
      ],
    },
  },
] as const
