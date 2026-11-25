# Ecovermis — landing de ventas

Sitio estático con Astro + Tailwind. Textos en español (México). Acción principal: WhatsApp.

## Cómo verla en local

```bash
cd ecovermis-landing
npm install
npm run dev
```

Abre la URL que imprime Astro (por defecto `http://localhost:4321`).

Build de producción:

```bash
npm run build
npm run preview
```

## Qué editar

| Qué | Archivo |
|---|---|
| Textos (headline, precios, FAQ, SEO…) | `src/content.ts` |
| Colores y fuentes | `tailwind.config.mjs` |
| Estilos globales | `src/styles/global.css` |
| Imágenes | `public/img/` (reemplaza los SVG por fotos reales con el mismo nombre) |
| OG social | exporta `public/og.png` 1200×630 (guía: `public/og.svg`) |
| URL del sitio | `astro.config.mjs` → `site` y `src/content.ts` → `site.url` |

## Despliegue

Listo para Vercel (`vercel.json` incluido). Conecta el repo o sube la carpeta; el comando de build es `npm run build` y la salida es `dist/`.
