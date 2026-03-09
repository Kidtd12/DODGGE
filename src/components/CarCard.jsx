import { Link } from 'react-router-dom';
import { Fuel } from 'lucide-react';

function CarCard({ car }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <Fuel className="h-4 w-4 mr-1" />
          <span className="text-sm">{car.fuel}</span>
          <span className="mx-2">•</span>
          <span className="text-sm">{car.year}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">{car.price}</span>
          <Link
            to={`/cars/${car.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
