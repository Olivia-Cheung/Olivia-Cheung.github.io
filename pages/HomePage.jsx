import React from 'react';
import { Github, Mail, Linkedin, BookOpen, Code, Coffee } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <header className="bg-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-32 h-32 rounded-full bg-green-100 mx-auto mb-6 overflow-hidden">
            <img 
              src="/api/placeholder/128/128" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">John Doe</h1>
          <p className="text-xl text-green-100">Full Stack Developer | Open Source Enthusiast</p>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">About Me</h2>
        <p className="text-green-700 text-lg leading-relaxed mb-6">
          Hi there! I'm a passionate developer with 5 years of experience building web applications.
          I specialize in React, Node.js, and cloud architecture. When I'm not coding, you'll find
          me contributing to open source projects or writing technical articles.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-green-800 mb-8">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-green-200">
              <Code className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Web Development</h3>
              <p className="text-green-600">Building responsive and performant web applications with modern technologies.</p>
            </div>

            <div className="p-6 rounded-lg border border-green-200">
              <BookOpen className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Technical Writing</h3>
              <p className="text-green-600">Sharing knowledge through detailed articles and documentation.</p>
            </div>

            <div className="p-6 rounded-lg border border-green-200">
              <Coffee className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Mentoring</h3>
              <p className="text-green-600">Helping others grow their development skills through mentorship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-green-800 mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Project Name</h3>
            <p className="text-green-600 mb-4">A brief description of the project and its impact. What technologies were used and what problems were solved.</p>
            <a href="#" className="text-green-500 hover:text-green-700 font-medium">View Project →</a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Another Project</h3>
            <p className="text-green-600 mb-4">A brief description of another significant project. Highlighting the key features and technical challenges overcome.</p>
            <a href="#" className="text-green-500 hover:text-green-700 font-medium">View Project →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-green-100 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p>Feel free to reach out at <a href="mailto:john@example.com" className="underline hover:text-white">john@example.com</a></p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;