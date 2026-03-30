import React from "react"

const About = () => {
  return (
    <section className="min-h-screen bg-secondary px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
          About Us
        </h1>
        
        <div className="bg-primary/10 rounded-2xl p-8 mb-12">
          <p className="text-lg text-primary/90 leading-relaxed mb-6">
            We are a team of passionate innovators dedicated to creating exceptional digital experiences. 
            Our mission is to bridge the gap between imagination and reality through cutting-edge technology 
            and thoughtful design.
          </p>
          <p className="text-lg text-primary/90 leading-relaxed">
            Founded on the principles of excellence and innovation, we've been transforming ideas into 
            powerful solutions that make a difference in people's lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-primary/5 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
            <p className="text-primary/80 leading-relaxed">
              To create a world where technology seamlessly enhances human potential, 
              making complex tasks simple and bringing innovative ideas to life.
            </p>
          </div>
          <div className="bg-primary/5 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-primary/80 leading-relaxed">
              To deliver exceptional digital solutions that empower businesses and individuals 
              to achieve their goals through innovation, creativity, and technical excellence.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Innovation</h3>
              <p className="text-primary/70 text-sm">Constantly pushing boundaries and exploring new possibilities</p>
            </div>
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Passion</h3>
              <p className="text-primary/70 text-sm">Driven by love for what we do and commitment to excellence</p>
            </div>
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Integrity</h3>
              <p className="text-primary/70 text-sm">Building trust through transparency and ethical practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
