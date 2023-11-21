import React from 'react'
import Link from 'next/link'
import { Linden_Hill } from 'next/font/google'

function Navbar2() {
    return (
        <>
            <div className="navbar2">
                <ul>
                    <li><Link href="/decoracion">decoracion</Link></li>
                    <li><Link href="/electronica">electronica</Link></li>
                    <li><Link href="/libros">libros</Link></li>
                    <li><Link href="/moviliario">moviliario</Link></li>
                </ul>
            </div>

        </>
    )
}

export default Navbar2