import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import {useTypewriter} from '../hooks/useTypewritter'

const Footer = () => {
  const info = useTypewriter(["React-Developer", "Frontend-SoftwareEngineer", "Software-Engineer", "FastAPI-Developer"])
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-8">


        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} YourLogo. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            {info}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;