"use client"

import { FaShoppingCart } from "react-icons/fa"
import { useCarrito } from "./CarritoProvider"



const BotonAgregar = ({producto}) => {
    //me conecto al wifi y saco lo que necesito
    const { agregar } = useCarrito()
    //const {agregar } = useContext(CarritoContext) esta es la forma larga

    const agregarCarrito = () => {
        agregar(producto)
    }
  return (
    <button
        className="btn-agregar flex item-center justify-center gap-2"
        disabled={producto.stock===0}
        onClick={agregarCarrito}
    >
      <FaShoppingCart />
      Agregar
    </button>
  )
}

export default BotonAgregar
