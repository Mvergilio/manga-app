import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../component/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typing'
import Link from 'next/link'

interface Props {
    posts: [Post]
}
const Home = ({ posts }: Props) => {
    console.log(posts[0].mainImage.asset._ref)
    return (
        <div className="max-w-7xl mx-auto">
            <Head>
                <title>Midium </title>
            </Head>
            <Header />

            <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
                <div className="px-10 space-y-5">
                    <h1 className="text-6xl max-w-xl font-serif">
                        <span className="underline decoration-black decoration-4">
                            {' '}
                            Medium
                        </span>{' '}
                        is a place to write, read, and connect
                    </h1>
                    <h2>
                        It's easy and free to post your thinking on any topic
                        and connect with millions of readers.
                    </h2>
                </div>
                <div>
                    <img
                        className="hidden md:inline-flex h-32 lg:h-full"
                        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
                        alt=""
                    />
                </div>
            </div>
            <div>
                {posts.map(post => (
                    <Link key={post._id} href={`/posts/${post._id}`}>
                        <img
                            src={urlFor(post.mainImage.asset._ref)
                                .width(500)
                                .height(300)
                                .url()}
                        ></img>
                        {/* <a>{post.title}</a> */}
                    </Link>
                ))}
            </div>
        </div>
    )
}
export const getServerSideProps = async () => {
    const query = `*[_type == "post"]{
    _id,
    title,
    author->{
    name,
    image
  },
  description,
  mainImage,
  slug
  }`
    const posts = await sanityClient.fetch(query)
    return { props: { posts } }
}
export default Home
