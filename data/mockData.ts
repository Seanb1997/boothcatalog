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
    name: 'Tunnel Totem',
    type: 'structure',
    size: 'Medium',
    category: 'Totem',
    description: 'The Tunnel Totem is an immersive architectural feature that guides movement through a space while creating strong visual impact. Ideal for entrances or transitions, it can be customised with finishes, lighting, or branding to enhance wayfinding and brand presence.',
    price: 0.00,
    priceType: 'unit',
    stockQuantity: 5,
    isCustomizable: true,
    imageUrl: '/Images/Furniture/2x/Furniture 01@2x.png',
    customizationOptions: customizationOptions.default,
    status: 'available',
    tags: ['totem', 'medium']
  },
  {
    id: 'struct-002',
    name: 'Short Totem',
    type: 'structure',
    size: 'Large',
    category: 'Totem',
    description: 'The Short Totem is a compact, freestanding feature designed for exhibition booths, providing clear, compliant messaging at eye level. Ideal for product highlights, key information, or brand presence, it delivers strong visual impact while maintaining a clean, professional aesthetic suited to regulated environments.',
    price: 0.00,
    priceType: 'unit',
    stockQuantity: 3,
    isCustomizable: false,
    imageUrl: '/Images/Furniture/2x/Furniture 02@2x.png',
    status: 'available',
    tags: ['totem', 'large']
  },
  {
    id: 'struct-003',
    name: 'Tables with Upholstered Stools',
    type: 'furniture',
    size: 'Medium',
    category: 'Seating',
    description: 'Tables with upholstered stools provide a comfortable and professional setting for one-to-one discussions within pharmaceutical exhibition booths. Designed to support meaningful conversations, they create a welcoming, compliant space for engagement while maintaining a clean and considered booth aesthetic.',
    price: 0.00,
    priceType: 'unit',
    stockQuantity: 4,
    isCustomizable: false,
    imageUrl: '/Images/Furniture/2x/Furniture 03@2x.png',
    status: 'available',
    tags: ['seating', 'medium']
  },
  {
    id: 'struct-004',
    name: 'VR Headset Desk',
    type: 'structure',
    size: 'Large',
    category: 'Interactive',
    description: 'A small sleek corner unit for Virtual reality deliverable.',
    price: 0.00,
    priceType: 'unit',
    stockQuantity: 2,
    isCustomizable: false,
    imageUrl: '/Images/Furniture/2x/Furniture 04@2x.png',
    status: 'available',
    tags: ['display', 'large', 'led']
  },
  {
    id: 'struct-005',
    name: 'Totem with Seating',
    type: 'structure',
    size: 'Small',
    category: 'Totem',
    description: 'The Totem with Seating combines integrated messaging with informal seating, creating a welcoming touchpoint within exhibition booths. It supports focused conversations and brief meetings while presenting clear, compliant brand or product information in a professional, well-considered format.',
    price: 0.00,
    priceType: 'unit',
    stockQuantity: 6,
    isCustomizable: true,
    imageUrl: '/Images/Furniture/2x/Furniture 05@2x.png',
    customizationOptions: customizationOptions.default,
    status: 'available',
    tags: ['totem', 'small']
  },
  {
    id: 'struct-006',
    name: 'LED Freestanding Portrait Totem',
    type: 'structure',
    size: 'Medium',
    category: 'Display',
    description: 'The LED Freestanding Portrait Totem is a sleek digital display solution for pharmaceutical exhibition booths, ideal for presenting dynamic, compliant content. Its vertical format maximises visibility while delivering clear product messaging, animations, or data in a modern, professional and controlled manner.',
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
    name: 'Island Booth up to 180 sqm',
    type: 'booth',
    size: 'Large',
    category: 'Island',
    description: 'Select this option if your exhibition booth is sized between 100 sqm to 180 sqm. This category covers large-scale pharmaceutical island booths and includes costs associated with hanging banners, bespoke design, and additional structural elements required to deliver a compliant, high-impact presence within the exhibition space.',
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
export const filterFeatureOptions = ['Totem', 'Display', 'Seating', 'Interactive'];
export const filterSpecificationOptions = ['Single-sided', 'Double-sided', 'Freestanding', 'Wall-mounted'];
