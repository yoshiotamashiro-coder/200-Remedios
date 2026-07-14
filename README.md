# Los 200 Remedios Naturales

Catálogo web de remedios naturales (tés, tónicos, elixires, compresas y más), extraídos y estructurados a partir de la colección "Los 200 Remedios Naturales" y su sección de remedios rápidos.

- 193 remedios en 14 categorías (sistemas del cuerpo)
- Búsqueda por nombre, síntoma o ingrediente
- Filtro por categoría y por remedios rápidos
- Página de detalle con ingredientes, preparación, dosis y precauciones

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Datos estáticos en `src/data/recipes.json`

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run start
```

## Datos

Los datos en `src/data/recipes.json` fueron extraídos y limpiados a partir de los PDFs originales. Cada remedio incluye: categoría, título, descripción, ideal para, tipo, cuándo usarlo, precauciones, ingredientes, instrucciones, dosis y almacenamiento.
