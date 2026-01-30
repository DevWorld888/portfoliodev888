'use client'
import React, { useState } from 'react'

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('Everything')

  const filters = ['Everything', 'Creative', 'Art', 'Design', 'Branding']
  
  const projects = [
    {
      id: 1,
      title: 'Prisma Coatings',
      category: 'Develope',
      image: '/assets/project1.jpg', // You'll need to add actual images
    },
    {
      id: 2,
      title: 'Agency kword',
      category: 'Design',
      image: '/assets/project2.jpg',
    },
    {
      id: 3,
      title: 'Python project',
      category: 'Art',
      image: '/assets/project3.jpg',
    },
    // {
    //   id: 4,
    //   title: 'Brand Identity',
    //   category: 'Branding',
    //   image: '/assets/project4.jpg',
    // },
    // {
    //   id: 5,
    //   title: 'UI/UX Design',
    //   category: 'Design',
    //   image: '/assets/project5.jpg',
    // },
    // {
    //   id: 6,
    //   title: 'Digital Art',
    //   category: 'Art',
    //   image: '/assets/project6.jpg',
    // },
  ]

  const filteredProjects = activeFilter === 'Everything' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Recent Works
          </h2> */}
          
          {/* Filter Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-red-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div> */}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 flex items-center justify-center">
                {/* Placeholder for actual image */}
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-8 h-8 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                    />
                  </svg>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* View Project Button - appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Project
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">No projects found for this category.</p>
          </div>
        )}

        {/* Load More Button */}
        {/* <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transform hover:scale-105 transition-all duration-300">
            Load More Projects
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default Works
