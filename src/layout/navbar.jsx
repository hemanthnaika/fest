import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { mu } from '../assets';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const confirmPlay = window.confirm("Do you want to enable background music?");
    if (confirmPlay) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-4 px-8 bg-black text-white z-50">
      {/* Fest Name & Logo (Left Side) */}
      <div className="text-yellow-500 text-3xl font-extrabold roboto font-bold">
        EXCEL 4.0
      </div>

      {/* Right Side Links */}
      <div className="md:flex items-center space-x-6 hidden">
        <a href="#home" className="p-2 roboto font-bold">Home</a>
        <a href="#events" className="p-2 roboto font-bold">Events</a>
        <a href="#team" className="p-2 roboto font-bold">Team</a>
        <a href="#contact" className="p-2 roboto font-bold">Contact</a>
        <a href="#about" className="p-2 roboto font-bold">About Us</a>
      </div>

      {/* Music Control */}
      <div className="flex items-center space-x-2">
        {isMuted ? (
          <VolumeX 
            onClick={toggleMute} 
            className="text-yellow-500 cursor-pointer" 
            size={28} 
          />
        ) : (
          <Volume2 
            onClick={toggleMute} 
            className="text-yellow-500 cursor-pointer" 
            size={28} 
          />
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              onClick={() => setIsOpen(false)}
              className="text-yellow-500 cursor-pointer"
              size={28}
            />
          ) : (
            <Menu
              onClick={() => setIsOpen(true)}
              className="text-yellow-500 cursor-pointer"
              size={28}
            />
          )}
        </div>
      </div>

      {/* Full-Screen Menu on Mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          className="absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center space-y-6 text-2xl"
        >
          <a href="#home" className="hover:text-yellow-500 roboto font-bold" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#events" className="hover:text-yellow-500 roboto font-bold" onClick={() => setIsOpen(false)}>Events</a>
          <a href="#team" className="hover:text-yellow-500 roboto font-bold" onClick={() => setIsOpen(false)}>Team</a>
          <a href="#contact" className="hover:text-yellow-500 roboto font-bold" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#about" className="hover:text-yellow-500 roboto font-bold" onClick={() => setIsOpen(false)}>About Us</a>
        </motion.div>
      )}

      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src={mu} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </nav>
  );
}
