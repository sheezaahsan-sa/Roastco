import React, { useState } from 'react'

const Club = () => {

  const [email,setEmail]= useState('')

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Subscribed:', email)
    setEmail('')
  }
  return (
    <div>
    <section className='w-full min-h-[400px] bg-primary-50 pt-24 pb-16 dark:bg-gray-900'>
  <div className='mx-auto max-w-2xl text-center'>
    <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-gray-800'>
    <svg className="h-8 w-8 text-[#EADDD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  </div>

  <h1 className='mt-6 font-serif text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl'>
    Join the Club
  </h1>
  <p className='mt-4 text-gray-600 dark:text-gray-400 w-150'>
    Get exclusive offers, brewing tips, and first access to new roasts. Plus, 10% off your first order.
  </p>
   <form onSubmit={handleSubmit} className='mx-auto mt-8 max-w-xl'>
      <div className='flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-4'>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
          className='w-full rounded-full border border-gray-700 bg-gray-800 px-6 py-3.5 text-sm text-white placeholder-gray-400 outline-none transition-colors focus:border-[#8a6b5e] focus:ring-2 focus:ring-[#8a6b5e]/40 sm:w-80'
        />
        <button
          type='submit'
          className='w-full whitespace-nowrap rounded-full bg-[#8a6b5e] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6f574d] sm:w-auto'
        >
          Subscribe
        </button>
      </div>
      <p className='mt-4 text-center text-xs text-gray-400'>
        Join 5,000+ coffee lovers. Unsubscribe anytime.
      </p>
    </form>
       </div>
      </section>
    </div>
  )
}

export default Club
