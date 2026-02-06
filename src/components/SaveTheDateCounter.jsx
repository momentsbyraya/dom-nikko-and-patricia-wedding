import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getTimeUntilWedding } from '../utils/countdown'
import { themeConfig } from '../config/themeConfig'
import { couple } from '../data'
import './pages/Details.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const SaveTheDateCounter = () => {
  const [countdown, setCountdown] = useState(getTimeUntilWedding())
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const countdownRef = useRef(null)

  // Update countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getTimeUntilWedding())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Scroll-triggered animations
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    if (countdownRef.current) {
      gsap.fromTo(
        '.countdown-number',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: countdownRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const formatDate = () => {
    const { month, day, year } = couple.wedding
    return `${month} ${day}, ${year}`
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-white"
    >
      <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            ref={titleRef}
            className="font-foglihten text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize"
            style={{ color: themeConfig.text.burntOrange }}
          >
            Save The Date
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-albert mt-4" style={{ color: themeConfig.text.lightBlack }}>
            {formatDate()}
          </p>
        </div>

        {/* Countdown Timer */}
        <div ref={countdownRef} className="flex justify-center items-center space-x-3 sm:space-x-4 md:space-x-6 px-4">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl imperial-script-regular mb-1 countdown-number not-italic" style={{ color: themeConfig.text.burntOrange }}>
              {countdown.days}
            </div>
            <div className="text-xs sm:text-sm font-albert opacity-80 font-medium" style={{ color: themeConfig.text.lightBlack }}>Days</div>
          </div>
          
          <div className="text-2xl sm:text-3xl md:text-4xl font-albert font-thin" style={{ color: themeConfig.text.burntOrange }}>:</div>
          
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl imperial-script-regular mb-1 countdown-number not-italic" style={{ color: themeConfig.text.burntOrange }}>
              {countdown.hours}
            </div>
            <div className="text-xs sm:text-sm font-albert opacity-80 font-medium" style={{ color: themeConfig.text.lightBlack }}>Hours</div>
          </div>
          
          <div className="text-2xl sm:text-3xl md:text-4xl font-albert font-thin" style={{ color: themeConfig.text.burntOrange }}>:</div>
          
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl imperial-script-regular mb-1 countdown-number not-italic" style={{ color: themeConfig.text.burntOrange }}>
              {countdown.minutes}
            </div>
            <div className="text-xs sm:text-sm font-albert opacity-80 font-medium" style={{ color: themeConfig.text.lightBlack }}>Minutes</div>
          </div>
          
          <div className="text-2xl sm:text-3xl md:text-4xl font-albert font-thin" style={{ color: themeConfig.text.burntOrange }}>:</div>
          
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl imperial-script-regular mb-1 countdown-number not-italic" style={{ color: themeConfig.text.burntOrange }}>
              {countdown.seconds}
            </div>
            <div className="text-xs sm:text-sm font-albert opacity-80 font-medium" style={{ color: themeConfig.text.lightBlack }}>Seconds</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SaveTheDateCounter
