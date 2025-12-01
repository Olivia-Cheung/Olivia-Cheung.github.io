import React from 'react';
import { Book, Camera, Music } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '/index.css'; // Ensure you have the correct path to your CSS file

const About = () => {
  return (
    <div className="container mx-auto px-4">
        <Header />
        <div className="container mx-auto px-4 font" style={{ paddingTop: '2rem' }}>
               
        <section className="rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4 font">My Journey</h2>
          <p className="font">
            I'm a passionate developer who loves building things for the web. My journey in tech
            started when I first discovered the joy of creating websites in college. Since then,
            I've been constantly learning and growing in this ever-evolving field.
          </p>
          <p className="font">
            When I'm not coding, you can find me exploring new technologies, contributing to
            open-source projects, or sharing my knowledge through blog posts and tutorials.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold font mb-6">Timeline</h2>
          <div className="space-y-6">
           
            <div className="p-6 rounded-lg shadow-md">
              <h3 className="font-semibold font">2024 - Present</h3>
              <p className="font">Software Developer at DXC Technology</p>
            </div>
          
            <div className="p-6 rounded-lg shadow-md">
              <h3 className="font-semibold font">2023-2024</h3>
              <p className="font">Technical Intern at DXC Technology</p>
            </div>
            <div className="p-6 rounded-lg shadow-md">
              <h3 className="font-semibold font">2020-2024</h3>
              <p className="font">Computer Science Graduate</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default About;