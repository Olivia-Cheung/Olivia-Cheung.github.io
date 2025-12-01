import { useState } from 'react';
import { X } from 'lucide-react';
import PhotoAlbum from 'react-photo-album';
import 'react-photo-album/rows.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
// Thumbnail images (1280x720)
import AffagatoThumb from '../images/Art/Affagato-thumb.png';
import DragonflyThumb from '../images/Art/DragonflyUpclose-thumb.jpg';
import GrasshopperThumb from '../images/Art/Grasshopper-thumb.png';
import JarsThumb from '../images/Art/Jars-thumb.JPG';
import JosukeThumb from '../images/Art/Josuke-thumb.jpg';
import MusicNotesThumb from '../images/Art/MusicNotes-thumb.jpg';
// Full-size images (1920x1080)
import Affagato from '../images/Art/Affagato.png';
import Dragonfly from '../images/Art/DragonflyUpclose.jpg';
import Grasshopper from '../images/Art/Grasshopper.png';
import Jars from '../images/Art/Jars.JPG';
import Josuke from '../images/Art/Josuke.jpg';
import MusicNotes from '../images/Art/MusicNotes.jpg';

const Art = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { src: AffagatoThumb, width: 512, height: 288, fullSrc: Affagato, title: 'Affagato', description: 'A delightful digital illustration' },
    { src: DragonflyThumb, width: 512, height: 288, fullSrc: Dragonfly, title: 'Dragonfly', description: 'Nature-inspired artwork' },
    { src: GrasshopperThumb, width: 512, height: 288, fullSrc: Grasshopper, title: 'Grasshopper', description: 'Insect illustration' },
    { src: JarsThumb, width: 512, height: 288, fullSrc: Jars, title: 'Jars', description: 'Still life composition' },
    { src: JosukeThumb, width: 512, height: 288, fullSrc: Josuke, title: 'Josuke', description: 'Character artwork' },
    { src: MusicNotesThumb, width: 512, height: 288, fullSrc: MusicNotes, title: 'Music Notes', description: 'Musical inspiration' },
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        <Header />
        <div className="container mx-auto px-4 font" style={{ paddingTop: '2rem' }}>
          <h1 className="text-4xl font-bold text-green-800 mb-8">Art Gallery</h1>

          <div className="rounded-lg p-8 shadow-md mb-12">
            <p className="text-green-600">
              Welcome to my digital art collection. Here you'll find a selection of my creative works,
              including digital illustrations, photography, and design projects.
            </p>
          </div>

          <div className="flex justify-center">
            <PhotoAlbum
              layout="rows"
              photos={photos}
              targetRowHeight={288}
              onClick={({ photo }) => setSelectedImage(photo)}
              componentsProps={{
                container: { style: { maxWidth: '1600px' } }
              }}
            />
          </div>

          {/* Modal for full-size image */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-green-700 hover:bg-green-800 text-white p-2 rounded-full z-10 transition-colors"
                >
                  <X size={24} />
                </button>
                <img
                  src={selectedImage.fullSrc}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
                <div className="p-6 bg-white">
                  <h2 className="text-2xl font-bold text-green-800 mb-2">{selectedImage.title}</h2>
                  <p className="text-green-600">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}

          {/* Contact for Commissions */}
          <div className="mt-12 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Interested in Commissions?</h2>
            <p className="text-green-600 mb-4">
              I'm available for custom artwork and design projects. Feel free to reach out to discuss
              your ideas.
            </p>
            <a href="mailto:contact@example.com" className="text-green-500 hover:text-green-700 font-medium">
              Get in touch →
            </a>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Art;