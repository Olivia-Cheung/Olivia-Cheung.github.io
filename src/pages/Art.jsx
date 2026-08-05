import { useState } from 'react';
import useTheme from '../hooks/useTheme.js';
import { X } from 'lucide-react';
import PhotoAlbum from 'react-photo-album';
import 'react-photo-album/rows.css';
import '/index.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
// 1920x1080 Resolution
import Affagato from '../images/Art/Affagato.png';
import Dragonfly from '../images/Art/DragonflyUpclose.jpg';
import Grasshopper from '../images/Art/Grasshopper.png';
import Jars from '../images/Art/Jars.JPG';
import Josuke from '../images/Art/Josuke.jpg';
import MusicNotes from '../images/Art/MusicNotes.jpg';

const Art = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { theme } = useTheme();


  return (
    <>
     <Header />
        <header className="hero wrap">
          <div className="eyebrow">Welcome to my Gallery!</div>
          <h1 className="hero-title">Artwork, Photographs, and More</h1>
        </header>
        <Footer></Footer>
    </>
  );
};

export default Art;