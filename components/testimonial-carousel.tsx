"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Titi A.",
    location: "Lagos",
    image: "/6.jpg",
    rating: 5,
    text: "I never believed I could make Ofada sauce until this class. My husband thought I ordered it from a restaurant!",
  },
  {
    id: 2,
    name: "Ifeanyi",
    location: "Abuja",
    image: "/5.jpg",
    rating: 5,
    text: "This class made me start my own small food delivery biz. Customers dey rush me now!",
  },
  {
    id: 3,
    name: "Blessing A.",
    location: "Port Harcourt",
    image: "/4.jpg",
    rating: 5,
    text: "From zero cooking skills to chef-level in one week. I'm still shocked!",
  },
  {
    id: 4,
    name: "Chioma O.",
    location: "Enugu",
    image: "/3.jpg",
    rating: 5,
    text: "The recipes are so easy to follow. My jollof rice is now the talk of the family!",
  },
  {
    id: 5,
    name: "Emeka J.",
    location: "Owerri",
    image: "/2.jpg",
    rating: 5,
    text: "As a bachelor, this class changed my life. I no longer spend money eating out!",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const showPreviousTestimonial = () => {
    try {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1))
    } catch (error) {
      console.error("Error navigating testimonials:", error)
    }
  }

  const showNextTestimonial = () => {
    try {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1))
    } catch (error) {
      console.error("Error navigating testimonials:", error)
    }
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full md:w-1/3 flex-shrink-0 px-4">
              <Card className="h-full border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full shadow-lg z-10 border-[#E8630A] text-[#E8630A] hover:bg-[#E8630A] hover:text-white"
        onClick={showPreviousTestimonial}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full shadow-lg z-10 border-[#E8630A] text-[#E8630A] hover:bg-[#E8630A] hover:text-white"
        onClick={showNextTestimonial}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
