"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Gift, Zap } from "lucide-react"

export default function PrizeSection() {
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
      value: "₦120,000", 
      icon: <Gift className="w-6 h-6" />
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-green-400 rounded-full opacity-25 animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-6 py-2 animate-bounce">
            🏆 GRAND PRIZE ALERT! 🏆
          </Badge>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-12 h-12 text-yellow-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Best Student Goes Home With
            </h2>
            <Trophy className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>
          
          <p className="text-xl md:text-2xl font-semibold text-yellow-200 mb-8">
            Over ₦320,000 Worth of Amazing Prizes & Many More! 🎉
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-2"
            >
              {/* Prize Number Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Prize Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl bg-white/5 p-4">
                <div className="aspect-square relative">
                  <Image
                    src={prize.image}
                    alt={prize.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
              </div>

              {/* Prize Details */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="text-yellow-400">
                    {prize.icon}
                  </div>
                  <h3 className="text-xl font-bold">{prize.name}</h3>
                </div>
                
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-4 py-2 rounded-full inline-block font-bold text-lg">
                  Worth {prize.value}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <p className="text-2xl font-bold mb-4">
              🔥 The student with the highest engagement, best dishes, and most improvement wins ALL these prizes & many more surprises! 🔥
            </p>
            <p className="text-lg text-yellow-200">
              Join now and start cooking your way to victory! Every recipe you master, every question you ask, and every dish you share brings you closer to these incredible prizes and exciting surprises we have in store.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-10 animate-float">
          <div className="text-6xl">🏆</div>
        </div>
        <div className="absolute bottom-1/4 left-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="text-6xl">🎁</div>
        </div>
      </div>
    </section>
  )
} 