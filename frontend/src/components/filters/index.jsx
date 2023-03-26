import React from 'react'
import './filters.css'

const Filters = () => {
  return (
    <div className="section filters">
        <div className="container">
            <h2 className="section-subtitle">
              Disover now
            </h2>
            <h1 className="section-title">
                Latest puppies to adopt
            </h1>
            <div className="filters-group">
                <input type="text" placeholder='Search by name, breed...' className='filters-input'/>
                <select className='filters-input'>
                    <option value="" disable="disabled" defaultValue>Select Location</option>
                    <option value="dogs">Algiers</option>
                    <option value="cats">Oran</option>
                    <option value="cats">Annaba</option>
                    <option value="cats">Biskra</option>
                    <option value="cats">Tebessa</option>
                </select>
                <select className='filters-input'>
                    <option value="" disable="disabled" defaultValue>Select a category</option>
                    <option value="dogs">Dogs</option>
                    <option value="cats">Cats</option>
                    <option value="rodents">Rodents</option>
                    <option value="birds">Birds</option>
                    <option value="fish">Fish</option>
                    <option value="other">Horses</option>
                    <option value="other">Other</option>
                </select>
                <select className='filters-input'>
                    <option value="" disable="disabled" defaultValue>Select a gender</option>
                    <option value="dogs">Male</option>
                    <option value="cats">Female</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Filters
