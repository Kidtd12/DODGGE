import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';

function Home() {
  const featuredCars = cars.filter(car => car.featured);

  return (
    <div>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Drive Your Dreams in Ethiopia
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Discover quality vehicles built for Ethiopian roads and beyond
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cars"
                className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                Browse Cars
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Vehicles</h2>
            <p className="text-gray-600 text-lg">Explore our handpicked selection of premium vehicles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/cars"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Cars
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About EthioCars
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                For over a decade, EthioCars has been Ethiopia's trusted automotive partner. We bring you quality vehicles from the world's leading manufacturers, backed by exceptional customer service and competitive prices.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Whether you're looking for a rugged SUV for the countryside, an efficient sedan for city driving, or a reliable commercial vehicle for your business, we have the perfect solution for you.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <Shield className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">Every vehicle undergoes thorough inspection to ensure top quality and reliability.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <Award className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Best Prices</h3>
                  <p className="text-gray-600">Competitive pricing with flexible payment options to fit your budget.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <Users className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
                  <p className="text-gray-600">Our knowledgeable team is here to help you find the perfect vehicle.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Excellent service and great selection of vehicles. The team helped me find the perfect Land Cruiser for my family. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-900">Alem Tesfaye</p>
              <p className="text-sm text-gray-500">Addis Ababa</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Very professional and transparent. They took time to explain everything about the vehicle. Best car buying experience I've had."
              </p>
              <p className="font-semibold text-gray-900">Meron Bekele</p>
              <p className="text-sm text-gray-500">Business Owner</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Great prices and quality vehicles. I purchased my Corolla here and couldn't be happier. The after-sales support is fantastic too."
              </p>
              <p className="font-semibold text-gray-900">Daniel Haile</p>
              <p className="text-sm text-gray-500">Engineer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
