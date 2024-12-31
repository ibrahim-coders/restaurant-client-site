import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="container mx-auto grid grid-cols-1 px-10 sm:grid-cols-2 gap-6">
        {/* Contact Us Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <p>Join us on social media</p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center border-t border-gray-700 pt-4">
        <h2>Copyright © CulinaryCloud. All rights reserved.</h2>
      </div>
    </footer>
  );
};

export default Footer;
