import { CollectionConfig } from 'payload'

const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    { name: 'bio', type: 'textarea' },
    { name: 'profilePicture', type: 'upload', relationTo: 'media' },
  ],
}

export default Authors
