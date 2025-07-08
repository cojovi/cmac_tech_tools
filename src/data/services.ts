import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'kitchen-remodel',
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen into a modern culinary workspace with custom cabinetry and premium appliances.',
    icon: 'ChefHat',
    category: 'residential',
    features: ['Custom Cabinetry', 'Smart Appliances', 'Stone Countertops', 'LED Lighting Systems']
  },
  {
    id: 'bathroom-renovation',
    title: 'Bathroom Renovation',
    description: 'Create luxurious spa-like bathrooms with premium fixtures and innovative storage solutions.',
    icon: 'Bath',
    category: 'residential',
    features: ['Luxury Fixtures', 'Custom Tilework', 'Heated Floors', 'Smart Mirrors']
  },
  {
    id: 'commercial-buildout',
    title: 'Commercial Build-Out',
    description: 'Professional commercial spaces designed for productivity and brand representation.',
    icon: 'Building2',
    category: 'commercial',
    features: ['Space Planning', 'ADA Compliance', 'Technology Integration', 'Brand Integration']
  },
  {
    id: 'home-addition',
    title: 'Home Additions',
    description: 'Expand your living space with seamless additions that blend with existing architecture.',
    icon: 'Home',
    category: 'residential',
    features: ['Structural Engineering', 'Permit Management', 'Seamless Integration', 'Energy Efficiency']
  },
  {
    id: 'outdoor-living',
    title: 'Outdoor Living',
    description: 'Create stunning outdoor entertaining spaces with decks, patios, and outdoor kitchens.',
    icon: 'Trees',
    category: 'residential',
    features: ['Deck Construction', 'Outdoor Kitchens', 'Fire Features', 'Landscape Integration']
  },
  {
    id: 'industrial-renovation',
    title: 'Industrial Renovation',
    description: 'Modernize industrial facilities while maintaining operational efficiency and safety standards.',
    icon: 'Factory',
    category: 'commercial',
    features: ['Safety Compliance', 'Minimal Downtime', 'Equipment Integration', 'Workflow Optimization']
  }
];