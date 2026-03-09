import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">EthioCars</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted automotive partner in Ethiopia. Quality vehicles, exceptional service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-400 hover:text-white transition-colors">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Bole Road, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+251 11 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@ethiocars.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EthioCars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
