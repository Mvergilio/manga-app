import { useRouter } from 'next/router'
import React from 'react'
const Post = () => {
    const router = useRouter()
    const { slug } = router.query

    return <h1>Post: {slug}</h1>
}

export default Post
