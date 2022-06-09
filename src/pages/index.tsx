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
    console.log(posts[0].body[0].children[0].text)
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-red-100">
                {posts.map((post, index) => (
                    <div className="flex space-x-5 ">
                        <span className="text-4xl text-gray-300 font-bold ">
                            {`0${index + 1}`}
                        </span>
                        <div className="flex flex-col space-y-3 p-3">
                            <Link href={`/authors/${post.author.name}`}>
                                <a className="flex space-x-2 items-center">
                                    <img
                                        className="rounded-full"
                                        src={urlFor(
                                            post.author.image.asset._ref
                                        )
                                            .width(30)
                                            .height(30)
                                            .url()}
                                        alt=""
                                    />
                                    <span className="text-sm">
                                        {post.author.name}
                                    </span>
                                </a>
                            </Link>

                            <Link
                                key={post._id}
                                href={`/posts/${post.slug.current}`}
                            >
                                <a className="flex space-x-2 items-center">
                                    <img
                                        src={urlFor(post.mainImage.asset._ref)
                                            .width(40)
                                            .height(40)
                                            .url()}
                                    ></img>
                                    <span className="text-lg font-bold">
                                        {post.title}
                                    </span>
                                </a>
                            </Link>
                        </div>
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
  slug,
  body
  }`
    const posts = await sanityClient.fetch(query)
    return { props: { posts } }
}
export default Home
