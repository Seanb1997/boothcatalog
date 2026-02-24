export interface Product {
  id: string;
  name: string;
  type: 'booth' | 'structure' | 'furniture';
  size?: string;
  category?: string;
  description: string;
  price: number;
  priceType: 'unit' | 'booth';
  stockQuantity: number;
  isCustomizable: boolean;
  imageUrl: string;
  thumbnailUrl?: string;
  additionalImages?: string[];
  customizationOptions?: CustomizationOption[];
  status: 'available' | 'booked' | 'unavailable';
  tags?: string[];
}

export interface CustomizationOption {
  id: string;
  name: string;
  description: string;
  additionalCost: number;
  imageUrl: string;
  isSelected?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedCustomizations: CustomizationOption[];
  lineTotal: number;
}

export interface FilterOptions {
  type?: string[];
  size?: string[];
  feature?: string[];
  specification?: string[];
  searchTerm?: string;
}

export interface SiteSettings {
  siteName: string;
  navBoothsLabel: string;
  navStructuresLabel: string;
  navFurnitureLabel: string;
}
