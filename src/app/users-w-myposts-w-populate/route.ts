import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export const GET = async () => {
  const users = await payload.find({
    collection: 'users',
    where: {
      id: { exists: true },
    },
    select: {
      posts: true,
      myPosts: true,
    },
    populate: {
      posts: {
        title: true,
      },
      // @ts-expect-error -- populate keys are only collection slugs
      myPosts: {
        content: true,
      },
    },
  })

  return new Response(JSON.stringify(users, null, 2), {
    headers: { 'content-type': 'application/json' },
  })
}
