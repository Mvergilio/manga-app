import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header>
            <div className="bg-black flex text-yellow-700">
                <Link href="/">
                    <img
                        className="w-44 object-contain cursor-pointer"
                        src="https://links.papareact.com/yvf"
                        alt=""
                    />
                </Link>
            </div>
            <div>
                <h3 className="text-green-500 ">About</h3>
                <h3>Contact</h3>
                <h3>Follow</h3>
            </div>
        </header>
    )
}
