import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#6f574d] px-4 md:px-16 lg:px-28'>
  <div className='container mx-auto pt-16 pb-8 md:px-8 lg:pt-20'>
    <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4'>
      <div>
        <img src="/images/logo.jpg" alt="logo" className="h-12 w-auto" />
        <p className='mt-4 max-w-xs text-sm text-[#EADDD7]'>
          Artisan coffee roasters dedicated to sourcing, roasting, and serving
          the finest specialty coffees from around the world.
        </p>
           <div className="mt-6 flex gap-4 text-[#EADDD7]"> 
            <a href="#" className="rounded-full bg-primary-800 p-2 transition-colors hover:bg-primary-700" aria-label="Instagram">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z">
            </path>
            </svg> 
            </a>
            <a href="#" className="rounded-full bg-primary-800 p-2 transition-colors hover:bg-primary-700" aria-label="Twitter"> 
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
            </path>
            </svg> 
            </a>
            <a href="#" className="rounded-full bg-primary-800 p-2 transition-colors hover:bg-primary-700" aria-label="Facebook"> 
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z">
            </path>
            </svg> 
            </a> 
          </div>
         </div>
        <div className="text-[#EADDD7]">
          <h2 className="mb-4 font-semibold">Menu</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white">espresso Drinks</a>
            </li>
            <li>
              <a href="/menu" className="hover:text-white">pour over</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">Pasteries</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">Cold Drinks</a>
            </li>
          </ul>
        </div>
          <div className="text-[#EADDD7]">
          <h2 className="mb-4 font-semibold">Shop</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white">Coffee Beans</a>
            </li>
            <li>
              <a href="/menu" className="hover:text-white">Subscription</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">Marchandise</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">Gift Cards</a>
            </li>
          </ul>
        </div>
                  <div className="text-[#EADDD7]">
          <h2 className="mb-4 font-semibold">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white">Our Story</a>
            </li>
            <li>
              <a href="/menu" className="hover:text-white">Location</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">Conatct</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">Careers</a>
            </li>
          </ul>
        </div>
         </div>
         </div>
         <hr className='border-[#EADDD7]/40' />

  <div className="grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3 text-[#EADDD7]">
    <div>
      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider">Hours</h4>
      <p className="text-sm">Mon-Fri: 7am - 7pm</p>
      <p className="text-sm">Sat-Sun: 8am - 6pm</p>
    </div>
    <div>
      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider">Contact</h4>
      <p className="text-sm">hello@roastandco.com</p>
      <p className="text-sm">(555) 234-5678</p>
    </div>
    <div>
      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider">Flagship Location</h4>
      <p className="text-sm">123 Roastery Lane</p>
      <p className="text-sm">Portland, OR 97201</p>
    </div>
  </div>

  <hr className="border-[#EADDD7]/30" />

  <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-[#EADDD7] md:flex-row">
    <p>© 2026 Coffee Roasters. All rights reserved.</p>
    <div className="flex gap-6">
      <a href="/privacy" className="hover:text-white">Privacy Policy</a>
      <a href="/terms" className="hover:text-white">Terms &amp; Conditions</a>
    </div>
  </div>

    </footer>
  )
}

export default Footer
