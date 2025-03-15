
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
