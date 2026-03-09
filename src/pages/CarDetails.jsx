import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Fuel, Calendar, Phone, Mail } from 'lucide-react';
import { cars } from '../data/cars';

function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Not Found</h2>
          <Link to="/cars" className="text-blue-600 hover:text-blue-700">
            Back to Cars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/cars"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Cars
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-96 lg:h-full">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{car.name}</h1>
              <div className="text-4xl font-bold text-blue-600 mb-6">{car.price}</div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                  <span className="font-medium">Year:</span>
                  <span className="ml-2">{car.year}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Fuel className="h-5 w-5 mr-3 text-blue-600" />
                  <span className="font-medium">Fuel Type:</span>
                  <span className="ml-2">{car.fuel}</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in this vehicle?</h3>
                <p className="text-gray-600 mb-4">
                  Contact us today to schedule a test drive or get more information about this vehicle.
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-blue-600" />
                    <span>+251 11 123 4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-blue-600" />
                    <span>info@ethiocars.com</span>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full bg-blue-600 text-white text-center px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Contact to Buy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars
              .filter((c) => c.id !== car.id && c.fuel === car.fuel)
              .slice(0, 3)
              .map((similarCar) => (
                <Link
                  key={similarCar.id}
                  to={`/cars/${similarCar.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={similarCar.image}
                    alt={similarCar.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">{similarCar.name}</h3>
                    <p className="text-blue-600 font-semibold mt-2">{similarCar.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
