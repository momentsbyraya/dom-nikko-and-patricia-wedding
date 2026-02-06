import React from 'react'
import Hero from './Hero'
import Venue from './Venue'
import Schedule from './Schedule'
import EntourageSection from './EntourageSection'
import RSVPSection from './RSVPSection'
import DressCode from './DressCode'
import PhotoUpload from './PhotoUpload'
import FAQ from './FAQ'
import SaveTheDateCounter from './SaveTheDateCounter'
import Divider from './Divider'
import './pages/Details.css'

const Home = ({ onOpenRSVP }) => {
  return (
    <div className="relative w-full bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Flower Divider */}
      <div className="relative w-full h-16 sm:h-20 md:h-24 flex items-center justify-center">
        <img 
          src="/assets/images/graphics/flower-divider.png" 
          alt="Flower divider"
          className="w-full h-full object-contain"
          style={{ transform: 'scale(2.5) rotate(5deg)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center pt-12 sm:pt-16 md:pt-20 pb-32">
        <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
          {/* Venue Section */}
          <Venue />
        </div>
      </div>

      {/* Flower Divider - Flipped */}
      <div className="relative w-full h-16 sm:h-20 md:h-24 flex items-center justify-center">
        <img 
          src="/assets/images/graphics/flower-divider.png" 
          alt="Flower divider" 
          className="w-full h-full object-contain"
          style={{ 
            transform: 'scale(2.5) rotate(-5deg) scaleY(-1)',
            transformOrigin: 'center'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center pt-12">
        <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
          {/* Schedule Section */}
          <Schedule />
        </div>
      </div>

      {/* Entourage Section */}
      <EntourageSection />

      {/* Flower Divider - Flipped */}
      <div className="relative w-full h-16 sm:h-20 md:h-24 flex items-center justify-center my-8">
        <img 
          src="/assets/images/graphics/flower-divider.png" 
          alt="Flower divider" 
          className="w-full h-full object-contain"
          style={{ 
            transform: 'scale(2.5) rotate(5deg) scaleX(-1) scaleY(-1)',
            transformOrigin: 'center'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center pt-12">
        <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
          {/* Dress Code Section */}
          <DressCode />

          {/* Photo Upload Section (Oh Snap) */}
          <PhotoUpload />

          {/* RSVP Section */}
          <RSVPSection onOpenRSVP={onOpenRSVP} />
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Save The Date Counter Section */}
      <SaveTheDateCounter />

      {/* Graphics with horizontal lines */}
      <div className="mt-12 relative z-20">
        <Divider />
      </div>
    </div>
  )
}

export default Home
