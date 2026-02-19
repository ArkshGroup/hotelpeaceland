import React from 'react'

interface heroProps{
    title:string,
    list1:string,
    list2:string,
    list3?:string
}
const HeroSection = ({ title, list1, list2 ,list3 }: heroProps) => {
  return (
    <section
      className="min-h-[16rem] md:min-h-[24rem] bg-cover bg-center relative flex items-center justify-center page-offset"
      style={{ backgroundImage: "url(/room18.jpg)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2556A5]/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-4 py-8 md:py-12 text-center">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
          {title}
        </h1>

        <nav className="flex items-center justify-center flex-wrap gap-x-2 text-white mt-4 text-sm">
          <span className='text-sm'>{list1} ›</span>
          <span className="font-bold text-sm">{list2}</span>
          {list3?<span className='font-bold text-sm'>› {list3}</span>:''}
        </nav>
      </div>
    </section>
  );
};


export default HeroSection
