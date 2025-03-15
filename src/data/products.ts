
import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Launchify',
    tagline: 'Launch your product quickly and effectively',
    description: 'Launchify is an all-in-one platform for product launches. Get insights, analytics, and marketing tools to ensure your product reaches the right audience and makes a splash in the market.',
    imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop',
    url: 'https://example.com/launchify',
    category: 'Marketing',
    votes: 142,
    launchDate: '2023-12-01',
    maker: {
      name: 'Alex Johnson',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  },
  {
    id: '2',
    name: 'DevFlow',
    tagline: 'Streamline your development workflow',
    description: 'DevFlow is a revolutionary tool that helps developers automate repetitive tasks, manage code reviews, and improve collaboration across teams.',
    imageUrl: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop',
    url: 'https://example.com/devflow',
    category: 'Developer Tools',
    votes: 87,
    launchDate: '2023-11-15',
    maker: {
      name: 'Sarah Miller',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
  {
    id: '3',
    name: 'Taskify',
    tagline: 'Task management reimagined',
    description: 'Taskify helps individuals and teams organize their work with an intuitive interface, smart reminders, and powerful collaboration features.',
    imageUrl: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2532&auto=format&fit=crop',
    url: 'https://example.com/taskify',
    category: 'Productivity',
    votes: 215,
    launchDate: '2023-10-20',
    maker: {
      name: 'Michael Chen',
      avatarUrl: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
  },
  {
    id: '4',
    name: 'DesignPal',
    tagline: 'AI-powered design assistant',
    description: 'DesignPal uses artificial intelligence to help you create beautiful designs, suggest improvements, and keep your brand consistent across all assets.',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2664&auto=format&fit=crop',
    url: 'https://example.com/designpal',
    category: 'Design Tools',
    votes: 176,
    launchDate: '2023-11-05',
    maker: {
      name: 'Emma Wilson',
      avatarUrl: 'https://randomuser.me/api/portraits/women/63.jpg',
    },
  },
  {
    id: '5',
    name: 'SocialAmp',
    tagline: 'Amplify your social media presence',
    description: 'SocialAmp helps businesses and creators enhance their social media strategy with AI-driven content suggestions, scheduling tools, and analytics.',
    imageUrl: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2574&auto=format&fit=crop',
    url: 'https://example.com/socialamp',
    category: 'Social Media',
    votes: 93,
    launchDate: '2023-12-10',
    maker: {
      name: 'David Kim',
      avatarUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
  },
];
