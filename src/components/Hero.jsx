import React from 'react'
import { couple } from '../data'
import { venues } from '../data'
import { themeConfig } from '../config/themeConfig'

const Hero = () => {
  const formatDate = () => {
    const { month, day, year } = couple.wedding
    return `${month} ${day}, ${year}`
  }

  const venueName = venues.ceremony.name

  return (
    <div className="relative w-full" style={{ height: '100vh' }}>
      <img 
        src="/assets/images/prenup/prenup-1.png" 
        alt="Hero"
        className="w-full h-full object-cover"
      />
      
      {/* Text Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Couple Names - Styled */}
          <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
            {/* Groom's Name */}
            <div>
              <p className="font-foglihten text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-tight" style={{ color: '#000000' }}>
                {couple.groom.firstName}
              </p>
              <p className="font-ballet text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight -mt-2 sm:-mt-3" style={{ color: '#dc2626' }}>
                {couple.groom.lastName}
              </p>
            </div>
            <p className="caudex-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase leading-tight my-2 sm:my-3" style={{ color: '#000000' }}>
              AND
            </p>
            {/* Bride's Name */}
            <div>
              <p className="font-foglihten text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-tight" style={{ color: '#000000' }}>
                {couple.bride.firstName}
              </p>
              <p className="font-ballet text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight -mt-2 sm:-mt-3" style={{ color: '#dc2626' }}>
                {couple.bride.lastName}
              </p>
            </div>
          </div>

          {/* Date and Venue - Plain Text */}
          <div className="space-y-1 sm:space-y-2">
            <p className="text-sm sm:text-base md:text-lg font-albert" style={{ color: '#000000' }}>
              {formatDate()}
            </p>
            <p className="text-xs sm:text-sm md:text-base font-albert" style={{ color: themeConfig.text.lightBlack }}>
              {venueName}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
