// ============================================================
// PANTALLA LED — Preguntas frecuentes (fuente de verdad)
// Consumido por:
//   · FaqCotizacionIndex.astro  (UI del acordeón)
//   · index.astro               (schema JSON-LD FAQPage)
// Mantener ambos sincronizados editando ÚNICAMENTE este archivo.
// ============================================================

export interface Faq {
  q: string
  a: string
}

export const FAQS: readonly Faq[] = [
  {
    q: '¿Cuánto cuesta una pantalla LED en México?',
    a: 'El precio depende del tamaño, paso de pixel y tipo (interior/exterior). Una pantalla exterior de 2m × 3m con P6 parte desde $25,000 MXN. Las interiores Ultra HD con P2 pueden superar $80,000 MXN para proyectos de mayor formato. Contáctanos para cotización exacta según tu proyecto.',
  },
  {
    q: '¿Qué paso de pixel necesito para mi pantalla?',
    a: 'Depende de la distancia de visión. Para distancias de 3-6 metros usamos P2 o P3 (interior). Para 5-10 metros en exteriores, P4 o P5. Para espectaculares en calles principales, P6 a P10. En eventos, P3.9 o P4.8 son los estándares.',
  },
  {
    q: '¿Cuánto tiempo tarda la instalación?',
    a: 'Una pantalla interior de tamaño estándar se instala en 1-2 días. Un espectacular exterior de 10m² toma de 2 a 4 días incluyendo estructura. Proyectos mayores o en estadios pueden tomar 1-3 semanas. Hacemos el cronograma desde la visita técnica.',
  },
  {
    q: '¿Las pantallas incluyen garantía?',
    a: 'Sí. Todos nuestros equipos tienen garantía de fábrica de 2 años que cubre defectos de manufactura, módulos LED, tarjetas de recepción y fuentes de poder. El servicio de garantía se brinda en sitio, sin costos de traslado adicionales en CDMX y área metropolitana.',
  },
  {
    q: '¿Hacen instalaciones en toda la República?',
    a: 'Sí. Contamos con operación propia en CDMX y Estado de México, y cobertura comercial en toda la República Mexicana. Coordinamos instalaciones en Guadalajara, Monterrey, Puebla, Cancún y otras ciudades con aliados técnicos certificados.',
  },
  {
    q: '¿Rentan pantallas para eventos de un día?',
    a: 'Sí. Ofrecemos renta de módulos LED por día, fin de semana o semana completa. El servicio incluye transporte, armado, operador durante el evento y desarmado. Ideal para conciertos, convenciones, bodas y activaciones de marca.',
  },
  {
    q: '¿Pueden instalar en edificios sin alterar la fachada?',
    a: 'Sí. Diseñamos estructuras de montaje que respetan la integridad del inmueble. Usamos sistemas de anclaje aprobados y, cuando es necesario, coordinamos los permisos con el área de uso de suelo correspondiente.',
  },
  {
    q: '¿Qué software se usa para controlar el contenido?',
    a: 'Trabajamos con sistemas de control Nova Star y Linsn, compatibles con Windows y Android. También integramos soluciones en la nube para actualización remota de contenido desde cualquier dispositivo. Capacitamos a tu equipo sin costo adicional.',
  },
] as const
