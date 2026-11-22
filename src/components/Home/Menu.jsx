import React from 'react'
import { menuSections } from "../../MenuData" // Updated to match imported name

export default function Menu() {
  return (
    <section id='menu' className="bg-[#0a0e17] text-slate-300 py-20 px-4 sm:px-8 lg:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Main Header */}
        <div className="text-center space-y-3">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Our Menu
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Handcrafted drinks and fresh-baked goods, made with love
          </p>
        </div>

        {/* Menu Sections */}
        <div className="space-y-14">
          {menuSections?.map((section, idx) => (
            <div key={idx} className="space-y-6">
              
              {/* Category Subheader */}
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-white">
                  {section.category}
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                  {section.subtitle}
                </p>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.items?.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-[#131926] border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4 shadow-md hover:border-slate-700 transition-colors"
                  >
                    {/* Item Thumbnail */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover flex-shrink-0"
                    />

                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-white text-sm font-semibold truncate">
                          {item.name}
                        </h3>
                        <span className="text-white text-sm font-medium">
                          {item.price}
                        </span>
                      </div>

                      <p className="text-slate-400 text-xs mt-1 leading-snug truncate">
                        {item.description}
                      </p>

                      {/* Badges & Tags */}
                      {(item.popular || item.tags) && (
                        <div className="flex flex-wrap items-center gap-1.5 mt-2">
                          {item.popular && (
                            <span className="bg-amber-400 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded-full">
                              Popular
                            </span>
                          )}
                          {item.tags?.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="bg-slate-800/90 text-slate-300 text-[10px] px-2 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center pt-4">
          <button
            type="button"
            className="inline-flex items-center justify-center px-7 py-2.5 border border-slate-700 hover:border-slate-400 text-white text-xs sm:text-sm font-medium rounded-full transition-colors"
          >
            View Full Menu
          </button>
        </div>

      </div>
    </section>
  );
}
