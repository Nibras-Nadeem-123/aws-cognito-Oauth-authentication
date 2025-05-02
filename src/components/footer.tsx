import React from 'react'

const Footer = () => {
  return (
    <div className='relative bg-gray-800 text-white h-100 text-center'>
        <div className='absolute inset-0 bg-black/50 text-center'>
            <p className='mt-20 text-[30px] ' > Thank you for visiting Buyyer!</p>
            <p className='w-2xl mx-auto text-[20px] '>We hope you had a great shopping experience. Come back soon!</p>
            <p className='text-green-500 my-2 text-[20px] '>Follow us on social media for the latest updates!</p>
            <button className='bg-gray-800 text-white py-3 px-5 hover:shadow shadow-white rounded-md cursor-pointer hover:bg-gray-700 hover:scale-105 duration-500'>Contact Us</button>
        </div>
    </div>
  )
}

export default Footer
