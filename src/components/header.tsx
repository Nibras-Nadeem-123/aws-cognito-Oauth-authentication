import { Dancing_Script } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const text = Dancing_Script({ subsets: ['latin'], weight: ['700'] })

const Header = () => {
    return (
        <div className='flex justify-between items-center h-20 p-4 bg-gray-800 text-white'>
            <div>
                <p className={`${text.className} font-extrabold text-[43px]`}>BUYER</p>
            </div>
            <div className='flex gap-4'>
                <Link href={"/"} className='text-[20px]'>Home</Link>
                <Link href={""} className='text-[20px]'>Products</Link>
                <Link href={""} className='text-[20px]'>About Us</Link>
                
            </div>
            <div className='flex gap-4'>
                <button className='bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600'><Link href={"/auth/login"}>Login</Link></button>
            </div>
        </div>
    )
}

export default Header
