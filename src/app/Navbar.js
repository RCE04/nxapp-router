import React from 'react'
import Link from 'next/link'
import { Linden_Hill } from 'next/font/google'

function Navbar() {
    return (

        <nav className="navbar">
            <div>
                <Link href="/">Inicio</Link>
                <Link href="/tienda">tienda</Link>
                <Link href="/about">About</Link>
            </div>
            <span >
                <Link href="/blog">blog</Link>
                <Link href="/registro">registro</Link>
            </span>
        </nav>



    )
}

export default Navbar