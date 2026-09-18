import ecommerceImage from '../assets/projects/ecommerce.jpg';
import managementImage from '../assets/projects/management.jpg';
import mobileImage from '../assets/projects/mobile.avif';
import platformImage from '../assets/projects/platform.jpg';
export const brand = 'NOVEXA';
export const tagline = 'Digital Solutions Built for What\'s Next.';


export const workProjects = [
  {
    id: 1,
    number: '01',
    title: 'E-Commerce Platform',
    category: 'Web',
    description:
      'A modern e-commerce experience designed to help businesses sell, manage, and grow digitally.',
    technologies: ['React', '.NET', 'SQL Server'],
    image: ecommerceImage,
    featured: true,
  },
  {
    id: 2,
    number: '02',
    title: 'Business Management System',
    category: 'Software',
    description:
      'A streamlined business system built to simplify daily operations and improve productivity.',
    technologies: ['React', '.NET'],
    image: managementImage,
    featured: false,
  },
  {
    id: 3,
    number: '03',
    title: 'Mobile Experience',
    category: 'Mobile',
    description:
      'A responsive mobile experience focused on usability, performance, and modern interaction.',
    technologies: ['React Native', 'API'],
    image: mobileImage,
    featured: false,
  },
  {
    id: 4,
    number: '04',
    title: 'Digital Business Platform',
    category: 'Web',
    description:
      'A scalable digital platform connecting business needs with powerful software solutions.',
    technologies: ['React', 'Node.js'],
    image: platformImage,
    featured: false,
  },
];