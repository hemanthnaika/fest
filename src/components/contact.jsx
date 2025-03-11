import { motion } from "framer-motion";

export default function ContactUs() {
    return (
        <section id="contact" className="bg-gray-900 text-white py-20 px-8 w-full text-center">
            <motion.h2 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-extrabold text-yellow-500 mb-12"
            >
                Contact Us
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* College Details */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="bg-gray-800 p-6 rounded-xl shadow-lg text-left"
                >
                    <h3 className="text-3xl text-yellow-500 font-bold mb-3">College Information</h3>
                    <p className="text-gray-300 text-lg">Pirates University<br/>123 Treasure Island Road<br/>Shipwreck Bay, Ocean 40400</p>
                    <p className="text-gray-300 text-lg mt-4">Email: contact@piratesuniversity.com</p>
                    <p className="text-gray-300 text-lg">Phone: +1 234 567 890</p>
                </motion.div>

                {/* Fest Details */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="bg-gray-800 p-6 rounded-xl shadow-lg text-left"
                >
                    <h3 className="text-3xl text-yellow-500 font-bold mb-3">PirateFest 2025 Details</h3>
                    <p className="text-gray-300 text-lg">Join us on a journey of technology, innovation, and adventure!</p>
                    <p className="text-gray-300 text-lg mt-4">Date: March 20-22, 2025</p>
                    <p className="text-gray-300 text-lg">Location: Pirates University, Ocean 40400</p>
                </motion.div>
            </div>
        </section>
    );
}
