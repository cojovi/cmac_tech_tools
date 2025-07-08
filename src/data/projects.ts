import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Kitchen Transformation',
    category: 'residential',
    beforeImage: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg',
    afterImage: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
    description: 'Complete kitchen overhaul with smart appliances and industrial-modern design elements.',
    duration: '6 weeks',
    location: 'Austin, TX',
    featured: true
  },
  {
    id: '2',
    title: 'Commercial Office Renovation',
    category: 'commercial',
    beforeImage: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg',
    afterImage: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg',
    description: 'Tech startup headquarters featuring exposed industrial elements and collaborative spaces.',
    duration: '12 weeks',
    location: 'Dallas, TX',
    featured: true
  },
  {
    id: '3',
    title: 'Luxury Bathroom Suite',
    category: 'residential',
    beforeImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    afterImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    description: 'Spa-inspired bathroom with custom tilework and high-end fixtures.',
    duration: '4 weeks',
    location: 'Houston, TX',
    featured: false
  },
  {
    id: '4',
    title: 'Industrial Loft Conversion',
    category: 'residential',
    beforeImage: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    afterImage: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg',
    description: 'Warehouse to luxury loft transformation preserving original character.',
    duration: '16 weeks',
    location: 'San Antonio, TX',
    featured: true
  }
];