import { motion } from "framer-motion";
import { logo } from "../assets";
export default function AboutUs() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-20 px-8 w-full text-center relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-yellow-500 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500 rounded-full opacity-20 blur-3xl"></div>

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-yellow-500 mb-6"
      >
        About Us
      </motion.h2>

      {/* Card Layout Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* College Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1u3yqkDnouG2sQfarsduoLWEkBW0kv6WyfQ&s"
            alt="College"
            className="rounded-xl mb-4 w-full object-cover h-60"
          />
          <h3 className="text-3xl text-yellow-500 font-bold mb-3">
            Our College
          </h3>
          <p className="text-gray-300 text-lg">
            Our college is renowned for its commitment to academic excellence,
            innovation, and fostering talent. We strive to empower students with
            the latest knowledge in technology and innovation.
          </p>
        </motion.div>

        {/* Fest Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <img
            src={logo}
            alt="Fest"
            className="rounded-xl mb-4 w-full object-contain h-60"
          />
          <h3 className="text-3xl text-yellow-500 font-bold mb-3">
            About the Fest
          </h3>
          <p className="text-gray-300 text-lg">
            PirateFest 2025 brings the legendary spirit of pirates to life with
            thrilling tech events, mind-challenging competitions, and exciting
            adventures for BCA students. Join us as we set sail into a world of
            innovation and discovery!
          </p>
        </motion.div>
      </div>

      {/* Animated Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-10"
      >
        <a
          href="#events"
          className="bg-yellow-500 text-black px-8 py-3 text-lg font-bold rounded-2xl shadow-lg hover:bg-yellow-600 transition-all"
        >
          Explore Events
        </a>
      </motion.div>
    </section>
  );
}
