
import { Brand } from '../types';

export const brands: Brand[] = [
  {
    id: '1',
    name: 'Ritual',
    tagline: 'Essential vitamins, backed by science',
    description: 'Ritual creates essential vitamins for women based on scientific research and complete transparency. Each vitamin is designed with high-quality, traceable ingredients that your body can actually use.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557885-29667ad6e0aa?q=80&w=2574&auto=format&fit=crop',
    websiteUrl: 'https://ritual.com',
    category: 'Health',
    likes: 142,
    featured: true,
    launchDate: '2019-03-15',
    founder: {
      name: 'Katerina Schneider',
      avatarUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    pricing: '$30-$35/month',
    sustainability: 'Vegan, gluten-free, no artificial colorants',
    ingredients: ['Omega-3 DHA', 'Vitamin D3', 'Folate', 'Vitamin K2', 'Magnesium']
  },
  {
    id: '2',
    name: 'Blueland',
    tagline: 'Clean cleaning products for a cleaner planet',
    description: 'Blueland offers refillable cleaning products that eliminate single-use plastic packaging. Their innovative tablets dissolve in water to create effective cleaners in reusable bottles.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2568&auto=format&fit=crop',
    websiteUrl: 'https://blueland.com',
    category: 'Home',
    likes: 87,
    featured: false,
    launchDate: '2019-04-22',
    founder: {
      name: 'Sarah Paiji Yoo',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    pricing: '$10-$39',
    sustainability: 'Plastic-free, cruelty-free, vegan',
    ingredients: ['Sodium Bicarbonate', 'Citric Acid', 'Sodium Carbonate', 'Essential Oils']
  },
  {
    id: '3',
    name: 'Glossier',
    tagline: 'Skin first, makeup second',
    description: 'Glossier creates modern beauty products made with skin-friendly ingredients. Their approach focuses on enhancing natural beauty with simple, intuitive formulations.',
    imageUrl: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?q=80&w=1974&auto=format&fit=crop',
    websiteUrl: 'https://glossier.com',
    category: 'Beauty',
    likes: 215,
    featured: true,
    launchDate: '2014-10-06',
    founder: {
      name: 'Emily Weiss',
      avatarUrl: 'https://randomuser.me/api/portraits/women/67.jpg',
    },
    pricing: '$12-$60',
    sustainability: 'Cruelty-free, some vegan options',
    ingredients: ['Hyaluronic Acid', 'Niacinamide', 'Vitamin E', 'Glycerin']
  },
  {
    id: '4',
    name: 'Allbirds',
    tagline: 'The world\'s most comfortable shoes',
    description: 'Allbirds creates environmentally friendly shoes made from sustainable materials like merino wool and eucalyptus tree fiber, offering superior comfort and minimal design.',
    imageUrl: 'https://images.unsplash.com/photo-1560072810-1cffb09faf0f?q=80&w=2670&auto=format&fit=crop',
    websiteUrl: 'https://allbirds.com',
    category: 'Fashion',
    likes: 176,
    featured: false,
    launchDate: '2016-03-01',
    founder: {
      name: 'Tim Brown',
      avatarUrl: 'https://randomuser.me/api/portraits/men/63.jpg',
    },
    pricing: '$95-$145',
    sustainability: 'B Corp certified, carbon neutral company',
    ingredients: ['Merino Wool', 'Eucalyptus Tree Fiber', 'Sugarcane', 'Castor Bean Oil']
  },
  {
    id: '5',
    name: 'Oatly',
    tagline: 'It\'s like milk, but made for humans',
    description: 'Oatly produces oat milk and oat-based products that are nutritionally balanced and environmentally friendly. Their products are designed for those who want plant-based alternatives to dairy.',
    imageUrl: 'https://images.unsplash.com/photo-1559598657-9eaed2be8616?q=80&w=2574&auto=format&fit=crop',
    websiteUrl: 'https://oatly.com',
    category: 'Food',
    likes: 93,
    featured: false,
    launchDate: '1994-01-01',
    founder: {
      name: 'Rickard Öste',
      avatarUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    pricing: '$4-$6',
    sustainability: 'Plant-based, climate-friendly production',
    ingredients: ['Oats', 'Water', 'Rapeseed Oil', 'Vitamins']
  },
];
