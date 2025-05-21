'use client'
import { Dancing_Script } from 'next/font/google'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const text = Dancing_Script({ subsets: ['latin'], weight: ['700'] })

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-gray-800 text-white px-4 py-3">
            <div className="flex justify-between items-center h-16">
                <p className={`${text.className} font-extrabold text-[32px] sm:text-[38px] md:text-[43px]`}>
                    BUYER
                </p>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-[18px] hover:text-gray-300">Home</Link>
                    <Link href="/products" className="text-[18px] hover:text-gray-300">Products</Link>
                    <Link href="/about" className="text-[18px] hover:text-gray-300">About Us</Link>
                </nav>

                <div className="hidden md:flex">
                    <Link href="/auth/login">
                        <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600">
                            Login
                        </button>
                    </Link>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 flex flex-col gap-2">
                    <Link href="/" className="text-[18px] hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/products" className="text-[18px] hover:text-gray-300" onClick={() => setIsOpen(false)}>Products</Link>
                    <Link href="/about" className="text-[18px] hover:text-gray-300" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                        <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 w-full mt-2">
                            Login
                        </button>
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Header
