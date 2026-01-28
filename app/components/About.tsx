import React from 'react'

const About = () => {
  return (
    <section className="about-section py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2> */}
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              {/* Profile Avatar */}
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="assets/profile-avatar.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bio Text */}
              <div className="flex-1">
                <p className="text-gray-600 text-lg leading-relaxed">
                  I am Bolby Doe, web developer from London, United Kingdom. 
                  I have rich experience in web site design and building and customization, 
                  also I am good at WordPress.
                </p>
                
                {/* Download CV Button */}
                <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                  Download CV
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Skills */}
          <div className="space-y-6">
            {/* Development */}
            <div className="skill-item">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">Development</span>
                <span className="text-gray-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            {/* UI/UX Design */}
            <div className="skill-item">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">UI/UX Design</span>
                <span className="text-gray-600">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-red-500 h-3 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            {/* Photography */}
            <div className="skill-item">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">Photography</span>
                <span className="text-gray-600">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          {/* Projects Completed */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">198</h3>
            <p className="text-gray-600">Projects completed</p>
          </div>
          
          {/* Cup of Coffee */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v10H3V11z" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">5670</h3>
            <p className="text-gray-600">Cup of coffee</p>
          </div>
          
          {/* Satisfied Clients */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">427</h3>
            <p className="text-gray-600">Satisfied clients</p>
          </div>
          
          {/* Nominees Winner */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.26 14.51l4.92-3.21L12 15.8l2.82-4.5 4.92 3.21L12 8 4.26 14.51z" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">35</h3>
            <p className="text-gray-600">Nominees winner</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
