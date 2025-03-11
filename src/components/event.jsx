import { motion } from "framer-motion";
import { event1 } from "../assets";

export default function Events() {
  const events = [
    {
      title: "Treasure Hunt",
      description:
        "Embark on a thrilling treasure hunt filled with clues, puzzles, and hidden surprises. Join your crew and claim the pirate's bounty!",
      image: { event },
    },
    {
      title: "Code Quest",
      description:
        "Test your coding skills in a race against time. Crack the code and claim your spot as the ultimate tech pirate!",
      image: "/assets/code-quest.jpg",
    },
    {
      title: "Design Duel",
      description:
        "Unleash your creativity and design stunning web pages to win the coveted pirate's crown.",
      image: "/assets/design-duel.jpg",
    },
    {
      title: "Gaming Arena",
      description:
        "Step into the battlefield and conquer your rivals in the ultimate gaming showdown!",
      image: "/assets/gaming-arena.jpg",
    },
  ];

  return (
    <section
      id="events"
      className="bg-gray-900 text-white py-20 px-8 w-full text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-yellow-500 mb-12"
      >
        Event Highlights
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={event1}
              alt={event.title}
              className="w-full h-64 object-contain mt-5"
            />
            <div className="p-6">
              <h3 className="text-3xl text-yellow-500 font-bold mb-3">
                {event.title}
              </h3>
              <p className="text-gray-300 text-lg">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
