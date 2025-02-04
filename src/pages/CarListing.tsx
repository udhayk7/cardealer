import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { cars } from '../data/cars';
import { formatPrice } from '../utils/formatters';

export default function CarListing() {
  const [filters, setFilters] = useState({
    brand: '',
    priceRange: '',
    fuelType: ''
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1E3A8A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Premium Collection</h1>
          <p className="text-lg text-gray-200">
            Discover our handpicked selection of luxury vehicles
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <select
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 appearance-none"
                value={filters.brand}
                onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
              >
                <option value="">All Brands</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Tata">Tata</option>
                {/* Add more brands */}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>
            
            <div className="relative">
              <select
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 appearance-none"
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              >
                <option value="">Price Range</option>
                <option value="0-1000000">Under ₹10 Lakhs</option>
                <option value="1000000-2000000">₹10-20 Lakhs</option>
                <option value="2000000-3000000">₹20-30 Lakhs</option>
                <option value="3000000+">Above ₹30 Lakhs</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>

            <div className="relative">
              <select
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 appearance-none"
                value={filters.fuelType}
                onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
              >
                <option value="">Fuel Type</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>

            <button className="bg-[#C7A462] text-white rounded-lg px-6 py-2.5 flex items-center justify-center gap-2 hover:bg-[#B08E4A] transition-colors">
              <Filter size={20} />
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Car Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <Link
              key={car.id}
              to={`/car/${car.id}`}
              className="card group overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={car.images[0]}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-gray-200">{car.year}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[#1E3A8A]">
                    {formatPrice(car.price)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {car.specifications.fuelType}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Engine:</span>
                    <span className="font-medium">{car.specifications.engine}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Power:</span>
                    <span className="font-medium">{car.specifications.power}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Mileage:</span>
                    <span className="font-medium">{car.specifications.mileage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Transmission:</span>
                    <span className="font-medium">{car.specifications.transmission}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}