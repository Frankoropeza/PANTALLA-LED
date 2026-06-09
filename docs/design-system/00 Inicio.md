# PantallaLED — Design System

Vault de documentación del sistema de diseño y arquitectura del sitio [pantalla-led.com](https://pantalla-led.com). Abre esta carpeta (`docs/design-system/`) como vault en Obsidian.

> **Regla de oro:** antes de escribir CSS nuevo, busca aquí. Si el patrón ya existe como componente o clase global, **reúsalo**. Solo se escribe CSS scoped para lo verdaderamente único de una sección.

## Mapa del vault

### 01 · Fundamentos
- [[Colores]] — tokens de color, semánticos y reglas de uso
- [[Tipografía]] — fuente, escala fluida, pesos
- [[Layout y Espaciado]] — container, secciones, grid de 8px
- [[Efectos]] — radios, sombras, glows, transiciones

### 02 · Componentes reutilizables
- [[Botones]] — `.btn` y todas sus variantes
- [[Encabezados de Sección]] — SectionHeaderDuo, SectionHeader, sidebar-header
- [[Page Hero]] — hero compacto + breadcrumb para páginas L2
- [[Split Layout]] — layout 2 columnas con sidebar sticky
- [[Tarjetas]] — el patrón card unificado del sitio (incluye CategoryCard)
- [[Iconos]] — componentes Astro de `ui/icons/`
- [[Utilidades]] — link-arrow, stat-row, tabla-seo, chips y badges

### 03 · Secciones del index
- [[Hero]] · [[QuickNav]] · [[Categorías]] · [[Trust]] · [[Servicios]]
- [[Especificaciones]] · [[Proceso]] · [[Reviews]] · [[Cobertura]]
- [[FAQ y Cotización]] · [[CTA Final]] · ([[CtaBar]] — retirada)

### 04 · Arquitectura
- [[Estructura del Proyecto]] — árbol de archivos y responsabilidades
- [[SEO y Datos]] — site.ts, faqs.ts, JSON-LD
- [[Responsive]] — estrategia mobile.css y breakpoints
- [[Convenciones]] — nomenclatura, accesibilidad, qué no hacer

### 05 · Guías
- [[Crear una Página Nueva]] — checklist completo
- [[Crear una Sección Nueva]] — receta paso a paso reusando el sistema

### 06 · Páginas L2
- [[Productos]] — /productos/ (plantilla de referencia L2)

## Estado actual

| Área | Estado |
|---|---|
| Index (`/`) | ✅ Homologado al sistema (jun 2026) |
| `/productos/` | ✅ Migrada a Base + sistema (jun 2026) — referencia L2 |
| `/servicios`, `/contacto`, `/productos/[slug]` | ⚠️ Legacy — usan `Layout.astro` viejo, pendiente migrar |
| Páginas de categoría de producto | ❌ No existen aún (los CTAs ya apuntan a ellas) |
| `/nosotros` | ❌ No existe (TrustIndex enlaza a ella) |
