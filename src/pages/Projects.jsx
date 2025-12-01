import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '/index.css'; 

const Projects = () => {
  return (
    <>
    <div className="container mx-auto px-4">
      <Header />
     <div className="container mx-auto px-4 font" style={{ paddingTop: '2rem' }}>

       
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        
        {/* Featured Project */}
        <div className="rounded-lg p-8 shadow-md mb-12">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-semibold text-green-700">Featured Project</h2>
          </div>
          <div className="flex gap-4">
            <a href="#" className="flex items-center text-green-500 hover:text-green-700">
              <Github className="mr-2" size={20} />
              View Source
            </a>
            <a href="#" className="flex items-center text-green-500 hover:text-green-700">
              <ExternalLink className="mr-2" size={20} />
              Live Demo
            </a>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Example Projects - Replace with your actual projects */}
          {[1, 2, 3, 4].map((project) => (
            <div key={project} className="rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Project {project}</h3>
              <p className="text-green-600 mb-4">
                Description of the project, technologies used, and key features implemented.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-green-500 hover:text-green-700 flex items-center">
                  <Github className="mr-2" size={18} />
                  Code
                </a>
                <a href="#" className="text-green-500 hover:text-green-700 flex items-center">
                  <ExternalLink className="mr-2" size={18} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        
      </div>
      <Footer />
    </div>
    </>

  );
};

export default Projects;