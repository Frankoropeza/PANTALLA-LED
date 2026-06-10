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
  /** Párrafo editorial SEO para la sección spotlight de /servicios/ */
  intro: string
  features: string[]
}

export const SERVICIOS: readonly Servicio[] = [
  {
    num: '01',
    id: 'venta',
    title: 'Venta de Pantallas LED',
    desc: 'Catálogo completo de pantallas para publicidad exterior, interiores, eventos y aplicaciones especiales. Precios directos de fábrica sin intermediarios.',
    intro:
      'Comprar una pantalla LED es una inversión a 10 años — y el proveedor importa tanto como el equipo. Vendemos directo de fábrica, sin intermediarios, con configuración a la medida exacta de tu espacio: cualquier dimensión, cualquier paso de pixel. Cada venta incluye asesoría de resolución, factura electrónica y garantía de fábrica de 2 años con refacciones en México.',
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
    intro:
      'Para un evento no necesitas comprar: necesitas que la pantalla esté montada, calibrada y funcionando a la hora exacta. Rentamos módulos P3.9 y P4.8 — el estándar de la industria del espectáculo — por día, fin de semana o temporada, con transporte, armado, operador y desmontaje incluidos en CDMX y área metropolitana.',
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
    intro:
      'Una pantalla mal instalada es un riesgo estructural y eléctrico. Nuestros técnicos certificados ejecutan el proyecto completo: ingeniería, fabricación de estructura metálica, cableado bajo norma NOM, montaje y calibración final de color y brillo. Más de 500 instalaciones nos respaldan en azoteas, fachadas, interiores y estadios.',
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
    intro:
      'Las pantallas LED operan miles de horas al año — el mantenimiento preventivo es lo que las mantiene rentables. Ofrecemos pólizas anuales con visitas programadas, limpieza y calibración de módulos, y servicio correctivo de emergencia en 24 horas con refacciones originales en stock para minimizar cualquier tiempo fuera del aire.',
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
    intro:
      'El error más caro es comprar la pantalla equivocada. Antes de cotizar, nuestros ingenieros analizan tu espacio: distancia de visión, luz ambiental, contenido a reproducir y presupuesto, y te entregan una recomendación técnica con análisis de retorno de inversión. El diagnóstico es gratuito y sin compromiso de compra.',
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
    intro:
      'La pantalla es tan buena como el sistema que la controla. Configuramos los procesadores Nova Star y Linsn, dejamos la programación horaria funcionando y capacitamos a tu equipo para operar el contenido sin depender de nadie — con opción de gestión remota desde la nube para actualizar desde cualquier dispositivo.',
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
    intro:
      'El gran formato tiene sus propias reglas: lo que funciona en redes sociales no funciona en un espectacular. Diseñamos piezas optimizadas a la resolución exacta de tu panel — animaciones, video y contenido en loop — adaptando tu identidad de marca para máxima legibilidad e impacto a la distancia real de tu audiencia.',
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
    intro:
      'Nuestra relación no termina con la factura. Gestionamos la garantía de fábrica de 2 años de principio a fin: diagnóstico remoto para resolver rápido, visitas en sitio cuando hace falta y refacciones originales con stock en México. Soporte técnico 24/7 para fallas críticas — tu pantalla nunca se queda sola.',
    features: [
      'Garantía de fábrica de 2 años en todos los equipos',
      'Diagnóstico remoto y visitas en sitio',
      'Refacciones originales con stock en México',
      'Soporte técnico 24/7 ante fallas críticas',
    ],
  },
] as const
