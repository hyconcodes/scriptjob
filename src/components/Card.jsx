import React from 'react'

const Card = ({children, bg}) => {
  return (
    <div className={`card ${bg}`}>
      {children}
    </div>
  )
}

export default Card
