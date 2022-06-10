import { sanityClient } from '../../../sanity'
import { Post } from '../../../typing'

const Post = ({ post }) => {
    return <h1>{post.slug.current}</h1>
}

export async function getStaticPaths() {
    const query = `*[_type == "post"]{
        _id,
        title,
        author->{
        name,
        image
      },
      description,
      mainImage,
      slug,
      body
      }`
    const posts: [Post] = await sanityClient.fetch(query)
    const newPosts = posts.map(post => {
        return {
            params: { slug: post.slug.current },
            fallback: false // false or 'blocking'
        }
    })
    return newPosts
}

export default Post
