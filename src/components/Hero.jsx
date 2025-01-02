import React from 'react'

const Hero = ({title='Become a Javascript Developer', subtitle='Find the Javascript job that fits your skills set'}) => {
  return (
    <div className="text-center bg-warning border-bottom-1 py-5 container-fluid">
        <h1 className='fw-bold'> {title} </h1>
        <p className='fw-bold'>{subtitle}</p>
    </div>
  )
}

export default Hero
