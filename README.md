# Tienda La Esquina

Tienda online construida con **Next.js** durante el curso de Desarrollo Web (Cohorte 2). Muestra un catálogo de productos traído desde una API pública, con página de detalle para cada producto.

Es el mismo proyecto que fuimos construyendo a lo largo del curso: empezó en HTML, CSS y JavaScript, pasó a React y ahora vive en Next.js.

## Qué tiene

- **Catálogo de productos** traído desde [DummyJSON](https://dummyjson.com/docs/products), con el fetch hecho en el servidor (Server Component, sin `useEffect`).
- **Página de detalle por producto** con ruta dinámica (`/producto/[sku]`).
- **Navegación** entre páginas con `Link`: Inicio, Contacto, Nosotros y Recursos.
- **Imágenes optimizadas** con `next/image`.
- **Estilos** con CSS propio de la tienda más clases de Tailwind, e íconos de react-icons.

## Lo que sigue

- [ ] Detalle completo: precio con descuento, rating con estrellas, stock, envío y garantía.
- [ ] Carrito de compras con Context, en un panel lateral (Sheet de shadcn).
- [ ] Publicación en Vercel.

## Tecnologías

| Herramienta | Para qué |
|---|---|
| [Next.js 16](https://nextjs.org) (App Router) | Páginas, rutas y fetch en el servidor |
| [React 19](https://react.dev) | Componentes |
| [Tailwind CSS 4](https://tailwindcss.com) | Clases de utilidad para estilos |
| [shadcn/ui](https://ui.shadcn.com) | Componentes listos (Sheet, Button) |
| [react-icons](https://react-icons.github.io/react-icons/) | Íconos |
| [DummyJSON](https://dummyjson.com) | API de productos de prueba |

## Cómo correrlo en tu computadora

Necesitás [Node.js](https://nodejs.org) 20.9 o más nuevo.

```bash
git clone https://github.com/drbv27/tienda-next.git
cd tienda-next
npm install
npm run dev
```

Después abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura

```
app/
├── page.jsx                 # Inicio: trae los productos y muestra el catálogo
├── layout.jsx               # Header + página + Footer, compartido por todas las páginas
├── producto/[sku]/page.jsx  # Detalle de un producto (ruta dinámica)
├── components/              # Header, Footer, Catalogo, ProductCard
├── acerca/  contacto/  recursos/  carrito/   # Páginas simples
└── globals.css              # Estilos de la tienda + Tailwind
components/ui/               # Componentes de shadcn (Sheet, Button)
```

## Autor

Proyecto de clase del curso de Desarrollo Web, guiado por el profesor **Diego Bonilla**.
