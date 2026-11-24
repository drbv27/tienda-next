import Catalogo from "./components/Catalogo"

const URL_PRODUCTOS = "https://dummyjson.com/products?limit=50"

const Home = async () => {
  const res = await fetch(URL_PRODUCTOS)
  const data = await res.json()

  const productos = data.products.map((producto)=>({
    id:producto.id,
    sku:producto.sku,
    nombre:producto.title,
    precio:producto.price,
    imagen:producto.thumbnail,
    categoria:producto.category,
    stock:producto.stock,
    descuento:producto.discountPercentage
  }))

  return (
    <>
     <main>
      <Catalogo arrayProductos={productos}/>

     </main>
    </>
  )
}

export default Home
