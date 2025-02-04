import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { SearchFilters } from '../types';

export default function Hero() {
  const [filters, setFilters] = useState<SearchFilters>({});

  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="https://player.vimeo.com/external/539412310.sd.mp4?s=7ea8f595db3d5e6f63f0e3c0b4a5d7e0b9f4c4f8&profile_id=165&oauth2_token_id=57447761"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center">
          Welcome to the Future of
          <span className="block text-blue-400">Automotive Luxury</span>
        </h1>
        
        {/* Search Section */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl p-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <select
                className="w-full bg-white/20 text-white rounded-lg px-4 py-3 appearance-none"
                onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
              >
                <option value="">Select Brand</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="bmw">BMW</option>
                <option value="audi">Audi</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white" />
            </div>
            
            <div className="relative">
              <select
                className="w-full bg-white/20 text-white rounded-lg px-4 py-3 appearance-none"
                onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
              >
                <option value="">Fuel Type</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white" />
            </div>
            
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Search size={20} />
              Search Cars
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white" size={32} />
      </div>
    </div>
  );
}