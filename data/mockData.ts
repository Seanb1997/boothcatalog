import { Product, CustomizationOption } from '../types';

export const customizationOptions: Record<string, CustomizationOption[]> = {
  default: [
    {
      id: 'bench',
      name: 'Bench',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      additionalCost: 0,
      imageUrl: '/Images/Furniture/2x/Furniture option 01@2x.png'
    },
    {
      id: 'stools-table',
      name: 'Stools & table',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      additionalCost: 0,
      imageUrl: '/Images/Furniture/2x/Furniture option 02@2x.png'
    },
    {
      id: 'tablets',
      name: 'Tablets',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      additionalCost: 0,
      imageUrl: '/Images/Furniture/2x/Furniture option 03@2x.png'
    }
  ]
};

export const mockProducts: Product[] = [
  // --- Structures ---
  {
    id: 'struct-001',
    name: 'Lorem ipsum',
    type: 'structure',
    size: 'Medium',
    category: 'Display',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    price: 0.00,
    priceType: 'unit',
    stockQuantity: 5,
    isCustomizable: true,
    imageUrl: '/Images/Furniture/2x/Furniture 01@2x.png',
    customizationOptions: customizationOptions.default,
    status: 'available',
    tags: ['display', 'medium']
  },
  {
    id: 'struct-002',
    name: 'Lorem ipsum',
    type: 'structure',
    size: 'Large',
    category: 'Display',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    price: 0.00,
    priceType: 'unit',
    stockQuantity: 3,
    isCustomizable: false,
    imageUrl: '/Images/Furniture/2x/Furniture 02@2x.png',
    status: 'available',
    tags: ['display', 'large']
  },
  {
    id: 'struct-003',
    name: 'Lorem ipsum',
    type: 'structure',
    size: 'Medium',
    category: 'Counter',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    price: 0.00,
    priceType: 'unit',
    stockQuantity: 4,
    isCustomizable: false,
    imageUrl: '/Images/Furniture/2x/Furniture 03@2x.png',
    status: 'available',
    tags: ['counter', 'medium']
  },
  {
    id: 'struct-004',
    name: 'Lorem ipsum',
    type: 'structure',
    size: 'Large',
    category: 'Interactive',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    price: 0.00,
    priceType: 'unit',
    stockQuantity: 2,
    isCustomizable: false,
    imageUrl: '/Images/Furniture/2x/Furniture 04@2x.png',
    status: 'available',
    tags: ['interactive', 'large']
  },
  {
    id: 'struct-005',
    name: 'Lorem ipsum',
    type: 'structure',
    size: 'Small',
    category: 'Counter',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    price: 0.00,
    priceType: 'unit',
    stockQuantity: 6,
    isCustomizable: true,
    imageUrl: '/Images/Furniture/2x/Furniture 05@2x.png',
    customizationOptions: customizationOptions.default,
    status: 'available',
    tags: ['counter', 'small']
  },
  {
    id: 'struct-006',
    name: 'Lorem ipsum',
    type: 'structure',
    size: 'Medium',
    category: 'Display',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    price: 0.00,
    priceType: 'unit',
    stockQuantity: 5,
    isCustomizable: true,
    imageUrl: '/Images/Furniture/2x/Furniture 06@2x.png',
    customizationOptions: customizationOptions.default,
    status: 'available',
    tags: ['display', 'medium']
  },
  // --- Booths ---
  {
    id: 'booth-island-180',
    name: 'Island 180',
    type: 'booth',
    size: 'Large',
    category: 'Island',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
    price: 0.00,
    priceType: 'booth',
    stockQuantity: 2,
    isCustomizable: true,
    imageUrl: '/Images/Booths/Island180 - 01@2x.png',
    additionalImages: [
      '/Images/Booths/Island180 - 02@2x.png',
      '/Images/Booths/Island180 - 03@2x.png',
      '/Images/Booths/Island180 - 04@2x.png',
      '/Images/Booths/Island180 - 05@2x.png'
    ],
    customizationOptions: customizationOptions.default,
    status: 'available',
    tags: ['booth', 'large', 'island']
  },
  {
    id: 'booth-island-60',
    name: 'Island 60',
    type: 'booth',
    size: 'Medium',
    category: 'Island',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
    price: 0.00,
    priceType: 'booth',
    stockQuantity: 1,
    isCustomizable: true,
    imageUrl: '/Images/Booths/Island60 - 01@2x.png',
    additionalImages: [
      '/Images/Booths/Island60 - 02@2x.png',
      '/Images/Booths/Island60 - 03@2x.png',
      '/Images/Booths/Island60 - 04@2x.png',
      '/Images/Booths/Island60 - 05@2x.png'
    ],
    customizationOptions: customizationOptions.default,
    status: 'available',
    tags: ['booth', 'medium', 'island']
  }
];

export const filterTypeOptions = ['Booths', 'Structures', 'Furniture'];
export const filterSizeOptions = ['Small', 'Medium', 'Large'];
export const filterFeatureOptions = ['Display', 'Counter', 'Interactive'];
export const filterSpecificationOptions = ['Single-sided', 'Double-sided', 'Freestanding', 'Wall-mounted'];
