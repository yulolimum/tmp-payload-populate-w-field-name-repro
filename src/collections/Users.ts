import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      type: 'text',
      name: 'firstName',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      required: true,
    },
    {
      type: 'relationship',
      name: 'posts',
      relationTo: 'posts',
      hasMany: true,
    },
    {
      type: 'relationship',
      name: 'myPosts',
      relationTo: 'posts',
      hasMany: true,
    },
  ],
}
