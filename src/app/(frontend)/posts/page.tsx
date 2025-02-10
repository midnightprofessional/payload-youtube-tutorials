import React from 'react'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function PostsPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
  })

  const [firstPost] = posts.docs

  console.log({
    user,
    firstPost,
  })

  return (
    <div>
      <div>PostsPage</div>
      <code className="text-pretty break-all">{JSON.stringify(firstPost)}</code>
    </div>
  )
}
