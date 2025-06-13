import Image from "next/image"
import { CheckCircle } from "lucide-react"

interface MenuSectionProps {
  title: string
  description: string
  items: string[]
  image: string
}

export default function MenuSection({ title, description, items, image }: MenuSectionProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="text-[#E8630A] h-5 w-5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <div className="rounded-lg overflow-hidden shadow-xl">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  )
}
