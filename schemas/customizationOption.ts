import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'customizationOption',
  title: 'Customisation Option',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'additionalCost', title: 'Additional Cost', type: 'number', initialValue: 0 }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'additionalCost', media: 'image' },
  },
});
