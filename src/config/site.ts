// ============================================================
// PANTALLA LED — Configuración global del sitio
// Un único lugar para cambiar datos que aparecen en múltiples páginas
// ============================================================

export const SITE = {
  name: 'PantallaLED',
  tagline: 'Especialistas en pantallas LED para exteriores e interiores — Venta · Renta · Instalación',
  url: 'https://pantalla-led.com.mx',
  description: 'Proveedor especializado en pantallas LED de alta resolución. Venta, renta e instalación para publicidad exterior, eventos, comercios e interiores. Cobertura en toda la República Mexicana.',
  locale: 'es_MX',
} as const

export const CONTACT = {
  phone: '55 0000 0000',
  phoneRaw: '5500000000',
  whatsapp: '525500000000',
  email: 'contacto@pantalla-led.com.mx',
  address: 'Ciudad de México, México',
  mapsUrl: 'https://maps.google.com/?q=Ciudad+de+Mexico',

  schedule: {
    weekdays: 'Lun–Vie  8:00–18:00',
    saturday: 'Sáb  9:00–14:00',
    sunday:   'Dom  Solo urgencias',
    display:  'Lun–Vie 8:00–18:00',
    footer:   'Lun–Vie 8:00–18:00',
  },
} as const

// Mensajes predefinidos de WhatsApp por página
export const WA_MESSAGES = {
  default:    `Hola, necesito información sobre pantallas LED`,
  cotizacion: `Hola, quiero una cotización de pantallas LED`,
  productos:  `Hola, necesito cotizar pantallas LED del catálogo`,
  servicios:  `Hola, necesito información sobre sus servicios de pantallas LED`,
  renta:      `Hola, me interesa rentar pantallas LED para un evento`,
  blog:       `Hola, leí su blog y tengo una pregunta`,
  contacto:   `Hola, necesito cotizar pantallas LED`,
} as const

export function waUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
}

// Categorías de producto (fuente de verdad)
export const PRODUCT_CATEGORIES = [
  { slug: 'pantallas-exteriores',  label: 'Pantallas Exteriores',   badge: 'IP65',       href: '/productos/pantallas-exteriores/'  },
  { slug: 'pantallas-interiores',  label: 'Pantallas Interiores',   badge: null,          href: '/productos/pantallas-interiores/'  },
  { slug: 'pantallas-flexibles',   label: 'Pantallas Flexibles',    badge: 'Curva',       href: '/productos/pantallas-flexibles/'   },
  { slug: 'pantallas-eventos',     label: 'Pantallas para Eventos', badge: 'Renta',       href: '/productos/pantallas-eventos/'     },
  { slug: 'pantallas-piso',        label: 'Pantallas de Piso',      badge: 'LED Floor',   href: '/productos/pantallas-piso/'        },
  { slug: 'pantallas-transparentes', label: 'Pantallas Transparentes', badge: null,       href: '/productos/pantallas-transparentes/' },
] as const

// Servicios (fuente de verdad)
export const SERVICES = [
  { id: 'venta',         label: 'Venta de Pantallas LED',      desc: 'Catálogo completo de pantallas para cada aplicación'   },
  { id: 'renta',         label: 'Renta para Eventos',          desc: 'Renta flexible por día, semana o mes'                  },
  { id: 'instalacion',   label: 'Instalación Profesional',     desc: 'Instalación certificada con técnicos especializados'    },
  { id: 'mantenimiento', label: 'Mantenimiento y Soporte',     desc: 'Servicio preventivo y correctivo 24/7'                 },
  { id: 'asesoria',      label: 'Asesoría Técnica',            desc: 'Te ayudamos a elegir la pantalla ideal para tu proyecto'},
  { id: 'contenido',     label: 'Gestión de Contenido',        desc: 'Configuración y gestión del software de control'       },
] as const

// Aplicaciones / sectores de uso
export const APPLICATIONS = [
  { slug: 'publicidad-exterior',  label: 'Publicidad Exterior',     href: '/aplicaciones/publicidad-exterior/'  },
  { slug: 'eventos-espectaculos', label: 'Eventos y Espectáculos',  href: '/aplicaciones/eventos/'              },
  { slug: 'centros-comerciales',  label: 'Centros Comerciales',     href: '/aplicaciones/centros-comerciales/'  },
  { slug: 'restaurantes-hoteles', label: 'Restaurantes y Hoteles',  href: '/aplicaciones/hospitality/'          },
  { slug: 'estadios-deportivos',  label: 'Estadios y Deportivos',   href: '/aplicaciones/estadios/'             },
  { slug: 'educacion',            label: 'Educación',               href: '/aplicaciones/educacion/'            },
] as const

// Estados / zonas de cobertura
export const COVERAGE_STATES = [
  { slug: 'cdmx',              label: 'Ciudad de México',   type: 'operativo' as const },
  { slug: 'edomex',            label: 'Estado de México',   type: 'operativo' as const },
  { slug: 'guadalajara',       label: 'Guadalajara',        type: 'comercial' as const },
  { slug: 'monterrey',         label: 'Monterrey',          type: 'comercial' as const },
  { slug: 'puebla',            label: 'Puebla',             type: 'comercial' as const },
  { slug: 'cancun',            label: 'Cancún',             type: 'comercial' as const },
] as const

// Subcategorías del mega menú
export const MEGA_SUBCATEGORIES: Record<string, { label: string; slug: string }[]> = {
  'pantallas-exteriores': [
    { label: 'Paso de Pixel P4',  slug: 'p4'  },
    { label: 'Paso de Pixel P5',  slug: 'p5'  },
    { label: 'Paso de Pixel P6',  slug: 'p6'  },
    { label: 'Paso de Pixel P8',  slug: 'p8'  },
    { label: 'Paso de Pixel P10', slug: 'p10' },
  ],
  'pantallas-interiores': [
    { label: 'Ultra HD P2',   slug: 'p2'   },
    { label: 'P2.5',          slug: 'p2-5' },
    { label: 'P3',            slug: 'p3'   },
    { label: 'P4 Interior',   slug: 'p4'   },
  ],
  'pantallas-flexibles': [
    { label: 'Pantalla Curva',          slug: 'curva'        },
    { label: 'Pantalla Transparente',   slug: 'transparente' },
    { label: 'Pantalla Cilíndrica',     slug: 'cilindrica'   },
  ],
  'pantallas-eventos': [
    { label: 'Pantalla para Escenario', slug: 'escenario'    },
    { label: 'Backdrop LED',            slug: 'backdrop'     },
    { label: 'Módulo de Renta',         slug: 'modulo-renta' },
  ],
}
