import Link from "next/link"
import CarritoSheet from "./CarritoSheet"

const Header = () => {
  return (
    <header className="encabezado">
        <button className="btn-header">Modo Oscuro</button>
        <CarritoSheet />
        <h1>Tienda la Esquina</h1>
        <p className="eslogan">Todo lo que necesitas, a la vuelta de la esquina</p>
        <nav className="flex justify-end gap-2">
            <Link 
                href={"/"}
                className="btn-agregar"
            >
                Inicio
            </Link>
            <Link 
                href={"/contacto"}
                className="btn-agregar"
            >
                Contacto
            </Link>
            <Link 
                href={"/acerca"}
                className="btn-agregar"
            >
                Nosotros
            </Link>
            <Link 
                href={"/recursos"}
                className="btn-agregar"
            >
                Recursos
            </Link>
        </nav>
    
    </header>
  )
}

export default Header
