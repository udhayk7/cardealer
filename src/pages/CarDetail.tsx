import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cars } from '../data/cars';
import { formatPrice, calculateGST, calculateTotal } from '../utils/formatters';

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find(c => c.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!car) {
    return <div>Car not found</div>;
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="relative h-[70vh] bg-gray-900">
        <img
          src={car.images[activeImage]}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover"
        />
        
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {car.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeImage === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Car Details */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {car.brand} {car.model}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{car.year}</p>

            {/* Specifications */}
            <div className="card p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(car.specifications).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-gray-500 capitalize">{key}</p>
                    <p className="font-medium text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="card p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
              <div className="grid grid-cols-2 gap-4">
                {car.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C7A462]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Colors</h2>
              <div className="flex flex-wrap gap-4">
                {car.colors.map((color) => (
                  <div key={color} className="text-center">
                    <div className="w-16 h-16 rounded-full border-2 border-gray-200 mb-2" style={{
                      backgroundColor: color.toLowerCase().replace(' ', '')
                    }} />
                    <span className="text-sm">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price Card */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <div className="mb-6">
                <p className="text-gray-500 mb-1">Ex-showroom Price</p>
                <p className="text-3xl font-bold text-[#1E3A8A]">
                  {formatPrice(car.price)}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-gray-500 mb-1">GST (28%)</p>
                <p className="text-xl font-medium text-gray-900">
                  {formatPrice(calculateGST(car.price))}
                </p>
              </div>

              <div className="mb-8 pt-4 border-t">
                <p className="text-gray-500 mb-1">Total On-Road Price</p>
                <p className="text-3xl font-bold text-[#1E3A8A]">
                  {formatPrice(calculateTotal(car.price))}
                </p>
              </div>

              <button
                onClick={() => navigate(`/checkout/${car.id}`)}
                className="w-full btn btn-primary mb-4"
              >
                Book Now
              </button>

              <button className="w-full btn btn-outline">
                Schedule Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}