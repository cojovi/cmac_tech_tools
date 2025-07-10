import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'ai-development',
    title: 'AI Development Suite',
    description: 'Advanced machine learning and AI model development tools with automated deployment pipelines.',
    icon: 'Brain',
    category: 'ai',
    features: ['Neural Network Designer', 'AutoML Pipeline', 'Model Optimization', 'Real-time Inference API']
  },
  {
    id: 'code-analysis',
    title: 'Code Analysis Engine',
    description: 'Comprehensive code review and analysis platform with security vulnerability detection.',
    icon: 'Code',
    category: 'development',
    features: ['Static Analysis', 'Security Scanning', 'Performance Metrics', 'Code Quality Reports']
  },
  {
    id: 'data-processing',
    title: 'Data Processing Platform',
    description: 'Scalable data transformation and analytics engine for enterprise-grade applications.',
    icon: 'Database',
    category: 'data',
    features: ['ETL Pipelines', 'Real-time Processing', 'Data Visualization', 'API Integration']
  },
  {
    id: 'cloud-automation',
    title: 'Cloud Automation Tools',
    description: 'Infrastructure as code and deployment automation for multi-cloud environments.',
    icon: 'Cloud',
    category: 'infrastructure',
    features: ['Infrastructure as Code', 'Auto-scaling', 'Monitoring & Alerts', 'Cost Optimization']
  },
  {
    id: 'api-gateway',
    title: 'API Gateway & Management',
    description: 'Enterprise API management with advanced routing, authentication, and monitoring.',
    icon: 'Network',
    category: 'api',
    features: ['Rate Limiting', 'Authentication', 'API Analytics', 'Version Management']
  },
  {
    id: 'security-tools',
    title: 'Security & Compliance',
    description: 'Advanced security scanning and compliance monitoring for modern applications.',
    icon: 'Shield',
    category: 'security',
    features: ['Vulnerability Assessment', 'Compliance Checks', 'Threat Detection', 'Security Auditing']
  }
];