export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0a0c14] text-white flex flex-col justify-between items-center p-8">
      
      {/* Content Container */}
      <div className="max-w-5xl w-full my-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Text */}
        <div className="space-y-4">
          <p className="text-stone-400 text-xs">Specialty Coffee Roasters</p>
          <h1 className="text-4xl md:text-5xl font-serif">
            Crafted with <span className="text-amber-100">Passion & Precision</span>
          </h1>
          <p className="text-stone-400 text-sm">
            From bean to cup, we obsess over every detail. Experience specialty coffee the way it was meant to be.
          </p>
          <div className="flex gap-3 pt-2">
            <button className="bg-[#8c6b58] text-xs px-5 py-2.5 rounded-full">View Our Menu</button>
            <button className="border border-stone-600 text-xs px-5 py-2.5 rounded-full">Order Online</button>
          </div>
        </div>

        {/* Circle Image & Yellow Glow */}
        <div className="relative flex justify-center">
          <div className="absolute -bottom-4 left-8 w-24 h-24 bg-yellow-500 rounded-full blur-xl opacity-80" />
          <img 
            src="/images/img5.jpg" 
            alt="Coffee" 
            className="relative w-100 h-100 rounded-full object-cover border border-stone-800"
          />
        </div>

      </div>

      {/* Footer Arrow */}
      <div className="text-stone-500 text-[10px] tracking-widest text-center">
        SCROLL<br />↓
      </div>

    </section>
  );
}
