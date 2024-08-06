import React from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex-colo gap-5 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img className='w-full h-96 object-contain' src='/images/404.jpg' alt='not found' />
      <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
      <p className='font-medium text-border italic leading-6'>
        The page you are looking for does not exist. You may mistyped the URL
      </p>
      <Link to='/' className='bg-subMain transitions text-white flex-rows gap-4 font-medium hover:text-main py-3 px-6 rounded-md'>
        <BiHomeAlt /> Back to Home Page
      </Link>
    </div>
  )
}

export default NotFound