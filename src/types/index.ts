
export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  category: string;
  likes: number;
  featured: boolean;
  launchDate: string;
  founder: {
    name: string;
    avatarUrl: string;
  };
  pricing?: string;
  sustainability?: string;
  ingredients?: string[];
}

export interface DatabaseBrand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  website_url: string;
  category: string;
  likes: number;
  featured: boolean;
  launch_date: string;
  founder_name: string;
  founder_avatar_url: string;
  pricing: string | null;
  sustainability: string | null;
  created_at: string;
  updated_at: string;
}

export interface Ingredient {
  id: string;
  brand_id: string;
  name: string;
}

// Add Product type for backward compatibility with existing components
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  url: string;
  category: string;
  votes: number;
  launchDate: string;
  maker: {
    name: string;
    avatarUrl: string;
  };
}
