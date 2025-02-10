import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function PostsPage() {
  const payloadConfig = await config

  const payload = await getPayload({ config: payloadConfig })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
  })

  const [firstPost] = posts.docs

  return (
    <div>
      <div>PostsPage</div>
      <code className="text-pretty break-all">{JSON.stringify(firstPost)}</code>
    </div>
  )
}
