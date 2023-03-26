import React from 'react';
import PetsList from "../../components/pets";
import useFetch from "../../hooks/useFetch";
import './petlist.css'

const Pets = () => {
  const {data,error,loading} = useFetch("/pets")
  
  return (
    
    <div className="section pets">
        <div className="container">
        {loading && <h1>Loading pets...</h1>}
        {data && data.pets.length > 0 && (
          <PetsList data={data.pets} />
        )}
        {data && data.pets.length === 0 &&  (
          <h1>No pets to show here!</h1>
        )}
        {error && <h1>Error fetching pets</h1>}
    </div>    
    </div>    
  )
}

export default Pets;