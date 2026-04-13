/**
 * Prefija cualquier ruta interna con el BASE_URL configurado en Astro.
 *
 * - En producción con dominio propio (base: '/'):  url('/productos/') → '/productos/'
 * - En GitHub Pages (base: '/PANTALLA-LED'):       url('/productos/') → '/PANTALLA-LED/productos/'
 *
 * Uso: href={url('/productos/')}  o  href={url(`/servicios/#${id}`)}
 */
// Astro puede entregar BASE_URL con o sin trailing slash según la versión
const rawBase = import.meta.env.BASE_URL as string;
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export const url = (path: string): string =>
  `${base}${path.replace(/^\//, '')}`;
