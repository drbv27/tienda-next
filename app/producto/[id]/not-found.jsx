import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <main>
      <h1 className='mb-4 text-3xl font-bold text-orange-700'>Este producto no existe en el catalogo.</h1>
        <Link href="/" className="mb-6 inline-flex items-center gap-2 font-semibold text-orange-700 hover:underline">
            <FaArrowLeft /> Volver
        </Link>
    </main>
  )
}

export default NotFound

