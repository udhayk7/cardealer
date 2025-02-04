export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  images: string[];
  specifications: {
    engine: string;
    power: string;
    transmission: string;
    fuelType: string;
    mileage: string;
    acceleration: string;
    topSpeed: string;
  };
  features: string[];
  colors: string[];
}

export interface SearchFilters {
  brand?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  fuelType?: string;
  year?: number;
}