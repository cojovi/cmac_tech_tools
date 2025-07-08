import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Clock, MapPin } from 'lucide-react';
import { projects } from '../../data/projects';

const ProjectsGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial'>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const featuredProjects = projects.filter(project => project.featured);
  
  const filteredProjects = activeFilter === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' }
  ] as const;

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Recent <span className="text-teal-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Explore our latest transformations showcasing the perfect blend of industrial 
            craftsmanship and modern design innovation.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-teal-500/50 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Before/After Images */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2">
                  {/* Before Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.beforeImage}
                      alt={`${project.title} - Before`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-red-500/80 text-white text-sm font-medium rounded-full">
                      Before
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.afterImage}
                      alt={`${project.title} - After`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-teal-500/80 text-white text-sm font-medium rounded-full">
                      After
                    </div>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-teal-500/20 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* View Button */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  hoveredProject === project.id ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                }`}>
                  <button className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-teal-400 hover:text-white transition-colors">
                    <Eye className="w-5 h-5" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'residential'
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      : 'bg-lime-500/20 text-lime-400 border border-lime-500/30'
                  }`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 group"
          >
            <span className="text-lg font-semibold">View All Projects</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;