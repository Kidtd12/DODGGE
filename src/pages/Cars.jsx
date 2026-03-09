import { useState } from 'react';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';

function Cars() {
  const [filter, setFilter] = useState('all');

  const filteredCars = filter === 'all'
    ? cars
    : cars.filter(car => car.fuel.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Our Vehicle Collection</h1>
            <p className="text-xl text-gray-200">Find your perfect ride</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Available Vehicles ({filteredCars.length})
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('petrol')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                filter === 'petrol'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Petrol
            </button>
            <button
              onClick={() => setFilter('diesel')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                filter === 'diesel'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Diesel
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No vehicles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cars;
