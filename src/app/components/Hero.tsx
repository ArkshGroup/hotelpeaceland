import React from 'react'

const Hero = () => {
  return (
     <div className="min-h-screen bg-cover bg-center page-offset flex flex-col items-center justify-center" style={{ backgroundImage: "url('/HeroImage.jpg')" }}>
      <div className="bg-black/30 w-full min-h-full flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <p className="text-base md:text-lg font-normal text-white">JUST A MOMENTS AWAY FROM THE MAYA DEVI <br className="hidden sm:block" /> TEMPLE</p>
          <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Welcome to HOTEL PEACELAND</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4 my-8">
          <a href="/booknow" className="border-0 bg-[#2556A5] rounded-3xl text-white font-semibold px-8 py-3 hover:bg-[#1e4687] transition">Book Now</a>
          <a href="/rooms" className="border-2 border-white rounded-3xl text-white px-8 py-3 hover:bg-white/10 transition">View Rooms</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
