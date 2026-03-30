import React from "react"

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-secondary px-4'>
      <div className='max-w-6xl mx-auto text-center'>
        <h1 className='text-5xl md:text-7xl font-bold text-primary mb-6'>
          Welcome to Your Future
        </h1>
        <p className='text-xl md:text-2xl text-primary/80 mb-8 max-w-3xl mx-auto'>
          Experience innovation and excellence with our cutting-edge solutions.
          Transform your ideas into reality with powerful tools and seamless
          design.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button className='bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200'>
            Get Started
          </button>
          <button className='border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-secondary transition-colors duration-200'>
            Learn More
          </button>
        </div>
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-8 h-8 text-secondary'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-primary mb-2'>
              Lightning Fast
            </h3>
            <p className='text-primary/70'>
              Optimized performance for seamless user experience
            </p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-8 h-8 text-secondary'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-primary mb-2'>
              Fully Customizable
            </h3>
            <p className='text-primary/70'>
              Adapt to your needs with flexible configuration
            </p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-8 h-8 text-secondary'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-primary mb-2'>
              Secure & Reliable
            </h3>
            <p className='text-primary/70'>
              Enterprise-grade security you can trust
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
