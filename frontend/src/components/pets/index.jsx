import React from 'react'
import PetItem from '../pet'
import "./pets.css"

export default function Pets({data}) {
  return (
    <div className='pet-cards'>
      {data && data.map(item=>(
        <div className="pet-item" key={item._id}>
          <PetItem item={item} />
        </div>
      ))}
    </div>
  )
}