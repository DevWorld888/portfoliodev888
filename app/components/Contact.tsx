import React from 'react'

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1> */}
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                Let's talk about everything!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Don't like forms? Send me an{' '}
                <a 
                  href="mailto:your-email@example.com" 
                  className="text-red-500 hover:text-red-600 underline"
                >
                  email
                </a>
                . 📧
              </p>
            </div>
            
            {/* Decorative world map dots */}
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 opacity-20">
                <svg 
                  viewBox="0 0 400 200" 
                  className="w-full h-48"
                >
                  {/* Simplified world map with dots */}
                  <defs>
                    <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="5" cy="5" r="1" fill="#6B7280" />
                    </pattern>
                  </defs>
                  <rect width="400" height="200" fill="url(#dots)" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
            <form className="space-y-6">
              {/* Name and Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 resize-none text-gray-900 placeholder-gray-500"
                  required
                ></textarea>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
