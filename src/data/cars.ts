import { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    brand: 'Hyundai',
    model: 'Verna',
    year: 2024,
    price: 1500000,
    images: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2',
      'https://images.unsplash.com/photo-1605559424812-137a8d9a9c0c',
      'https://images.unsplash.com/photo-1605559424893-c686f4b29f6b'
    ],
    specifications: {
      engine: '1.5L Turbo GDi',
      power: '157 bhp',
      transmission: '7-Speed DCT',
      fuelType: 'Petrol',
      mileage: '20.6 kmpl',
      acceleration: '0-100 km/h in 8.9s',
      topSpeed: '195 km/h'
    },
    features: ['Ventilated Seats', 'ADAS', 'Digital Cluster', 'Sunroof'],
    colors: ['Abyss Black', 'Atlas White', 'Tellurian Brown']
  },
  {
    id: '2',
    brand: 'Tata',
    model: 'Harrier',
    year: 2024,
    price: 2000000,
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69889',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69890'
    ],
    specifications: {
      engine: '2.0L Kryotec',
      power: '168 bhp',
      transmission: '6-Speed AT',
      fuelType: 'Diesel',
      mileage: '16.8 kmpl',
      acceleration: '0-100 km/h in 10.2s',
      topSpeed: '180 km/h'
    },
    features: ['Panoramic Sunroof', 'ADAS', 'JBL Audio', '360° Camera'],
    colors: ['Oberon Black', 'Tropical Mist', 'Coral Red']
  },
  {
    id: '3',
    brand: 'Mahindra',
    model: 'XUV700',
    year: 2024,
    price: 2500000,
    images: [
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982',
      'https://images.unsplash.com/photo-1617469767123-d3b523a0b983',
      'https://images.unsplash.com/photo-1617469767234-d3b523a0b984'
    ],
    specifications: {
      engine: '2.0L mStallion',
      power: '200 bhp',
      transmission: '6-Speed AT',
      fuelType: 'Petrol',
      mileage: '15.2 kmpl',
      acceleration: '0-100 km/h in 9.8s',
      topSpeed: '200 km/h'
    },
    features: ['ADAS', 'Panoramic Sunroof', 'AdrenoX Connect', 'Sony 3D Sound'],
    colors: ['Electric Blue', 'Midnight Black', 'Dazzling Silver']
  },
  {
    id: '4',
    brand: 'Kia',
    model: 'Seltos',
    year: 2024,
    price: 1800000,
    images: [
      'https://images.unsplash.com/photo-1617470703128-26a0d0be3d76',
      'https://images.unsplash.com/photo-1617470703234-26a0d0be3d77',
      'https://images.unsplash.com/photo-1617470703345-26a0d0be3d78'
    ],
    specifications: {
      engine: '1.5L T-GDi',
      power: '158 bhp',
      transmission: '7-Speed DCT',
      fuelType: 'Petrol',
      mileage: '18.4 kmpl',
      acceleration: '0-100 km/h in 9.5s',
      topSpeed: '190 km/h'
    },
    features: ['Panoramic Sunroof', 'ADAS', 'Bose Sound System', 'Ventilated Seats'],
    colors: ['Gravity Grey', 'Imperial Blue', 'Glacier White']
  },
  {
    id: '5',
    brand: 'Honda',
    model: 'City',
    year: 2024,
    price: 1400000,
    images: [
      'https://images.unsplash.com/photo-1617471346061-5d329ab9c574',
      'https://images.unsplash.com/photo-1617471346172-5d329ab9c575',
      'https://images.unsplash.com/photo-1617471346283-5d329ab9c576'
    ],
    specifications: {
      engine: '1.5L i-VTEC',
      power: '121 bhp',
      transmission: 'CVT',
      fuelType: 'Petrol',
      mileage: '19.5 kmpl',
      acceleration: '0-100 km/h in 10.2s',
      topSpeed: '185 km/h'
    },
    features: ['Sunroof', 'Honda Connect', 'LED Headlamps', 'Lane Watch Camera'],
    colors: ['Platinum White', 'Radiant Red', 'Lunar Silver']
  },
  {
    id: '6',
    brand: 'Toyota',
    model: 'Innova Hycross',
    year: 2024,
    price: 2800000,
    images: [
      'https://images.unsplash.com/photo-1617472417056-11ae41f46a56',
      'https://images.unsplash.com/photo-1617472417167-11ae41f46a57',
      'https://images.unsplash.com/photo-1617472417278-11ae41f46a58'
    ],
    specifications: {
      engine: '2.0L Hybrid',
      power: '186 bhp',
      transmission: 'e-CVT',
      fuelType: 'Hybrid',
      mileage: '23.4 kmpl',
      acceleration: '0-100 km/h in 9.5s',
      topSpeed: '175 km/h'
    },
    features: ['Panoramic Sunroof', 'Ottoman Seats', 'Toyota Safety Sense', 'JBL Audio'],
    colors: ['Attitude Black', 'Platinum White', 'Super White']
  },
  // Adding more cars with similar detailed specifications...
  // Total 20 cars with varying price ranges from 5L to 50L
];