"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Gift, Zap } from "lucide-react"

export default function SimplePrizeSection() {
  const prizes = [
    {
      name: "Pressure Pot",
      image: "/images/Presure pot.png",
      value: "₦50,000",
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "High-Speed Blender",
      image: "/images/blender.png", 
      value: "₦150,000",
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "2 Face Gas Cooker",
      image: "/images/2 face gas cooker.png",
      value: "₦80,000", 
      icon: <Gift className="w-6 h-6" />
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-6 py-2">
            🏆 GRAND PRIZE ALERT! 🏆
          </Badge>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Best Student Goes Home With
            </h2>
            <Trophy className="w-8 h-8 text-yellow-400" />
          </div>
          
          <p className="text-lg md:text-xl font-semibold text-yellow-200 mb-6">
            Over ₦280,000 Worth of Amazing Prizes & Many More! 🎉
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-center">
                <div className="mb-4">
                  <Image
                    src={prize.image}
                    alt={prize.name}
                    width={150}
                    height={150}
                    className="mx-auto object-contain rounded-lg"
                  />
                </div>
                
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-yellow-400">
                    {prize.icon}
                  </div>
                  <h3 className="text-lg font-bold">{prize.name}</h3>
                </div>
                
                <div className="bg-green-500 text-black px-3 py-1 rounded-full inline-block font-bold">
                  Worth {prize.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="bg-white/10 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-xl font-bold mb-2">
              🔥 Win ALL these prizes & many more surprises! 🔥
            </p>
            <p className="text-yellow-200">
              Be the best student and take home incredible prizes!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 