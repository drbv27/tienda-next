import Image from "next/image"
import Link from "next/link"


const ProductCard = ({producto}) => {
    const {id,sku,precio,nombre,imagen,categoria,stock,descuento} = producto

  return (
    <article className={ stock===0 ? "tarjeta agotado" : "tarjeta" }>
        <Link href={`/producto/${id}`} className="tarjeta-enlace">
            <Image src={imagen} width={300} height={300} alt={nombre}/>
            <h3>{nombre}</h3>
      </Link>
      <p className="precio">$ {precio}</p>
      <p className="stock">{stock} unidades</p>
      <span className="categoria">{categoria}</span>
      <button>Agregar</button>
    </article>
  )
}

export default ProductCard
