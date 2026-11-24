import ProductCard from "./ProductCard"


const Catalogo = ({arrayProductos}) => {
  return (
    <>
        <p>Mostrando {arrayProductos.length} productos</p>
        <section className="grilla">
            {
                arrayProductos.map((prod)=>(
                    <ProductCard key={prod.sku} producto={prod}/>
                ))
            }
        </section>
    </>
  )
}

export default Catalogo
