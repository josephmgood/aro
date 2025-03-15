
import { supabase } from "@/integrations/supabase/client";
import { Brand, DatabaseBrand, Ingredient } from "../types";

export async function fetchBrands(): Promise<Brand[]> {
  const { data: brandsData, error: brandsError } = await supabase
    .from('brands')
    .select('*')
    .order('name');

  if (brandsError) {
    console.error('Error fetching brands:', brandsError);
    return [];
  }

  // Fetch all ingredients for all brands in a single query
  const { data: ingredientsData, error: ingredientsError } = await supabase
    .from('ingredients')
    .select('*');

  if (ingredientsError) {
    console.error('Error fetching ingredients:', ingredientsError);
    return [];
  }

  // Transform the database brands into the Brand type expected by the UI
  return (brandsData as DatabaseBrand[]).map(dbBrand => {
    // Find all ingredients for this brand
    const brandIngredients = ingredientsData
      ? (ingredientsData as Ingredient[]).filter(i => i.brand_id === dbBrand.id).map(i => i.name)
      : [];

    return {
      id: dbBrand.id,
      name: dbBrand.name,
      tagline: dbBrand.tagline,
      description: dbBrand.description,
      imageUrl: dbBrand.image_url,
      websiteUrl: dbBrand.website_url,
      category: dbBrand.category,
      likes: dbBrand.likes,
      featured: dbBrand.featured,
      launchDate: dbBrand.launch_date,
      founder: {
        name: dbBrand.founder_name,
        avatarUrl: dbBrand.founder_avatar_url
      },
      pricing: dbBrand.pricing || undefined,
      sustainability: dbBrand.sustainability || undefined,
      ingredients: brandIngredients.length > 0 ? brandIngredients : undefined
    };
  });
}

export async function fetchBrandById(id: string): Promise<Brand | null> {
  const { data: brand, error: brandError } = await supabase
    .from('brands')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (brandError || !brand) {
    console.error('Error fetching brand:', brandError);
    return null;
  }

  // Fetch ingredients for this brand
  const { data: ingredients, error: ingredientsError } = await supabase
    .from('ingredients')
    .select('name')
    .eq('brand_id', id);

  if (ingredientsError) {
    console.error('Error fetching ingredients:', ingredientsError);
    return null;
  }

  const dbBrand = brand as DatabaseBrand;
  
  return {
    id: dbBrand.id,
    name: dbBrand.name,
    tagline: dbBrand.tagline,
    description: dbBrand.description,
    imageUrl: dbBrand.image_url,
    websiteUrl: dbBrand.website_url,
    category: dbBrand.category,
    likes: dbBrand.likes,
    featured: dbBrand.featured,
    launchDate: dbBrand.launch_date,
    founder: {
      name: dbBrand.founder_name,
      avatarUrl: dbBrand.founder_avatar_url
    },
    pricing: dbBrand.pricing || undefined,
    sustainability: dbBrand.sustainability || undefined,
    ingredients: ingredients ? ingredients.map(i => i.name) : undefined
  };
}

export async function fetchFeaturedBrand(): Promise<Brand | null> {
  const { data, error } = await supabase
    .from('brands')
    .select('*')
    .eq('featured', true)
    .limit(1)
    .maybeSingle();

  if (error || !data) {
    console.error('Error fetching featured brand:', error);
    return null;
  }

  // Fetch ingredients for this brand
  const { data: ingredients, error: ingredientsError } = await supabase
    .from('ingredients')
    .select('name')
    .eq('brand_id', data.id);

  if (ingredientsError) {
    console.error('Error fetching ingredients:', ingredientsError);
    return null;
  }

  const dbBrand = data as DatabaseBrand;
  
  return {
    id: dbBrand.id,
    name: dbBrand.name,
    tagline: dbBrand.tagline,
    description: dbBrand.description,
    imageUrl: dbBrand.image_url,
    websiteUrl: dbBrand.website_url,
    category: dbBrand.category,
    likes: dbBrand.likes,
    featured: dbBrand.featured,
    launchDate: dbBrand.launch_date,
    founder: {
      name: dbBrand.founder_name,
      avatarUrl: dbBrand.founder_avatar_url
    },
    pricing: dbBrand.pricing || undefined,
    sustainability: dbBrand.sustainability || undefined,
    ingredients: ingredients ? ingredients.map(i => i.name) : undefined
  };
}

export async function fetchBrandsByCategory(category: string): Promise<Brand[]> {
  const { data: brandsData, error: brandsError } = await supabase
    .from('brands')
    .select('*')
    .eq('category', category)
    .order('name');

  if (brandsError) {
    console.error('Error fetching brands by category:', brandsError);
    return [];
  }

  // Fetch all ingredients for the brands in a single query
  const brandIds = (brandsData as DatabaseBrand[]).map(brand => brand.id);
  
  const { data: ingredientsData, error: ingredientsError } = await supabase
    .from('ingredients')
    .select('*')
    .in('brand_id', brandIds);

  if (ingredientsError) {
    console.error('Error fetching ingredients:', ingredientsError);
    return [];
  }

  // Transform the database brands into the Brand type expected by the UI
  return (brandsData as DatabaseBrand[]).map(dbBrand => {
    // Find all ingredients for this brand
    const brandIngredients = ingredientsData
      ? (ingredientsData as Ingredient[]).filter(i => i.brand_id === dbBrand.id).map(i => i.name)
      : [];

    return {
      id: dbBrand.id,
      name: dbBrand.name,
      tagline: dbBrand.tagline,
      description: dbBrand.description,
      imageUrl: dbBrand.image_url,
      websiteUrl: dbBrand.website_url,
      category: dbBrand.category,
      likes: dbBrand.likes,
      featured: dbBrand.featured,
      launchDate: dbBrand.launch_date,
      founder: {
        name: dbBrand.founder_name,
        avatarUrl: dbBrand.founder_avatar_url
      },
      pricing: dbBrand.pricing || undefined,
      sustainability: dbBrand.sustainability || undefined,
      ingredients: brandIngredients.length > 0 ? brandIngredients : undefined
    };
  });
}
