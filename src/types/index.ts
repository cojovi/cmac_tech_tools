export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'industrial';
  beforeImage: string;
  afterImage: string;
  description: string;
  duration: string;
  location: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'residential' | 'commercial';
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image: string;
  project: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  image: string;
  readTime: number;
}