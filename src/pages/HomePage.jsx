import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HomeImage from '../images/HomeImage.jpg';
import '/index.css'; 

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 font" style={{ paddingTop: '2rem' }}>
        <div className="min-h-screen">
          <img
            src={HomeImage}
            alt="Olivia Cheung"
            //image resolution is width 1527 px and height 2280 px
            //height is about 1.5x width  
            style={{ width: '381px', height: '573px', float: 'right' }}
            className="rounded-full mt-6"
          />
          <header className="py-20 font">
            <h1 className="text-4xl font-bold mb-4">Hi! I'm Olivia Cheung</h1>
            <p className="text-xl">UI/UX Developer | Frontend Developer</p>
          </header>

          <section className="max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-semibold mb-6">A quick snippet about me... </h2>
            <p className="text-lg leading-relaxed mb-6">
              I'm a passionate developer with 2 years of experience building web and mobile applications.
              I specialize in React.js, CSS, JavaScript, and HTML. When I'm not coding, I like to create art, trying dishes, baking, and 
              gardening. <br></br>
              <br></br>
            </p>
          </section>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default HomePage;