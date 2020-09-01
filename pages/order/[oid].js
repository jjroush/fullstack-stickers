import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { oid } = router.query

  return <p>Order #{oid}</p>
}

export default Post
