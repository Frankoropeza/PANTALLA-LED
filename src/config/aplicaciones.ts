// ============================================================
// PANTALLA LED — Aplicaciones / sectores (fuente de verdad)
// Consumido por:
//   · pages/aplicaciones.astro      (L2 + schema ItemList)
//   · config/site.ts → APPLICATIONS (mega menú, derivado)
// Los `slug` son anclas públicas (/aplicaciones/#<slug>).
// ============================================================

export interface AplicacionFeature {
  title: string
  desc: string
}

export interface PantallaRecomendada {
  label: string
  /** ancla al spotlight de categoría en /productos/ */
  href: string
}

export interface Aplicacion {
  slug: string
  title: string
  badge: string
  desc: string
  /** Párrafo editorial SEO del spotlight */
  intro: string
  features: AplicacionFeature[]
  pantallas: PantallaRecomendada[]
}

export const APLICACIONES: readonly Aplicacion[] = [
  {
    slug: 'publicidad-exterior',
    title: 'Publicidad Exterior',
    badge: 'DOOH · Espectaculares',
    desc: 'Espectaculares digitales, vallas y fachadas que venden las 24 horas con el costo por impacto más bajo del medio.',
    intro:
      'La publicidad exterior digital (DOOH) renta el mismo espacio muchas veces: un espectacular LED rota anuncios de varios clientes o campañas propias sin costos de impresión ni instalación por cambio. Con brillo de 6,000 a 10,000 nits y operación remota, tu punto se vuelve un activo que genera ingresos todos los días — visible a plena luz del sol y programable por horario.',
    features: [
      {
        title: 'Espectaculares en azotea',
        desc: 'P8 y P10 de gran formato para vías rápidas: estructura, permisos de anclaje e instalación certificada incluidos.',
      },
      {
        title: 'Vallas y muros digitales',
        desc: 'P6 para avenidas y cruceros de alto tráfico: rotación de campañas y reportes de reproducción por anunciante.',
      },
      {
        title: 'Fachadas comerciales',
        desc: 'P4 y P5 sobre frente de tienda: el local se anuncia solo y amortiza la pantalla con su propio tráfico.',
      },
      {
        title: 'Operación remota',
        desc: 'Cambia el contenido desde la nube, programa por horarios y monitorea el estado del equipo sin ir al sitio.',
      },
    ],
    pantallas: [
      { label: 'Pantallas Exteriores', href: '/productos/#pantallas-exteriores-detalle' },
      { label: 'Transparentes', href: '/productos/#pantallas-transparentes-detalle' },
    ],
  },
  {
    slug: 'eventos-espectaculos',
    title: 'Eventos y Espectáculos',
    badge: 'Producción · En vivo',
    desc: 'Backdrops de escenario, pantallas IMAG y pisos LED para conciertos, festivales, congresos y activaciones.',
    intro:
      'En producción en vivo la pantalla es la escenografía. Los módulos P3.9 y P4.8 de alto refresco (≥3,840 Hz) se ven impecables en cámara y streaming, se arman en horas con candados de precisión y procesan múltiples señales en vivo. Disponibles en venta para producciones recurrentes o en renta con operador — del backdrop principal a pisos interactivos y pantallas laterales IMAG.',
    features: [
      {
        title: 'Escenarios y festivales',
        desc: 'Muros principales y laterales con procesamiento en vivo, rigging certificado y cálculo de cargas.',
      },
      {
        title: 'Congresos y corporativos',
        desc: 'Backdrops de conferencia con resolución para texto fino, soporte de presentaciones y señal en vivo.',
      },
      {
        title: 'Activaciones de marca',
        desc: 'Formatos creativos: pisos interactivos, columnas y túneles LED que el público fotografía y comparte.',
      },
      {
        title: 'Renta llave en mano',
        desc: 'Transporte, montaje, operador durante el evento y desmontaje — tú solo entregas el contenido.',
      },
    ],
    pantallas: [
      { label: 'Pantallas para Eventos', href: '/productos/#pantallas-eventos-detalle' },
      { label: 'Pantallas de Piso', href: '/productos/#pantallas-piso-detalle' },
    ],
  },
  {
    slug: 'centros-comerciales',
    title: 'Centros Comerciales',
    badge: 'Retail · Plazas',
    desc: 'Pantallas de patio central, directorios digitales y vitrinas transparentes que activan la plaza completa.',
    intro:
      'En un centro comercial la pantalla cumple doble función: ambienta el espacio y vende espacios publicitarios a los locatarios. Las pantallas interiores fine pitch del patio central, las columnas envolventes y las vitrinas transparentes convierten el tráfico peatonal en impactos medibles — con contenido administrable por la operadora de la plaza y reportes para los anunciantes.',
    features: [
      {
        title: 'Patio central de doble altura',
        desc: 'P3 y P4 de gran formato visibles desde varios niveles: eventos de plaza, marcas ancla y temporadas.',
      },
      {
        title: 'Columnas envolventes',
        desc: 'Módulos flexibles de 360° que convierten columnas estructurales en medios publicitarios premium.',
      },
      {
        title: 'Vitrinas transparentes',
        desc: 'Hasta 85% de transparencia sobre el cristal del local: publicidad sin bloquear la vista del interior.',
      },
      {
        title: 'Red administrable',
        desc: 'Varias pantallas, un solo control: programación centralizada por zonas y horarios con reportes.',
      },
    ],
    pantallas: [
      { label: 'Pantallas Interiores', href: '/productos/#pantallas-interiores-detalle' },
      { label: 'Flexibles', href: '/productos/#pantallas-flexibles-detalle' },
      { label: 'Transparentes', href: '/productos/#pantallas-transparentes-detalle' },
    ],
  },
  {
    slug: 'restaurantes-hoteles',
    title: 'Restaurantes y Hoteles',
    badge: 'Hospitality',
    desc: 'Menu boards, ambientación premium y salones de eventos con imagen de nivel hotelero.',
    intro:
      'En hospitality la pantalla es parte de la experiencia. Un menu board LED actualiza precios y fotografías al instante; una pantalla ambiental en el lobby proyecta la identidad de la marca; y el salón de eventos con muro LED se renta mejor que uno con proyector. Equipos interiores P2.5 a P4 silenciosos, slim y con color calibrado para verse premium a corta distancia.',
    features: [
      {
        title: 'Menu boards digitales',
        desc: 'Cambia precios, fotos y promociones por horario sin reimprimir — desayuno, comida y cena automáticos.',
      },
      {
        title: 'Lobbies y recepciones',
        desc: 'Pantallas ambientales slim con contenido de marca, eventos del día e información para huéspedes.',
      },
      {
        title: 'Salones de eventos',
        desc: 'Muros LED para bodas y congresos: el salón se renta mejor equipado y sin pantallas de renta externas.',
      },
      {
        title: 'Operación silenciosa',
        desc: 'Gabinetes sin ventiladores ruidosos y mantenimiento frontal sin interrumpir el servicio.',
      },
    ],
    pantallas: [
      { label: 'Pantallas Interiores', href: '/productos/#pantallas-interiores-detalle' },
      { label: 'Flexibles', href: '/productos/#pantallas-flexibles-detalle' },
    ],
  },
  {
    slug: 'estadios-deportivos',
    title: 'Estadios y Deportivos',
    badge: 'Sports venues',
    desc: 'Marcadores, pantallas perimetrales y videowalls de estadio con visibilidad desde cualquier butaca.',
    intro:
      'Un estadio moderno monetiza cada segundo de partido. Los marcadores LED muestran estadísticas y repeticiones; las pantallas perimetrales rotan patrocinadores por minuto de juego; y los videowalls de explanada reciben al público desde el acceso. Equipos exteriores IP65 de alto brillo y alto refresco, diseñados para transmisión televisiva y operación intensiva.',
    features: [
      {
        title: 'Marcadores y videomarcadores',
        desc: 'Gran formato P6–P10 con integración de estadísticas, repeticiones y cámaras en vivo.',
      },
      {
        title: 'Perimetrales de cancha',
        desc: 'Módulos de banda publicitaria con rotación de patrocinadores y certificación para transmisión.',
      },
      {
        title: 'Explanadas y accesos',
        desc: 'Pantallas de bienvenida, información de boletos y activaciones de patrocinadores en zonas de flujo.',
      },
      {
        title: 'Operación de partido',
        desc: 'Capacitación del equipo de producción, soporte en sitio durante eventos y póliza de mantenimiento.',
      },
    ],
    pantallas: [
      { label: 'Pantallas Exteriores', href: '/productos/#pantallas-exteriores-detalle' },
      { label: 'Para Eventos', href: '/productos/#pantallas-eventos-detalle' },
    ],
  },
  {
    slug: 'educacion',
    title: 'Educación',
    badge: 'Universidades · Auditorios',
    desc: 'Auditorios, aulas magnas y señalización de campus con presupuestos y soporte institucionales.',
    intro:
      'Las instituciones educativas reemplazan proyectores por LED: sin lámparas que cambiar, visible con luces encendidas y con vida útil de más de 100,000 horas. Del auditorio principal a la señalización del campus, entregamos proyectos con factura institucional, capacitación al personal técnico de la institución y pólizas de mantenimiento anuales que protegen el presupuesto.',
    features: [
      {
        title: 'Auditorios y aulas magnas',
        desc: 'P2.5 y P3 con resolución para texto y diagramas legibles desde la última fila, sin apagar las luces.',
      },
      {
        title: 'Señalización de campus',
        desc: 'Pantallas exteriores de avisos, eventos y orientación en accesos y plazas centrales.',
      },
      {
        title: 'Transmisión híbrida',
        desc: 'Integración con cámaras y videoconferencia para clases y ceremonias presenciales + remotas.',
      },
      {
        title: 'Compra institucional',
        desc: 'Cotización formal para comités, factura electrónica, capacitación técnica y garantía documentada.',
      },
    ],
    pantallas: [
      { label: 'Pantallas Interiores', href: '/productos/#pantallas-interiores-detalle' },
      { label: 'Exteriores', href: '/productos/#pantallas-exteriores-detalle' },
    ],
  },
] as const
