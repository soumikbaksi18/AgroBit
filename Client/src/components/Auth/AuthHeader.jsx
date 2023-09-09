import React from 'react'
import { Link } from 'react-router-dom'

function AuthHeader({title, subheader, link, linkText}) {
  return (
    <div className='space-y-2'>
        <h2 className='font-kumbh font-[600] text-2xl md:text-3xl'>{title}</h2>
        <p className='font-oxygen md:text-[1.05rem] font-[400]'>{subheader} <Link className='text-primary' to={link}>{linkText}</Link> </p>
    </div>
  )
}

export default AuthHeader