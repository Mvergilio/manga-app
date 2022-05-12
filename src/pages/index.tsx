import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => (
    <>
        <Head>
            <title>Marco Antonio </title>
        </Head>
        <main className="flex flex-1 justify-center items-center h-[100vh] bg-slate-500">
            <button className="p-2 bg-green-400 rounded-md">
                It's working
            </button>
        </main>
    </>
)

export default Home
