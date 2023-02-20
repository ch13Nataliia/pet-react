import React from 'react'
import Surround from './Surround'

function PetCard({name, image, text}) {
  return (
    <div  style={{ border: `5px solid green`, width: '600px' }}>
      <h1>{name}</h1>
      <picture style={{ width: '500' }}>{image}</picture>
      <p style={{ fontSize: '10px' }}>{text}</p>
    </div>
  )
}

export default PetCard