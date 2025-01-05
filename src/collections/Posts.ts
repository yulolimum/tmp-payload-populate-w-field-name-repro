import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  defaultPopulate: {
    slug: true,
  },
  fields: [
    {
      type: 'text',
      name: 'slug',
      required: true,
    },
    {
      type: 'text',
      name: 'title',
      required: true,
    },
    {
      type: 'textarea',
      name: 'content',
      required: true,
    },
  ],
}
