"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate?: string // Made optional since we're using dynamic countdown
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [targetTime, setTargetTime] = useState<Date | null>(null)

  // Function to get next day's target time (24 hours from now)
  const getNextDayTarget = () => {
    const now = new Date()
    const nextDay = new Date(now.getTime() + 24 * 60 * 60 * 1000) // 24 hours from now
    return nextDay
  }

  useEffect(() => {
    // Initialize target time
    setTargetTime(getNextDayTarget())
  }, [])

  useEffect(() => {
    if (!targetTime) return

    try {
      const calculateTimeLeft = () => {
        const difference = targetTime.getTime() - new Date().getTime()

        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          })
        } else {
          // Time has elapsed, reset to next 24 hours
          const newTarget = getNextDayTarget()
          setTargetTime(newTarget)
          setTimeLeft({
            days: 0,
            hours: 23,
            minutes: 59,
            seconds: 59,
          })
        }
      }

      calculateTimeLeft()
      const timer = setInterval(calculateTimeLeft, 1000)

      return () => {
        clearInterval(timer)
      }
    } catch (error) {
      console.error("Error in countdown timer:", error)
    }
  }, [targetTime])

  return (
    <div className="flex justify-center gap-4 md:gap-6">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-white text-[#E8630A] rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-2xl md:text-3xl font-bold shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
            <span className="transition-all duration-500 ease-in-out">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-sm md:text-base mt-2 font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
