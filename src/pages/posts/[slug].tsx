import { sanityClient, urlFor } from '../../../sanity'
import { Post } from '../../../typing'

const Post = (props: Post) => {
    return <h1>My name is BOM</h1>
}

const sanityQuery = `*[_type == "post" && slug.current == $slug][_id]{
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
            params:{slug}
        }`
    )

    return {
        paths,
        fallback: true
    }
}
interface Params {
    params: {
        slug: string
    }
}
// export async function GetStaticProps({ params }: Params) {
//     const { slug } = params

//     const post = await sanityClient.fetch(sanityQuery, { slug })

//     return {
//         props: {
//             data: { post }
//         }
//     }
// }

export default Post
