"use client"

import { createContext, useContext, useState } from "react"


//1.crear el canal
//creo una contante con nombre EstadoGlobalContext es igual a createContext(valor inicial)
const CarritoContext = createContext(null)

//atajo para conectarse: en vez de escribir useContext(CarritoContext) en cada archivo
export const useCarrito = () => useContext(CarritoContext)



const CarritoProvider = ({children}) => {
    //2.el estado del carrito vive en un solo lugar
    const[carrito,setCarrito] = useState([])

    const unidades = carrito.reduce((acc,item) => acc+item.cantidad,0)
    const total = carrito.reduce((acc,item) => acc + item.precio*item.cantidad,0)

    const agregar = (producto) => {
        const existe = carrito.some(item => item.id === producto.id)
        if(existe){
            setCarrito(carrito.map( item => item.id===producto.id ? {...item, cantidad:cantidad+1} : item))
        }else{
            setCarrito([...carrito,{...producto,cantidad:1}])
        }
    }

    const quitar = (id) => {
        setCarrito(carrito.filter(item => item.id !== id))
    }

    const vaciar = () => {
        setCarrito([])
    }

    //3. compartir todo lo que este en value lo puede usar cualquier otro componente
  return (
    <CarritoContext.Provider value={{carrito,unidades,total,agregar,quitar,vaciar}}>
      {children}
    </CarritoContext.Provider>
  )
}

export default CarritoProvider
