import React from 'react';
import Hero from '../components/Hero';
import { Car } from '../types';
import { formatPrice } from '../utils/formatters';
import { ArrowRight } from 'lucide-react';

const featuredCars: Car[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Camry',
    year: 2021,
    price: 3000000,
    images: ['https://via.placeholder.com/300'],
  },
  {
    id: '2',
    brand: 'Honda',
    model: 'Civic',
    year: 2022,
    price: 2800000,
    images: ['https://via.placeholder.com/300'],
  },
  {
    id: '3',
    brand: 'Ford',
    model: 'Mustang',
    year: 2020,
    price: 3500000,
    images: ['https://via.placeholder.com/300'],
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Featured Cars */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Vehicles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div
                key={car.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={car.images[0]}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-gray-600 mt-2">{car.year}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      {formatPrice(car.price)}
                    </span>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                      View Details
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose AutoElite India
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Premium Selection',
                description: 'Curated collection of luxury vehicles from the world\'s finest manufacturers',
              },
              {
                title: 'Expert Guidance',
                description: 'Professional team of automotive experts to assist your journey',
              },
              {
                title: 'Seamless Experience',
                description: 'State-of-the-art facilities and personalized service',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}