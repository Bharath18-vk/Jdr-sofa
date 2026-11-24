export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  imageUrl: string;
  badge?: string;
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'modern' | 'velvet-leather' | 'classic' | 'cushions';
  categoryLabel: string;
  description: string;
  fabric: string;
  imageUrl: string;
  featured?: boolean;
}

export interface MaterialSwatch {
  id: string;
  name: string;
  category: string;
  colorName: string;
  hexCode: string;
  textureImageUrl: string;
  feel: string;
  durability: string;
  recommendedFor: string;
  cleaning: string;
  description: string;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeTag: string;
  afterTag: string;
  workDone: string[];
}

export interface TestimonialHighlight {
  id: string;
  reviewTheme: string;
  summary: string;
  rating: number;
  highlight: string;
  serviceType: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  headline: string;
  description: string;
  bulletPoints: string[];
  iconName: string;
}
