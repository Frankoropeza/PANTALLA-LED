// ============================================================
// PANTALLA LED — Servicios (fuente de verdad)
// Consumido por:
//   · sections/ServiciosIndex.astro  (lista resumen del index L1)
//   · pages/servicios.astro          (detalle L2 + schema)
// Los `id` son anclas públicas (/servicios/#<id>) — no renombrar
// sin actualizar los enlaces del index y el mega menú.
// ============================================================

export interface Servicio {
  num: string
  id: string
  title: string
  desc: string
  features: string[]
}

export const SERVICIOS: readonly Servicio[] = [
  {
    num: '01',
    id: 'venta',
    title: 'Venta de Pantallas LED',
    desc: 'Catálogo completo de pantallas para publicidad exterior, interiores, eventos y aplicaciones especiales. Precios directos de fábrica sin intermediarios.',
    features: [
      'Pantallas exteriores IP65 e interiores Ultra HD (P2–P10)',
      'Configuración a medida: cualquier dimensión y formato',
      'Precio directo de fábrica con factura electrónica',
      'Garantía de 2 años y refacciones en stock',
    ],
  },
  {
    num: '02',
    id: 'renta',
    title: 'Renta para Eventos',
    desc: 'Módulos LED de alta resolución en renta por día, semana o mes. Ideales para conciertos, convenciones, exposiciones y activaciones de marca.',
    features: [
      'Entrega, montaje y desmontaje incluidos',
      'Operador técnico durante el evento (opcional)',
      'Módulos P3.9 / P4.8 estándar de la industria',
      'Disponible en CDMX y área metropolitana',
    ],
  },
  {
    num: '03',
    id: 'instalacion',
    title: 'Instalación Profesional',
    desc: 'Ingeniería, montaje y puesta en marcha por técnicos certificados. Instalaciones estructurales, eléctricas y de señal bajo norma.',
    features: [
      'Evaluación técnica del sitio sin costo',
      'Diseño y fabricación de estructura metálica',
      'Cableado y conexiones eléctricas bajo norma NOM',
      'Calibración de color, brillo y uniformidad',
    ],
  },
  {
    num: '04',
    id: 'mantenimiento',
    title: 'Mantenimiento y Soporte',
    desc: 'Pólizas preventivas anuales con visitas periódicas. Servicio correctivo en 24 horas. Reemplazo de módulos y componentes originales.',
    features: [
      'Limpieza y calibración de módulos LED',
      'Revisión de fuentes de poder y tarjetas de control',
      'Servicio correctivo de emergencia en 24 horas',
      'Contrato anual con visitas programadas',
    ],
  },
  {
    num: '05',
    id: 'asesoria',
    title: 'Asesoría Técnica',
    desc: 'Diagnóstico de requerimientos sin costo. Te ayudamos a definir paso de pixel, brillo, resolución y tipo de pantalla para tu proyecto específico.',
    features: [
      'Visita técnica y análisis del espacio',
      'Cálculo de paso de pixel según distancia de visión',
      'Propuesta con análisis de retorno de inversión',
      'Acompañamiento posventa permanente',
    ],
  },
  {
    num: '06',
    id: 'contenido',
    title: 'Gestión de Contenido',
    desc: 'Configuración del software de control, capacitación de operadores y soporte para reproducción de contenido. Compatible con sistemas Windows, Android y en la nube.',
    features: [
      'Sistemas Nova Star y Linsn certificados',
      'Actualización remota desde cualquier dispositivo',
      'Capacitación de operadores incluida',
      'Soporte de reproducción y programación horaria',
    ],
  },
  {
    num: '07',
    id: 'diseno',
    title: 'Diseño de Contenido',
    desc: 'Creación de piezas visuales optimizadas para pantalla LED. Animaciones, videos, looping y contenido dinámico adaptado a tu marca.',
    features: [
      'Piezas optimizadas a la resolución exacta del panel',
      'Animaciones, video y contenido en loop',
      'Adaptación de identidad de marca a gran formato',
      'Paquetes mensuales de actualización de contenido',
    ],
  },
  {
    num: '08',
    id: 'garantia',
    title: 'Garantía y Postventa',
    desc: 'Atención postventa ágil. Gestión de garantías de fábrica. Diagnóstico remoto y en sitio. Refacciones originales en stock.',
    features: [
      'Garantía de fábrica de 2 años en todos los equipos',
      'Diagnóstico remoto y visitas en sitio',
      'Refacciones originales con stock en México',
      'Soporte técnico 24/7 ante fallas críticas',
    ],
  },
] as const
