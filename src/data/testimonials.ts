import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Chen',
    role: 'CTO',
    company: 'DataFlow Technologies',
    content: 'Tech.CMAC Tool revolutionized our development pipeline. The AI-powered code analysis caught critical issues before deployment and improved our code quality by 40%.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    project: 'AI Development Suite'
  },
  {
    id: '2',
    name: 'Sarah Martinez',
    role: 'Lead Developer',
    company: 'CloudVision Inc.',
    content: 'The automation tools saved us weeks of manual work. Infrastructure deployment that used to take days now happens in minutes with zero downtime.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    project: 'Cloud Automation Platform'
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    role: 'DevOps Engineer',
    company: 'SecureNet Solutions',
    content: 'The security analysis and compliance monitoring features are outstanding. We achieved SOC 2 compliance 60% faster than anticipated.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    project: 'Security & Compliance Suite'
  }
];