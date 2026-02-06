import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SecondaryButton from './SecondaryButton'
import { couple } from '../data'
import { themeConfig } from '../config/themeConfig'
import './pages/Details.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const RSVPSection = ({ onOpenRSVP }) => {
  const rsvpSectionRef = useRef(null)
  const rsvpTitleRef = useRef(null)
  const rsvpContentRef = useRef(null)

  useEffect(() => {
    // RSVP Section animation
    if (rsvpSectionRef.current) {
      ScrollTrigger.create({
        trigger: rsvpSectionRef.current,
        start: "top 80%",
        animation: gsap.fromTo(rsvpSectionRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        ),
        toggleActions: "play none none reverse"
      })
    }

    // Title animation
    if (rsvpTitleRef.current) {
      ScrollTrigger.create({
        trigger: rsvpTitleRef.current,
        start: "top 80%",
        animation: gsap.fromTo(rsvpTitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        ),
        toggleActions: "play none none reverse"
      })
    }

    // Content animation
    if (rsvpContentRef.current) {
      ScrollTrigger.create({
        trigger: rsvpContentRef.current,
        start: "top 80%",
        animation: gsap.fromTo(rsvpContentRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
        ),
        toggleActions: "play none none reverse"
      })
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && (
          trigger.vars.trigger === rsvpSectionRef.current ||
          trigger.vars.trigger === rsvpTitleRef.current ||
          trigger.vars.trigger === rsvpContentRef.current
        )) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <div ref={rsvpSectionRef} className="relative pb-20 sm:pb-24 md:pb-32">
      <div className="text-center mb-12 sm:mb-16">
        {/* Single Flower 2 Image */}
        <div className="flex justify-center mb-4">
          <img 
            src="/assets/images/graphics/single-flower-2.png" 
            alt="Flower decoration" 
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
          />
        </div>
        <h3 ref={rsvpTitleRef} className="relative inline-block px-6 py-3">
          <span 
            className="font-foglihten text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-block leading-none"
            style={{ fontStyle: 'italic', color: themeConfig.text.burntOrange }}
          >
            RSVP
          </span>
        </h3>
        <div className="w-full max-w-3xl mx-auto mb-4">
          <div className="w-full h-px bg-[#6B8FA3] opacity-40"></div>
        </div>
        <div ref={rsvpContentRef}>
          <p className="text-sm sm:text-base font-albert font-thin text-[#333333] max-w-3xl mx-auto leading-relaxed text-center mb-6">
            As we count the days with hearts so bright,<br />
            Your RSVP helps make everything right.<br />
            Kindly respond on or before<br /><strong className="!font-bold" style={{ fontWeight: 700 }}>{couple.rsvpDeadline ? `${couple.rsvpDeadline.month} ${couple.rsvpDeadline.day}, ${couple.rsvpDeadline.year}` : 'March 7, 2026'}</strong>, we pray.<br />
            For after this date, arrangements are final and must stay.
          </p>
          {onOpenRSVP && (
            <div className="flex justify-center">
              <button
                onClick={onOpenRSVP}
                className="px-6 py-3 bg-[#333333] text-white rounded-lg hover:bg-[#333333]/80 transition-colors duration-200 font-albert"
              >
                RSVP Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RSVPSection
