"use client"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaCartShopping,FaRegTrashCan,FaTrashArrowUp } from "react-icons/fa6";
import { useCarrito } from "./CarritoProvider";
import Image from "next/image";


const CarritoSheet = () => {
    //me conecto al wifi y saco todo lo que necesito
    const {carrito,unidades,total,quitar,vaciar,aumentar,disminuir} = useCarrito()
  return (
    <Sheet>
        <SheetTrigger className="btn-carrito flex items-center gap-2">
            <FaCartShopping />
            Carrito ({unidades})
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="text-xl font-bold text-center">Tu carrito</SheetTitle>
                <SheetDescription className="text-right"> {unidades} unidades en total.</SheetDescription>
            </SheetHeader>
            <div id="carrito-lista" className="px-4">
                {carrito.length === 0 && <p className="carrito-vacio">Tu carrito esta vacio</p>}
                {
                    carrito.map(item => (
                        <div className="carrito-item" key={item.id}>
                            <Image src={item.imagen} alt={item.nombre} width={60} height={60}/>
                            <div>
                                <p className="carrito-nombre">{item.nombre}</p>
                                <div className="mt-1 flex items-center">
                                    <button className="btn-menos" onClick={()=>disminuir(item.id)}>-</button>
                                    <span className="mx-1.5 mr-2 text-sm font-semibold">{item.cantidad}</span>
                                    <button className="btn-menos" onClick={()=>aumentar(item.id)}>+</button>
                                    <span className="carrito-detalle ml-2">x ${item.precio}</span>
                                </div>
                            </div>
                            <p className="carrito-subtotal">${(item.cantidad * item.precio).toFixed(2)}</p>
                            <button className="btn-quitar pl-1.5" onClick={()=>quitar(item.id)}>
                                <FaRegTrashCan />
                            </button>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col gap-3 p-4">
                <p className="carrito-total">Total: ${total.toFixed(2)}</p>
                <button 
                    className="btn-vaciar flex items-center gap-3 justify-center text-lg"
                    onClick={vaciar}
                > 
                    Vaciar Carrito <FaTrashArrowUp />
                </button>
            </div>
            <SheetFooter className="text-right text-xs font-bold text-gray-400">
                La tienda de la esquina 2026
            </SheetFooter>
        </SheetContent>

    </Sheet>
  )
}

export default CarritoSheet
