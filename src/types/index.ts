
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
