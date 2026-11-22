import React from 'react';

export default function Story() {
  const stats = [
    { value: '15+', label: 'Years Roasting' },
    { value: '12', label: 'Origin Countries' },
    { value: '3', label: 'Portland Locations' },
    { value: '50k+', label: 'Happy Customers' },
  ];

  return (
    <section id='story' className="bg-[#0b101d] text-slate-300 min-h-screen py-16 px-6 sm:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Wider, Shorter Image with Overlapping Badge */}
        <div className="relative w-full max-w-xl mx-auto lg:max-w-none pb-8 sm:pb-10">
          {/* Main Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[340px] sm:h-[400px] w-full">
            <img
              src="/images/img2.jpg"
              alt="Pour over coffee preparation"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Overlapping Stats Card */}
          <div className="absolute bottom-0 right-2 sm:right-4 lg:-right-6 bg-[#151c2c]/95 backdrop-blur-md border border-slate-800/80 p-4 sm:p-5 rounded-2xl shadow-2xl w-60 sm:w-72 z-10">
            <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-tight max-w-[90px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center space-y-6 pt-4 lg:pt-0 pl-0 lg:pl-6">
          <span className="font-serif italic text-slate-400 text-sm tracking-wide">
            Est. 2009
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
            From Portland, With Love
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            What started as a small cart at the Saturday Market has grown into three beloved locations across Portland. But our mission remains the same: to source exceptional coffees, roast them with care, and share them with our community.
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every bag we roast tells a story — of the farmers who grew it, the land that nurtured it, and the hands that brought it to your cup. We believe coffee should be more than just caffeine; it should be an experience.
          </p>

          <div className="pt-2">
            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#8c6152] hover:bg-[#785143] text-white text-xs sm:text-sm font-medium tracking-wide transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8c6152] focus:ring-offset-2 focus:ring-offset-[#0b101d]"
            >
              Learn More About Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}