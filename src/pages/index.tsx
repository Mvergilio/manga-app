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
    console.log(posts)
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
            <h2>Last added</h2>
            <div>
                {posts.map(post => (
                    <div className="flex flex-col">
                        <Link href={`/post/${post.author.name}`}>
                            <a className="flex">
                                <img
                                    src={urlFor(post.author.image.asset._ref)
                                        .width(50)
                                        .height(50)
                                        .url()}
                                    alt=""
                                />
                                <span>{post.author.name}</span>
                            </a>
                        </Link>

                        <Link key={post._id} href={`/posts/${post.title}`}>
                            <a className="flex">
                                <img
                                    src={urlFor(post.mainImage.asset._ref)
                                        .width(300)
                                        .height(300)
                                        .url()}
                                ></img>
                                <h4>{post.title}</h4>
                                <div>h</div>
                            </a>
                        </Link>
                    </div>
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
