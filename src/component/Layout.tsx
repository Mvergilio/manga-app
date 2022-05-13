import { NavBar } from './NavBar'
import page from 'next/app'
import React from 'react'

export const Layout = (props: {
    children:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
}) => {
    return (
        <>
            <NavBar />
            <main>{props.children}</main>
        </>
    )
}
