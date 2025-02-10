import { User } from '@/payload-types'
import { CollectionConfig } from 'payload'

type AccessArgs = {
  req: {
    user?: User | null
  }
}

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  // auth: true,
  access: {
    create: ({ req }: AccessArgs) => req.user?.role === 'admin',
    read: () => true,
    update: ({ req }: AccessArgs) => req.user?.role === 'admin' || req.user?.role === 'editor',
    delete: ({ req }: AccessArgs) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
    },
    { name: 'publishdate', type: 'date', required: true },
    { name: 'featuredImage', type: 'upload', relationTo: 'media' },
    { name: 'tags', type: 'array', fields: [{ name: 'tag', type: 'text' }] },
  ],
}

export default Posts
