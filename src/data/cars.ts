export interface Car {
  id: string;
  name: string;
  brand: string;
  price: string;
  priceNum: number;
  year: number;
  km: string;
  fuel: string;
  image: string;
  badge?: 'Trending' | 'Low KM' | 'Premium' | 'Best Value';
  span?: 'col' | 'row' | 'both';
}

export const featuredCars: Car[] = [
  {
    id: '1',
    name: 'Mercedes-Benz C-Class',
    brand: 'Mercedes',
    price: '₹42,00,000',
    priceNum: 4200000,
    year: 2022,
    km: '18,000 km',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80',
    badge: 'Trending',
    span: 'both',
  },
  {
    id: '2',
    name: 'BMW 3 Series',
    brand: 'BMW',
    price: '₹38,50,000',
    priceNum: 3850000,
    year: 2021,
    km: '12,000 km',
    fuel: 'Diesel',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80',
    badge: 'Low KM',
  },
  {
    id: '3',
    name: 'Audi Q5',
    brand: 'Audi',
    price: '₹52,00,000',
    priceNum: 5200000,
    year: 2023,
    km: '8,000 km',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80',
    badge: 'Premium',
    span: 'row',
  },
  {
    id: '4',
    name: 'Hyundai Creta',
    brand: 'Hyundai',
    price: '₹14,50,000',
    priceNum: 1450000,
    year: 2022,
    km: '22,000 km',
    fuel: 'Diesel',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&q=80',
    badge: 'Best Value',
  },
  {
    id: '5',
    name: 'Toyota Fortuner',
    brand: 'Toyota',
    price: '₹35,00,000',
    priceNum: 3500000,
    year: 2021,
    km: '30,000 km',
    fuel: 'Diesel',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
  },
  {
    id: '6',
    name: 'Porsche Taycan',
    brand: 'Porsche',
    price: '₹1,20,00,000',
    priceNum: 12000000,
    year: 2023,
    km: '5,000 km',
    fuel: 'Electric',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
    badge: 'Premium',
    span: 'col',
  },
];
