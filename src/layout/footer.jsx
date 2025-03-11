import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-8 w-full text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="text-left">
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">About Us</h3>
          <p className="text-gray-300 text-sm">
            PirateFest 2025 is a tech fest designed to spark innovation,
            creativity, and adventure for BCA students. Join us as we set sail
            into a world of technology!
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-left">
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">
            Quick Links
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <a href="#home" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-yellow-500">
                Events
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-left">
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">
            Contact Info
          </h3>
          <p className="text-gray-300">Pirates University</p>
          <p className="text-gray-300">123 Treasure Island Road</p>
          <p className="text-gray-300">Email: contact@piratesuniversity.com</p>
          <p className="text-gray-300">Phone: +1 234 567 890</p>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-500 text-sm">
          &copy; 2025 PirateFest. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
