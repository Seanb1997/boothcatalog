import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['booth', 'structure', 'furniture'], layout: 'radio' },
      validation: r => r.required(),
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: { list: ['Small', 'Medium', 'Large'], layout: 'radio' },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Display', 'Counter', 'Interactive', 'Island'] },
    }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'price', title: 'Price', type: 'number' }),
    defineField({
      name: 'priceType',
      title: 'Price Type',
      type: 'string',
      options: { list: ['unit', 'booth'], layout: 'radio' },
    }),
    defineField({ name: 'stockQuantity', title: 'Stock Quantity', type: 'number' }),
    defineField({ name: 'isCustomizable', title: 'Customisable?', type: 'boolean', initialValue: false }),
    defineField({ name: 'image', title: 'Main Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'additionalImages',
      title: 'Thumbnail Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'customizationOptions',
      title: 'Customisation Options',
      type: 'array',
      of: [{ type: 'customizationOption' }],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: ['available', 'booked', 'unavailable'], layout: 'radio' },
      initialValue: 'available',
    }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'type', media: 'image' },
  },
});
