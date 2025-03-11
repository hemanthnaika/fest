import { motion } from "framer-motion";
import { hero, cir, bg } from "../assets";
export default function HeroSection() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative overflow-hidden mt-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Central Image with Rotating Image Ring */}
      <div className="relative w-96 h-96 flex items-center justify-center z-10">
        <motion.img
          src={cir}
          alt="Rotating Ring"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -z-20"
        />

        <img
          src={hero}
          alt="Pirate"
          className="w-80 h-80 rounded-full object-cover shadow-2xl "
        />
      </div>
      {/* Title and Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center mb-8 z-10"
      >
        <h1 className="text-5xl font-extrabold">IT Fest 2025</h1>
        <p className="text-xl text-gray-300 mt-2">
          Embark on an adventure like never before at IT Fest 2025!
        </p>
      </motion.div>
      {/* Call-to-Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 z-10"
      >
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 text-lg rounded-2xl shadow-lg">
          Join the Voyage
        </button>
      </motion.div>
    </div>
  );
}
