import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation";
import { FaArrowLeft, FaRegStar, FaStar, FaTruck } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const ProductPage = async ({ params }) => {
    const { id } = await(params)
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    if(!res.ok) notFound()
    const pdt = await res.json()
    //console.log(pdt)

    const descuento = Math.round(pdt.discountPercentage)
    const precioAntes = (pdt.price/(1-pdt.discountPercentage/100)).toFixed(2)
    const colorStock = pdt.stock === 0 ? "text-red-600" : pdt.stock < 10 ? "text-yellow-600" : "text-green-600" 
    const textoStock = pdt.stock === 0 ? "Agotado" : `${pdt.stock} unidades disponibles`



  return (
      <main>
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
                {pdt.brand && <p className="text-sm uppercase tracking-wide text-gray-400">{pdt.brand}</p>}
                <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(n => (
                        n <= Math.round(pdt.rating)
                            ? <FaStar key={n} className="text-yellow-400" />
                            : <FaRegStar key={n} className="text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">{pdt.rating} / 5</span>
                </div>

                <p className="text-gray-600">{pdt.description}</p>

                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-3xl font-extrabold text-orange-600">$ {pdt.price.toFixed(2)}</span>
                    {
                        descuento > 0 && (
                            <>
                                <span className="text-lg text-gray-400 line-through">$ {precioAntes}</span>
                                <span className="rounded-full bg-red-100 px-2 py-1 text-sm font-bold text-red-700">- {descuento}%</span>
                            </>
                        )
                    }
                </div>

                <p className={`text-sm font-semibold ${colorStock}`}>{textoStock}</p>

                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3 text-sm">
                    <FaTruck className="text-orange-600"/>
                    {pdt.shippingInformation}
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-red-50 p-3 text-sm">
                    <FaShield className="text-red-600"/>
                    {pdt.warrantyInformation}
                </div>
                <div className="flex items-center gap-3">
                    {pdt.tags.map((tag)=>(
                        <p key={tag} className="text-xs rounded-lg bg-orange-50 px-1 py-0.5 text-orange-700 font-semibold">{tag}</p>
                    ))}
                </div>
                <Accordion defaultValue={["item-1"]}>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Comments:</AccordionTrigger>
                        <AccordionContent>
                            {pdt.reviews.map((review,index)=>(
                                <div key={index}>
                                    <h4 className="text-sm font-semibold">{review.reviewerName} <span className="text-orange-700 font-bold">{review.rating}</span></h4>
                                    <p className="text-xs text-gray-600">{review.comment} - {review.date}</p>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </main>
  )
}

export default ProductPage
