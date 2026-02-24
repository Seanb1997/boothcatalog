import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'Name shown in the header and browser tab',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'navBoothsLabel',
      title: 'Navigation: Booths Label',
      type: 'string',
      description: 'Label for the Booths navigation link',
    }),
    defineField({
      name: 'navStructuresLabel',
      title: 'Navigation: Structures Label',
      type: 'string',
      description: 'Label for the Structures navigation link',
    }),
    defineField({
      name: 'navFurnitureLabel',
      title: 'Navigation: Furniture Label',
      type: 'string',
      description: 'Label for the Furniture navigation link',
    }),
  ],
  preview: {
    select: { title: 'siteName' },
    prepare: ({ title }: { title?: string }) => ({ title: title || 'Site Settings' }),
  },
});
