import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa";


const ProductPage = async ({ params }) => {
    const { sku } = await(params)
    const res = await fetch(`https://dummyjson.com/products/${sku}`)
    const pdt = await res.json()
    //console.log(pdt)

  return (
      <div>
        <Link href="/" className="mb-6 inline-flex items-center gap-2 font-semibold text-orange-700 hover:underline">
            <FaArrowLeft /> Volver
        </Link>
        <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-md md:grid-cols-2 mt-2">
            <Image
                src={pdt.images[0]}
                alt={pdt.description}
                width={500}
                height={500}
                className="h-auto w-full self-start rounded-xl bg-orange-50"
                />
            <div className="flex flex-col gap-4">
                <span className="self-start rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold capitalize text-orange-700">
                    {pdt.category}
                </span>
                <h1 className="text-3xl font-bold">{pdt.title}</h1>
                <p>{pdt.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductPage
