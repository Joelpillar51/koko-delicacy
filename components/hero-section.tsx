import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Send } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#FFEFDF] to-[#FFF3EA] py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Nigerian Cuisine Background"
          fill
          className="object-cover mix-blend-multiply opacity-30"
          priority
        />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-gray-800 mb-8 md:mb-0">
            <Badge className="mb-4 bg-white text-[#E8630A] hover:bg-gray-100">Limited Spots Available</Badge>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Master the Art of Cooking with Professional Chef
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-600">
              Transform your culinary skills from basic to extraordinary with our comprehensive cooking course. Learn
              from world-class chef and discover the secrets of gourmet cooking.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/payment">
                <Button
                  size="lg"
                  className="bg-[#E8630A] text-white hover:bg-[#d05a09] px-8 py-6 text-lg flex items-center gap-2"
                >
                  <Send size={20} />
                  Join Now on Telegram
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-[#E8630A] text-[#E8630A] hover:bg-[#E8630A]/10 px-8 py-6 text-lg"
              >
                View Course Details
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-[#E8630A] bg-gray-800 overflow-hidden">
                    <Image
                      src={`/${i}.jpg`}
                      alt="Student"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium">
                <span className="font-bold">250+ students</span> already enrolled this month
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#E8630A]/20 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#E8630A]/20 rounded-lg"></div>
              <Image
                src="/images/chef-portrait.jpg"
                alt="Professional Nigerian Chef"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl relative z-10 object-cover h-[500px] transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
