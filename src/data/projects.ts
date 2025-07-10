import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics Platform',
    category: 'ai',
    beforeImage: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
    afterImage: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    description: 'Complete machine learning pipeline transformation with real-time data processing and predictive analytics.',
    duration: '8 weeks',
    location: 'Enterprise Client',
    featured: true
  },
  {
    id: '2',
    title: 'Microservices Architecture Migration',
    category: 'infrastructure',
    beforeImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
    afterImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    description: 'Legacy system modernization using containerized microservices with Kubernetes orchestration.',
    duration: '12 weeks',
    location: 'Global Tech Company',
    featured: true
  },
  {
    id: '3',
    title: 'Real-time Data Processing Engine',
    category: 'data',
    beforeImage: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
    afterImage: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg',
    description: 'High-performance streaming data pipeline with Apache Kafka and custom analytics engine.',
    duration: '6 weeks',
    location: 'FinTech Startup',
    featured: false
  },
  {
    id: '4',
    title: 'Cloud-Native Security Platform',
    category: 'security',
    beforeImage: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
    afterImage: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    description: 'Zero-trust security architecture with automated threat detection and response systems.',
    duration: '10 weeks',
    location: 'Healthcare Enterprise',
    featured: true
  }
];