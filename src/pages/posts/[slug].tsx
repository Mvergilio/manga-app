import { sanityClient, urlFor } from '../../../sanity'
import { Post } from '../../../typing'
interface Data {
    data: Post
}
const Post = ({ data }: Data) => {
    return <h1>{data.title}</h1>
}

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
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

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
        `*[_type == "post" && defined(slug.current)]{
            "params":{
               "slug": slug.current
             }
           }`
    )
    return {
        paths,
        fallback: true // false or 'blocking'
    }
}
interface Params {
    params: {
        slug: string
    }
}
export async function getStaticProps({ params }: Params) {
    const { slug } = params

    const post = await sanityClient.fetch(postQuery, { slug })
    console.log(slug)
    return {
        props: {
            data: { post }
        }
    }
}

export default Post
