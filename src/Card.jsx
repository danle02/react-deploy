import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import eventCenterImage from "./assets/Eventcenter_poster.png";
import JMCimage from "./assets/JMC.png";
import Polyfjordvideo from "./assets/Polyfjord.mp4";
import tfs_game from "./assets/tfs_game.png";
import Polestar from "./assets/Polestar.mp4";
import xcelTechnologiesImage1 from "./assets/xcel.jpg";
import xcelTechnologiesImage2 from "./assets/xcel2.jpg";
import xcelTechnologiesImage3 from "./assets/xcel3.jpg";
import xcelTechnologiesImage4 from "./assets/xcel4.png";
import xcelTechnologiesImage5 from "./assets/xcel5.jpg";
import xcelTechnologiesImage6 from "./assets/xcel6.png";
import xcelTechnologiesImage7 from "./assets/xcel7.jpg";
import xcelTechnologiesImage8 from "./assets/xcel8.jpg";
import xcelTechnologiesImage9 from "./assets/xcel9.jpg";
import neonclamp from "./assets/Neonclamp.png";
import tyler from "./assets/tyler.jpg"; // Assuming you have a Tyler the Creator image
import hanni from "./assets/Hanni.jpg";  
import EA from "./assets/EA.jpg"; // Assuming you have an EA image
import neonclamp2 from "./assets/anotherNeonclamp.png"; // Add your second image here

function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const [isXcel, setIsXcel] = useState(false);
  const [isNeonclamp, setIsNeonclamp] = useState(false);

  // Xcel Technologies Images
  const xcelImages = [
    xcelTechnologiesImage1,
    xcelTechnologiesImage2,
    xcelTechnologiesImage3,
    xcelTechnologiesImage4,
    xcelTechnologiesImage5,
    xcelTechnologiesImage6,
    xcelTechnologiesImage7,
    xcelTechnologiesImage8,
    xcelTechnologiesImage9,
  ];

  const neonclampImages = [neonclamp, neonclamp2];

  const openContentInModal = (url, isVideoContent, isXcelContent, isNeonclampContent = false) => {
    setSelectedImage(url);
    setIsModalOpen(true);
    setIsVideo(isVideoContent);
    setIsXcel(isXcelContent);
    setIsNeonclamp(isNeonclampContent);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setIsVideo(false);
    setIsXcel(false);
    setIsNeonclamp(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
      {/* Card 1 */}
      <motion.div
        className="bg-white shadow-md rounded-lg overflow-hidden w-full"
        whileHover={{ scale: 1.05 }} // Scale up on hover
        whileTap={{ scale: 0.95 }} // Optional: Scale down on click/tap
      >
        <img
          src={eventCenterImage}
          alt="Event Center"
          className="w-full h-40 object-cover cursor-pointer"
          onClick={() => openContentInModal(eventCenterImage, false)}
        />
        <div className="p-4">
          <h1 className="text-xl font-bold mb-2">Event Center</h1>
          <p className="text-gray-600">Poster, 3D-modelling</p>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="bg-white shadow-md rounded-lg overflow-hidden w-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={JMCimage}
          alt="Event Center"
          className="w-full h-40 object-cover cursor-pointer"
          onClick={() => openContentInModal(JMCimage, false)}
        />
        <div className="p-4">
          <h1 className="text-xl font-bold mb-2">JMC</h1>
          <p className="text-gray-600">Poster, 3D-modelling</p>
        </div>
      </motion.div>

      {/* Card 3 for Xcel Technologies */}
      <motion.div
        className="bg-white shadow-md rounded-lg overflow-hidden w-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={xcelTechnologiesImage1}
          alt="Xcel Technologies"
          className="w-full h-40 object-cover cursor-pointer"
          onClick={() => openContentInModal(xcelImages, false, true)}
        />
        <div className="p-4">
          <h1 className="text-xl font-bold mb-2">Xcel Technologies</h1>
          <p className="text-gray-600">Branding</p>
        </div>
      </motion.div>

      {/* Video Card */}
      <motion.div
        className="bg-white shadow-md rounded-lg overflow-hidden w-full"
        whileHover={{ scale: 1.05 }} // Scale up on hover
        whileTap={{ scale: 0.95 }} // Optional: Scale down on click/tap
      >
        <img
          src={tyler}
          alt="Tyler the Creator"
          className="w-full h-40 object-cover cursor-pointer"
          onClick={() => openContentInModal(tyler, false)}
        />
        <div className="p-4">
          <h1 className="text-xl font-bold mb-2">Tyler the Creator</h1>
          <p className="text-gray-600">Poster</p>
        </div>
      </motion.div>
      
        <motion.div
        className="bg-white shadow-md rounded-lg overflow-hidden w-full"
        whileHover={{ scale: 1.05 }} // Scale up on hover
        whileTap={{ scale: 0.95 }} // Optional: Scale down on click/tap
      >
        <img
          src={hanni}
          alt="Tyler the Creator"
          className="w-full h-40 object-cover cursor-pointer"
          onClick={() => openContentInModal(hanni, false)}
        />
        <div className="p-4">
          <h1 className="text-xl font-bold mb-2">Hanni</h1>
          <p className="text-gray-600">Poster</p>
        </div>
      </motion.div>

      {/* New Card example for testing */}
      <motion.div
        className="bg-white shadow-md rounded-lg overflow-hidden w-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={tfs_game}
          alt="Event Center"
          className="w-full h-40 object-cover cursor-pointer"
          onClick={() => window.open('https://github.com/phatd0nut/the-final-stand/tree/master', '_blank')}
        />
        <div className="p-4">
          <h1 className="text-xl font-bold mb-2">The Final Stand</h1>
          <p className="text-gray-600">Videogame</p>
          <p>Github</p>
        </div>
      </motion.div>

      <motion.div
        className="bg-white shadow-md rounded-lg overflow-hiddenw-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <video
          src={Polestar}
          className="w-full h-40 object-cover cursor-pointer"
          onClick={() => openContentInModal(Polestar, true)}
          muted
          loop
        />
        <div className="p-4">
          <h1 className="text-xl font-bold mb-2">Motion design</h1>
          <p className="text-gray-600">Branding, 3D</p>
        </div>
      </motion.div>

      <motion.div
        className="bg-white shadow-md rounded-lg overflow-hidden w-full"
        whileHover={{ scale: 1.05 }} // Scale up on hover
        whileTap={{ scale: 0.95 }} // Optional: Scale down on click/tap
      >
        <img
          src={neonclamp}
          alt="Green breakpad"
          className="w-full h-40 object-cover cursor-pointer"
          onClick={() => openContentInModal(neonclampImages, false, false, true)}
        />
        <div className="p-4">
          <h1 className="text-xl font-bold mb-2">NeonClamp v2</h1>
          <p className="text-gray-600">Poster, 3D</p>
        </div>
      </motion.div>


      <motion.div
        className="bg-white shadow-md rounded-lg overflow-hidden w-full"
        whileHover={{ scale: 1.05 }} // Scale up on hover
        whileTap={{ scale: 0.95 }} // Optional: Scale down on click/tap
      >
        <img
          src={EA} // Assuming you have an EA image
          alt="Event Center"
          className="w-full h-40 object-cover cursor-pointer"
          onClick={() => openContentInModal(EA, false)}
        />
        <div className="p-4">
          <h1 className="text-xl font-bold mb-2">Vietnam</h1>
          <p className="text-gray-600">Graphic Design</p>
        </div>
      </motion.div>



      {/* Additional cards will automatically flow to the next row due to flex-wrap */}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-y-auto"
          onClick={closeModal}>
          <motion.div
            className="relative p-4 max-w-full max-h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            {isXcel ? (
              <div className="overflow-y-auto">
                {xcelImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Xcel Technologies ${index + 1}`}
                    className="w-full max-w-[60vw] object-contain"
                  />
                ))}
              </div>
            ) : isNeonclamp ? (
              <div className="overflow-y-auto">
                {neonclampImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`NeonClamp ${index + 1}`}
                    className="w-full max-w-[600px] h-auto object-contain mx-auto mb-4"
                  />
                ))}
              </div>
            ) : isVideo ? (
              <video
                src={selectedImage}
                className="w-full max-h-[85vh] max-w-[85vw] object-contain"
                controls
                autoPlay
              />
            ) : (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full max-h-[85vh] max-w-[85vw] object-contain"
              />
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Card;
